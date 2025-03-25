<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  export let darkMode = false;

  let container;
  let canvas;
  let ctx;
  let animationId;
  let circles = [];
  const CIRCLE_COUNT = 20; // Slightly fewer circles for better performance

  class Circle {
    constructor(canvas, ctx, darkMode) {
      this.canvas = canvas;
      this.ctx = ctx;
      this.darkMode = darkMode;
      this.reset();
    }

    reset() {
      // Random properties - increased sizes
      this.radius = 120 + Math.random() * 220; // Even larger circles for slow movement
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
      
      // MUCH slower speed - around 1Hz or less
      this.speed = 0.01 + Math.random() * 0.03; // Very slow movement
      this.angle = Math.random() * Math.PI * 2;
      this.dx = Math.cos(this.angle) * this.speed;
      this.dy = Math.sin(this.angle) * this.speed;
      this.alpha = 0.15 + Math.random() * 0.35; // Slightly lower opacity for subtlety
      
      // More vibrant colors based on mode
      if (this.darkMode) {
        const hue = 210 + Math.random() * 70; // Blue-purple range
        this.color = `hsla(${hue}, 75%, 65%, ${this.alpha})`;
      } else {
        const hue = 160 + Math.random() * 80; // Teal-blue range
        this.color = `hsla(${hue}, 65%, 65%, ${this.alpha})`;
      }
    }

    update() {
      // Move very slowly
      this.x += this.dx;
      this.y += this.dy;
      
      // Check boundaries and reset if needed
      if (this.x < -this.radius || 
          this.x > this.canvas.width + this.radius || 
          this.y < -this.radius || 
          this.y > this.canvas.height + this.radius) {
        this.reset();
      }
    }

    draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    }
  }

  function initCanvas() {
    if (!container) return false;
    
    // Create canvas
    canvas = document.createElement('canvas');
    
    // Set dimensions
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width || 500;
    canvas.height = rect.height || 500;
    
    // Style canvas
    canvas.style.position = 'absolute';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.filter = 'blur(50px)'; // Increased blur for softer effect
    
    // Get context
    ctx = canvas.getContext('2d');
    
    // Clear and append
    container.innerHTML = '';
    container.appendChild(canvas);
    
    console.log(`Canvas created: ${canvas.width}x${canvas.height}`);
    return true;
  }

  function initCircles() {
    circles = [];
    for (let i = 0; i < CIRCLE_COUNT; i++) {
      circles.push(new Circle(canvas, ctx, darkMode));
    }
  }

  function draw() {
    if (!ctx || !canvas) {
      animationId = requestAnimationFrame(draw);
      return;
    }
    
    // Clear with higher opacity for less visible trail effect (slower movement)
    ctx.fillStyle = darkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw circles
    for (const circle of circles) {
      circle.update();
      circle.draw();
    }
    
    // Optional: For extremely slow animation, we could throttle frames
    // but using requestAnimationFrame with slow motion values is more efficient
    animationId = requestAnimationFrame(draw);
  }

  function resize() {
    if (!canvas || !container) return;
    
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width || window.innerWidth;
    canvas.height = rect.height || window.innerHeight;
    
    console.log(`Canvas resized: ${canvas.width}x${canvas.height}`);
    
    // Reinitialize circles for new dimensions
    initCircles();
  }

  onMount(() => {
    if (!browser) return;
    
    console.log("SimpleBackground mounting");
    
    // Use timeout to ensure DOM is ready
    setTimeout(() => {
      if (initCanvas()) {
        // Draw initial background
        ctx.fillStyle = darkMode ? '#121212' : '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        initCircles();
        draw();
        
        // Add resize listener
        window.addEventListener('resize', resize);
      }
    }, 100);
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('resize', resize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    }
  });

  // Update when dark mode changes
  $: if (browser && ctx && darkMode !== undefined) {
    console.log('Dark mode updated:', darkMode);
    initCircles();
  }
</script>

<div 
  bind:this={container} 
  class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
  style="min-height: 400px;"
>
  <!-- Canvas will be inserted here -->
</div> 