<template>
  <header class="site-header" :class="{ 'site-header--dark': theme === 'dark' }">
    <!-- 导航菜单：左侧 -->
    <nav class="site-nav">
      <ul class="site-nav__list">
        <li>
          <NuxtLink :to="localePath('/')" class="site-nav__link">Skywalker</NuxtLink>
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
      <div class="lang-switch">
        <NuxtLink :to="switchLocalePath('en')" :class="{ active: $i18n.locale === 'en' }" style="margin-right: 5px; cursor: pointer; font-size: 14px;">EN</NuxtLink>
        <span style="color: #ccc;">|</span>
        <NuxtLink :to="switchLocalePath('zh')" :class="{ active: $i18n.locale === 'zh' }" style="margin-left: 5px; cursor: pointer; font-size: 14px;">中文</NuxtLink>
      </div>
      <div class="site-header__logo">Xitu</div>
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

const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
</script>

<style lang="scss" scoped>
.lang-switch a.active {
  font-weight: bold;
  color: var(--color-primary);
}
</style>
