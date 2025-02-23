<script lang="ts">
  import Chat from "$lib/components/Chat.svelte";
</script>

<!-- A centered, smaller floating panel -->
<div class="chat-panel relative mx-auto mt-16 max-w-md">
  <!-- This container mimics the floating panel from your landing page -->
  <div
    class="relative backdrop-blur-sm bg-white/5 dark:bg-black/5 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
  >
    <!-- Gradient overlay (visible in dark mode, similar to your landing page) -->
    <div class="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100">
      <div
        class="w-full h-full"
        style="
          background: linear-gradient(
            45deg,
            rgba(59, 130, 246, 0.15) 0%,
            rgba(147, 51, 234, 0.15) 33%,
            rgba(239, 68, 68, 0.15) 66%,
            rgba(249, 115, 22, 0.15) 100%
          );
        "
      ></div>
    </div>

    <h1 class="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4 relative">
      Chat with Me
    </h1>
    <p class="text-center text-gray-600 dark:text-gray-400 mb-6 relative">
      Feel free to ask me anything!
    </p>
    <div class="relative">
      <Chat />
    </div>
  </div>
</div>

<style lang="postcss">
  /* Optional: additional styling for .chat-panel if needed */
  .chat-panel {
    /* For example, you might want some extra top/bottom margin on smaller screens */
    @apply px-4;
  }
</style>
