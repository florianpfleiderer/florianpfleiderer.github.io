<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import {
    ArrowUpRight,
    MapPin,
    Briefcase,
    GraduationCap,
    Camera,
    Code,
    Bot,
  } from "lucide-svelte";
</script>

<Seo
  title="Florian Pfleiderer - About"
  description="Learn more about Florian Pfleiderer - MSc Student in Computer Science and Robotics Enthusiast"
/>

<div class="max-w-4xl mx-auto px-4 py-12">
  <!-- Header Section -->
  <div class="mb-12">
    <h1 class="text-3xl font-bold mb-4">About Me</h1>
    <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl">
      MSc student in Computer Science at the University of St. Andrews, focused
      on robotics, computer vision, and software engineering.
    </p>
  </div>

  <!-- Main Content Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <!-- Left Column: Bio -->
    <div class="md:col-span-2 space-y-8">
      <!-- Introduction Card -->
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-lg">
          Hi! I'm Florian, a Computer Science student passionate about robotics
          and artificial intelligence. My journey in technology has led me to
          explore various domains, from autonomous systems to digital signal
          processing.
        </p>
      </div>

      <!-- Current Focus -->
      <div
        class="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 space-y-4"
      >
        <h2 class="text-xl font-semibold text-black dark:text-blue-300">
          Current Focus
        </h2>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <GraduationCap
              class="w-5 h-5 mt-1 text-neutral-600 dark:text-neutral-400"
            />
            <div>
              <h3 class="font-medium">MSc in Computer Science</h3>
              <p class="text-neutral-600 dark:text-neutral-400">
                University of St. Andrews, specializing in Robotics and Computer
                Vision
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <Bot class="w-5 h-5 mt-1 text-neutral-600 dark:text-neutral-400" />
            <div>
              <h3 class="font-medium">Research Interests</h3>
              <p class="text-neutral-600 dark:text-neutral-400">
                Autonomous Systems, Computer Vision, Machine Learning
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Technical Interests -->
      <div class="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6">
        <h2 class="text-xl font-semibold text-black dark:text-blue-300 mb-4">
          Technical Areas
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-2">
            <h3 class="font-medium">Robotics & Automation</h3>
            <ul class="text-neutral-600 dark:text-neutral-400 space-y-1">
              <li>• ROS Framework</li>
              <li>• Motion Planning</li>
              <li>• SLAM</li>
            </ul>
          </div>
          <div class="space-y-2">
            <h3 class="font-medium">Software Development</h3>
            <ul class="text-neutral-600 dark:text-neutral-400 space-y-1">
              <li>• C++ / Python / Rust</li>
              <li>• System Architecture</li>
              <li>• Security & Authentication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Photo and Quick Info -->
    <div class="space-y-6">
      <!-- Profile Photo -->
      <div
        class="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800"
      >
        <img
          src="/assets/imgs/profile.png"
          alt="Florian Pfleiderer"
          class="w-full h-auto"
        />
      </div>

      <!-- Quick Info Card -->
      <div
        class="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 space-y-4"
      >
        <div class="flex items-center gap-2">
          <MapPin class="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
          <span class="text-neutral-600 dark:text-neutral-400"
            >St. Andrews, Scotland</span
          >
        </div>

        <!-- Social Links -->
        <div class="space-y-2">
          <a
            href="https://www.instagram.com/florian_pfle/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <Camera class="w-4 h-4" />
            <span>@florian_pfle</span>
            <ArrowUpRight class="w-4 h-4" />
          </a>
          <!-- Add other social links similarly -->
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  /* Add any specific styles here */
</style>
