<template>
  <div class="page-careers">
    <!-- Section 1: Hero Image (Team Photo) -->
    <section class="careers-hero">
      <img 
        src="~/assets/images/careers/hero.png" 
        alt="XITU Team" 
      />
      <!-- Decorative Square -->
      <div class="decorative-square"></div>
    </section>

    <!-- Section 2: Intro & Jobs List -->
    <section class="careers-intro">
      <div class="container">
        <div class="careers-intro__content">
          <!-- Left: Text (Top Left) -->
          <div class="careers-intro__text">
            <p class="careers-intro__desc">
              ROLES<br>
              We warmly welcome talented individuals <br>
              who want to change our modern lives <br>
              through robotics and create value with us.
            </p>
          </div>

          <!-- Right: Job List & Extra Desc (Bottom Right) -->
          <div class="careers-jobs">
            <ul class="jobs-list">
              <li class="job-item">
                <h3 class="job-title">Perception Algorithm Engineer (Grasping) 2</h3>
              </li>
              <li class="job-item">
                <h3 class="job-title">Decision and Planning Algorithm Engineer 2</h3>
              </li>
              <li class="job-item">
                <h3 class="job-title">Perception Algorithm Engineer (Path Planning) 1</h3>
              </li>
              <li class="job-item">
                <h3 class="job-title">SLAM Algorithm Engineer 3</h3>
              </li>
              <li class="job-item">
                <h3 class="job-title">Motor Control Algorithm Engineer 2</h3>
              </li>
              <li class="job-item">
                <h3 class="job-title">Reinforcement Learning Algorithm Engineer 2</h3>
              </li>
              <li class="job-item">
                <h3 class="job-title">ACCOUNTANT</h3>
              </li>
              <li class="job-item">
                <h3 class="job-title">PRODUCT MANAGER</h3>
              </li>
              <li class="job-item">
                <h3 class="job-title">TEST ENGINEER</h3>
              </li>
            </ul>
            
            <p class="careers-jobs__desc">
              XITU has created an equal and efficient work environment,aiming to build a orporate culture of Customer Obsession, Value Creation, and Beginning with the End in Mind.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Culture & Work Environment -->
    <section class="careers-culture">
      <div class="container">
        <img 
          src="~/assets/images/careers/work.png" 
          alt="Work Environment" 
          class="culture-image"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'XITU | Careers',
  meta: [
    { name: 'description', content: 'Join XITU - Build the future of robotics with us.' }
  ]
})
</script>

<style lang="scss" scoped>
/* Page specific styles are in assets/scss/careers.scss */
</style>
