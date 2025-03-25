<script lang="ts">
  import "@fontsource/newsreader/400-italic.css";
  import "../app.css";
  import { page } from "$app/stores";
  import { browser, dev } from "$app/environment";
  import { injectAnalytics } from '@vercel/analytics/sveltekit';

  import { fly } from "svelte/transition";

  import Header from "$lib/components/Header.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  const isMobile = browser && /Android|iPhone/i.test(navigator.userAgent);
  const reducedMotion =
    browser && matchMedia("(prefers-reduced-motion: reduce)").matches;

  $: showHeader = $page.url.pathname !== "/";

  // Initialize Vercel Analytics with SvelteKit integration
  injectAnalytics();
</script>

<svelte:head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  {#if !dev}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-156644599-1"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-156644599-1");
    </script>
  {/if}
</svelte:head>

<div class="min-h-screen bg-neutral-100 dark:bg-neutral-900">
  <!-- Header in the background layer -->
  <Header />

  <!-- Floating content container - centered vertically with minimal padding -->
  <div
    class="px-4 sm:px-5 lg:px-6 min-h-[calc(100vh-4rem)] py-4 flex items-center"
  >
    <div
      class="w-full min-h-[calc(100vh-6rem)] bg-white dark:bg-dark-bg rounded-2xl shadow-xl relative overflow-hidden"
    >
      <!-- Global gradient overlay -->
      <div class="gradient-overlay" />

      <main class="relative py-8 sm:py-12">
        <slot />
      </main>
    </div>
  </div>
</div>

<style lang="postcss">
  .gradient-overlay {
    @apply absolute inset-0 pointer-events-none;
    background: linear-gradient(
      45deg,
      rgba(59, 130, 246, 0.15) 0%,
      rgba(147, 51, 234, 0.15) 33%,
      rgba(239, 68, 68, 0.15) 66%,
      rgba(249, 115, 22, 0.15) 100%
    );
  }

  :global(.dark) .gradient-overlay {
    background: linear-gradient(
      45deg,
      rgba(59, 130, 246, 0.05) 0%,
      rgba(147, 51, 234, 0.05) 33%,
      rgba(239, 68, 68, 0.05) 66%,
      rgba(249, 115, 22, 0.05) 100%
    );
  }
</style>
