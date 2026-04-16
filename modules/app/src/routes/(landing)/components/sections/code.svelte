<script lang="ts" effect>
    import code_bg from "$lib/assets/code-bg.jpg";

    import { mixed } from "./code/mixed";
    import { Highlight } from "$lib/shiki";

    type Code = {
        title: string;
        description: string;
        code: string;
    }

    const examples = {
        mixed,
    } as const;

    let current_key = $state<keyof typeof examples>("mixed");
    let current: Code = $derived(examples[current_key]);
</script>

<section
    class="flex flex-col gap-8 outline outline-border relative z-10 mx-auto w-[1150px] rounded-b-xl bg-secondary p-12"
>
    <div class="flex flex-col gap-4 max-w-lg">
        <h1 class="font-kh-interference text-2xl">{current.title}</h1>
        <span class="text text-muted-foreground">
            {current.description}
        </span>
    </div>

    <div class="w-full aspect-16/7 relative rounded-xl">
        <img src={code_bg} alt="Code background" class="w-full h-full object-cover rounded-xl" />
        <div class="absolute inset-0">
            <div class="flex flex-col absolute inset-0 bg-linear-to-t from-card/50 to-card/40 backdrop-blur-xl overflow-hidden rounded-lg m-4">

                <!-- navbar -->
                <div class="flex flex-row gap-4 items-center">
                    <div class="flex flex-row gap-1.5 p-4">
                        <div class="size-2.5 rounded-full bg-green-500"></div>
                        <div class="size-2.5 rounded-full bg-yellow-500"></div>
                        <div class="size-2.5 rounded-full bg-red-500"></div>
                    </div>

                    {#snippet file(name: string, code: string)}
                        <div class="">
                            <div>

                            </div>
                        </div>
                    {/snippet}

                    {@render file("barekey.ts", current.title)}
                </div>

                <!-- code -->
                <div class="bg-card h-full px-3 py-2">
                    {@html yield* Highlight({ code: current.code, lang: "tsx" })}
                </div>
            </div>
        </div>
    </div>
    <!--
    <div class="w-full aspect-16/7 relative rounded-xl">
        <img src={code_bg} alt="Code background" class="w-full h-full object-cover rounded-xl">
        <div class="absolute inset-0 m-4 overflow-hidden rounded-[24px] bg-linear-to-b from-[#edf7fb] to-white/84 outline outline-black/10 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
            <div class="pointer-events-none absolute inset-x-0 top-0 h-[58px]">
                <svg
                    class="h-full w-full"
                    viewBox="0 0 1200 58"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <defs>
                        <linearGradient id="chrome-fill-barekey" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stop-color="#96bcda" />
                            <stop offset="100%" stop-color="#7da9ca" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M24 0H1176C1189.255 0 1200 10.745 1200 24V58H0V24C0 10.745 10.745 0 24 0ZM158 58V36C158 29 164 25 171 25C186 25 193 19 198 11C203 3 212 0 226 0H406C420 0 429 3 434 11C439 19 446 25 461 25C468 25 474 29 474 36V58H158Z"
                        fill="url(#chrome-fill-barekey)"
                        fill-rule="evenodd"
                    />
                </svg>
            </div>

            <div class="absolute left-5 top-[20px] flex flex-row items-center gap-2">
                <div class="size-3 rounded-full bg-[#ff5f57] shadow-[0_0_0_1px_rgba(0,0,0,0.08)_inset]"></div>
                <div class="size-3 rounded-full bg-[#febc2e] shadow-[0_0_0_1px_rgba(0,0,0,0.08)_inset]"></div>
                <div class="size-3 rounded-full bg-[#28c840] shadow-[0_0_0_1px_rgba(0,0,0,0.08)_inset]"></div>
            </div>

            <div class="absolute left-[158px] top-[10px] h-[48px] w-[316px]">
                <button
                    onclick={() => current_key = "mixed"}
                    class="h-full w-full rounded-t-[24px] border border-white/40 border-b-0 bg-linear-to-b from-accent/14 via-white/12 to-transparent px-10 text-left text-[17px] font-semibold text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.76)]"
                >
                    barekey.ts
                </button>
            </div>

            <div class="px-5 pb-4 pt-[74px]">
                {@html yield* Highlight({ code: current.code, lang: "tsx" })}
            </div>
        </div>
    </div>
    -->
</section>
