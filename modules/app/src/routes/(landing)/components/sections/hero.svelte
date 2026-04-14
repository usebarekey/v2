<script lang="ts">
    import LiquidMetalButton from "$lib/components/liquid-metal-button.svelte";
    import ArrowRightIcon from "@tabler/icons-svelte/icons/arrow-up-right";
    import WordsStagger from "$lib/components/words-stagger.svelte";
</script>

<section
    class="outline outline-border relative z-10 mx-auto w-[1150px] rounded-t-xl bg-card p-12"
>
    <div class="flex flex-col gap-4 max-w-lg">
        <WordsStagger
            as="span"
            text="One platform for everything your application needs to know."
            class="font-kh-interference text-2xl"
        />

        <span class="text text-muted-foreground">
            Barekey does it all — secrets, feature flags, A/B testing, gradual
            rollouts, and typed configuration. No more stitching five tools
            together to solve one problem. All in one place.
        </span>

        <LiquidMetalButton>
            <span class="inline-flex items-center gap-2">
                Get Started
                <ArrowRightIcon class="size-4" />
            </span>
        </LiquidMetalButton>
    </div>
    <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/2 overflow-hidden"
    >
        <div
            class="absolute -bottom-12 left-5/8 flex -translate-x-1/2 flex-row items-end -space-x-10"
        >
            <div
                class="h-54 w-32 -rotate-12 rounded-lg bg-linear-to-t from-muted-foreground shadow-2xl to-secondary ring-2 ring-border/50"
            ></div>
            <div
                class="h-68 w-36 z-10 rounded-lg bg-linear-to-t from-muted-foreground shadow-2xl to-secondary ring-2 ring-border/50"
            ></div>
            <div
                class="h-60 w-36 rotate-12 rounded-lg bg-linear-to-t from-muted-foreground shadow-2xl to-secondary ring-2ring-border/50"
            ></div>
        </div>
    </div>
</section>
