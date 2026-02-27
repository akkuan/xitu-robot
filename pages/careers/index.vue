<template>
  <div class="page-careers">
    <!-- Section 1: Hero Image (Team Photo) -->
    <section class="careers-hero">
      <img 
        src="https://placehold.co/1920x1080/444/fff?text=Team+Photo" 
        alt="XITU Team" 
      />
    </section>

    <!-- Section 2: Intro & Jobs List -->
    <section class="careers-intro">
      <div class="container">
        <!-- Decorative Square -->
        <div class="decorative-square"></div>

        <div class="careers-intro__content">
          <!-- Left: Text -->
          <div class="careers-intro__text">
            <h2 class="careers-intro__title">JOIN US</h2>
            <p class="careers-intro__desc">
              We are looking for like-minded individuals who want to change connection lives through robots and create new values.
            </p>
          </div>

          <!-- Right: Job List -->
          <div class="careers-jobs">
            <ul class="jobs-list">
              <li class="job-item">
                <h3 class="job-title">Perception Algorithm Engineer (Grasping)</h3>
              </li>
              <li class="job-item">
                <h3 class="job-title">Decision and Planning Algorithm Engineer</h3>
              </li>
              <li class="job-item">
                <h3 class="job-title">Perception Algorithm Engineer (Path Planning)</h3>
              </li>
              <li class="job-item">
                <h3 class="job-title">SLAM Algorithm Engineer</h3>
              </li>
              <li class="job-item">
                <h3 class="job-title">Motor Control Algorithm Engineer</h3>
              </li>
              <li class="job-item">
                <h3 class="job-title">Reinforcement Learning Algorithm Engineer</h3>
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
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Culture & Work Environment -->
    <section class="careers-culture">
      <div class="container">
        <div class="culture-content">
          <p class="culture-desc">
            XITU has created an equal and efficient work environment, aiming to build a corporate culture of Customer Obsession, Value Creation, and Engineering with the best talent.
          </p>
        </div>
        <img 
          src="https://placehold.co/1200x600/333/fff?text=Work+Environment" 
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
