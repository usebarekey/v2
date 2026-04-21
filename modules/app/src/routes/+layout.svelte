<script lang="ts">
    import "@fontsource/jetbrains-mono";
    import "$lib/styles/layout.css";
    import "$lib/styles/fonts.css";
    import { ModeWatcher } from "mode-watcher";

    const { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />
{@render children?.()}
