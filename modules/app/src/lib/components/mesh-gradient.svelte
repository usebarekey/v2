<script lang="ts">
  import { onMount } from "svelte";

  import { ShaderMount } from "$lib/vendor/paper-shaders/shader-mount.js";
  import { getShaderColorFromString } from "$lib/vendor/paper-shaders/get-shader-color-from-string.js";
  import {
    meshGradientFragmentShader,
    meshGradientMeta,
  } from "$lib/vendor/paper-shaders/shaders/mesh-gradient.js";

  interface Props {
    width?: number;
    height?: number;
    colors?: string[];
    distortion?: number;
    swirl?: number;
    grainMixer?: number;
    grainOverlay?: number;
    speed?: number;
    scale?: number;
    rotation?: number;
    offsetX?: number;
    offsetY?: number;
    fit?: "none" | "contain" | "cover";
    worldWidth?: number;
    worldHeight?: number;
    originX?: number;
    originY?: number;
    class?: string;
  }

  const defaultColors = ["#cc3333", "#cc9933", "#99cc33", "#33cc33"];
  const fitModes = {
    none: 0,
    contain: 1,
    cover: 2,
  } as const;

  let {
    width,
    height,
    colors = defaultColors,
    distortion = 0.8,
    swirl = 0.1,
    grainMixer = 0,
    grainOverlay = 0,
    speed = 1,
    scale = 1,
    rotation = 0,
    offsetX = 0,
    offsetY = 0,
    fit = "cover",
    worldWidth,
    worldHeight,
    originX = 0.5,
    originY = 0.5,
    class: className = "",
  }: Props = $props();

  let host: HTMLDivElement;
  let mount: ShaderMount | null = null;
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

  function resolveColors(input: string[]) {
    const activeColors = (input.length > 0 ? input : defaultColors).slice(
      0,
      meshGradientMeta.maxColorCount,
    );
    const paddedColors = activeColors.map((color) => getShaderColorFromString(color));

    while (paddedColors.length < meshGradientMeta.maxColorCount) {
      paddedColors.push([0, 0, 0, 0]);
    }

    return {
      colorCount: activeColors.length,
      colors: paddedColors,
    };
  }

  function buildUniforms() {
    const resolvedColors = resolveColors(colors);

    return {
      u_colors: resolvedColors.colors,
      u_colorsCount: resolvedColors.colorCount,
      u_distortion: distortion,
      u_swirl: swirl,
      u_grainMixer: grainMixer,
      u_grainOverlay: grainOverlay,
      u_originX: originX,
      u_originY: originY,
      u_worldWidth: worldWidth ?? resolvedWidth,
      u_worldHeight: worldHeight ?? resolvedHeight,
      u_fit: fitModes[fit],
      u_scale: scale,
      u_rotation: rotation,
      u_offsetX: offsetX,
      u_offsetY: offsetY,
    };
  }

  $effect(() => {
    if (!mount) {
      return;
    }

    mount.setUniforms(buildUniforms());
    mount.setSpeed(speed);
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

    try {
      resizeObserver.observe(host);
      mount = new ShaderMount(
        host,
        meshGradientFragmentShader,
        buildUniforms(),
        {
          alpha: true,
          antialias: true,
          depth: false,
          stencil: false,
          premultipliedAlpha: false,
        },
        speed,
        0,
        1.4,
        1920 * 1080 * 2,
      );
    } catch (error) {
      if (!disposed) {
        failed = true;
        console.error("Paper Mesh Gradient failed to initialize.", error);
      }
    }

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
  class={["paper-mesh-gradient", className, failed && "paper-mesh-gradient--fallback"]
    .filter(Boolean)
    .join(" ")}
  style={inlineStyle}
  aria-hidden="true"
></div>

<style>
  .paper-mesh-gradient {
    display: block;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    background: #101114;
  }

  .paper-mesh-gradient--fallback {
    background:
      radial-gradient(circle at 20% 20%, rgb(204 51 51 / 75%) 0, transparent 35%),
      radial-gradient(circle at 80% 25%, rgb(204 153 51 / 65%) 0, transparent 40%),
      radial-gradient(circle at 30% 80%, rgb(153 204 51 / 65%) 0, transparent 35%),
      linear-gradient(135deg, #1a1c21 0%, #0d0f13 100%);
  }
</style>
