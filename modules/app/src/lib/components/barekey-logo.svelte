<script lang="ts">
  import dark from "$lib/assets/barekey-dark.png";
  import light from "$lib/assets/barekey-light.png";
  import { cn } from "$lib/utils";

  import { mode } from "mode-watcher";

  const { class: className = "" } = $props();
</script>

<img src={mode.current === "light" ? dark : light} alt="Barekey Logo" class={className} />