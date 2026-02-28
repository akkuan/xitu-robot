<template>
  <div class="page-company">
    <!-- Section 1: Hero Image -->
    <section class="company-hero">
      <div class="container">
        <img 
          src="~/assets/images/company/hero.png" 
          alt="Company Building" 
          class="company-hero__image"
        />
      </div>
    </section>

    <!-- Section 2: About Text -->
    <section class="company-about">
      <div class="container">
        <h1 class="company-about__title">XITU<span class="dot">.</span></h1>
        <p class="company-about__desc">
          Xitu Zhijing Technology (Shanghai) Co., Ltd. was established on July 25, 2023. Focusing on the application of embodied intelligence products, the company integrates large-scale AI models and robotic hardware, acting as both a robot manufacturer and a system solution provider. Initially, the company's products target the AMR (Autonomous Mobile Robot) market, while also laying the groundwork for the humanoid robot sector,serving leading clients in the warehousing and logistics industry.
        </p>
      </div>
    </section>

    <!-- Section 3: Image Gallery -->
    <section class="company-gallery">
      <div class="container">
        <div class="company-gallery__grid">
          <img src="~/assets/images/company/robot-1.png" alt="R&D Lab" class="gallery-image" />
          <img src="~/assets/images/company/robot-2.png" alt="Robot Close-up" class="gallery-image" />
          <img src="~/assets/images/company/robot-3.png" alt="Team Collaboration" class="gallery-image" />
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
              <img src="~/assets/images/company/icon-1.png" alt="Philosophy Icon" />
            </div>
            <div class="philosophy-content">
              <h3>Company Philosophy</h3>
              <p>
                Our company's journey will be a long one. To make a meaningful impact on the mass market, we need a championship team dedicated to our mission, significant engineering innovation, and substantial investment. We face many uncertainties.<br><br>
                However, if we succeed, we have the potential to make a profound positive impact on humanity and change the world.
              </p>
            </div>
          </div>

          <!-- Right: Opportunity -->
          <div class="opportunity-item">
            <h3>Market Opportunity</h3>
            <p>
              Since the outbreak of COVID-19, global demand for robots has surged:<br>
              • Labor shortages, especially for physically demanding jobs such as warehouse workers<br>
              • Sharp rise in labor costs<br>
              • Increased workplace safety requirements
            </p>
            <p class="highlight-text">
              As a major manufacturing hub, China has a relatively mature supply chain for the robotics industry. Effectively leveraging the global mature supply chain for robotics production and expanding productsales in international markets will be crucial to future business success!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Values & Mission -->
    <section class="company-values">
      <div class="container">
        <div class="values-grid">
          <!-- Col 1: Master Plan -->
          <div class="value-item">
            <h3>Master Plan</h3>
            <p>
              Market and Customer Demand Driven,Emphasizing System and Software Technical Advantages.
            </p>
          </div>

          <!-- Col 2: Our Vision -->
          <div class="value-item">
            <h3>Our Vision</h3>
            <p>
              We are committed to success and have the opportunity to make a positive impact on humanity, improve lives, and change the world. To become an internationally leading intelligent robotics solution provider.
            </p>
          </div>

          <!-- Col 3: Our Mission -->
          <div class="value-item">
            <h3>Our Mission</h3>
            <p>
              Deeply understand robotics deployment scenarios, work backwards fromthe end goal, and customize automation solutions for customers.<br><br>
              Provide internationally leading products and technologies, delivering excellent products and services tailored to customer needs.
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
