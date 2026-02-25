<template>
  <!-- Footer: 独立模块 -->
  <footer class="site-footer">
    <div class="container">
      <div class="site-footer__content">
        <!-- 左侧区域：链接 + Logo -->
        <div class="site-footer__left">
          <!-- Logo 在菜单上方 -->
          <div class="site-footer__logo">
            <h2>XITU</h2>
          </div>
          <div class="site-footer__links">
            <NuxtLink :to="localePath('/')" class="site-footer__link">Skywalker</NuxtLink>
            <NuxtLink :to="localePath('/')" class="site-footer__link">{{ $t('nav.intelligence') }}</NuxtLink>
            <NuxtLink :to="localePath('/solution')" class="site-footer__link">{{ $t('nav.solution') }}</NuxtLink>
            <NuxtLink :to="localePath('/company')" class="site-footer__link">{{ $t('nav.company') }}</NuxtLink>
            <NuxtLink :to="localePath('/news')" class="site-footer__link">{{ $t('nav.news') }}</NuxtLink>
            <NuxtLink :to="localePath('/careers')" class="site-footer__link">{{ $t('nav.careers') }}</NuxtLink>
          </div>
        </div>

        <!-- 右侧区域：订阅 -->
        <div class="site-footer__newsletter">
          <p>Sign up for news</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Email" />
            <button type="button">Go</button>
          </form>
          <p style="margin-top: 20px; font-size: 14px">Contact Us</p>
        </div>
      </div>

      <div class="site-footer__bottom">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
        <span>Accessibility Statement</span>
        <span>Copyright © {{ new Date().getFullYear() }} XITU Tech</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath()
</script>
