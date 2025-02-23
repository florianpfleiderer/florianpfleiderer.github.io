<script lang="ts">
  import Chat from "$lib/components/Chat.svelte"; // Import the Chat component
</script>

<div class="chat-page flex items-center justify-center min-h-screen">
  <div
    class="chat-container bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 max-w-md w-full"
  >
    <h1
      class="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4"
    >
      Chat with Me
    </h1>
    <p class="text-center text-gray-600 dark:text-gray-400 mb-6">
      Feel free to ask me anything!
    </p>
    <Chat />
    <!-- Display the Chat component -->
  </div>
</div>

<style lang="postcss">
  .chat-page {
    @apply flex items-center justify-center min-h-screen;
    background: linear-gradient(
      45deg,
      rgba(59, 130, 246, 0.15) 0%,
      rgba(147, 51, 234, 0.15) 33%,
      rgba(239, 68, 68, 0.15) 66%,
      rgba(249, 115, 22, 0.15) 100%
    );
  }

  .chat-container {
    @apply bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 max-w-md w-full;
    @apply border border-neutral-200 dark:border-neutral-700; /* Add border for consistency */
  }

  h1 {
    @apply text-2xl font-bold text-center text-gray-800 dark:text-white mb-4;
  }

  p {
    @apply text-center text-gray-600 dark:text-gray-400 mb-6;
  }
</style>
