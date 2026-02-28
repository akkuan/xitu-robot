<template>
  <header class="site-header" :class="{ 'site-header--dark': theme === 'dark' }" :style="{ '--nav-text-color': navColor }">
    <!-- 导航菜单：左侧 -->
    <nav class="site-nav">
      <ul class="site-nav__list">
        <li>
          <NuxtLink :to="localePath('/skywalker')" class="site-nav__link">Skywalker</NuxtLink>
        </li>
        <li><NuxtLink :to="localePath('/intelligence')" class="site-nav__link">{{ $t('nav.intelligence') }}</NuxtLink></li>
        <li><NuxtLink :to="localePath('/solution')" class="site-nav__link">{{ $t('nav.solution') }}</NuxtLink></li>
        <li><NuxtLink :to="localePath('/company')" class="site-nav__link">{{ $t('nav.company') }}</NuxtLink></li>
        <li><NuxtLink :to="localePath('/news')" class="site-nav__link">{{ $t('nav.news') }}</NuxtLink></li>
        <li><NuxtLink :to="localePath('/careers')" class="site-nav__link">{{ $t('nav.careers') }}</NuxtLink></li>
      </ul>
    </nav>

    <!-- Logo：右侧 -->
    <div class="site-header__right" style="display: flex; align-items: center; gap: 20px;">
      <div class="site-header__logo" :class="{ 'logo-primary': route.path === '/' || route.path === '/en' || route.path === '/zh' }" style="font-size: 42px;">Xitu</div>
    </div>

    <!-- 移动端菜单按钮 -->
    <div class="mobile-menu-toggle">☰</div>
  </header>
</template>

<script setup>
const props = defineProps({
  theme: {
    type: String,
    default: 'light'
  }
})

const route = useRoute()
const navColor = computed(() => {
  const path = route.path
  if (path === '/' || path === '/en' || path === '/zh') return 'rgb(255, 255, 255)' // 欢迎页白色
  if (path.startsWith('/skywalker')) return 'rgb(209, 209, 209)'
  if (path.startsWith('/intelligence')) return 'rgb(209, 209, 209)'
  if (path.startsWith('/solution')) return 'rgb(255, 255, 255)'
  if (path.startsWith('/company')) return 'rgb(96, 96, 96)'
  if (path.startsWith('/news')) return 'rgb(209, 209, 209)'
  if (path.startsWith('/careers')) return 'rgb(209, 209, 209)'
  return 'rgb(209, 209, 209)' // default
})

const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
</script>

<style lang="scss" scoped>
.logo-primary {
  color: var(--color-primary) !important;
}

.lang-switch a.active {
  font-weight: bold;
  color: var(--color-primary);
}
</style>
