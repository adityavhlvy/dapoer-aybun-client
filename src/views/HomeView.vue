<script setup>
import { useHead } from '@unhead/vue'

import HomeHero from '@/components/Home/HomeHero.vue'
import HomeServices from '@/components/Home/HomeServices.vue'
import HomeMenu from '@/components/Home/HomeMenu.vue'
import HomeTestimonials from '@/components/Home/HomeTestimonials.vue'

useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Dapoer Aybun - Katering harian, nasi tumpeng, dan hidangan lezat lainnya di area Anda.' },
  ],
})
</script>

<template>
  <HomeHero />
  <HomeServices />
  <HomeMenu />
  <HomeTestimonials />
</template>
