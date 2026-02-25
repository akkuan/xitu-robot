<template>
  <div class="page-intelligence">
    <!-- Section 1: Hero Banner (Dark Background) -->
    <section class="intelligence-hero">
      <div class="container">
        <div class="intelligence-hero__content">
          <!-- Left: Text -->
          <div class="intelligence-hero__text">
            <h1 class="intelligence-hero__title">
              XITU Intelligence<span style="color: #00dbbd;">.</span>
            </h1>
            <p class="intelligence-hero__desc">
              The Skyeye, our AI system, is a generalist humanoid Vision-Language-Action model that learns and improves over time as it acquires new skills.
            </p>
          </div>
          
          <!-- Right: Visual (X Graphic) -->
          <div class="intelligence-hero__visual">
            <img 
              src="https://placehold.co/600x600/111/fff?text=X+Graphic" 
              alt="XITU Intelligence Visual" 
              class="hero-graphic"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Process Flow (Single Image Placeholder) -->
    <section class="intelligence-flow">
      <div class="container">
        <div class="intelligence-flow__wrapper">
          <img 
            src="https://placehold.co/1200x600/fff/333?text=Process+Flow+Diagram" 
            alt="Intelligence Process Flow" 
            class="intelligence-flow__image"
          />
        </div>
      </div>
    </section>

    <!-- Section 3: Core Capabilities (4 Grid Items) -->
    <section class="intelligence-features">
      <div class="container">
        <div class="intelligence-features__grid">
          <!-- Feature 1 -->
          <div class="feature-item">
            <div class="feature-item__icon">
              <img src="https://placehold.co/100x100/fff/00dbbd?text=Icon+1" alt="Icon" />
            </div>
            <h3 class="feature-item__title">Vision-Language Models</h3>
            <p class="feature-item__desc">
              Advanced multi-modal understanding for complex environments.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="feature-item">
            <div class="feature-item__icon">
              <img src="https://placehold.co/100x100/fff/00dbbd?text=Icon+2" alt="Icon" />
            </div>
            <h3 class="feature-item__title">Voice Interaction</h3>
            <p class="feature-item__desc">
              Natural language processing for seamless human-robot communication.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="feature-item">
            <div class="feature-item__icon">
              <img src="https://placehold.co/100x100/fff/00dbbd?text=Icon+3" alt="Icon" />
            </div>
            <h3 class="feature-item__title">Lidar-based perception</h3>
            <p class="feature-item__desc">
              High-precision spatial awareness and mapping capabilities.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="feature-item">
            <div class="feature-item__icon">
              <img src="https://placehold.co/100x100/fff/00dbbd?text=Icon+4" alt="Icon" />
            </div>
            <h3 class="feature-item__title">Autonomous obstacle avoidance</h3>
            <p class="feature-item__desc">
              Real-time path planning and safety navigation systems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Image Gallery Strip -->
    <section class="intelligence-gallery">
      <!-- Image 1 -->
      <div class="gallery-item">
        <img src="https://placehold.co/400x300/222/fff?text=Lab+Scene+1" alt="Lab Scene 1" />
      </div>
      <!-- Image 2 -->
      <div class="gallery-item">
        <img src="https://placehold.co/400x300/333/fff?text=Robot+Arm+2" alt="Robot Arm 2" />
      </div>
      <!-- Image 3 -->
      <div class="gallery-item">
        <img src="https://placehold.co/400x300/444/fff?text=Factory+3" alt="Factory 3" />
      </div>
      <!-- Image 4 -->
      <div class="gallery-item">
        <img src="https://placehold.co/400x300/555/fff?text=Interaction+4" alt="Interaction 4" />
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'XITU | Intelligence',
  meta: [
    { name: 'description', content: 'XITU Intelligence - Vision-Language-Action model for generalist humanoid robots.' }
  ]
})
</script>

<style lang="scss" scoped>
// Page-specific overrides if necessary
// Most styles are in assets/scss/intelligence.scss
</style>
