<script lang="ts">
    import * as Tooltip from "$lib/components/ui/tooltip";

    const { children } = $props();
</script>

<Tooltip.Provider>
    <div class="bg-zinc-900 w-screen h-screen">
        {@render children?.()}
    </div>
</Tooltip.Provider>