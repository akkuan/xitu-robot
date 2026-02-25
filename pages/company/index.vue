<template>
  <div class="page-company">
    <!-- Section 1: Hero Image -->
    <section class="company-hero">
      <img 
        src="https://placehold.co/1920x1080/222/fff?text=Company+Building+Exterior" 
        alt="Company Building" 
      />
    </section>

    <!-- Section 2: About Text -->
    <section class="company-about">
      <div class="container">
        <h1 class="company-about__title">XITU<span>.</span></h1>
        <p class="company-about__desc">
          Xitu ZhiYing Technology (Shanghai) Co., Ltd. was established on July 25, 2023. 
          Focusing on the application of embodied intelligence products, the company integrates large-scale AI models and robotic hardware, 
          acting as both a robot manufacturer and a system solution provider. 
          Initially, the company's products target the AMR (Autonomous Mobile Robot) market, 
          while also laying the groundwork for the humanoid robot sector, 
          serving leading clients in the warehousing and logistics industry.
        </p>
      </div>
    </section>

    <!-- Section 3: Image Gallery -->
    <section class="company-gallery">
      <div class="container">
        <div class="company-gallery__grid">
          <img src="https://placehold.co/400x300/eee/333?text=R%26D+Lab" alt="R&D Lab" class="gallery-image" />
          <img src="https://placehold.co/400x300/ddd/333?text=Robot+Close-up" alt="Robot Close-up" class="gallery-image" />
          <img src="https://placehold.co/400x300/ccc/333?text=Team+Collaboration" alt="Team Collaboration" class="gallery-image" />
        </div>
      </div>
    </section>

    <!-- Section 4: Philosophy & Opportunity -->
    <section class="company-philosophy">
      <div class="container">
        <div class="philosophy-grid">
          <!-- Left: Philosophy -->
          <div class="philosophy-item">
            <div class="philosophy-icon">
              <img src="https://placehold.co/100x100/00dbbd/fff?text=Icon" alt="Philosophy Icon" />
            </div>
            <div class="philosophy-content">
              <h3>Company Philosophy</h3>
              <p>
                To empower the physical world with digital intelligence, creating a future where humans and robots coexist in harmony. We believe in continuous innovation and the relentless pursuit of excellence.
              </p>
            </div>
          </div>

          <!-- Right: Opportunity -->
          <div class="opportunity-item">
            <h3>Market Opportunity</h3>
            <ul>
              <li>Rapid growth in the global robotics market driven by automation needs.</li>
              <li>Increasing demand for intelligent logistics solutions in warehousing.</li>
              <li>Advancements in AI enabling more capable and adaptable robots.</li>
            </ul>
            <p class="highlight-text">
              We are positioned at the forefront of this revolution, ready to define the next generation of intelligent robotics.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Values & Mission -->
    <section class="company-values">
      <div class="container">
        <div class="values-grid">
          <!-- Col 1: Who We Are -->
          <div class="value-item">
            <h3>Who We Are</h3>
            <p>
              A team of passionate engineers, researchers, and visionaries dedicated to pushing the boundaries of robotics and AI. We come from diverse backgrounds but share a common goal: to build robots that truly understand and interact with the world.
            </p>
          </div>

          <!-- Col 2: Our Value -->
          <div class="value-item">
            <h3>Our Value</h3>
            <p>
              <strong>Innovation:</strong> We constantly explore new technologies and methodologies.<br>
              <strong>Integrity:</strong> We conduct our business with honesty and transparency.<br>
              <strong>Collaboration:</strong> We believe in the power of teamwork and open communication.
            </p>
          </div>

          <!-- Col 3: Our Mission -->
          <div class="value-item">
            <h3>Our Mission</h3>
            <p>
              To provide intelligent, reliable, and accessible robotic solutions that enhance human productivity and quality of life. We aim to be the global leader in embodied intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'XITU | Company',
  meta: [
    { name: 'description', content: 'About XITU - A leader in embodied intelligence and robotic solutions.' }
  ]
})
</script>

<style lang="scss" scoped>
/* Page specific styles are in assets/scss/company.scss */
</style>
