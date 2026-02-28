<template>
  <h1 class="hero-title">{{ title }}<span class="dot">.</span></h1>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.hero-title {
  color: #ffffff;
  margin: 0;
  font-size: 52px;
  font-weight: 600;
  margin-top: -20vh;
  letter-spacing: 3px;
}

.dot {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 28px;
    margin-top: -10vh;
  }
}
</style>
