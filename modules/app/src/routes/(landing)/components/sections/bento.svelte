<script lang="ts">
    import IconLockFilled from "@tabler/icons-svelte/icons/lock-filled";
    import IconFlagFilled from "@tabler/icons-svelte/icons/flag-filled";
    import IconLayoutSidebarRightFilled from "@tabler/icons-svelte/icons/layout-sidebar-right-filled";
    import IconGraphFilled from "@tabler/icons-svelte/icons/graph-filled";
    import IconBraces from "@tabler/icons-svelte/icons/braces";
    import IconPlugConnected from "@tabler/icons-svelte/icons/plug-connected";
    import IconLayersLinked from "@tabler/icons-svelte/icons/layers-linked";
    import IconFileCodeFilled from "@tabler/icons-svelte/icons/file-code-filled";
    import IconRobot from "@tabler/icons-svelte/icons/robot";
    import IconChevronRight from "@tabler/icons-svelte/icons/chevron-right";
</script>

<section
    class="bg-card outline outline-border mx-auto flex w-[1150px] flex-col items-end justify-center gap-8"
>
    <div class="flex flex-col gap-2 pt-12 pe-12">
        <span class="font-kh-interference text-2xl"
            >Barekey doesn't get in your way.</span
        >

        <span class="text-muted-foreground">
            Focus on whats important — your app, and let Barekey handle the
            boring stuff.
        </span>
    </div>

    <div class="grid w-full grid-cols-3">
        {#snippet bento(
            bg: string,
            title: string,
            description: string,
            link: string,
            Icon: any,
        )}
            <div
                class="outline outline-border relative flex min-h-[300px] flex-col justify-end p-4 {bg}"
            >
                <div
                    class="pointer-events-none absolute inset-0 mb-12 flex items-center justify-center"
                >
                    <Icon class="size-25 text-border -rotate-12" />
                </div>
                <div class="relative z-10 flex max-w-xs flex-col gap-4">
                    <div class="flex flex-col gap-0.5">
                        <span class="font-semibold">{title}</span>
                        <span class="text-muted-foreground text-sm"
                            >{description}</span
                        >
                    </div>
                    <a
                        href="#"
                        class="text-sm bg-linear-to-r from-accent to-emerald-500 text-transparent bg-clip-text font-medium inline-flex items-center gap-1"
                    >
                        {link}
                        <IconChevronRight class="size-4 text-emerald-500" />
                    </a>
                </div>
            </div>
        {/snippet}

        {@render bento(
            "bg-card",
            "Secrets",
            "Store your secrets in a encrypted vault. Audit, rollback, and more.",
            "Learn how secrets work",
            IconLockFilled,
        )}
        {@render bento(
            "bg-secondary/75",
            "Feature flags",
            "Toggle features on and off without deploys. Target segments and environments.",
            "Learn how feature flags work",
            IconFlagFilled,
        )}
        {@render bento(
            "bg-card",
            "A/B Testing",
            "Test new features with your users and measure the impact.",
            "Learn how A/B testing works",
            IconLayoutSidebarRightFilled,
        )}
        {@render bento(
            "bg-secondary/75",
            "Rollouts",
            "Gradually roll out new features to your users. Instantly measure the impact.",
            "Learn how rollouts work",
            IconGraphFilled,
        )}
        {@render bento(
            "bg-card",
            "Typed configuration",
            "Your database is typed. Your API response is typed. Your config variables should too.",
            "Learn how typed config works",
            IconBraces,
        )}
        {@render bento(
            "bg-secondary/75",
            "API & SDKs",
            "Drop-in SDKs for your stack. Server, client, React, and more.",
            "View API documentation",
            IconPlugConnected,
        )}
        {@render bento(
            "bg-card",
            "Environments & Stages",
            "Development, staging, production. Isolated, explicit, and never accidentally crossed.",
            "Learn how environments work",
            IconLayersLinked,
        )}
        {@render bento(
            "bg-secondary/75",
            "SDK type generation",
            "Generate typed clients from your schemas so SDK calls stay in sync with the server. All automatically.",
            "Learn about generated types",
            IconFileCodeFilled,
        )}
        {@render bento(
            "bg-card",
            "Agent & CLI native",
            "Fully operable by your coding agent. Every single action.",
            "Learn how agent & CLIs works for Barekey",
            IconRobot,
        )}
    </div>
</section>
