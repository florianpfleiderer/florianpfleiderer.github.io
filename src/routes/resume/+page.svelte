<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
  import Uni from "./Uni.svelte";
  import resumeData from "./resume.yaml";
</script>

<Seo
  title="Florian Pfleiderer - Resume"
  description="Florian Pfleiderer's resume."
/>

<section class="layout-md py-0">
  <div class="flex justify-between items-end">
    <h2>
      <a class="link" href={resumeData.pdf} target="_blank">
        Curriculum Vitae
      </a>
    </h2>
    <div class="text-neutral-500 mb-1">Download the latest version</div>
  </div>
</section>

<!-- The remaining sections (Education, Professional Experience, Skills) remain unchanged. -->