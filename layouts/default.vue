<template>
  <div class="layout-default">
    <!-- Header: 独立模块 -->
    <AppHeader />

    <main>
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
// No script needed for now as header logic moved to AppHeader
</script>

<style lang="scss" scoped>
/* Scoped styles if needed, mostly handled by global SCSS now */
</style>
