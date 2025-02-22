<script lang="ts">
  import { page } from "$app/stores";

  import { onMount } from "svelte";
  import { CalendarDays, Star, ArrowUpDown, ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";
  import Project from "./Project.svelte";
  import ProjectTile from "$lib/components/ProjectTile.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import Markdown from "$lib/components/Markdown.svelte";

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
    (a, b) =>
      new Date(projects[b].date).getTime() -
      new Date(projects[a].date).getTime()
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

  let selectedProject: typeof projects[string] | null = null;

  function openProject(project: typeof projects[string]) {
    selectedProject = project;
    // Update URL without scrolling
    const url = new URL(window.location.href);
    url.hash = trimName(project.id);
    history.pushState({}, '', url.toString());
  }

  function closeProject() {
    selectedProject = null;
    // Remove hash from URL
    history.pushState({}, '', window.location.pathname);
  }
</script>

<Seo
  title="Florian Pfleiderer - Projects"
  description="A collection of my software projects and research work."
/>

<div class="max-w-6xl mx-auto px-4 py-12">
  <!-- Header -->
  <div class="mb-12">
    <h1 class="text-3xl font-bold mb-4">Projects</h1>
    <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl">
      A showcase of my work in robotics, computer vision, and software engineering. 
      These projects represent my journey through various technologies and challenges, 
      from autonomous systems to digital signal processing.
    </p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each projectsByDate as projectPath}
      {@const id = trimName(projectPath)}
      {@const data = projects[projectPath]}
      <ProjectTile 
        {id} 
        {data} 
        {images} 
        onClick={() => openProject(projects[projectPath])} 
      />
    {/each}
  </div>
</div>

<!-- Project Details Modal -->
<Modal isOpen={!!selectedProject} onClose={closeProject}>
  {#if selectedProject}
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-black dark:text-blue-300">
        {selectedProject.title}
      </h2>

      <div class="flex flex-wrap gap-2">
        {#each selectedProject.topics as topic}
          <span class="topic-tag">{topic}</span>
        {/each}
      </div>

      <!-- Main Image -->
      <div class="aspect-video rounded-lg overflow-hidden">
        <img
          src={images[`../../projects/${selectedProject.image}`]?.default}
          alt={selectedProject.title}
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Content -->
      <div class="prose dark:prose-invert max-w-none">
        <Markdown source={selectedProject.content} />
      </div>

      <!-- GitHub Link -->
      {#if selectedProject.repo}
        <a
          href="https://github.com/{selectedProject.repo}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          View on GitHub
          <ArrowUpRight class="w-4 h-4" />
        </a>
      {/if}
    </div>
  {/if}
</Modal>

<style lang="postcss">
  button {
    @apply flex items-center text-neutral-400 transition-colors hover:text-black;
  }

  button.active {
    @apply text-black;
  }

  .topic-tag {
    @apply px-3 py-1 rounded-full text-sm
           bg-neutral-100 dark:bg-neutral-800
           text-neutral-700 dark:text-neutral-300;
  }
</style>
