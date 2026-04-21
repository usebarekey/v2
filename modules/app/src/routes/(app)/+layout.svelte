<script lang="ts">
    const { children } = $props();
</script>

<div class="bg-zinc-900 w-screen h-screen">
    {@render children?.()}
</div>