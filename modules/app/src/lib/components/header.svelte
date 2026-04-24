<script lang="ts">
    import BarekeyLogo from "$lib/components/barekey-logo.svelte";
    import GithubIcon from "$lib/components/icons/github-icon.svelte";
    import LiquidMetalButton from "$lib/components/liquid-metal-button.svelte";
    import TwitterIcon from "$lib/components/icons/twitter-icon.svelte";
    import ArrowRightIcon from "@tabler/icons-svelte/icons/arrow-up-right";
</script>

<header class="mb-24 flex justify-center">
    <div
        class="inline-flex max-w-full items-center gap-8 rounded-full bg-linear-to-t from-foreground/10 to-foreground/2.5 pe-2 ps-8 py-2 backdrop-blur-xl shadow-xl"
    >
        <a
            href="/"
            aria-label="Barekey home"
            class="inline-flex h-7.5 shrink-0 items-center justify-center"
        >
            <BarekeyLogo class="h-full" />
        </a>

        <nav class="inline-flex min-w-0 items-center justify-center gap-4">
            <a
                href="/pricing"
                class="text-sm text-foreground transition-all duration-200 hover:text-primary"
                >Pricing</a
            >
            <a
                href="/docs"
                class="text-sm text-foreground transition-all duration-200 hover:text-primary"
                >Docs</a
            >

            <div class="bg-foreground/5 h-4 w-px shrink-0"></div>

            <div class="flex flex-row items-center gap-2">
                <TwitterIcon
                    class="text-foreground transition-all duration-200 hover:text-primary"
                />
                <GithubIcon
                    class="text-foreground transition-all duration-200 hover:text-primary"
                />
            </div>

            <LiquidMetalButton>
                <span class="inline-flex items-center gap-2">
                    Get Started
                    <ArrowRightIcon class="size-4" />
                </span>
            </LiquidMetalButton>
        </nav>
    </div>
</header>
