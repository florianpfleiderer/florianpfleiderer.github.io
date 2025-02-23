<script lang="ts">
  import { onMount } from 'svelte';

  let posts: any[] = [];
  
  onMount(async () => {
    try {
      const response = await fetch(`/api/instagram`); // You'd need to create this endpoint
      posts = await response.json();
    } catch (error) {
      console.error('Failed to fetch Instagram posts:', error);
    }
  });
</script>

<div class="grid grid-cols-2 gap-2">
  {#each posts as post}
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      class="aspect-square rounded-lg overflow-hidden"
    >
      <img
        src={post.media_url}
        alt={post.caption}
        class="w-full h-full object-cover"
      />
    </a>
  {/each}
</div> 