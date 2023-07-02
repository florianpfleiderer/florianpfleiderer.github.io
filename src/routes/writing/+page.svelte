<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import WritingList from "./WritingList.svelte";
  import writing from "./writing.yaml";
</script>

<Seo
  title="Florian Pfleiderer – Writing"
  description="Past writing: academic papers, presentations, notes, tutorials, and technical blog posts."
/>

<section class="layout-md py-12">
  <h2 class="heading2">Academic Writing and Reports</h2>
  <WritingList data={writing.papers} />
</section>
