<script lang="ts">
    import * as Tooltip from "$lib/components/ui/tooltip";
    import dither from "$lib/assets/dither.png";

    const { children } = $props();
</script>

<Tooltip.Provider>
    <div class="relative min-h-screen w-screen bg-background-muted">
        <div
            class="pointer-events-none absolute inset-0 z-0 opacity-2.5"
            style={`background-image: url(${dither}); background-repeat: no-repeat; background-position: center; background-size: cover;`}
        ></div>
        <div class="relative z-10 min-h-screen w-screen">
            {@render children?.()}
        </div>
    </div>
</Tooltip.Provider>
