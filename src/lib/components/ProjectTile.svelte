<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  export let id: string;
  export let data: {
    title: string;
    date: string;
    repo: string;
    topics: string[];
    lead: string;
    image: string;
    content: string;
  };

  export let images: Record<string, { default: string }>;
  export let onClick: () => void;
</script>

<div class="project-tile cursor-pointer" on:click={onClick}>
  <div class="flex flex-col h-full">
    <!-- Image Container -->
    <div class="aspect-video rounded-lg overflow-hidden mb-4">
      <img
        src={images[`../../projects/${data.image}`]?.default}
        alt="{data.title} preview"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Content -->
    <div class="flex-1">
      <!-- Title and Date -->
      <div class="flex justify-between items-start mb-2 gap-4">
        <h3
          class="text-xl font-semibold text-black dark:text-blue-300 max-w-[75%]"
        >
          {data.title}
        </h3>
        <span class="text-sm text-neutral-500 flex-shrink-0">{data.date}</span>
      </div>

      <!-- Lead Text -->
      <p class="text-neutral-600 dark:text-neutral-300 mb-4">
        {data.lead}
      </p>

      <!-- Topics -->
      <div class="flex flex-wrap gap-2 mb-4">
        {#each data.topics as topic}
          <span class="topic-tag">{topic}</span>
        {/each}
      </div>

      <!-- GitHub Link -->
      {#if data.repo}
        <a
          href="https://github.com/{data.repo}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-blue-300"
        >
          View on GitHub
          <ArrowUpRight class="w-4 h-4 ml-1" />
        </a>
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  .project-tile {
    @apply bg-white dark:bg-neutral-900/50 rounded-xl p-6
           border border-neutral-200 dark:border-neutral-800
           hover:border-neutral-300 dark:hover:border-neutral-700
           transition-all duration-200 hover:shadow-lg;
  }

  .topic-tag {
    @apply px-3 py-1 rounded-full text-sm
           bg-neutral-100 dark:bg-neutral-800
           text-neutral-700 dark:text-neutral-300;
  }
</style>
