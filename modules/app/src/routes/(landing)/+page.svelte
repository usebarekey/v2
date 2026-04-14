<script lang="ts">
  import Bento from "./components/sections/bento.svelte";
  import Usage from "./components/sections/usage.svelte";
  import Hero from "./components/sections/hero.svelte";
  import End from "./components/sections/end.svelte";
  import Code from "./components/sections/code.svelte";
</script>

<svelte:head>
  <title>Barekey</title>
</svelte:head>

<Hero />
<Usage />
<Bento />
<Code />
<End />
