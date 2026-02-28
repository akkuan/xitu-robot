<template>
  <div class="page-news">
    <div class="news-container">
      
      <!-- Module 1 -->
      <div class="news-module">
        <div class="news-module__left">
          <!-- Big 1 -->
          <div class="news-item big-item">
            <img src="~/assets/images/news/big-1.png" alt="News" class="news-item__image" />
            <div class="news-item__overlay">
              <div class="news-item__date">13TH.Dec.2025</div>
              <h3 class="news-item__title">Skywalker | 入驻永庭汽车零部件公司</h3>
            </div>
          </div>
        </div>
        <div class="news-module__right">
          <!-- Small 1 -->
          <div class="news-item small-item">
            <img src="~/assets/images/news/small-1.png" alt="News" class="news-item__image" />
            <div class="news-item__overlay">
              <div class="news-item__date">5TH.Jan.2026</div>
              <h3 class="news-item__title">Skywalker | 顺丰包裹测试循环达36″</h3>
            </div>
          </div>
          <!-- Small 2 -->
          <div class="news-item small-item">
            <img src="~/assets/images/news/small-2.png" alt="News" class="news-item__image" />
            <div class="news-item__overlay">
              <div class="news-item__date">12TH.Dec.2025</div>
              <h3 class="news-item__title">Skywalker | 德国BTL到我司考察</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Module 2 -->
      <div class="news-module">
        <div class="news-module__left">
          <!-- Big 2 -->
          <div class="news-item big-item">
            <img src="~/assets/images/news/big-2.png" alt="News" class="news-item__image" />
            <div class="news-item__overlay">
              <div class="news-item__date">16TH.Dec.2025</div>
              <h3 class="news-item__title">Skywalker | 汽车零部件测试计划圆满成功</h3>
            </div>
          </div>
          <!-- Big 3 -->
          <div class="news-item big-item">
            <img src="~/assets/images/news/big-3.png" alt="News" class="news-item__image" />
            <div class="news-item__overlay">
              <div class="news-item__date">16TH.Dec.2025</div>
              <h3 class="news-item__title">创始人 | 受邀参加德国BTL年度供应商峰会</h3>
            </div>
          </div>
        </div>
        <div class="news-module__right">
          <!-- Small 3 -->
          <div class="news-item small-item">
            <img src="~/assets/images/news/small-3.png" alt="News" class="news-item__image" />
            <div class="news-item__overlay">
              <div class="news-item__date">26TH.Nov.2025</div>
              <h3 class="news-item__title">Skywalker | 西班牙Inditex到我司考察</h3>
            </div>
          </div>
          <!-- Small 4 -->
          <div class="news-item small-item">
            <img src="~/assets/images/news/small-4.png" alt="News" class="news-item__image" />
            <div class="news-item__overlay">
              <div class="news-item__date">26TH.Nov.2025</div>
              <h3 class="news-item__title">Skywalker | 入驻顺丰物流园测试</h3>
            </div>
          </div>
          <!-- Small 5 -->
          <div class="news-item small-item">
            <img src="~/assets/images/news/small-5.png" alt="News" class="news-item__image" />
            <div class="news-item__overlay">
              <div class="news-item__date">26TH.Nov.2025</div>
              <h3 class="news-item__title">Algoup | 验收现场，顺利通过</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="news-pagination">
        <button class="pagination-btn pagination-btn--icon">&lt;</button>
        <button class="pagination-btn pagination-btn--icon">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'XITU | News',
  meta: [
    { name: 'description', content: 'Latest news and updates from XITU.' }
  ]
})

definePageMeta({
  theme: 'dark'
})
</script>

<style lang="scss" scoped>
/* Page specific styles are in assets/scss/news.scss */
</style>
