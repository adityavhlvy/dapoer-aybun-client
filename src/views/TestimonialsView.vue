<script setup>
import { testimonyItems } from '@/data/content.js'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Testimoni',
  meta: [
    { name: 'description', content: 'Apa kata pelanggan tentang masakan Dapoer Aybun? Baca ulasan jujur mereka di sini.' },
  ],
})
</script>

<template>
  <div class="py-10 px-4 sm:px-10 bg-base-100 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-light text-center mb-10">What They <span class="font-bold text-emerald-800">Say</span></h1>

      <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <div v-for="(item, idx) in testimonyItems" :key="idx" class="card bg-base-200 shadow-xl break-inside-avoid">
          <div class="card-body">
             <div class="flex items-center pb-4">
                <div class="avatar">
                    <div class="w-12 rounded-full ring ring-emerald-600 ring-offset-base-100 ring-offset-2">
                        <img :src="item.img" />
                    </div>
                </div>
                <div class="pl-4">
                    <h3 class="card-title text-sm sm:text-base">{{ item.name }}</h3>
                    <p class="text-xs opacity-70">{{ item.role }}</p>
                </div>
            </div>
            <p class="italic text-gray-700">"{{ item.text }}"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
