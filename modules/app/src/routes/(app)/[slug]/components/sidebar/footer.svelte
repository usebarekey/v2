<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs";
    import * as Avatar from "$lib/components/ui/avatar";
    import * as Dropdown from "$lib/components/ui/dropdown-menu";
    import ChevronDownFilled from "@tabler/icons-svelte/icons/chevron-down-filled";
    import DeviceDesktop from "@tabler/icons-svelte/icons/device-desktop";
    import Sun from "@tabler/icons-svelte/icons/sun";
    import Moon from "@tabler/icons-svelte/icons/moon";
    import { userPrefersMode, setMode } from "mode-watcher";
    import MeshGradient from "$lib/components/mesh-gradient.svelte";
    import Settings from "@tabler/icons-svelte/icons/settings";
    import { create_seeded_profile_picture } from "$lib/components/seeded-profile-picture";
    
    let dropdown_open = $state(true);

    let badge_height = $state(24);
    let badge_calculated_width = $derived(badge_height * 2.1);
</script>

<footer class="flex flex-col items-center justify-center p-1">
    <Dropdown.Root bind:open={dropdown_open}>
        <Dropdown.Trigger class="card w-full flex items-center justify-center bg-linear-to-t bg-background to-muted rounded-2xl p-3">
            <div class="flex w-full flex-row items-center justify-between gap-2">
                <div class="flex flex-row items-center gap-2">
                    <Avatar.Root>
                        <Avatar.Image src={create_seeded_profile_picture({ seed: "sander" }).url} alt="Sander" />
                        <Avatar.Fallback>SS</Avatar.Fallback>
                    </Avatar.Root>
    
                    <div class="flex min-w-0 flex-col -space-y-1 text-left text-sm">
                        <span class="truncate font-semibold">Sander</span>
                        <span class="truncate text-xs text-muted-foreground">ss@barekey.dev</span>
                    </div>
                </div>
                <button class="flex items-center justify-center hover:bg-muted {dropdown_open ? 'bg-muted' : ''} rounded-full p-1">
                    <ChevronDownFilled
                        class="size-4 transition-transform duration-300 ease-out {dropdown_open
                            ? 'rotate-180 opacity-75'
                            : 'rotate-0 opacity-100'}"
                    />
                </button>
            </div>
        </Dropdown.Trigger>
        <Dropdown.Content class="min-w-64 flex flex-col rounded-2xl">
            <div class="flex flex-row gap-2 justify-between items-center p-2">
                <div class="flex flex-col -space-y-1">
                    <span class="text-sm font-semibold">Sander Sønstabø</span>
                    <span class="text-xs text-muted-foreground">ss@barekey.dev</span>
                </div>
                <div class="relative">
                    <MeshGradient class="rounded-full absolute inset-0" colors={["#aaa7d7", "#3b2a8d"]} width={badge_calculated_width} height={badge_height} />
                    <div class="absolute inset-0 flex items-center justify-center bg-linear-to-t bg-background to-muted rounded-full m-px">
                        <span class="text-xs font-semibold">Pro</span>
                    </div>
                </div>
            </div> 
            <Dropdown.Separator />
            <Dropdown.Item class="flex flex-row gap-2 justify-between items-center">
                <span class="text-sm font-semibold">Settings</span>
                <span><Settings class="size-4 text-muted-foreground" /></span>
            </Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item class="flex flex-row gap-2 justify-between items-center">
                <span class="text-sm font-semibold">Theme</span>
                <Tabs.Root value={userPrefersMode.current} onValueChange={(value) => setMode(value as "dark" | "light" | "system")}>
                    <Tabs.List>
                        <Tabs.Trigger value="system"><DeviceDesktop /></Tabs.Trigger>
                        <Tabs.Trigger value="light"><Sun /></Tabs.Trigger>
                        <Tabs.Trigger value="dark"><Moon /></Tabs.Trigger>
                    </Tabs.List>
                </Tabs.Root>
            </Dropdown.Item>
        </Dropdown.Content>
    </Dropdown.Root>
</footer>
