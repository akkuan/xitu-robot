<template>
  <div class="page-home">
    <!-- Section 1: Robot Intro (全屏 Banner) -->
    <section class="robot-intro">
      <div class="robot-intro__content" style="padding-left: 5%; width: 100%;">
        <h1 class="robot-intro__title">Skywalker<span class="dot">.</span></h1>
      </div>
    </section>

    <!-- Section 1.5: Robot Overview (新增的文字介绍板块) -->
    <section class="robot-overview">
      <div class="container">
        <p class="robot-overview__desc">
          The Skywalker features a highly biomimetic torso configuration,
          flexible arm motion control, and an intelligent motion chassis.
          Combined with an embodied intelligence large language model, it
          achieves high-precision, high-efficiency, and highly generalizable
          motion control.
        </p>

        <div class="robot-overview__specs">
          <div class="overview-spec">
            <h4 class="overview-spec__title">Generalization</h4>
            <p class="overview-spec__desc">
              Ability to perform tasks across different scenarios
            </p>
          </div>
          <div class="overview-spec">
            <h4 class="overview-spec__title">Efficiency</h4>
            <p class="overview-spec__desc">
              Fast speed and low energy consumption
            </p>
          </div>
          <div class="overview-spec">
            <h4 class="overview-spec__title">Safety</h4>
            <p class="overview-spec__desc">
              Safe emergency stop, safe obstacle avoidance, and safe
              human-robot collaboration
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Robot Features (核心部件) -->
    <section class="robot-features">
      <div class="container">
        <div class="robot-features__grid">
          <!-- Card 1 -->
          <article class="feature-card">
            <div class="feature-card__image-wrapper">
              <img
                src="~/assets/images/skywaller/heart.png"
                alt="Heart"
              />
            </div>
            <h3 class="feature-card__title">Heart</h3>
            <p class="feature-card__desc">
              Equipped with an Nvidia Jetson AGX-Orin 64G processor, providing high computing power, strong performance, and enhanced intelligence.
            </p>
          </article>

          <!-- Card 2 -->
          <article class="feature-card">
            <div class="feature-card__image-wrapper">
              <img
                src="~/assets/images/skywaller/eyes.png"
                alt="Eyes"
              />
            </div>
            <h3 class="feature-card__title">Eyes</h3>
            <p class="feature-card__desc">
              Equipped with multiple full-scene stereo 3D cameras, offering an ultra-wide field of view, excellent depth perception, and multi-modal scene awareness.
            </p>
          </article>

          <!-- Card 3 -->
          <article class="feature-card">
            <div class="feature-card__image-wrapper">
              <img
                src="~/assets/images/skywaller/hands.png"
                alt="Hands"
              />
            </div>
            <h3 class="feature-card__title">Hands</h3>
            <p class="feature-card__desc">
              Equipped with various types of end effectors, allowing for flexible switching and adaptation to multiple scenarios and target objects.
            </p>
          </article>

          <!-- Card 4 -->
          <article class="feature-card">
            <div class="feature-card__image-wrapper">
              <img
                src="~/assets/images/skywaller/waist.png"
                alt="Waist"
              />
            </div>
            <h3 class="feature-card__title">Waist</h3>
            <p class="feature-card__desc">
              Features a flexible 3-degree-of-freedom (vertical lifting + Pitch + Yaw) waist, with a multi-stage articulated lifting mechanism for greater load capacity and lower energy consumption.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Section 3: Robot Scenarios (应用场景) -->
    <section class="robot-scenario">
      <div class="container">
        <div class="robot-scenario__header">
          <h2 class="robot-scenario__title">Skywalker in the Field</h2>
        </div>

        <div class="robot-scenario__grid">
          <!-- 上排两张图 -->
          <div class="scenario-item scenario-item--normal">
            <img
              src="~/assets/images/skywaller/field-left.png"
              alt="Factory"
            />
          </div>
          <div class="scenario-item scenario-item--normal">
            <img
              src="~/assets/images/skywaller/field-right.png"
              alt="Lab"
            />
          </div>
          <!-- 下排大图 -->
          <div class="scenario-item scenario-item--large">
            <img
              src="~/assets/images/skywaller/field-bottom.png"
              alt="Integration"
            />
          </div>
        </div>

        <div class="robot-scenario__footer">
          <p class="scenario-footer-text">
            Already live in production in logistics, manufacturing operations, Skywalker achieves high-precision, high-efficiency, and highly generalizable motion control.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  path: '/',
})

useHead({
  title: 'XITU | Skywalker Intelligent Robot',
  meta: [
    { name: 'description', content: 'Skywalker Intelligent Robot - High-precision, high-efficiency, and highly generalizable motion control.' }
  ]
})
</script>

<style lang="scss" scoped>
// Page specific styles are mostly in assets/scss/home.scss
.robot-intro {
  background-image: url('~/assets/images/skywaller/hero.png') !important;
}

.robot-intro__title {
  font-size: 35px !important;
  color: #ffffff !important;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: -15vh; /* Move it up */
  
  .dot {
    color: var(--color-primary);
  }
}

.scenario-footer-text {
  font-size: 22px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .robot-intro__title {
    font-size: 28px !important;
    margin-top: -10vh;
  }
  .scenario-footer-text {
    font-size: 18px;
  }
}
</style>
