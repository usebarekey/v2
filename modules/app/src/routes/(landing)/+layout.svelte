<script lang="ts">
  import dither from "$lib/assets/dither.png";
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";

  const { children } = $props();
</script>

<div class="sticky top-4 z-50 mx-auto w-full max-w-[1150px]">
  <Header />
</div>

<div class="mx-auto w-full max-w-[1150px]">
  {@render children?.()}
</div>

<div class="mx-auto w-full max-w-[1350px]">
  <Footer />
</div>
