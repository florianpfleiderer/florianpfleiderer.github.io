<script lang="ts">
  import { fade } from "svelte/transition";
  import { X } from "lucide-svelte";

  export let isOpen = false;
  export let onClose: () => void;
</script>

{#if isOpen}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
    transition:fade={{ duration: 200 }}
  >
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      on:click={onClose}
    />

    <!-- Modal Content -->
    <div
      class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-xl"
    >
      <!-- Close Button -->
      <button
        class="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
        on:click={onClose}
      >
        <X size={24} />
      </button>

      <div class="p-6 sm:p-8">
        <slot />
      </div>
    </div>
  </div>
{/if} 