<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import { formatTime } from "$lib/utils";

  type Writing = {
    title: string;
    date: Date;
    summary: string;
    link: string;
  };

  export let data: Writing[];
</script>

<div class="grid gap-y-4">
  {#each data as item}
    <a
      href={item.link}
      class="block -mx-3 px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      target="_blank"
      rel="noreferrer"
    >
      <div class="flex flex-col sm:flex-row sm:items-end mb-1.5">
        <div class="text-lg text-black dark:text-blue-300">
          {item.title}
          <ArrowUpRight
            size={18}
            class="inline text-neutral-400 dark:text-neutral-500"
          />
        </div>
        <div class="sm:ml-auto mb-0.5 text-neutral-500 dark:text-neutral-400">
          {formatTime("%B %-d, %Y", item.date)}
        </div>
      </div>
      <div
        class="text-lg leading-snug font-serif italic text-neutral-700 dark:text-neutral-300"
      >
        {item.summary}
      </div>
    </a>
  {/each}
</div>
