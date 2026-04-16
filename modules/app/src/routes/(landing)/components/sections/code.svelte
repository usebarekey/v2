<script lang="ts">
    import code_bg from "$lib/assets/code-bg.jpg";
    
    import * as mixed from "./code/mixed";

    const map = {
        mixed: {
            title: "Mixed",
            description: "A mixed example of all the features of Barekey.",
            code: mixed.code
        },
        react: {
            title: "React",
            description: "A React provider example for Barekey.",
            code: ""
        }
    } satisfies Record<string, { title: string; description: string; code: string }>;

    let current = $state<keyof typeof map>("mixed");
</script>

<section
    class="flex flex-col gap-8 outline outline-border relative z-10 mx-auto w-[1150px] rounded-b-xl bg-secondary p-12"
>
    <div class="flex flex-col gap-4 max-w-lg">
        <h1 class="font-kh-interference text-2xl">{map[current].title}</h1>
        <span class="text text-muted-foreground">
            {map[current].description}
        </span>
    </div>
    
    <div class="w-full aspect-16/7 relative rounded-xl">
        <img src={code_bg} alt="Code background" class="w-full h-full object-cover rounded-xl">
        <div class="absolute bg-linear-to-t from-card to-card/75 backdrop-blur-3xl rounded-xl outline outline-muted-foreground/25 m-4 inset-0 flex flex-col items-center justify-center">
            <div class="relative inset-0 h-full w-full">
                <div class="flex h-10 flex-row items-stretch gap-2 border-b border-muted-foreground/25 px-4">
                    <div class="flex flex-row items-center justify-center gap-1.5 self-center">
                        <div class="size-3 rounded-full bg-red-500"></div>
                        <div class="size-3 rounded-full bg-yellow-500"></div>
                        <div class="size-3 rounded-full bg-green-500"></div>
                    </div>

                    <div class="flex h-full flex-row items-stretch">
                        {#snippet card(title: string, value: keyof typeof map)}
                            <button
                                onclick={() => current = value}
                                class="flex h-full items-center px-4 text-sm text-muted-foreground font-mono"
                                class:bg-muted={current === value}
                            >
                                {title}
                            </button>
                        {/snippet}

                        {@render card("barekey.ts", "mixed")}
                        {@render card("barekey-provider.tsx", "react")}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
