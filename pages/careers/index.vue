<template>
  <div class="page-careers">
    <div class="container">
      <h1>{{ $t('careers.title') }}</h1>
      <p>{{ $t('careers.description') }}</p>
      <div class="content">
        <p>Join our team of robot enthusiasts.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Careers - Robot Enterprise',
})
</script>

<style lang="scss" scoped>
.page-careers {
  h1 {
    color: #333;
  }
}
</style>
