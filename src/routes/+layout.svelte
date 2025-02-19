<script lang="ts">
  import "@fontsource/newsreader/400-italic.css";
  import "../app.css";
  import { page } from "$app/stores";
  import { browser, dev } from "$app/environment";

  import { fly } from "svelte/transition";

  import Header from "$lib/components/Header.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  const isMobile = browser && /Android|iPhone/i.test(navigator.userAgent);
  const reducedMotion =
    browser && matchMedia("(prefers-reduced-motion: reduce)").matches;

  $: showHeader = $page.url.pathname !== "/";
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

<div class="min-h-screen pt-16">
  <Header />
  <main>
    <slot />
  </main>
</div>
