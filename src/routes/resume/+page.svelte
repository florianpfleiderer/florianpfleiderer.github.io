<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
  import Uni from "./Uni.svelte";
</script>

<Seo
  title="Florian Pfleiderer - Resume"
  description="Florian Pfleiderer's resume."
/>

<section class="layout-md py-0">
  <div class="flex justify-between items-end">
    <h2>
      <a
        class="link"
        href="https://github.com/florianpfleiderer"
        >Curriculum Vitae</a
      >
    </h2>
    <div class="text-neutral-500 mb-1">Download the latest version</div>
  </div>
</section>

<section class="layout-md py-10">
  <h2 class="heading2">Education</h2>

  <Uni
    title="MSc Computer Science"
    uni="University of St Andrews"
    url="https://www.st-andrews.ac.uk/"
    dates="09/2024 - 08/2025"
    location="St Andrews, Scotland"
  >
    <li>
      Coursework: Artificial Intelligence, Computer Security,
      Software Engineering, Multi-Core Architectures, Data-Intensive Systems
    </li>
  </Uni>

  <Uni
    title="BA Electrical Engineering"
    uni="Vienna University of Technology"
    url="https://www.tuwien.at/en/"
    dates="10/2017 - 11/2023"
    location="Vienna, Austria"
  >
    <li>
      Coursework: Robotics and Computer Vision, Software Engineering,
      Microcomputers, Signals and Systems I/II
    </li>
  </Uni>

  <Uni
    title=""
    uni="Extracurricular Study Exchanges"
    url=""
    dates=""
    location=""
  >
    <li>
      Blundell's School, Tiverton, UK: exchange year 09/2013-07/2014
    </li>
  </Uni>
</section>

<section class="layout-md py-10">
  <h2 class="heading2">Professional Experience</h2>

  <Workplace
    title="Head of Control Unit Development"
    company="TU Wien Racing"
    url="https://www.tuwienracing.at/"
    dates="03/2022 - 10/2023"
    location="Vienna, Austria"
  >
    <li>I led the embedded software development of the racecar's electronic control unit and helped the team secure a top 25 place among over 200 competing teams.</li>
  </Workplace>
  <Workplace
    title="Civil Service - Children's Care"
    company="Therapeutische Gemeinschaften"
    url=""
    dates="10/2016 - 06/2017"
    location="Vienna, Austria"
  >
    <li>Worked with children from households with various difficulties to bring their families back together.</li>
  </Workplace>
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Skills</h2>
  <ul>
    <li>
      <b>Programming</b> <br /> Python (PyTorch, Pandas, NumPy), C, C++, Java, MATLAB/Simulink,
      OpenCV, ROS, SQL
    </li>
    <li>
      <b>Systems</b> <br /> Linux, STM32, LaTeX, Docker, Git, CI/CD, Agile
    </li>
    <li>
      <b>Languages</b> <br /> <b>German</b>: C2, <b>English</b>: C2,
      <b>French</b>: B2
    </li>
  </ul>
</section>
