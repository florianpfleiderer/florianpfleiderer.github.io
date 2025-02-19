<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import resumeData from "./resume.yaml";
</script>

<Seo
  title="Florian Pfleiderer - Resume"
  description="Florian Pfleiderer's resume."
/>

<section class="layout-md py-8">
  <div class="pdf-container">
    <iframe
      src={resumeData.pdf}
      title="Florian Pfleiderer's Resume"
      class="pdf-frame"
    >
      <p>Your browser does not support iframes. You can <a href={resumeData.pdf}>download the PDF here</a>.</p>
    </iframe>
  </div>
</section>

<style>
  .pdf-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 141.4%; /* Aspect ratio for A4 (1:1.414) */
    background: #f5f5f5;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .pdf-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
