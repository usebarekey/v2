<script lang="ts">
    import { Effect } from "effect";
    import code_bg from "$lib/assets/code-bg.jpg";

    import { mixed_example } from "./code/mixed";
    import { Highlight } from "$lib/shiki";
    import { react_example } from "./code/react";
    import { effect_example } from "./code/effect";
    import type { Code } from "./code/type";
    import { ScrollArea } from "$lib/components/ui/scroll-area";
    import * as Accordion from "$lib/components/ui/accordion";
    import IconArrowDown from "@tabler/icons-svelte/icons/arrow-down";

    let current: Code = $state(mixed_example);

    let highlighted = $state("");
    let viewport: HTMLDivElement | null = $state(null);
    let atTop = $state(true);
    let scrollable = $state(false);

    const updateScrollState = () => {
        if (!viewport) {
            atTop = true;
            scrollable = false;
            return;
        }

        atTop = viewport.scrollTop === 0;
        scrollable = viewport.scrollHeight > viewport.clientHeight + 1;
    };

    $effect(() => {
        const code = current.code;
        let cancelled = false;

        Effect.runPromise(Highlight({ code, lang: "tsx" }))
            .then((html) => {
                if (!cancelled) highlighted = html;
            })
            .catch(() => {
                if (!cancelled) highlighted = "";
            });

        return () => {
            cancelled = true;
        };
    });

    $effect(() => {
        if (!viewport) return;

        viewport.scrollTop = 0;
        updateScrollState();

        const handleScroll = () => updateScrollState();
        viewport.addEventListener("scroll", handleScroll, { passive: true });

        const resizeObserver = new ResizeObserver(() => updateScrollState());
        resizeObserver.observe(viewport);

        const content = viewport.firstElementChild;
        if (content instanceof HTMLElement) {
            resizeObserver.observe(content);
        }

        return () => {
            viewport?.removeEventListener("scroll", handleScroll);
            resizeObserver.disconnect();
        };
    });
</script>

<section
    class="flex flex-col gap-8 outline outline-border relative z-10 mx-auto w-[1150px] rounded-b-xl bg-secondary p-12"
>
    <div class="flex flex-col gap-4 max-w-lg">
        <h1 class="font-kh-interference text-2xl h-[1lh] truncate">{current.title}</h1>
        <p class="text text-muted-foreground h-[calc(3*1lh)] line-clamp-3">
            {current.description}
        </p>
    </div>

    <div class="w-full aspect-16/7 relative rounded-xl">
        <img src={code_bg} alt="Code background" class="w-full h-full object-cover rounded-xl" />
        <div class="absolute inset-0">
            <div class="flex flex-col absolute inset-0 bg-linear-to-t from-card/75 to-card/25 backdrop-blur-xl overflow-hidden rounded-lg m-4">

                <!-- navbar -->
                <div class="flex flex-row h-12 shrink-0 px-4 gap-4">
                    <div class="flex flex-row gap-1.5 items-center justify-center">
                        <div class="size-2.5 rounded-full bg-red-500"></div>
                        <div class="size-2.5 rounded-full bg-yellow-500"></div>
                        <div class="size-2.5 rounded-full bg-green-500"></div>
                    </div>

                    {#snippet file(item: Code)}
                        {@const is_active = item.title === current.title}
                        <button onclick={() => current = item} class={[is_active && "bg-linear-to-t from-card/50 to-card/25 backdrop-blur", "px-4 my-1 rounded-xl"]}>
                            {item.file}
                        </button>
                    {/snippet}

                    <div class="flex flex-row">
                        {@render file(mixed_example)}
                        {@render file(react_example)}
                        {@render file(effect_example)}
                    </div>
                </div>

                <!-- code -->
                <div class="relative h-full min-h-0 bg-linear-to-t from-card/75 to-card/50 backdrop-blur">
                    <ScrollArea bind:viewportRef={viewport} class="h-full">
                        <div class="px-3 py-6">
                            {@html highlighted}
                        </div>
                    </ScrollArea>
                    {#if atTop && scrollable}
                        <div class="pointer-events-none absolute bottom-3 right-3 opacity-50">
                            <IconArrowDown size={20} />
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
    <Accordion.Root type="single" value="1">
        <Accordion.Item value="1">
            <Accordion.Trigger>
                This syntax doesn't even work!
            </Accordion.Trigger>
            <Accordion.Content>
                123
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
</section>
