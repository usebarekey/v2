<script lang="ts">
  import "@fontsource/jetbrains-mono";
  import dither from "$lib/assets/dither.png";
  import "$lib/styles/layout.css";
  import "$lib/styles/fonts.css";

  const { children } = $props();
</script>

<div
  class="fixed pointer-events-none inset-0 -z-20 opacity-5"
  style={`background-image: url(${dither}); background-repeat: no-repeat; background-position: center; background-size: cover;`}
></div>

{@render children?.()}
