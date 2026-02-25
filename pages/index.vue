<template>
  <div class="page-home">
    <!-- Section 1: Robot Intro (全屏 Banner) -->
    <section class="robot-intro">
      <div class="container">
        <div class="robot-intro__content">
          <h1 class="robot-intro__title">Skywalker</h1>
        </div>
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
                src="https://placehold.co/300x400/eee/333?text=Head+Sensor"
                alt="Head"
              />
            </div>
            <h3 class="feature-card__title">Head</h3>
            <p class="feature-card__desc">
              Equipped with 3D depth cameras and high-precision sensors for
              spatial awareness.
            </p>
          </article>

          <!-- Card 2 -->
          <article class="feature-card">
            <div class="feature-card__image-wrapper">
              <img
                src="https://placehold.co/300x400/eee/333?text=Optic+System"
                alt="Optic"
              />
            </div>
            <h3 class="feature-card__title">Optic</h3>
            <p class="feature-card__desc">
              Advanced visual processing unit enabling real-time object
              recognition.
            </p>
          </article>

          <!-- Card 3 -->
          <article class="feature-card">
            <div class="feature-card__image-wrapper">
              <img
                src="https://placehold.co/300x400/eee/333?text=Dexterous+Hand"
                alt="Hands"
              />
            </div>
            <h3 class="feature-card__title">Hands</h3>
            <p class="feature-card__desc">
              12 degrees of freedom with tactile feedback for delicate
              manipulation.
            </p>
          </article>

          <!-- Card 4 -->
          <article class="feature-card">
            <div class="feature-card__image-wrapper">
              <img
                src="https://placehold.co/300x400/eee/333?text=Joint+Base"
                alt="Joint"
              />
            </div>
            <h3 class="feature-card__title">Joint</h3>
            <p class="feature-card__desc">
              High-torque joint modules ensuring stability and powerful
              movement.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Section 3: Robot Scenarios (应用场景) -->
    <section class="robot-scenario">
      <div class="container">
        <div class="robot-scenario__header">
          <h2 class="robot-scenario__title">Skywalker in the Role</h2>
        </div>

        <div class="robot-scenario__grid">
          <!-- 上排两张图 -->
          <div class="scenario-item scenario-item--normal">
            <img
              src="https://placehold.co/600x400/333/fff?text=Factory+Assembly"
              alt="Factory"
            />
          </div>
          <div class="scenario-item scenario-item--normal">
            <img
              src="https://placehold.co/600x400/444/fff?text=Lab+Research"
              alt="Lab"
            />
          </div>
          <!-- 下排大图 -->
          <div class="scenario-item scenario-item--large">
            <img
              src="https://placehold.co/1200x600/222/00dbbd?text=Industrial+Integration"
              alt="Integration"
            />
          </div>
        </div>

        <div class="robot-scenario__footer">
          <p>
            A ready-to-use executive in various scenarios like operations,
            bio-chemical handling, agile logistics, and high-precision
            automation control.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'XITU | Skywalker Intelligent Robot',
  meta: [
    { name: 'description', content: 'Skywalker Intelligent Robot - High-precision, high-efficiency, and highly generalizable motion control.' }
  ]
})
</script>

<style lang="scss" scoped>
// Page specific styles are mostly in assets/scss/home.scss
</style>
