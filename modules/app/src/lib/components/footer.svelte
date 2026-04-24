<script lang="ts">
    import backdrop from "$lib/assets/footer.png";
</script>

<footer
    class="@container isolate relative flex w-full min-w-0 flex-col items-center justify-end overflow-hidden rounded-t-[8rem] bg-linear-to-t from-muted to-card"
>
    <div
        class="relative z-10 flex w-full min-w-0 flex-col items-center gap-0 pb-8"
    >
        <div class="inline-flex max-w-full min-w-0 flex-col items-start gap-0">
            <span
                class="text-trim w-fit whitespace-nowrap py-16 text-left leading-[0.88] text-[clamp(2.5rem,23cqi,18rem)] font-semibold bg-linear-to-tr from-primary to-emerald-500 text-transparent bg-clip-text"
                >Barekey</span
            >

            <div class="flex w-full flex-row justify-between">
                <div class="flex flex-row items-start gap-16">
                    {#snippet link(text: string, href: string)}
                        <a
                            {href}
                            class="text-sm text-muted-foreground hover:text-primary"
                            >{text}</a
                        >
                    {/snippet}
                    <div class="flex flex-col gap-2">
                        <span class="text-sm font-medium font-kh-interference"
                            >Company & Legal</span
                        >
                        <div class="flex flex-col gap-1">
                            {@render link("Privacy Policy", "/privacy")}
                            {@render link("Terms of Service", "/terms")}
                            {@render link("Cookie Policy", "/cookie")}
                        </div>
                    </div>

                    <div class="flex flex-col gap-2">
                        <span class="text-sm font-medium font-kh-interference"
                            >Resources</span
                        >
                        <div class="flex flex-col gap-1">
                            {@render link("Pricing", "/pricing")}
                            {@render link("Docs", "/docs")}
                            {@render link("Newsroom", "/newsroom")}
                        </div>
                    </div>

                    <div class="flex flex-col gap-2">
                        <span class="text-sm font-medium font-kh-interference"
                            >Socials</span
                        >
                        <div class="flex flex-col gap-1">
                            {@render link("Twitter", "https://x.com/barekey")}
                            {@render link(
                                "GitHub",
                                "https://github.com/barekey",
                            )}
                        </div>
                    </div>

                    <div class="flex flex-col gap-2">
                        <span class="text-sm font-medium font-kh-interference"
                            >Open Source</span
                        >
                        <div class="flex flex-col gap-1">
                            {@render link(
                                "svelte-effect-runtime",
                                "https://github.com/usebarekey/svelte-effect-runtime",
                            )}
                        </div>
                    </div>
                </div>

                <div class="flex items-end justify-end">
                    <span
                        class="rounded-md px-2 py-1 text-sm font-kh-interference text-green-500"
                    >
                        All systems normal.
                    </span>
                </div>
            </div>
        </div>
    </div>
</footer>
