import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { effect } from "svelte-effect-runtime";

export default defineConfig({ plugins: [effect(), tailwindcss(), sveltekit()] });
