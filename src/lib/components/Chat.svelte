/*
<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const messages = writable<{ user: string; bot: string }[]>([]);
  let userInput = "";

  async function sendMessage() {
    if (!userInput.trim()) return;

    // Add user message to the chat
    messages.update((msgs) => [...msgs, { user: userInput, bot: "" }]);

    // Call OpenAI API
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    const botMessage = data.reply;

    // Add bot response to the chat
    messages.update((msgs) => {
      const lastMessage = { user: userInput, bot: botMessage };
      return [...msgs.slice(0, -1), lastMessage];
    });

    userInput = ""; // Clear input
  }
</script>

<div class="chat-container">
  <div class="messages">
    {#each $messages as { user, bot }}
      <div class="message user">{user}</div>
      <div class="message bot">{bot}</div>
    {/each}
  </div>
  <input
    type="text"
    bind:value={userInput}
    on:keydown={(e) => e.key === "Enter" && sendMessage()}
    placeholder="Type your message..."
    class="input"
  />
  <button on:click={sendMessage} class="send-button">Send</button>
</div>

<style lang="postcss">
  .chat-container {
    @apply bg-white dark:bg-neutral-900/50 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-lg;
    max-height: 400px;
    overflow-y: auto;
  }
  .messages {
    margin-bottom: 10px;
  }
  .message {
    margin: 5px 0;
  }
  .user {
    text-align: right;
    color: blue;
  }
  .bot {
    text-align: left;
    color: green;
  }
  .input {
    width: calc(100% - 80px);
    padding: 8px;
  }
  .send-button {
    padding: 8px;
  }
</style>
*/
