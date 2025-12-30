<script setup>
import { menuItems } from '@/data/content.js'
import { useHead } from '@unhead/vue'
import ProductCard from '@/components/ProductCard.vue'

useHead({
  title: 'Menu Kami',
  meta: [
    { name: 'description', content: 'Lihat daftar menu lengkap kami, mulai dari nasi kotak, tumpeng, hingga paket prasmanan.' },
  ],
})
</script>

<template>
  <div class="py-10 px-4 sm:px-10 bg-base-100 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-light text-center mb-10">Our <span class="font-bold text-emerald-800">Menu</span></h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        <!-- User requested card structure -->
        <ProductCard v-for="(menu, idx) in menuItems" :key="idx" :menu="menu" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
