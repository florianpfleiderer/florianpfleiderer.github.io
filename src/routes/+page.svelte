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

<Seo title="Florian Pfleiderer" description="PGT" />

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="florian-is"
>
  <span class="g">is a</span> msc student
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

  <div class="leading-snug space-y-4">
    <p class="pb-2">Skills and Proficiencies:</p>

    <div class="badge-container space-y-4">
      <div>
        <h4 class="font-semibold">Programming Languages:</h4>
        <div class="flex flex-wrap gap-2">
          <img
            src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
            alt="Python"
          />
          <img
            src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
            alt="C++"
          />
          <img
            src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white"
            alt="C"
          />
          <img
            src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white"
            alt="Rust"
          />
          <img
            src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white"
            alt="Java"
          />
          <img
            src="https://img.shields.io/badge/Haskell-5D4F85?style=for-the-badge&logo=haskell&logoColor=white"
            alt="Haskell"
          />
        </div>
      </div>

      <div>
        <h4 class="font-semibold">Technologies and Frameworks:</h4>
        <div class="flex flex-wrap gap-2">
          <img
            src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
            alt="Git"
          />
          <img
            src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
            alt="Docker"
          />
          <img
            src="https://img.shields.io/badge/ROS-22314E?style=for-the-badge&logo=ros&logoColor=white"
            alt="ROS"
          />
          <img
            src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white"
            alt="OpenCV"
          />
          <img
            src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"
            alt="PyTorch"
          />
          <img
            src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"
            alt="TensorFlow"
          />
          <img
            src="https://img.shields.io/badge/SLAM-000000?style=for-the-badge&logo=slam&logoColor=white"
            alt="SLAM"
          />
          <img
            src="https://img.shields.io/badge/Computer%20Vision-000000?style=for-the-badge&logo=computervision&logoColor=white"
            alt="Computer Vision"
          />
          <img
            src="https://img.shields.io/badge/Machine%20Learning-000000?style=for-the-badge&logo=machinelearning&logoColor=white"
            alt="Machine Learning"
          />
        </div>
      </div>

      <div>
        <h4 class="font-semibold">Cryptography:</h4>
        <div class="flex flex-wrap gap-2">
          <img
            src="https://img.shields.io/badge/RSA-000000?style=for-the-badge&logo=openssl&logoColor=white"
            alt="RSA"
          />
          <img
            src="https://img.shields.io/badge/GPG-000000?style=for-the-badge&logo=gnu-privacy-guard&logoColor=white"
            alt="GPG"
          />
          <img
            src="https://img.shields.io/badge/SSL%2FTLS-000000?style=for-the-badge&logo=let's-encrypt&logoColor=white"
            alt="SSL/TLS"
          />
          <img
            src="https://img.shields.io/badge/PKI-000000?style=for-the-badge&logo=keybase&logoColor=white"
            alt="PKI"
          />
        </div>
      </div>

      <div>
        <h4 class="font-semibold">Operational Security:</h4>
        <div class="flex flex-wrap gap-2">
          <img
            src="https://img.shields.io/badge/Secure%20Authentication%20Methods-000000?style=for-the-badge&logo=auth0&logoColor=white"
            alt="Secure Authentication Methods"
          />
          <img
            src="https://img.shields.io/badge/Threat%20Modeling-000000?style=for-the-badge&logo=the-movie-database&logoColor=white"
            alt="Threat Modeling"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="space-y-5">
    <p>
      Other interests: Coding, Emerging Technologies in IT & AI, European
      History
    </p>

    <p>
      <strong>Languages:</strong> German (C2), English (C2), French (B2)
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

  .badge-container img {
    height: auto;
    display: inline;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #florian-is {
      text-align: center;
      font-size: 1.125rem;
      padding: 0 1rem;
      line-height: 1.4;
    }
  }
</style>
