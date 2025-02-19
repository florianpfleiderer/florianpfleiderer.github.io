<script lang="ts">
  import { page } from "$app/stores";
  import ThemeToggle from "./ThemeToggle.svelte";
  import { Github, Linkedin, Mail, Menu } from "lucide-svelte";

  const links = [
    { name: "projects", href: "/projects" },
    { name: "writing", href: "/writing" },
    { name: "resume", href: "/resume" },
  ];

  let pageTitle: string | null = null;
  $: {
    const link = links.find(({ href }) => href === $page.url.pathname);
    if (link) {
      pageTitle = link.name.charAt(0).toUpperCase() + link.name.slice(1);
    } else {
      pageTitle = null;
    }
  }
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
  <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
    <!-- Left side: Logo placeholder -->
    <div class="w-8 h-8 bg-neutral-200 dark:bg-neutral-800 rounded-lg">
      <!-- Placeholder for your icon -->
    </div>

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

      <button class="header-icon-button" aria-label="Menu">
        <Menu class="w-5 h-5" />
      </button>
    </div>
  </div>
</header>

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
           hover:bg-neutral-100 dark:hover:bg-neutral-800/50
           hover:text-black dark:hover:text-blue-300
           transition-all duration-200;
  }
</style>
