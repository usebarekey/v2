<script lang="ts">
</script>

<section
    class="outline outline-border relative mx-auto flex w-[1150px] flex-row items-center justify-between bg-secondary p-12"
>
    <div class="max-w-[100px]">
        <span class="font-kh-interference text-2xl">Who's using Barekey?</span>
    </div>

    <div class="flex flex-row items-center gap-8">
        <span class="text-muted-foreground">Many, apparently.</span>
        <div class="h-12 w-px bg-foreground/5"></div>

        {#snippet card(title, value)}
            <div class="flex flex-col">
                <span class="text-4xl font-kh-interference">{value}</span>
                <span class="font-kh-interference text-muted-foreground text-sm"
                    >{title}</span
                >
            </div>
        {/snippet}

        <div class="flex flex-row items-center gap-12">
            {@render card("API requests served", "448M+")}
            {@render card("Bandwidth transferred", "12TB+")}
            {@render card("Variables stored", "124K+")}
        </div>
    </div>
</section>
