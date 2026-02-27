<template>
  <div class="layout-default">
    <!-- Header: 独立模块 -->
    <AppHeader :theme="currentTheme" />

    <main>
      <slot />
    </main>

    <AppFooter :theme="currentTheme" />
  </div>
</template>

<script setup>
const route = useRoute()

// Compute theme based on route meta, default to 'light'
const currentTheme = computed(() => {
  return route.meta.theme || 'light'
})
</script>

<style lang="scss" scoped>
/* Scoped styles if needed, mostly handled by global SCSS now */
</style>
