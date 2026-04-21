<script lang="ts">
    import LiquidMetalButton from '$lib/components/liquid-metal-button.svelte';
    import BarekeyLogo from '$lib/components/barekey-logo.svelte';
    const { children } = $props();
</script>

<div class="flex flex-row w-screen gap-8 h-screen px-8 py-4">
    <!-- sidebar -->
    <nav class="flex flex-col justify-between bg-background-muted w-64 h-full rounded-3xl card outline outline-zinc-800 outline-offset-4">
        <!-- bk logo -->
        <header class="flex items-center justify-center py-6 gap-2">
            <BarekeyLogo class="h-10" />
        </header>

        <!-- user dropdown -->
        <footer class="flex flex-col items-center justify-center p-2">
            
        </footer>
    </nav>

    <!-- main content -->
    <main>
        {@render children?.()}
    </main>
</div>