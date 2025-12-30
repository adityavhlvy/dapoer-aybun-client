<script setup>
import { menuItems } from '@/data/content.js'
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <div class="flex-col mb-10">
    <div class="flex-col bg-base-100 rounded-t-lg">
      <div class="text-xl sm:text-5xl font-light p-5">
        Explore Our <span class="text-emerald-800 font-medium">Catering</span> Menu
      </div>
      <div class="text-xs lg:text-base pb-5 pl-6 pr-2">
        A variety of flavorful dishes crafted to make your events unforgettable. Choose from our
        signature
        offerings and let us serve you with love.
      </div>
    </div>
    <div class="bg-emerald-600 rounded-b-lg">
      <div class="flex-col">
        <div class="text-md lg:text-base pl-6 py-5">
          Freshly prepared and ready to delight your taste buds. Here's what we're serving today
        </div>
        <div class="px-6 pb-5">
          <!-- Carousel or else for the menu with menu name, photos, short description, and price  -->
          <div class="carousel gap-5 w-full">
            <div v-for="(menu, idx) in menuItems" :key="idx" class="carousel-item flex-none">
              <ProductCard :menu="menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
