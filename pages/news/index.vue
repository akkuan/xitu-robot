<template>
  <div class="page-news">
    <div class="news-container">
      <!-- News Grid -->
      <div class="news-grid">
        <div 
          v-for="(item, index) in paginatedNews" 
          :key="item.id" 
          class="news-item"
          @click="handleNewsClick(item)"
        >
          <img 
            :src="item.image" 
            :alt="item.title" 
            class="news-item__image"
          />
          <div class="news-item__overlay">
            <div class="news-item__date">{{ item.date }}</div>
            <h3 class="news-item__title">{{ item.title }}</h3>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="news-pagination">
        <button 
          class="pagination-btn" 
          :disabled="currentPage === 1" 
          @click="prevPage"
        >
          &lt;
        </button>
        <button 
          class="pagination-btn" 
          :disabled="currentPage === totalPages" 
          @click="nextPage"
        >
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'XITU | News',
  meta: [
    { name: 'description', content: 'Latest news and updates from XITU.' }
  ]
})

definePageMeta({
  theme: 'dark'
})

// Mock Data
const newsItems = ref([
  {
    id: 1,
    date: '14th Sep 2024',
    title: 'Skywalker | 顺丰包装测试新玩法36',
    image: 'https://placehold.co/800x600/222/fff?text=Skywalker+Test'
  },
  {
    id: 2,
    date: '24th Aug 2024',
    title: 'Skywalker | 人机协作新工装',
    image: 'https://placehold.co/600x600/333/fff?text=Collaboration'
  },
  {
    id: 3,
    date: '10th Aug 2024',
    title: 'Skywalker | 汽车零部件测试圆满成功',
    image: 'https://placehold.co/800x500/444/fff?text=Car+Parts+Test'
  },
  {
    id: 4,
    date: '28th Jul 2024',
    title: 'Skywalker | 德国IndraMotion公司考察',
    image: 'https://placehold.co/600x400/555/fff?text=Germany+Visit'
  },
  {
    id: 5,
    date: '15th Jul 2024',
    title: '创始人 | 受邀参加2024年度供应商峰会',
    image: 'https://placehold.co/900x500/666/fff?text=Supplier+Summit'
  },
  {
    id: 6,
    date: '28th Jun 2024',
    title: 'Skywalker | 入驻其中物流园测试',
    image: 'https://placehold.co/600x500/777/fff?text=Logistics+Park'
  },
  {
    id: 7,
    date: '20th Jun 2024',
    title: 'AiGroup | 验收现场，顺利通过',
    image: 'https://placehold.co/800x400/888/fff?text=Acceptance+Pass'
  },
  {
    id: 8,
    date: '10th Jun 2024',
    title: 'Skywalker | 新一代人形机器人发布',
    image: 'https://placehold.co/600x600/999/fff?text=New+Robot'
  }
])

// Pagination Logic
const itemsPerPage = 6
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(newsItems.value.length / itemsPerPage))

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return newsItems.value.slice(start, end)
})

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const handleNewsClick = (item) => {
  // Navigate to detail page or show modal if needed
  console.log('Clicked news:', item.title)
}
</script>

<style lang="scss" scoped>
/* Page specific styles are in assets/scss/news.scss */
</style>
