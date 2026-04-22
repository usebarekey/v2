<script lang="ts">
    import Sidebar from './components/sidebar/sidebar.svelte';
    
    const { children } = $props();

</script>

<div class="flex flex-row w-screen gap-8 h-screen px-8 py-4">
    <!-- sidebar -->
    <nav class="flex flex-col justify-between bg-background-muted w-64 h-full rounded-3xl card outline outline-zinc-800 outline-offset-4">
        <Sidebar />
    </nav>

    <!-- main content -->
    <main>
        {@render children?.()}
    </main>
</div>