<template>
  <div class="page-solution">
    <!-- Section 1: Hero Banner -->
    <section class="solution-hero">
      <div class="container">
        <div class="solution-hero__content">
          <h1 class="solution-hero__title">XITU Solution.</h1>
          <p class="solution-hero__desc">
            Empowering industries with next-generation robotic solutions.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 2: Video Placeholder 1 (Red text) -->
    <section class="solution-video">
      <div class="container">
        <div class="video-placeholder">
          <p>
            Placeholder Video<br>
            (Factory Collaboration, Logistics) Unmanned / Symbiotic
          </p>
        </div>
      </div>
    </section>

    <!-- Section 3: Intro Text -->
    <section class="solution-intro">
      <div class="container">
        <p class="solution-intro__text">
          The Skywalker features a highly biomimetic torso configuration, flexible arm motion control, and an intelligent motion chassis. Combined with an embodied intelligence large language model, it achieves high-precision, high-efficiency, and highly generalizable motion control.
        </p>
      </div>
    </section>

    <!-- Section 4: Product Grid (Top Row - Gen 1, Gen 1-W, Gen 2-W) -->
    <section class="solution-products">
      <div class="container">
        <!-- Row 1: Front View & Specs -->
        <div class="products-grid">
          <!-- Product 1: Gen 1 -->
          <div class="product-item">
            <img 
              src="https://placehold.co/300x400/eee/333?text=Gen+1+Front" 
              alt="Gen 1" 
              class="product-item__image"
            />
            <span class="product-item__label">Gen 1-</span>
            <p class="product-item__desc">
              Standard humanoid configuration designed for general-purpose tasks. Features advanced balance control and object manipulation capabilities.
            </p>
          </div>

          <!-- Product 2: Gen 1-W -->
          <div class="product-item">
            <img 
              src="https://placehold.co/300x400/eee/333?text=Gen+1-W+Front" 
              alt="Gen 1-W" 
              class="product-item__image"
            />
            <span class="product-item__label">Gen 1-W</span>
            <p class="product-item__desc">
              Wheeled variant for high-speed mobility in structured environments. Ideal for logistics and rapid transport scenarios.
            </p>
          </div>

          <!-- Product 3: Gen 2-W -->
          <div class="product-item">
            <img 
              src="https://placehold.co/300x400/eee/333?text=Gen+2-W+Front" 
              alt="Gen 2-W" 
              class="product-item__image"
            />
            <span class="product-item__label">Gen 2-W</span>
            <p class="product-item__desc">
              Next-generation wheeled platform with enhanced payload capacity and autonomous navigation systems.
            </p>
          </div>
        </div>

        <!-- Row 2: Perspective View & More Details -->
        <div class="products-grid">
          <!-- Product 1: Gen 1 (Perspective) -->
          <div class="product-item">
            <img 
              src="https://placehold.co/300x400/eee/333?text=Gen+1+Perspective" 
              alt="Gen 1 Perspective" 
              class="product-item__image"
            />
            <p class="product-item__desc">
              Equipped with dual-arm manipulation system for complex assembly tasks. Supports collaborative operation with human workers.
            </p>
          </div>

          <!-- Product 2: Gen 1-W (Perspective) -->
          <div class="product-item">
            <img 
              src="https://placehold.co/300x400/eee/333?text=Gen+1-W+Perspective" 
              alt="Gen 1-W Perspective" 
              class="product-item__image"
            />
            <p class="product-item__desc">
              Omnidirectional movement capability allows for precise positioning in tight spaces. Integrated with warehouse management systems.
            </p>
          </div>

          <!-- Product 3: Gen 2-W (Perspective) -->
          <div class="product-item">
            <img 
              src="https://placehold.co/300x400/eee/333?text=Gen+2-W+Perspective" 
              alt="Gen 2-W Perspective" 
              class="product-item__image"
            />
            <p class="product-item__desc">
              Advanced sensor suite including LiDAR and depth cameras for full 3D mapping and obstacle avoidance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Video Placeholder 2 (AMR Collaboration) -->
    <section class="solution-video">
      <div class="container">
        <div class="video-placeholder">
          <p>
            Placeholder Video<br>
            (AMR Collaboration Transport)
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'XITU | Solution',
  meta: [
    { name: 'description', content: 'XITU Solution - Advanced robotic solutions for industrial automation and logistics.' }
  ]
})
</script>

<style lang="scss" scoped>
/* Page specific styles are in assets/scss/solution.scss */
</style>
