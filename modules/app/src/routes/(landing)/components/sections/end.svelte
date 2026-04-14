<script lang="ts">
    import LiquidMetalButton from "$lib/components/liquid-metal-button.svelte";
    import ArrowRightIcon from "@tabler/icons-svelte/icons/arrow-up-right";
    import WordsStagger from "$lib/components/words-stagger.svelte";
</script>

<section class=" relative z-10 mx-auto w-[1150px] p-12">
    <div class="flex flex-col gap-6 items-center justify-center">
        <div class="flex flex-col text-center max-w-md">
            <span class="font-kh-interference text-2xl">Sounds good?</span>
            <span class="text-muted-foreground text-sm"
                >If that sounds good to you, you can get started immediately.
                It's free! If you want more features, we have numerous paid
                plans. You can also upgrade later at any time. <span
                    class="font-medium"
                >
                    No credit card required.
                </span>
            </span>
        </div>
        <LiquidMetalButton>
            <span class="inline-flex items-center gap-2">
                Get Started
                <ArrowRightIcon class="size-4" />
            </span>
        </LiquidMetalButton>
    </div>
</section>
