<script setup>
import '../assets/main.css'
import AboutHero from '@/components/About/AboutHero.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Tentang Kami',
  meta: [
    { name: 'description', content: 'Kenali lebih dekat Dapoer Aybun, layanan katering terpercaya dengan cita rasa masakan rumah yang otentik.' },
  ],
})
</script>

<template>
    <AboutHero />
</template>
