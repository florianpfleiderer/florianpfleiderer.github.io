<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import resumeData from "./resume.yaml";
</script>

<Seo
  title="Florian Pfleiderer - Resume"
  description="Florian Pfleiderer's resume."
/>

<section class="layout-md py-8">
  <div class="resume-wrapper">
    <div class="controls">
      <a href={resumeData.pdf} class="download-btn" download>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Download PDF
      </a>
    </div>
    
    <div class="pdf-container">
      <iframe
        src={`${resumeData.pdf}#toolbar=0&navpanes=0`}
        title="Florian Pfleiderer's Resume"
        class="pdf-frame"
      >
        <p>Your browser does not support iframes. You can <a href={resumeData.pdf}>download the PDF here</a>.</p>
      </iframe>
    </div>
  </div>
</section>

<style>
  .resume-wrapper {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    overflow: hidden;
  }

  .controls {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    background: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
  }

  .download-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #4a5568;
    color: white;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  .download-btn:hover {
    background-color: #2d3748;
  }

  .pdf-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 141.4%; /* Aspect ratio for A4 (1:1.414) */
    background: #f5f5f5;
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
