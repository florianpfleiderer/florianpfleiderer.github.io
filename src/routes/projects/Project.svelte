<script lang="ts">
  import { Star, ArrowUpRight } from "lucide-svelte";

  import Markdown from "$lib/components/Markdown.svelte";
  import { formatTime } from "$lib/utils";

  export let data: {
    title: string;
    date: string;
    content: string;
    repo: string;
    topics: string[];
    lead: string;
    image: string;
    image_border?: boolean;
    subimages?: string[];
  };

  export let images: Record<string, { default: string }>;
  export let stars: Record<string, number> | null = null;
</script>

<!-- Project Header -->
<div class="mb-8">
  <h2 class="text-2xl font-bold text-black dark:text-blue-300 mb-2">
    {data.title}
  </h2>
  <div class="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
    <a
      href="https://github.com/{data.repo}"
      class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
      target="_blank"
      rel="noopener"
    >
      <Star size={16} class="fill-current" />
      View on GitHub
      <ArrowUpRight size={14} />
    </a>
    <span class="text-neutral-400 dark:text-neutral-500">
      {formatTime("%B %Y", data.date)}
    </span>
  </div>
  <div class="flex flex-wrap gap-2 mb-6">
    {#each data.topics as topic}
      <span class="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm text-neutral-800 dark:text-neutral-200">
        {topic}
      </span>
    {/each}
  </div>
</div>

<!-- Project Content -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div class="md:col-span-2 prose dark:prose-invert max-w-none">
    <p class="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
      {data.lead}
    </p>
    <Markdown source={data.content} />
  </div>
  
  <div class="space-y-6">
    <div class="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
      <a 
        href={images[`../../projects/${data.image}`]?.default}
        rel="external"
        class="block hover:opacity-90 transition-opacity"
      >
        <img
          src={images[`../../projects/${data.image}`]?.default}
          alt="{data.title} preview"
          class="w-full h-auto"
          class:border={data.image_border}
        />
      </a>
    </div>
    
    {#if data.subimages}
      {#each data.subimages as image}
        <div class="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
          <a 
            href={images[`../../projects/${image}`]?.default}
            rel="external"
            class="block hover:opacity-90 transition-opacity"
          >
            <img
              src={images[`../../projects/${image}`]?.default}
              alt="{data.title} additional view"
              class="w-full h-auto"
            />
          </a>
        </div>
      {/each}
    {/if}
  </div>
</div>

<style lang="postcss">
  .pill {
    @apply flex items-center text-sm font-medium;
    @apply px-1.5 py-[1px] mr-1.5 mb-2 bg-neutral-100 rounded-full;
  }
</style>
