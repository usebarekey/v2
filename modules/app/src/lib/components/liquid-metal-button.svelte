<script lang="ts">
  import LiquidMetal from "$lib/components/liquid-metal.svelte";
  import { cn, type WithElementRef } from "$lib/utils.js";

  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface Props
    extends WithElementRef<HTMLButtonAttributes, HTMLButtonElement> {
    width?: number;
    height?: number;
    borderWidth?: number;
    children?: Snippet;
  }

  let {
    width = 192,
    height = 48,
    borderWidth = 2,
    ref = $bindable(null),
    type = "button",
    class: className = "",
    children,
    ...restProps
  }: Props = $props();
</script>

<button
  bind:this={ref}
  class={cn(
    "relative hover:shadow-xl shadow-accent/25 transition-all duration-200  inline-block cursor-pointer overflow-hidden rounded-full border-0 bg-transparent p-0",
    className,
  )}
  {type}
  style={`width:${width}px;height:${height}px;`}
  {...restProps}
>
  <LiquidMetal {width} {height} />

  <span
    class="absolute flex items-center justify-center rounded-full bg-linear-to-t from-foreground to-foreground/50 backdrop-blur"
    style={`inset:${borderWidth}px;`}
  >
    <span
      class="inline-flex items-center gap-2 text-sm font-medium text-secondary"
    >
      {@render children?.()}
    </span>
  </span>
</button>
