<template>
  <div class="page-solution">
    <!-- Section 1: Hero Banner -->
    <section class="solution-hero" style="background-image: url('/_nuxt/assets/images/solution/hero.png');">
      <div class="solution-hero__content" style="padding-left: 5%; width: 100%;">
        <HeroTitle title="XITU Solution" />
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
          The Skywalker features a highly biomimetic torso configuration,flexible arm motion control, and an intelligent motion chassis. Combined with an embodied intelligence large language model, it achieves high-precision, high-efficiency, and highly generalizablemotion control.
        </p>
      </div>
    </section>

    <!-- Section 4: Product Grid -->
    <section class="solution-products">
      <div class="container">
        <div class="products-grid">
          
          <!-- Column 1 -->
          <div class="product-column">
            <!-- Top Product -->
            <div class="product-item">
              <div class="product-image-box">
                <img src="~/assets/images/solution/robot-1.png" alt="Gen 1-L" class="product-item__image" />
              </div>
              <div class="product-item__label">Gen 1-L</div>
              <ul class="product-item__list">
                <li>Complete overall robotic skeleton</li>
                <li>Equipped with essential sensors and actuators</li>
                <li>Capable of basic functions including standing, squatting, and walking</li>
                <li>Basic object recognition implemented</li>
                <li>Simple object handling enabled</li>
                <li>Integrated with LLM for basic human-robot interaction</li>
                <li>Launch Date: 2024</li>
              </ul>
            </div>
            
            <div class="column-connector"></div>
            
            <!-- Bottom Product -->
            <div class="product-item">
              <img src="~/assets/images/solution/robot-4.png" alt="Gen 1-L App" class="product-item__image-bottom" />
              <p class="product-item__desc">
                Full size humanoid robot, designed for heavy duty use cases, featuring a highly biomimetic torso structure and motion control, and is capable of functions, e.g., slow/fast-speed walking, obstacle avoidance, and uphill and downhill etc.
              </p>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="product-column">
            <!-- Top Product -->
            <div class="product-item">
              <div class="product-image-box">
                <img src="~/assets/images/solution/robot-2.png" alt="Gen 1-W" class="product-item__image" />
              </div>
              <div class="product-item__label">Gen 1-W</div>
              <ul class="product-item__list">
                <li>Humanoid skeletal and exterior design</li>
                <li>Two categories: wheeled and legged</li>
                <li>Advanced AI control system</li>
                <li>Safety level: compliant with safety regulations in Europe and North America</li>
                <li>In-house development of key components (joints, controllers, and sensors)</li>
                <li>Integration of linear and rotary joints</li>
                <li>Embodied skills: capable of performing repetitive tasks in application scenarios</li>
                <li>Deployment of a multi-robot fleet management platform, supporting OTA</li>
                <li>Launch Date: 2025</li>
              </ul>
            </div>
            
            <div class="column-connector"></div>
            
            <!-- Bottom Product -->
            <div class="product-item">
              <img src="~/assets/images/solution/robot-5.png" alt="Gen 1-W App" class="product-item__image-bottom" />
              <p class="product-item__desc">
                Gen 1-W robot features a highly biomimetic torso structure and armmotion control. Equipped with a differential wheel chassis, it offersfunctionalities such as fast/slow walking and motion-based obstacleavoidance.
              </p>
            </div>
          </div>

          <!-- Column 3 -->
          <div class="product-column">
            <!-- Top Product -->
            <div class="product-item">
              <div class="product-image-box">
                <img src="~/assets/images/solution/robot-3.png" alt="Gen 2-W" class="product-item__image" />
              </div>
              <div class="product-item__label">Gen 2-W</div>
              <ul class="product-item__list">
                <li>Introduction of world models and lifelong learning to enhanceembodied intelligence and generalization capabilities</li>
                <li>Comprehensive implementation of redundancy designmechanisms based on safety redundancy objectives</li>
                <li>Achievement of cross-robot communication, enabling transparenttransmission of perception data across robots, multi-robot task collaboration,and autonomous organization of robot swarm tasks</li>
                <li>Launch Date: 2026</li>
              </ul>
            </div>
            
            <div class="column-connector"></div>
            
            <!-- Bottom Product -->
            <div class="product-item">
              <img src="~/assets/images/solution/robot-6.png" alt="Gen 2-W App" class="product-item__image-bottom" />
              <p class="product-item__desc">
                Gen 2-W robotic chassis employs a three-steering-wheel drive system, enabling forward and backward movement, lateral translation, diagonal motion, pivot turn, and Ackermann steering mode, achieving 360-degree omnidirectional mobility.
              </p>
            </div>
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
