<script lang="ts">
  import { onMount } from "svelte";

  import { emptyPixel } from "$lib/vendor/paper-shaders/empty-pixel.js";
  import { ShaderMount } from "$lib/vendor/paper-shaders/shader-mount.js";
  import {
    LiquidMetalShapes,
    liquidMetalFragmentShader,
  } from "$lib/vendor/paper-shaders/shaders/liquid-metal.js";

  interface Props {
    width?: number;
    height?: number;
    repetition?: number;
    class?: string;
  }

  let {
    width,
    height,
    repetition = 3.05,
    class: className = "",
  }: Props = $props();

  let host: HTMLDivElement;
  let mount: ShaderMount | null = null;
  let sourceImage: HTMLImageElement | null = null;
  let failed = $state(false);
  let measuredWidth = $state(0);
  let measuredHeight = $state(0);

  const resolvedWidth = $derived(Math.round(measuredWidth || width || 48));
  const resolvedHeight = $derived(Math.round(measuredHeight || height || 48));
  const inlineStyle = $derived.by(() => {
    const styles: string[] = [];

    if (width != null) {
      styles.push(`width:${width}px`);
    }

    if (height != null) {
      styles.push(`height:${height}px`);
    }

    return styles.join(";");
  });

  function hexToRgba(input: string): [number, number, number, number] {
    const value = input.trim().replace(/^#/, "");
    const withAlpha = value.length === 6 ? `${value}ff` : value;

    return [
      Number.parseInt(withAlpha.slice(0, 2), 16) / 255,
      Number.parseInt(withAlpha.slice(2, 4), 16) / 255,
      Number.parseInt(withAlpha.slice(4, 6), 16) / 255,
      Number.parseInt(withAlpha.slice(6, 8), 16) / 255,
    ];
  }

  function buildUniforms(image: HTMLImageElement) {
    return {
      u_colorBack: hexToRgba("#0a0c11"),
      u_colorTint: hexToRgba("#ffffff"),
      u_image: image,
      u_repetition: repetition,
      u_shiftRed: 0.44,
      u_shiftBlue: 0.36,
      u_contour: 0.16,
      u_softness: 0.05,
      u_distortion: 0.06,
      u_angle: 72,
      u_shape: LiquidMetalShapes.none,
      u_isImage: false,
      u_originX: 0.5,
      u_originY: 0.5,
      u_worldWidth: resolvedWidth,
      u_worldHeight: resolvedHeight,
      u_fit: 2,
      u_scale: 1.3,
      u_rotation: 0,
      u_offsetX: 0,
      u_offsetY: 0,
    };
  }

  function loadImage(src: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.decoding = "async";
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Failed to load the Paper shader source image."));
      image.src = src;
    });
  }

  $effect(() => {
    if (!mount || !sourceImage) {
      return;
    }

    mount.setUniforms(buildUniforms(sourceImage));
  });

  onMount(() => {
    let disposed = false;
    const resizeObserver = new ResizeObserver(([entry]) => {
      const box = entry?.contentRect;

      if (!box) {
        return;
      }

      measuredWidth = box.width;
      measuredHeight = box.height;
    });

    const init = async () => {
      try {
        const image = await loadImage(emptyPixel);

        if (disposed) {
          return;
        }

        sourceImage = image;
        mount = new ShaderMount(
          host,
          liquidMetalFragmentShader,
          buildUniforms(image),
          {
            alpha: true,
            antialias: true,
            depth: false,
            stencil: false,
            premultipliedAlpha: false,
          },
          1,
          0,
          1.4,
          1920 * 1080 * 2,
        );
      } catch (error) {
        failed = true;
        console.error("Paper Liquid Metal failed to initialize.", error);
      }
    };

    resizeObserver.observe(host);
    init();

    return () => {
      disposed = true;
      resizeObserver.disconnect();
      mount?.dispose();
      mount = null;
    };
  });
</script>

<div
  bind:this={host}
  class={["paper-liquid-metal", className, failed && "paper-liquid-metal--fallback"]
    .filter(Boolean)
    .join(" ")}
  style={inlineStyle}
  aria-hidden="true"
></div>

<style>
  .paper-liquid-metal {
    display: block;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    background: #0a0c11;
  }

  .paper-liquid-metal--fallback {
    background: linear-gradient(125deg, #15181f 0%, #828898 40%, #0a0c11 100%);
  }
</style>
