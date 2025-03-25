<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  // Accept dark mode as prop
  export let darkMode = false;

  // DOM references
  let container;
  let canvas;
  let ctx;
  let animationId;
  let mounted = false;

  // Animation parameters - simplified for reliability
  const CIRCLE_COUNT = 30; // Fewer circles for better performance
  const circles = [];
  
  class Circle {
    constructor(x, y, radius, dx, dy, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.dx = dx;
      this.dy = dy;
      this.color = color;
      this.alpha = 0;
      this.alphaSpeed = 0.005 + Math.random() * 0.005;
      this.maxAlpha = 0.2 + Math.random() * 0.3; // Random max opacity
    }
    
    update() {
      // Update position
      this.x += this.dx;
      this.y += this.dy;
      
      // Fade in initially
      if (this.alpha < this.maxAlpha) {
        this.alpha += this.alphaSpeed;
      }
      
      // Check bounds and reset if needed
      if (this.x < -this.radius || this.x > canvas.width + this.radius ||
          this.y < -this.radius || this.y > canvas.height + this.radius) {
        this.reset();
      }
    }
    
    reset() {
      // Randomly position at an edge
      const side = Math.floor(Math.random() * 4);
      if (side === 0) { // Top
        this.x = Math.random() * canvas.width;
        this.y = -this.radius;
        this.dy = Math.abs(this.dy);
        this.dx = (Math.random() - 0.5) * 2;
      } else if (side === 1) { // Right
        this.x = canvas.width + this.radius;
        this.y = Math.random() * canvas.height;
        this.dx = -Math.abs(this.dx);
        this.dy = (Math.random() - 0.5) * 2;
      } else if (side === 2) { // Bottom
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + this.radius;
        this.dy = -Math.abs(this.dy);
        this.dx = (Math.random() - 0.5) * 2;
      } else { // Left
        this.x = -this.radius;
        this.y = Math.random() * canvas.height;
        this.dx = Math.abs(this.dx);
        this.dy = (Math.random() - 0.5) * 2;
      }
      
      // Reset alpha for new circles
      this.alpha = 0;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color.replace('ALPHA', this.alpha);
      ctx.fill();
      ctx.closePath();
    }
  }
  
  function initializeCircles() {
    circles.length = 0; // Clear existing circles
    
    const colors = darkMode ? 
      ['rgba(66, 153, 225, ALPHA)', 'rgba(90, 103, 216, ALPHA)', 'rgba(124, 58, 237, ALPHA)'] : 
      ['rgba(59, 130, 246, ALPHA)', 'rgba(139, 92, 246, ALPHA)', 'rgba(236, 72, 153, ALPHA)'];
      
    for (let i = 0; i < CIRCLE_COUNT; i++) {
      const radius = 100 + Math.random() * 200; // Larger, more visible circles
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speed = 0.2 + Math.random() * 0.8;
      const angle = Math.random() * Math.PI * 2;
      const dx = Math.cos(angle) * speed;
      const dy = Math.sin(angle) * speed;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      circles.push(new Circle(x, y, radius, dx, dy, color));
    }
  }

  function animate() {
    if (!mounted || !ctx) {
      animationId = requestAnimationFrame(animate);
      return;
    }
    
    // Clear canvas with slight trail effect
    ctx.fillStyle = darkMode ? 'rgba(17, 24, 39, 0.9)' : 'rgba(255, 255, 255, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw circles
    for (const circle of circles) {
      circle.update();
      circle.draw();
    }
    
    // Add overlay gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    if (darkMode) {
      gradient.addColorStop(0, 'rgba(17, 24, 39, 0.5)');
      gradient.addColorStop(1, 'rgba(17, 24, 39, 0.8)');
    } else {
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.5)');
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Apply blur using CSS instead of context filter (more reliable)
    canvas.style.filter = 'blur(40px)';
    
    animationId = requestAnimationFrame(animate);
  }

  function setupCanvas() {
    if (!container) return false;
    
    // Create canvas
    canvas = document.createElement('canvas');
    canvas.className = 'absolute inset-0 w-full h-full';
    
    // Apply styles directly for visibility debugging
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    
    // Clear container and add canvas
    container.innerHTML = '';
    container.appendChild(canvas);
    
    // Get context
    ctx = canvas.getContext('2d');
    
    // Set initial size
    resizeCanvas();
    
    return true;
  }

  function resizeCanvas() {
    if (!canvas || !ctx) return;
    
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width || window.innerWidth;
    canvas.height = rect.height || window.innerHeight;
    
    // Reinitialize circles to fit new size
    initializeCircles();
    
    // Debug log
    console.log(`Canvas resized: ${canvas.width}×${canvas.height}`);
  }

  onMount(() => {
    if (!browser) return;
    
    console.log('ShiftBackground mounted');
    mounted = true;
    
    // Setup with a small delay to ensure DOM is ready
    setTimeout(() => {
      if (setupCanvas()) {
        initializeCircles();
        animate();
        
        // Add resize handler
        window.addEventListener('resize', resizeCanvas);
      } else {
        console.error('Failed to setup canvas');
      }
    }, 100);
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      mounted = false;
    }
  });

  // Update when dark mode changes
  $: if (browser && mounted && ctx && canvas) {
    console.log('Dark mode changed:', darkMode);
    initializeCircles();
  }
</script>

<div 
  bind:this={container} 
  class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" 
  style="min-height: 400px;"
>
  <!-- Canvas will be inserted here -->
  <div class="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-0">
    <div class="bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded">
      Animation Debug: {darkMode ? 'Dark' : 'Light'} Mode
    </div>
  </div>
</div> 