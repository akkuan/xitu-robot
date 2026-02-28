<template>
  <div class="page-home">
    <!-- Section 1: Robot Intro (全屏 Banner) -->
    <section class="robot-intro" :class="{ 'has-video': isVideoMode }">
      <template v-if="isVideoMode">
        <video
          class="hero-video"
          autoplay
          loop
          muted
          playsinline
        >
          <source src="~/assets/videos/home.mp4" type="video/mp4" />
        </video>
        <div class="video-overlay"></div>
      </template>
      <div class="robot-intro__content" style="padding-left: 5%; width: 100%">
        <h1 class="landing-title">
          we can change<br>
          the world<span class="dot">.</span>
        </h1>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const isVideoMode = computed(() => route.query.type === "video")

definePageMeta({
  path: "/"
})

useHead({
  title: "XITU | Skywalker Intelligent Robot",
  meta: [
    {
      name: "description",
      content:
        "Skywalker Intelligent Robot - High-precision, high-efficiency, and highly generalizable motion control."
    }
  ]
})
</script>

<style lang="scss" scoped>
// Page specific styles are mostly in assets/scss/home.scss
.page-home {
  height: 100vh;
  overflow: hidden;
}

.robot-intro {
  background-image: url("~/assets/images/index/hero.png") !important;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-end; /* Align content to bottom */
  padding-bottom: 80px;

  &.has-video {
    background-image: none !important;
    background-color: #000;
  }
}

.robot-intro__content {
  position: relative;
  z-index: 2;
}

.landing-title {
  color: #ffffff;
  font-size: 8rem;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
}

.dot {
  color: var(--color-primary);
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* 深色半透明遮罩 */
  z-index: 1;
}
</style>
