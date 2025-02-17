<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import resumeData from "./resume.yaml";
</script>

<Seo
  title="Florian Pfleiderer - Resume"
  description="Florian Pfleiderer's resume."
/>

<section class="layout-md py-0">
  <iframe
    src={resumeData.pdf}
    width="100%"
    height="800px"
    frameborder="0"
    class="w-full"
  >
    Your browser does not support iframes.
  </iframe>
</section>
