<script setup>
import { RouterView } from 'vue-router'

import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import { useHead } from '@unhead/vue'

useHead({
  titleTemplate: '%s | Dapoer Aybun',
  meta: [
    { name: 'description', content: 'Dapoer Aybun - Katering harian, nasi tumpeng, dan hidangan lezat lainnya di area Anda.' },
    { property: 'og:site_name', content: 'Dapoer Aybun' },
    { property: 'og:locale', content: 'id_ID' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Dapoer Aybun',
        image: 'https://dapoer-aybun.vercel.app/assets/logo.svg', // Assuming logo path
        '@id': 'https://dapoer-aybun.vercel.app',
        url: 'https://dapoer-aybun.vercel.app',
        telephone: '+6281234567890', // Placeholder, ideally should come from content.js
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl. Jend. Sudirman',
          addressLocality: 'Padang',
          addressRegion: 'Sumatera Barat',
          postalCode: '25123',
          addressCountry: 'ID',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -0.9169639,
          longitude: 100.3524581,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: '08:00',
            closes: '17:00',
          },
        ],
        servesCuisine: 'Indonesian',
        priceRange: '$$',
      }),
    },
  ],
})
</script>

<template>
  <div class="bg-base-300 relative">
    <header>
      <AppHeader />
    </header>

    <main class="px-7">
      <!-- <RouterView /> -->
      <RouterView />
    </main>

    <footer class="mt-10">
      <AppFooter />
    </footer>
  </div>
</template>
