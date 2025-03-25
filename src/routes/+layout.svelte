<script lang="ts">
  import "@fontsource/newsreader/400-italic.css";
  import "../app.css";
  import { page } from "$app/stores";
  import { browser, dev } from "$app/environment";
  import { injectAnalytics } from '@vercel/analytics/sveltekit';

  import { fly } from "svelte/transition";

  import Header from "$lib/components/Header.svelte";
  import SimpleBackground from "$lib/components/SimpleBackground.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  const isMobile = browser && /Android|iPhone/i.test(navigator.userAgent);
  const reducedMotion =
    browser && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Dark mode detection
  let darkMode = false;
  
  function updateDarkMode() {
    if (browser) {
      // Check if .dark class is present on html or document element
      const isDark = document.documentElement.classList.contains('dark') || 
                document.body.classList.contains('dark');
      
      // Also check media query as a fallback
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      darkMode = isDark || prefersDark;
      console.log('Dark mode detected:', darkMode);
    }
  }
  
  if (browser) {
    // Initial check
    updateDarkMode();
    
    // Set up a MutationObserver to detect theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateDarkMode();
        }
      });
    });
    
    // Start observing the document elements for class changes
    observer.observe(document.documentElement, { attributes: true });
    observer.observe(document.body, { attributes: true });
    
    // Also listen for system preference changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      updateDarkMode();
    });
  }

  $: showHeader = $page.url.pathname !== "/";

  // Initialize Vercel Analytics with SvelteKit integration
  injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
  <!-- Favicon links -->
  <link rel="icon" href="/assets/favicons/favicon.ico" sizes="any">
  <link rel="icon" href="/assets/favicons/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/favicons/apple-touch-icon.png">
  <link rel="manifest" href="/assets/favicons/site.webmanifest">

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
      class="w-full min-h-[calc(100vh-6rem)] bg-white dark:bg-[#121212] rounded-2xl shadow-xl relative overflow-hidden"
    >
      <!-- New simpler background animation with explicit z-index -->
      <div class="absolute inset-0 w-full h-full z-0" style="min-height: 400px;">
        <SimpleBackground {darkMode} />
      </div>

      <!-- Content layer with higher z-index -->
      <main class="relative z-10 py-8 sm:py-12">
        <slot />
      </main>
    </div>
  </div>
</div>

<style lang="postcss">
  /* Add some base styles to ensure proper layering */
  :global(canvas) {
    pointer-events: none;
  }
  
  :global(.relative) {
    position: relative;
  }
  
  :global(.z-0) {
    z-index: 0;
  }
  
  :global(.z-10) {
    z-index: 10;
  }
</style>
