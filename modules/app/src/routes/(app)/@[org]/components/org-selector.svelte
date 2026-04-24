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
    import { tw_units_to_px } from "$lib/client/tw-units-to-px";
    import CreditCard from "@tabler/icons-svelte/icons/credit-card";
    import PencilCog from "@tabler/icons-svelte/icons/pencil-cog";
    import Book from "@tabler/icons-svelte/icons/book";
    import Logout from "@tabler/icons-svelte/icons/logout";
    import Button from "$lib/components/ui/button/button.svelte";

    let open = $state(false);
</script>

<Dropdown.Root bind:open>
    <Dropdown.Trigger class="flex h-[2lh] gap-4 min-w-64 flex-row items-center justify-between rounded-2xl bg-background-muted px-2.5 card outline outline-background-muted outline-offset-4">
        <div class="flex w-full flex-row items-center gap-2">
            <span class="truncate font-medium text-xs">Sander's Projects</span>
        </div>
        <div class="flex items-center justify-center rounded-full p-1.5 hover:bg-muted {open ? 'bg-muted' : ''}">
            <ChevronDownFilled
                class="size-4 transition-transform duration-300 ease-out {open
                    ? 'rotate-180 opacity-75'
                    : 'rotate-0 opacity-100'}"
            />
        </div>
    </Dropdown.Trigger>
    <Dropdown.Content class="min-w-64 mt-1 flex flex-col rounded-2xl">
        <div class="flex flex-row items-center justify-between gap-2 p-2">
            <div class="flex flex-col -space-y-1">
                <span class="text-sm font-semibold">Sander</span>
                <span class="text-xs text-muted-foreground">ss@barekey.dev</span>
            </div>
            <div class="relative">
                <MeshGradient class="absolute inset-0 rounded-full" colors={["#aaa7d7", "#3b2a8d"]} width={tw_units_to_px(12)} height={tw_units_to_px(4)} />
                <div class="absolute inset-0 m-px flex items-center justify-center rounded-full bg-linear-to-t bg-background to-muted">
                    <span class="text-xs font-semibold">Pro</span>
                </div>
            </div>
        </div>
        <Dropdown.Separator />
        <div class="flex flex-col w-full gap-4">
            <div>
                <Dropdown.Item class="flex flex-row items-center justify-between gap-2">
                    <span class="text-sm font-semibold">Settings</span>
                    <span><Settings class="size-4 text-muted-foreground" /></span>
                </Dropdown.Item>
                <Dropdown.Item class="flex flex-row items-center justify-between gap-2">
                    <span class="text-sm font-semibold">Billing</span>
                    <span><CreditCard class="size-4 text-muted-foreground" /></span>
                </Dropdown.Item>
                <Dropdown.Item class="flex flex-row items-center justify-between gap-2">
                    <span class="text-sm font-semibold">Changelog</span>
                    <span><PencilCog class="size-4 text-muted-foreground" /></span>
                </Dropdown.Item>
                <Dropdown.Item class="flex flex-row items-center justify-between gap-2">
                    <span class="text-sm font-semibold">Docs</span>
                    <span><Book class="size-4 text-muted-foreground" /></span>
                </Dropdown.Item>
                <Dropdown.Item class="flex flex-row items-center justify-between gap-2">
                    <span class="text-sm font-semibold">Logout</span>
                    <span><Logout class="size-4 text-destructive" /></span>
                </Dropdown.Item>
            </div>
            <Button class="bg-background-muted px-2.5 text-foreground card border-none">
                Upgrade to Pro
            </Button>
        </div>
        <Dropdown.Separator />
        <div class="flex flex-col w-full gap-2">
            <div class="flex flex-row items-center justify-between gap-2 rounded-md px-1.5 py-1 text-sm">
                <span class="text-sm font-semibold">Theme</span>
                <Tabs.Root value={userPrefersMode.current} onValueChange={(value) => setMode(value as "dark" | "light" | "system")}>
                    <Tabs.List>
                        <Tabs.Trigger value="system"><DeviceDesktop /></Tabs.Trigger>
                        <Tabs.Trigger value="light"><Sun /></Tabs.Trigger>
                        <Tabs.Trigger value="dark"><Moon /></Tabs.Trigger>
                    </Tabs.List>
                </Tabs.Root>
            </div>
        </div>
    </Dropdown.Content>
</Dropdown.Root>