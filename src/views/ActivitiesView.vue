<script setup>
import { activityItems } from '@/data/content.js'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Our Activities',
  meta: [
    { name: 'description', content: 'Explore our activities at Dapoer Aybun, from catering orders to charity events.' },
  ],
})
</script>

<template>
  <div class="py-10 px-4 sm:px-10 bg-base-100 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-light text-center mb-10">Our <span class="font-bold text-emerald-800">Activities</span></h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(activity, idx) in activityItems" :key="idx" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">

          <!-- Image Carousel / Single Image -->
          <figure class="relative h-64 w-full overflow-hidden">
             <!-- If multiple images, show first one (or could be a slider) -->
            <img :src="activity.images[0]" :alt="activity.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

            <!-- Category Badge -->
            <div class="absolute top-4 right-4 badge badge-primary badge-lg shadow-md">{{ activity.category }}</div>

             <!-- Image count badge if more than 1 -->
             <div v-if="activity.images.length > 1" class="absolute bottom-4 right-4 badge badge-ghost bg-black/50 text-white backdrop-blur-sm">
                 +{{ activity.images.length - 1 }} Photos
             </div>
          </figure>

          <div class="card-body">
            <div class="flex items-center text-sm text-gray-500 mb-2 gap-2">
                <span class="icon-[heroicons-outline--calendar]"></span>
                <span>{{ activity.date }}</span>
            </div>

            <h2 class="card-title text-emerald-900 font-bold mb-2">
              {{ activity.title }}
            </h2>
            <p class="text-gray-600 mb-4 text-sm">{{ activity.desc }}</p>

            <!-- Tags/Actions could go here -->
          </div>
        </div>
      </div>

      <!-- Empty State -->
       <div v-if="activityItems.length === 0" class="text-center py-20">
          <p class="text-xl text-gray-400">No activities to show at the moment.</p>
       </div>

    </div>
  </div>
</template>

<style scoped>
/* Optional: Add custom shimmer effect or transitions if needed */
</style>
