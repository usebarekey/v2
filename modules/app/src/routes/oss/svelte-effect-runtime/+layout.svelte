<script lang="ts">
    const { children } = $props();
</script>

<div class="flex flex-row gap-4 justify-between">
    <nav class="flex flex-col gap-4">
        <a href="/oss/svelte-effect-runtime/introduction">Introduction</a>
        <a href="/oss/svelte-effect-runtime/getting-started">Getting Started</a>
    </nav>
    {@render children?.()}
</div>