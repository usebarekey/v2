<script lang="ts">
    import Logo from "$lib/components/barekey-logo.svelte";
    import AiChat from "./ai-chat.svelte";
</script>

<header class="relative z-30 flex flex-col items-center justify-center gap-4 p-4 py-6">
    <a href="/@sander" class="hover:opacity-50 transition-opacity duration-200">
        <Logo class="h-10" />
    </a>

    <AiChat />
</header>