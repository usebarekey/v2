<script lang="ts" effect>
    import { tick } from "svelte";
    import type { Attachment } from "svelte/attachments";
    import { Effect, Schema } from "effect";
    import Button from "$lib/components/ui/button/button.svelte";
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";
    import ArrowUpIcon from "@tabler/icons-svelte/icons/arrow-up";
    import RobotIcon from "@tabler/icons-svelte/icons/robot";

    let form = $state<{
        prompt: string;
        error: string | null;
        is_submitting: boolean;
    }>({
        prompt: "",
        error: null,
        is_submitting: false
    });
    let is_open = $state(false);
    let shell: HTMLDivElement | null = $state(null);
    let textarea_ref: HTMLTextAreaElement | null = $state(null);
    let submit_button_ref: HTMLButtonElement | null = $state(null);

    const shell_attachment: Attachment<HTMLDivElement> = (node) => {
        shell = node;

        return () => {
            if (shell === node) shell = null;
        };
    };

    const is_valid = $derived(form.prompt.trim().length > 0);

    function open_prompt() {
        is_open = true;
        void tick().then(() => textarea_ref?.focus());
    }

    function close_prompt() {
        is_open = false;
        form.error = null;
    }

    const submit_current_prompt = Effect.gen(function* () {
        if (form.is_submitting) return;

        form.error = null;
        form.is_submitting = true;

        const error = yield* Effect.match(
            Schema.decodeUnknownEffect(Schema.NonEmptyString)(form.prompt.trim()),
            {
                onFailure: (error) => error.message,
                onSuccess: () => null
            }
        );

        if (error === null) {
            form.prompt = "";
            close_prompt();
        } else {
            form.error = error;
        }

        form.is_submitting = false;
    });

    function handle_keydown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            event.preventDefault();
            close_prompt();
        }

        if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
            event.preventDefault();
            submit_button_ref?.click();
        }
    }

    function is_typing_target(target: EventTarget | null) {
        if (!(target instanceof HTMLElement)) return false;

        return (
            target.isContentEditable ||
            target instanceof HTMLInputElement ||
            target instanceof HTMLTextAreaElement ||
            target instanceof HTMLSelectElement
        );
    }

    function handle_document_pointer_down(event: PointerEvent) {
        if (!is_open || !shell) return;
        if (!(event.target instanceof Node) || shell.contains(event.target)) return;

        close_prompt();
    }

    function handle_document_keydown(event: KeyboardEvent) {
        if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
        if (is_typing_target(event.target)) return;

        if (event.key.toLowerCase() === "f") {
            event.preventDefault();
            open_prompt();
        }
    }
</script>

<svelte:document
    onpointerdown={handle_document_pointer_down}
    onkeydown={handle_document_keydown}
/>
<svelte:body class:overflow-hidden={is_open} />

{#if is_open}
    <button
        type="button"
        aria-label="Close prompt"
        class="fixed inset-0 z-20 cursor-default bg-background-muted/20 backdrop-blur-[2px]"
        onclick={yield* Effect.sync(close_prompt)}
    ></button>
{/if}

<div {@attach shell_attachment} class="relative h-10 w-full">
    <button
        type="button"
        aria-expanded={is_open}
        aria-controls="sidebar-ai-prompt"
        onclick={yield* Effect.sync(open_prompt)}
        class={[
            "card flex h-10 w-full items-center gap-2 rounded-xl border border-border/50 bg-background-muted py-0 pr-1.5 pl-3 text-left text-sm text-muted-foreground outline outline-background-muted outline-offset-4 transition-all duration-200 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 focus-visible:outline-none",
            is_open && "pointer-events-none opacity-0"
        ]}
    >
        <RobotIcon class="size-4 shrink-0" />
        <span class="min-w-0 flex-1 truncate">Ask Barekey...</span>
        <span
            aria-hidden="true"
            class="font-kh-interference inset-shadow flex size-7 shrink-0 items-center justify-center rounded-full bg-background-inset text-[0.65rem] leading-none font-bold text-foreground/80"
        >
            F
        </span>
    </button>

    <form
        id="sidebar-ai-prompt"
        onsubmit={(event) => event.preventDefault()}
        class={[
            "card absolute top-0 left-0 z-50 flex h-10 origin-left items-center gap-2 overflow-hidden rounded-xl border border-border/50 bg-background-muted px-3 text-sm text-muted-foreground outline outline-background-muted outline-offset-4 transition-[width,opacity,filter] duration-300 ease-out",
            is_open
                ? "w-[150%] max-w-[calc(100vw-2rem)] opacity-100 drop-shadow-[0_16px_22px_rgba(0,0,0,0.24)]"
                : "pointer-events-none w-full opacity-0"
        ]}
    >
        <RobotIcon class="size-4 shrink-0 text-muted-foreground" />
        <Textarea
            bind:ref={textarea_ref}
            bind:value={form.prompt}
            rows={1}
            placeholder="Ask Barekey..."
            aria-describedby={form.error ? "sidebar-ai-prompt-error" : undefined}
            aria-invalid={form.error ? "true" : undefined}
            oninput={yield* Effect.sync(() => {
                form.error = null;
            })}
            onkeydown={handle_keydown}
            class="min-h-5 resize-none rounded-none border-none bg-transparent p-0 text-sm font-medium leading-5 text-foreground shadow-none dark:bg-transparent focus-visible:border-transparent focus-visible:ring-0"
        />

        {#if form.error}
            <p id="sidebar-ai-prompt-error" class="sr-only">{form.error}</p>
        {/if}

        <Button
            bind:ref={submit_button_ref}
            type="submit"
            size="icon"
            aria-label="Send prompt"
            disabled={form.is_submitting || !is_valid}
            onclick={yield* submit_current_prompt}
            class="size-7 rounded-full border border-white/80 bg-white text-background hover:bg-white/90 disabled:translate-y-0 disabled:border-border/40 disabled:bg-foreground/[0.04] disabled:text-muted-foreground disabled:opacity-70"
        >
            <ArrowUpIcon class="size-3.5" />
        </Button>
    </form>
</div>
