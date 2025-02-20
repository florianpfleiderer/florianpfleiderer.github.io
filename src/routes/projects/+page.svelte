<script lang="ts">
  import { page } from "$app/stores";

  import { onMount } from "svelte";
  import { CalendarDays, Star, ArrowUpDown } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";
  import Project from "./Project.svelte";

  const projects = import.meta.glob("../../projects/*.md", {
    eager: true,
  }) as any;
  const images = import.meta.glob("../../projects/*.{png,jpg,svg}", {
    eager: true,
  }) as any;

  function trimName(id: string) {
    return id.match(/\.\.\/projects\/(.*)\.md$/)?.[1];
  }

  $: projectsByDate = Object.keys(projects).sort(
    (a, b) => new Date(projects[b].date).getTime() - new Date(projects[a].date).getTime()
  );
  $: projectsByTitle = Object.keys(projects).sort((a, b) => {
    const titleA = projects[a].title.toLowerCase();
    const titleB = projects[b].title.toLowerCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });

  onMount(() => {
    // Hack: Fix the scroll position after the page loads, especially for mobile browsers.
    const selected = $page.url.hash.slice(1);
    if (selected) {
      setTimeout(() => {
        if ($page.url.hash.slice(1) === selected) {
          document.getElementById(selected)?.scrollIntoView();
        }
      }, 500);
    }
  });

  let stars: Record<string, number> | null = null;
  onMount(async () => {
    const resp = await fetch(
      "https://api.github.com/users/florianpfleiderer/repos?per_page=100"
    );
    const repos = await resp.json();
    stars = {};
    for (const obj of repos) {
      stars[obj.full_name] = obj.stargazers_count;
    }
  });

  $: projectsByStars = [...projectsByTitle].sort((a, b) => {
    const starsA = stars?.[projects[a].repo] ?? 0;
    const starsB = stars?.[projects[b].repo] ?? 0;
    return starsB - starsA;
  });

  let sortOrder: "date" | "stars" = "date";
</script>

<Seo
  title="Florian Pfleiderer - Projects"
  description="A collection of my software projects and research work."
/>

<div class="max-w-5xl mx-auto px-4 py-12">
  <!-- Header -->
  <div class="mb-12">
    <h1 class="text-3xl font-bold mb-4">Projects</h1>
    <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl">
      A showcase of my work in robotics, computer vision, and software engineering. Each project represents a unique challenge and learning experience.
    </p>
  </div>

  <!-- Table of Contents -->
  <section class="mb-16">
    <div class="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold text-black dark:text-blue-300">
          Table of Contents
        </h2>
        <button
          class="flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 
                 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg transition-colors"
          on:click={() => sortOrder = sortOrder === "date" ? "stars" : "date"}
        >
          <ArrowUpDown size={16} />
          Sort by {sortOrder === "date" ? "Stars" : "Date"}
        </button>
      </div>
      <ul class="space-y-2">
        {#each projectsByDate as id}
          <li>
            <a
              href="#{id}"
              class="block py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/50 
                     text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              {projects[id].title}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <!-- Project List -->
  <div class="space-y-24">
    {#each sortOrder === "date" ? projectsByDate : projectsByDate as id}
      <section {id} class="scroll-mt-8">
        <Project data={projects[id]} {images} {stars} />
      </section>
    {/each}
  </div>
</div>

<style lang="postcss">
  button {
    @apply flex items-center text-neutral-400 transition-colors hover:text-black;
  }

  button.active {
    @apply text-black;
  }
</style>
