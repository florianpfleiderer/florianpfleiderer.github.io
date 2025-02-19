<script lang="ts">
  import { Moon, Sun } from "lucide-svelte";
  import { browser } from "$app/environment";

  let darkMode = false;

  // Initialize theme based on localStorage or system preference
  if (browser) {
    const stored = localStorage.getItem("theme");
    darkMode = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", darkMode);
  }

  function toggleTheme() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle("dark", darkMode);
    if (browser) {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }
</script>

<button
  on:click={toggleTheme}
  class="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
  aria-label="Toggle theme"
>
  {#if darkMode}
    <Sun class="w-5 h-5 text-neutral-700 dark:text-blue-300" />
  {:else}
    <Moon class="w-5 h-5 text-neutral-700 dark:text-blue-300" />
  {/if}
</button>
