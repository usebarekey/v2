<script lang="ts">
    import * as Breadcrumb from "$lib/components/ui/breadcrumb";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import Sidebar from "./components/sidebar/sidebar.svelte";
    import OrgSelector from "./components/org-selector.svelte";

    const { children } = $props();

        /**
     *   --highlight: oklch(0.999 0.013 var(--base-hue));
  --background-inset: oklch(0.2099 0.0039 var(--base-hue));
  --background-muted: oklch(0.3017 0.0073 var(--base-hue));
  --foreground-muted: oklch(0.669 0.0107 var(--base-hue));
  --accent-secondary: oklch(0.5096 0.131959 44.4414);
  --accent-2: oklch(0.2427 0.083 284.28);
  --accent-2-foreground: oklch(0.97 0.01 285);
  --theme-2: oklch(0.2427 0.083 284.28);
  --theme-2-foreground: oklch(0.97 0.01 285);
    */
</script>

<div class="flex h-screen w-screen flex-row gap-4 px-8 py-4">
    <Sidebar />

    <main class="flex flex-col grow rounded-3xl bg-background-inset card">
        <div class="flex flex-row items-center p-4 gap-4 justify-between">
            <Breadcrumb.Root>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
                      </Breadcrumb.Item>
                      <Breadcrumb.Separator />
                      <Breadcrumb.Item>
                        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
                      </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>

            <OrgSelector />
        </div>

        <Separator />
    </main>
</div>
