<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { onMount } from "svelte";

  import type { HTMLAttributes } from "svelte/elements";

  type TagName = "span" | "p" | "div" | "h1" | "h2" | "h3";

  interface Props extends HTMLAttributes<HTMLElement> {
    text: string;
    as?: TagName;
    delay?: number;
    stagger?: number;
    speed?: number;
    autoStart?: boolean;
    inView?: boolean;
    onStart?: () => void;
    onComplete?: () => void;
  }

  let {
    text,
    as = "span",
    delay = 0,
    stagger = 0.1,
    speed = 0.5,
    autoStart = true,
    inView = false,
    onStart,
    onComplete,
    class: className,
    ...restProps
  }: Props = $props();

  let root: HTMLElement;
  let hasStarted = $state(false);
  let isVisible = $state(false);

  let completionTimeout: ReturnType<typeof setTimeout> | null = null;

  const words = $derived(
    text
      .trim()
      .split(/\s+/)
      .filter(Boolean),
  );

  const totalDurationMs = $derived(
    Math.max(0, delay + Math.max(words.length - 1, 0) * stagger + speed) * 1000,
  );

  function clearCompletionTimeout() {
    if (completionTimeout) {
      clearTimeout(completionTimeout);
      completionTimeout = null;
    }
  }

  function startAnimation() {
    if (hasStarted || !words.length) {
      return;
    }

    hasStarted = true;
    onStart?.();

    clearCompletionTimeout();
    completionTimeout = setTimeout(() => {
      onComplete?.();
    }, totalDurationMs);
  }

  $effect(() => {
    if (autoStart && (!inView || isVisible)) {
      startAnimation();
    }
  });

  onMount(() => {
    if (!inView || !root) {
      return () => {
        clearCompletionTimeout();
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        isVisible = true;
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      clearCompletionTimeout();
    };
  });
</script>

<svelte:element
  this={as}
  bind:this={root}
  class={cn("words-stagger", hasStarted && "words-stagger--started", className)}
  {...restProps}
>
  {#each words as word, index (`${word}-${index}`)}
    <span
      class="words-stagger__word"
      style={`--word-delay:${(delay + index * stagger).toFixed(3)}s;--word-duration:${speed.toFixed(3)}s;`}
    >
      {word}
    </span>
    {#if index < words.length - 1}
      <span class="words-stagger__space" aria-hidden="true"> </span>
    {/if}
  {/each}
</svelte:element>

<style>
  .words-stagger {
    display: inline;
  }

  .words-stagger__word {
    display: inline-block;
    opacity: 0;
    filter: blur(10px);
    transform: translate3d(0, 0.65em, 0) scale(0.98);
    will-change: opacity, filter, transform;
  }

  .words-stagger__space {
    white-space: pre;
  }

  .words-stagger--started .words-stagger__word {
    animation-name: words-stagger-reveal;
    animation-duration: var(--word-duration);
    animation-delay: var(--word-delay);
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes words-stagger-reveal {
    from {
      opacity: 0;
      filter: blur(10px);
      transform: translate3d(0, 0.65em, 0) scale(0.98);
    }

    to {
      opacity: 1;
      filter: blur(0);
      transform: translate3d(0, 0, 0) scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .words-stagger__word,
    .words-stagger--started .words-stagger__word {
      animation: none;
      opacity: 1;
      filter: none;
      transform: none;
    }
  }
</style>
