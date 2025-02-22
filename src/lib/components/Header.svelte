<script lang="ts">
  import { page } from "$app/stores";
  import ThemeToggle from "./ThemeToggle.svelte";
  import { Github, Linkedin, Mail, Menu, X } from "lucide-svelte";
  import { fade } from "svelte/transition";

  const links = [
    { name: "home", href: "/" },
    { name: "projects", href: "/projects" },
    { name: "writing", href: "/writing" },
    { name: "resume", href: "/resume" },
    { name: "about", href: "/about" },
  ];

  let isMenuOpen = false;

  let pageTitle: string | null = null;
  $: {
    const link = links.find(({ href }) => href === $page.url.pathname);
    if (link) {
      pageTitle = link.name.charAt(0).toUpperCase() + link.name.slice(1);
    } else {
      pageTitle = null;
    }
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }

  function closeMenu() {
    isMenuOpen = false;
    document.body.style.overflow = "";
  }
</script>

<header class="bg-neutral-100 dark:bg-neutral-900 relative z-50">
  <div
    class="max-w-[1920px] mx-auto px-3 sm:px-4 h-16 flex items-center justify-between"
  >
    <!-- Left side: Logo with link -->
    <a
      href="/"
      class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-300/50 dark:hover:bg-neutral-700/50 transition-colors"
      aria-label="Home"
    >
      <img src="/Vector.png" alt="Logo" class="w-6 h-6" />
    </a>

    <!-- Right side: Actions -->
    <div class="flex items-center gap-2">
      <ThemeToggle />

      <a
        href="mailto:your.email@example.com"
        class="header-icon-button"
        aria-label="Email"
      >
        <Mail class="w-5 h-5" />
      </a>

      <a
        href="https://github.com/florianpfleiderer"
        target="_blank"
        rel="noopener"
        class="header-icon-button"
        aria-label="GitHub"
      >
        <Github class="w-5 h-5" />
      </a>

      <a
        href="https://www.linkedin.com/in/fpfleiderer"
        target="_blank"
        rel="noopener"
        class="header-icon-button"
        aria-label="LinkedIn"
      >
        <Linkedin class="w-5 h-5" />
      </a>

      <button
        class="header-icon-button"
        aria-label="Menu"
        on:click={toggleMenu}
      >
        {#if isMenuOpen}
          <X class="w-5 h-5" />
        {:else}
          <Menu class="w-5 h-5" />
        {/if}
      </button>
    </div>
  </div>
</header>

{#if isMenuOpen}
  <div
    class="fixed inset-0 z-40 backdrop-blur-sm"
    transition:fade={{ duration: 200 }}
  >
    <!-- Light mode gradient -->
    <div class="absolute inset-0 bg-white">
      <div
        class="absolute inset-0"
        style="
        background: linear-gradient(
          45deg,
          rgba(59, 130, 246, 0.15) 0%,
          rgba(147, 51, 234, 0.15) 33%,
          rgba(239, 68, 68, 0.15) 66%,
          rgba(249, 115, 22, 0.15) 100%
        );
      "
      />
    </div>

    <!-- Dark mode gradient -->
    <div class="absolute inset-0 bg-dark-bg opacity-0 dark:opacity-100">
      <div
        class="absolute inset-0"
        style="
        background: linear-gradient(
          45deg,
          rgba(59, 130, 246, 0.05) 0%,
          rgba(147, 51, 234, 0.05) 33%,
          rgba(239, 68, 68, 0.05) 66%,
          rgba(249, 115, 22, 0.05) 100%
        );
      "
      />
    </div>

    <div class="h-screen w-full flex items-center justify-center relative">
      <div class="menu-links flex flex-col items-center">
        {#each links as link}
          <a
            href={link.href}
            class="py-4 text-4xl font-bold text-black dark:text-blue-300 hover:text-neutral-600 dark:hover:text-blue-400 transition-colors capitalize"
            on:click={closeMenu}
          >
            {link.name}
          </a>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  nav {
    @apply flex items-start text-neutral-500 justify-end space-x-6 text-lg py-0.5;
  }

  .page-title {
    @apply font-light;
  }

  @media (max-width: 580px) {
    .page-title {
      @apply block text-xl;
    }

    .page-title :first-child {
      @apply hidden;
    }
  }

  @media (max-width: 420px) {
    nav {
      @apply flex-col items-end space-x-0;
    }
  }

  .header-icon-button {
    @apply p-2 rounded-lg text-neutral-600 dark:text-neutral-400
           hover:bg-neutral-200 dark:hover:bg-neutral-800
           hover:text-black dark:hover:text-blue-300
           transition-all duration-200;
  }

  /* Add styles for menu links */
  nav a {
    @apply text-black dark:text-white font-medium;
  }

  .menu-links {
    @apply text-center w-full;
  }

  .menu-links a {
    @apply w-full;
  }
</style>
