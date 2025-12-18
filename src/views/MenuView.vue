<script setup>
import { menuItems } from '@/data/content.js'
import { useCartStore } from '@/stores/cart'
import { Icon } from '@iconify/vue'

const cartStore = useCartStore()
</script>

<template>
  <div class="py-10 px-4 sm:px-10 bg-base-100 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-light text-center mb-10">Our <span class="font-bold text-emerald-800">Menu</span></h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        <!-- User requested card structure -->
        <div v-for="(menu, idx) in menuItems" :key="idx" class="card card-sm sm:card-md shadow-lg w-full sm:w-64 bg-base-100 hover:shadow-xl transition-shadow group">

            <!-- Hover Gallery -->
            <figure class="flex justify-items-center hover-gallery bg-slate-300 px-8 pb-5">
                <img v-for="(img, i) in menu.images" :key="i" :src="img" :alt="menu.name"
                    class="w-20 sm:w-30" />
            </figure>

            <!-- Content -->
            <div class="card-body p-0">
                <h2 class="card-title py-5 px-5 text-emerald-900 leading-tight">{{ menu.name }}</h2>
                <p class="px-5 text-sm text-gray-600 line-clamp-3 mb-4">{{ menu.desc }}</p>

                <div class="mt-auto pb-5 pl-5 pr-5">
                    <div class="card-actions justify-between items-center">
                        <span class="text-xl font-bold text-emerald-700">{{ menu.price }}</span>

                         <button
                            @click="cartStore.addToCart(menu)"
                            class="btn btn-circle btn-sm btn-primary text-white shadow-md hover:scale-105 active:scale-95 transition-transform"
                            title="Add to Cart"
                        >
                             <Icon icon="mdi:cart-plus" width="18" height="18" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
