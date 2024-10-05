<script lang="ts">
  import { fade } from "svelte/transition";

  export let title: string;
  export let uni: string;
  export let url: string;
  export let dates: string;
  export let location: string;
  export let defaultHidden = false;

  let hidden = defaultHidden;
</script>

<div
  class="mb-8"
  class:cursor-pointer={hidden}
  on:click={() => (hidden = false)}
  on:keypress={() => {}}
>
  <div>
    <div class="flex justify-between items-end">
      <h2 class="text-black text-lg leading-tight mb-1">
        <a class="link" href={url}>{uni}</a>
      </h2>
      <div class="text-neutral-500 mb-1">{dates}</div>
    </div>
    <div class="flex justify-between items-end">
      <h3>
        {title}
      </h3>
      <span class="text-neutral-500 mb-1">{location}</span>
    </div>
  </div>

  {#if !hidden}
    <ul class="list-disc pl-7 marker:text-neutral-400" in:fade|local>
      <slot />
    </ul>
  {/if}
</div>
