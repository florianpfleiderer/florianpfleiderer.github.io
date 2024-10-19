<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  const featuredProjects = [
    {
      name: "Simple Digital Synthesizer",
      href: "/projects#01_digital_synthesizer",
      desc: "making a simple digital synthesizer",
      aside: "C++, ImNodes, ImGui, Cmake",
    },
    {
      name: "Change Detection in Autonomous Systems",
      href: "/projects#02_cyws3d",
      desc: "using scene differencing to improve change detection",
      aside: "Python, Machine-Vision, Neural-Networks",
    },
    {
      name: "Autonomous Robot Hockey System",
      href: "/projects#03_arhs",
      desc: "implemented motion planning, object detection and collision avoidance",
      aside: "ROS, Motion-Planning, Collision-Avoidance",
    },
  ];
</script>

<Seo title="Florian Pfleiderer" description="Postgraduate taught student" />

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="eric-is"
>
  <span class="g">is a</span> postgraduate taught student
  <span class="g"> and </span><br />
  robotics enthusiast <span class="g">.</span>
</p>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <p>
      I'm a Masters student in Computer Science at <em
        ><a href="https://www.st-andrews.ac.uk/">University of St. Andrews</a
        ></em
      >. <br />
      Among top 15% of my student cohort during undergraduate time at the
      <em
        ><a href="https://www.tuwien.at/en/">Technical University of Vienna</a
        ></em
      >, I was following an individual study plan, taking courses in Robotics,
      Machine Vision and Software Engineering. <br />
      I was part of
      <em><a href="https://www.tuwienracing.at/">TU Wien racing</a></em>, where
      I led the embedded software development of the racecar's electronic
      control unit and helped the team secure a top 25 place among over 200
      competing teams.
    </p>

    <p>I am currently pursuing my Masters Degree.</p>
  </div>

  <div class="leading-snug space-y-4">
    <p class="pb-2">Notable projects:</p>

    {#each featuredProjects as project}
      <a class="project-pair" href={project.href}>
        <div class="text-black font-medium">
          {project.name}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
        <div>
          <p>{project.desc}</p>
          {#if project.aside}
            <aside>{project.aside}</aside>
          {/if}
        </div>
      </a>
    {/each}
  </div>

  <div class="space-y-5">
    <p>
      Other interests: Coding, Emerging Technologies in Electronics & IT,
      European History
    </p>
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
