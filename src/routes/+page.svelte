<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";
  import Seo from "$lib/components/Seo.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import Chat from "$lib/components/Chat.svelte";

  const featuredProjects = [
    {
      name: "Autonomous Robot Hockey System",
      href: "/projects#03_arhs",
      desc: "implemented motion planning, object detection and collision avoidance",
      aside: "ROS, Motion-Planning, Collision-Avoidance",
    },
  ];
</script>

<Seo
  title="Florian Pfleiderer"
  description="MSc Student & Robotics Enthusiast"
/>

<div class="landing-page min-h-[calc(100vh-6rem)]">
  <div class="relative flex items-center justify-center h-full pt-8 sm:pt-12">
    <!-- Hero Section -->
    <section
      class="w-full max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16"
    >
      <!-- Left Column: Main Info -->
      <div class="flex-1 space-y-8 lg:pr-8">
        <div class="space-y-6">
          <h1
            class="text-5xl lg:text-6xl font-bold text-black dark:text-blue-300"
          >
            Florian Pfleiderer
          </h1>

          <p class="text-xl lg:text-2xl">
            <span class="text-neutral-400">is a</span>
            <span class="text-black dark:text-blue-300">MSc student</span>
            <span class="text-neutral-400">and</span>
            <span class="text-black dark:text-blue-300"
              >robotics enthusiast</span
            >
          </p>

          <p
            class="text-base lg:text-lg text-black dark:text-white max-w-xl leading-relaxed"
          >
            Currently pursuing Computer Science at the University of St.
            Andrews, with a focus on Robotics, Machine Vision, and Software
            Engineering.
          </p>
        </div>

        <!-- Navigation Buttons -->
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/projects" class="action-button">
              Projects
              <ArrowUpRight size={18} class="inline" />
            </a>
            <a href="/writing" class="action-button-secondary">
              Writing
              <ArrowUpRight size={18} class="inline" />
            </a>
            <a href="/chat" class="action-button-outline">
              Chat
              <ArrowUpRight size={18} class="inline" />
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column: Key Skills -->
      <div
        class="flex-1 lg:min-w-[420px] backdrop-blur-sm bg-white/5 dark:bg-black/5 p-6 lg:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 relative overflow-hidden"
      >
        <!-- Add gradient overlay for dark mode -->
        <div
          class="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100"
        >
          <div
            class="w-full h-full"
            style="
            background: linear-gradient(
              45deg,
              rgba(59, 130, 246, 0.05) 0%,
              rgba(147, 51, 234, 0.05) 33%,
              rgba(239, 68, 68, 0.05) 66%,
              rgba(249, 115, 22, 0.05) 100%
            );
          "
          />
        </div>

        <h2
          class="text-xl lg:text-2xl font-semibold text-black dark:text-blue-200 mb-4 lg:mb-6 relative"
        >
          Core Competencies
        </h2>

        <div class="grid grid-cols-2 gap-4 lg:gap-6 relative">
          <div class="skill-card">
            <h3 class="text-lg font-medium text-black dark:text-blue-300">
              Robotics
            </h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              ROS, Motion Planning, SLAM
            </p>
          </div>
          <div class="skill-card">
            <h3 class="text-lg font-medium text-black dark:text-blue-300">
              Machine Vision
            </h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              OpenCV, PyTorch, TensorFlow
            </p>
          </div>
          <div class="skill-card">
            <h3 class="text-lg font-medium text-black dark:text-blue-300">
              Software Engineering
            </h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              C++, Python, Rust
            </p>
          </div>
          <div class="skill-card">
            <h3 class="text-lg font-medium text-black dark:text-blue-300">
              Security
            </h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              Cryptography, Authentication
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<style lang="postcss">
  .landing-page {
    @apply relative overflow-hidden;
  }

  .action-button {
    @apply px-8 py-3 bg-black dark:bg-blue-500 text-white rounded-full 
           transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2 text-lg 
           justify-center;
  }

  .action-button-secondary {
    @apply px-8 py-3 bg-neutral-800 dark:bg-blue-600 text-white rounded-full 
           transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2 text-lg
           justify-center;
  }

  .action-button-outline {
    @apply px-8 py-3 border-2 border-black dark:border-blue-500 text-black dark:text-blue-500 
           rounded-full transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2 text-lg
           justify-center;
  }

  .skill-card {
    @apply p-5 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 hover:scale-[1.02] transition-transform;
  }

  .social-button {
    @apply flex items-center gap-2 px-4 py-2 rounded-lg 
           text-neutral-600 dark:text-neutral-400 
           hover:bg-neutral-100 dark:hover:bg-neutral-800/50
           hover:text-black dark:hover:text-blue-300
           transition-all duration-200 text-sm font-medium;
  }
</style>
