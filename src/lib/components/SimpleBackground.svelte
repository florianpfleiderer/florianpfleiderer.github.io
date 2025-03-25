<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  export let darkMode = false;

  let container;
  let canvas;
  let ctx;
  let animationId;
  let circles = [];
  let frameCount = 0;
  
  // Extremely slow but more dynamic animation settings
  const FRAME_SKIP = 1; // Update every frame for smoothness
  const CIRCLE_COUNT = 12; // More circles for dynamic effect
  const UPDATE_DELAY = 50; // Same delay as before
  const GLOBAL_TIME = { value: 0 }; // Shared time value for synchronized effects

  class Circle {
    constructor(canvas, ctx, darkMode, globalTime) {
      this.canvas = canvas;
      this.ctx = ctx;
      this.darkMode = darkMode;
      this.globalTime = globalTime;
      this.type = Math.floor(Math.random() * 3); // 0 = standard, 1 = pulsing, 2 = orbital
      this.reset();
    }

    reset() {
      // Various sizes for more dynamic appearance
      this.baseRadius = 150 + Math.random() * 350;
      this.radius = this.baseRadius;
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
      
      // ULTRA-slow speed - 100x slower than previous (1 million times slower than original)
      this.speed = (0.00025 + Math.random() * 0.00075) / 1000000;
      this.angle = Math.random() * Math.PI * 2;
      
      // Different movement patterns
      if (this.type === 2) { // Orbital pattern
        this.orbitRadius = 0.0002 + Math.random() * 0.0004; // Extremely slow orbit
        this.orbitSpeed = (Math.random() > 0.5 ? 1 : -1) * (0.00001 + Math.random() * 0.00002);
        this.orbitCenterX = this.x;
        this.orbitCenterY = this.y;
        this.orbitAngle = Math.random() * Math.PI * 2;
      } else { // Linear pattern
        this.dx = Math.cos(this.angle) * this.speed;
        this.dy = Math.sin(this.angle) * this.speed;
      }
      
      // Pulsing parameters (for type 1)
      this.pulseSpeed = 0.00005 + Math.random() * 0.00008; // Very slow pulse
      this.pulseAmount = 0.02 + Math.random() * 0.05; // Subtle 2-5% pulse
      this.pulseOffset = Math.random() * Math.PI * 2; // Random phase
      
      // Alpha changes
      this.baseAlpha = 0.07 + Math.random() * 0.18;
      this.alpha = this.baseAlpha;
      
      // More diverse colors for visual interest
      if (this.darkMode) {
        // Wider color range for dark mode
        const colorType = Math.floor(Math.random() * 3);
        if (colorType === 0) { // Blues
          this.hue = 200 + Math.random() * 60;
        } else if (colorType === 1) { // Purples
          this.hue = 260 + Math.random() * 50;
        } else { // Teals
          this.hue = 170 + Math.random() * 40;
        }
        
        this.saturation = 55 + Math.random() * 25;
        this.lightness = 55 + Math.random() * 20;
      } else {
        // Wider color range for light mode
        const colorType = Math.floor(Math.random() * 3);
        if (colorType === 0) { // Teals
          this.hue = 160 + Math.random() * 40;
        } else if (colorType === 1) { // Blues
          this.hue = 190 + Math.random() * 40;
        } else { // Soft purples
          this.hue = 260 + Math.random() * 40;
        }
        
        this.saturation = 45 + Math.random() * 25;
        this.lightness = 60 + Math.random() * 15;
      }
      
      this.updateColor();
    }

    updateColor() {
      this.color = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha})`;
    }

    update() {
      // Update position based on movement type
      if (this.type === 2) { // Orbital
        this.orbitAngle += this.orbitSpeed;
        this.x = this.orbitCenterX + Math.cos(this.orbitAngle) * this.orbitRadius * this.canvas.width;
        this.y = this.orbitCenterY + Math.sin(this.orbitAngle) * this.orbitRadius * this.canvas.height;
      } else { // Linear
        this.x += this.dx;
        this.y += this.dy;
      }
      
      // Dynamic effects based on type
      if (this.type === 1) { // Pulsing
        // Extremely subtle radius pulsing
        const pulseFactor = Math.sin((this.globalTime.value * this.pulseSpeed) + this.pulseOffset);
        this.radius = this.baseRadius * (1 + (pulseFactor * this.pulseAmount));
        
        // Subtle alpha pulsing, opposite phase to radius
        this.alpha = this.baseAlpha * (1 - (pulseFactor * this.pulseAmount * 0.5));
        this.updateColor();
      }
      
      // Reset if out of bounds
      const maxBound = Math.max(this.canvas.width, this.canvas.height);
      if (this.x < -maxBound || 
          this.x > this.canvas.width + maxBound || 
          this.y < -maxBound || 
          this.y > this.canvas.height + maxBound) {
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
    canvas.style.filter = 'blur(90px)'; // Even more blur for dreamier effect
    
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
    // Reset global time
    GLOBAL_TIME.value = 0;
    
    for (let i = 0; i < CIRCLE_COUNT; i++) {
      circles.push(new Circle(canvas, ctx, darkMode, GLOBAL_TIME));
    }
  }

  function draw() {
    if (!ctx || !canvas) {
      animationId = setTimeout(() => requestAnimationFrame(draw), UPDATE_DELAY);
      return;
    }
    
    frameCount++;
    GLOBAL_TIME.value += 0.01; // Very slow time progression
    
    // Almost completely opaque background - even more opaque for ultra-slow movement
    ctx.fillStyle = darkMode ? 'rgba(17, 24, 39, 0.998)' : 'rgba(255, 255, 255, 0.998)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw circles
    for (const circle of circles) {
      circle.update();
      circle.draw();
    }
    
    // Use setTimeout for controlled frame rate
    animationId = setTimeout(() => {
      requestAnimationFrame(draw);
    }, UPDATE_DELAY); 
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
    
    console.log("SimpleBackground mounting - ultra-slow but dynamic animation");
    
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
        clearTimeout(animationId);
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