<template>
  <div class="page-intelligence">
    <!-- Section 1: Hero Banner (Full Screen) -->
    <section class="intelligence-hero" style="background-image: url('/_nuxt/assets/images/intelligence/01.png');">
      <div class="intelligence-hero__content" style="padding-left: 5%; width: 100%;">
        <HeroTitle title="XITU Intelligence" />
      </div>
      
      <!-- Description Section (Now part of hero to stick to bottom) -->
      <div class="intelligence-desc">
        <p class="hero-desc">
          The Skyeye, our AI system, is a generalist humanoid Vision-Language-Action model that learns and improves over time as it acquires new skills.
        </p>
      </div>
    </section>

    <!-- Section 2: Process Flow (Single Image Placeholder) -->
    <section class="intelligence-flow">
      <div class="container">
        <div class="intelligence-flow__wrapper">
          <img 
            src="~/assets/images/intelligence/process.png" 
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
              <img src="~/assets/images/intelligence/icon-1.png" alt="Icon 1" />
            </div>
            <h3 class="feature-item__title">Vision-Language Models</h3>
            <p class="feature-item__desc">
              We’re incorporating the ability for Skywalker to perceive the visual scenes around them, improving awareness of their surroundings.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="feature-item">
            <div class="feature-item__icon">
              <img src="~/assets/images/intelligence/icon-2.png" alt="Icon 2" />
            </div>
            <h3 class="feature-item__title">Voice Interaction</h3>
            <p class="feature-item__desc">
              Speak commands naturally, and Skywalker will understand, provide helpful information, and execute tasks.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="feature-item">
            <div class="feature-item__icon">
              <img src="~/assets/images/intelligence/icon-3.png" alt="Icon 3" />
            </div>
            <h3 class="feature-item__title">Lidar-based world perception</h3>
            <p class="feature-item__desc">
              Skywalker uses lidar technology to map its surroundings in real-time.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="feature-item">
            <div class="feature-item__icon">
              <img src="~/assets/images/intelligence/icon-4.png" alt="Icon 4" />
            </div>
            <h3 class="feature-item__title">Autonomous obstacle avoidance</h3>
            <p class="feature-item__desc">
              Skywalker autonomously avoids obstacles, ensuring smooth navigation in dynamic environments.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Image Gallery Strip -->
    <section class="intelligence-gallery">
      <!-- Image 1 -->
      <div class="gallery-item">
        <img src="~/assets/images/intelligence/robot-1.png" alt="Robot 1" />
      </div>
      <!-- Image 2 -->
      <div class="gallery-item">
        <img src="~/assets/images/intelligence/robot-2.png" alt="Robot 2" />
      </div>
      <!-- Image 3 -->
      <div class="gallery-item">
        <img src="~/assets/images/intelligence/robot-3.png" alt="Robot 3" />
      </div>
      <!-- Image 4 -->
      <div class="gallery-item">
        <img src="~/assets/images/intelligence/robot-4.png" alt="Robot 4" />
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
