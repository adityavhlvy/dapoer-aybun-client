<script setup>
import { RouterView } from 'vue-router'

import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <div class="bg-base-300">
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
