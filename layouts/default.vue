<template>
  <div class="layout-default">
    <!-- Header: 独立模块 -->
    <AppHeader :theme="currentTheme" />

    <main>
      <slot />
    </main>

    <AppFooter v-if="!isHome" :theme="currentTheme" />
  </div>
</template>

<script setup>
const route = useRoute()

// Compute theme based on route meta, default to 'light'
const currentTheme = computed(() => {
  return route.meta.theme || 'light'
})

const isHome = computed(() => {
  return route.path === '/' || route.path === '/en' || route.path === '/zh'
})
</script>

<style lang="scss" scoped>
/* Scoped styles if needed, mostly handled by global SCSS now */
</style>
