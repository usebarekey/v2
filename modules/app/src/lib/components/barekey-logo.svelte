<script lang="ts">
  import logo from "$lib/assets/barekey-dark.png";
  import { cn, type WithElementRef } from "$lib/utils";

  import type { HTMLAttributes } from "svelte/elements";

  interface Props
    extends WithElementRef<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    title?: string;
  }

  let {
    class: className = "",
    ref = $bindable(null),
    title = "Barekey",
    ...restProps
  }: Props = $props();
</script>

<span
  bind:this={ref}
  class={cn("barekey-logo", className)}
  role="img"
  aria-label={title}
  {...restProps}
>
  <img src={logo} alt="" aria-hidden="true" class="barekey-logo__image" />
</span>

<style>
  .barekey-logo {
    display: inline-flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .barekey-logo__image {
    display: block;
    height: 100%;
    width: auto;
    object-fit: contain;
  }
</style>
