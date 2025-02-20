<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { ArrowDown } from "lucide-svelte";
  import resumeData from "./resume.yaml";
</script>

<Seo
  title="Florian Pfleiderer - Resume"
  description="Florian Pfleiderer's resume."
/>

<section class="max-w-4xl mx-auto px-4 py-12">
  <!-- Header -->
  <div class="mb-8">
    <h1 class="text-3xl font-bold mb-4">Resume</h1>
    <p class="text-neutral-600 dark:text-neutral-400 mb-6">
      Here's my professional background and experience. Feel free to download the PDF version.
    </p>
    
    <!-- Download button -->
    <a
      href={resumeData.pdf}
      download
      class="inline-flex items-center px-6 py-3 bg-black dark:bg-blue-500 text-white rounded-lg 
             hover:bg-neutral-800 dark:hover:bg-blue-600 transition-colors"
    >
      <ArrowDown class="w-5 h-5 mr-2" />
      Download PDF
    </a>
  </div>

  <!-- Resume viewer -->
  <div class="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
    <div class="pdf-container">
      <iframe
        src={`${resumeData.pdf}#view=FitH`}
        title="Florian Pfleiderer's Resume"
        class="pdf-frame"
      >
        <p>
          Your browser does not support iframes. You can
          <a href={resumeData.pdf} class="text-blue-500 hover:text-blue-600">
            view the PDF here
          </a>.
        </p>
      </iframe>
    </div>
  </div>
</section>

<style lang="postcss">
  .pdf-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 141.4%; /* Aspect ratio for A4 (1:1.414) */
    background: transparent;
  }

  .pdf-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (min-width: 768px) {
    .pdf-container {
      padding-bottom: 120%; /* Slightly shorter on larger screens */
    }
  }

  @media (min-width: 1024px) {
    .pdf-container {
      padding-bottom: 100%; /* Even shorter on very large screens */
    }
  }
</style>
