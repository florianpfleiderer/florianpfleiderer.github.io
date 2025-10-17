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
    Cpu,
    Music2
  } from "lucide-svelte";
</script>

<Seo
  title="Florian Pfleiderer - About"
  description="Learn more about Florian Pfleiderer — Computer Science MSc graduate specialising in model-based reinforcement learning, control, and robotic perception."
/>

<div class="max-w-4xl mx-auto px-4 py-12">
  <!-- Header Section -->
  <div class="mb-12">
    <h1 class="text-3xl font-bold mb-4">About Me</h1>
    <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl">
      Computer Science MSc graduate from the University of St Andrews, following a BSc in Electrical Engineering at TU Wien, specialising in model-based reinforcement learning, robotic control, and intelligent perception systems.
    </p>
  </div>

  <!-- Main Content Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <!-- Left Column: Bio -->
    <div class="md:col-span-2 space-y-8">
      <!-- Introduction Card -->
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-lg">
          Hi, I'm Florian. I'm a Computer Science graduate with a background in Electrical Engineering, passionate about robotics and learning-based control. My work bridges AI, control, and perception — building robotic systems that can reason, adapt, and interact intelligently with their environment.
        </p>

        <p class="text-lg">
          I got into robotics through hands-on experience in embedded systems and control, developing everything from real-time racing software to autonomous robots. Over time, this evolved into a focus on model-based reinforcement learning and decision-making for robotic manipulation. I enjoy working at the intersection of perception, control, and learning — where algorithms meet hardware in the real world.
        </p>
      </div>

      <!-- Current Focus -->
      <div class="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 space-y-4">
        <h2 class="text-xl font-semibold text-black dark:text-blue-300">
          Current Focus
        </h2>

        <div class="space-y-3">

          <!-- Education -->
          <div class="flex items-start gap-3">
            <GraduationCap class="w-5 h-5 mt-1 text-neutral-600 dark:text-neutral-400" />
            <div>
              <h3 class="font-medium">Education</h3>
              <p class="text-neutral-600 dark:text-neutral-400">
                MSc Computer Science (Completed) — University of St Andrews<br />
                Specialised in Machine Learning and Robotics
              </p>
            </div>
          </div>

          <!-- Research Interests -->
          <div class="flex items-start gap-3">
            <Bot class="w-5 h-5 mt-1 text-neutral-600 dark:text-neutral-400" />
            <div>
              <h3 class="font-medium">Research Interests</h3>
              <p class="text-neutral-600 dark:text-neutral-400">
                <a href="https://arxiv.org/abs/1803.10122" target="_blank" rel="noopener noreferrer" class="underline hover:text-blue-600 dark:hover:text-blue-400">
                  World Models (paper)
                </a> · 
                <a href="https://www.nvidia.com/en-us/glossary/world-models/" target="_blank" rel="noopener noreferrer" class="underline hover:text-blue-600 dark:hover:text-blue-400">
                  World Models (NVIDIA)
                </a> · 
                Model-Based Reinforcement Learning · Learning-Based Control · Robotic Manipulation · Perception and Planning
              </p>
            </div>
          </div>

          <!-- Technical Background -->
          <div class="flex items-start gap-3">
            <Cpu class="w-5 h-5 mt-1 text-neutral-600 dark:text-neutral-400" />
            <div>
              <h3 class="font-medium">Technical Background</h3>
              <p class="text-neutral-600 dark:text-neutral-400">
                Control Systems · C++ · Python · ROS · Model Predictive Control (MPC) · AI-Driven Control Architectures · Simulation (Gazebo, SoftGym) · Embedded Systems
              </p>
            </div>
          </div>

          <!-- Hobbies -->
          <div class="flex items-start gap-3">
            <Music2 class="w-5 h-5 mt-1 text-neutral-600 dark:text-neutral-400" />
            <div>
              <h3 class="font-medium">Hobbies</h3>
              <p class="text-neutral-600 dark:text-neutral-400">
                Outside of robotics, I’m passionate about sports and music. I enjoy running, climbing, and strength training, and I’m also an active DJ — exploring the creative side of rhythm and sound.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Right Column: Photo and Quick Info -->
    <div class="space-y-6">
      <!-- Profile Photo -->
      <div class="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
        <img
          src="/assets/imgs/profile.png"
          alt="Florian Pfleiderer"
          class="w-full h-auto"
        />
      </div>

      <!-- Quick Info Card -->
      <div class="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 space-y-4">
        <div class="flex items-center gap-2">
          <MapPin class="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
          <span class="text-neutral-600 dark:text-neutral-400">Vienna, Austria</span>
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
