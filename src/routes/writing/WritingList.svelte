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

<div class="space-y-4">
  {#each data as item}
    <a
      href={item.link}
      class="block p-4 -mx-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900/50
             border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800
             transition-all duration-200"
      target="_blank"
      rel="noreferrer"
    >
      <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
        <h3
          class="text-lg font-medium text-black dark:text-blue-300 flex items-center gap-2"
        >
          {item.title}
          <ArrowUpRight
            size={18}
            class="text-neutral-400 dark:text-neutral-500 flex-shrink-0"
          />
        </h3>
        <div
          class="sm:ml-auto text-sm text-neutral-500 dark:text-neutral-400 flex-shrink-0"
        >
          {formatTime("%B %-d, %Y", item.date)}
        </div>
      </div>
      <p class="text-neutral-600 dark:text-neutral-300 leading-relaxed">
        {item.summary}
      </p>
    </a>
  {/each}
</div>
