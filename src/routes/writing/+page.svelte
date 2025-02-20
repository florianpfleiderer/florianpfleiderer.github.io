<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import WritingList from "./WritingList.svelte";
  import writing from "./writing.yaml";
</script>

<Seo
  title="Florian Pfleiderer – Writing"
  description="Past writing: academic papers, presentations, notes, tutorials, and technical blog posts."
/>

<div class="max-w-4xl mx-auto px-4 py-12">
  <!-- Header -->
  <div class="mb-12">
    <h1 class="text-3xl font-bold mb-4">Writing</h1>
    <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl">
      A collection of my academic papers, technical writing, and research work. These pieces cover topics in robotics, computer vision, and software engineering.
    </p>
  </div>

  <!-- Academic Papers Section -->
  <section class="mb-16">
    <h2 class="text-2xl font-semibold text-black dark:text-blue-300 mb-6">
      Academic Papers
    </h2>
    <div class="space-y-1">
      <WritingList data={writing.papers} />
    </div>
  </section>

  <!-- Technical Reports Section -->
  {#if writing.reports?.length > 0}
    <section class="mb-16">
      <h2 class="text-2xl font-semibold text-black dark:text-blue-300 mb-6">
        Technical Reports
      </h2>
      <div class="space-y-1">
        <WritingList data={writing.reports} />
      </div>
    </section>
  {/if}

  <!-- Blog Posts Section -->
  {#if writing.posts?.length > 0}
    <section>
      <h2 class="text-2xl font-semibold text-black dark:text-blue-300 mb-6">
        Blog Posts
      </h2>
      <div class="space-y-1">
        <WritingList data={writing.posts} />
      </div>
    </section>
  {/if}
</div>

<style lang="postcss">
  .layout-sm {
    @apply max-w-screen-sm mx-auto px-4 sm:px-6;
  }
</style>
