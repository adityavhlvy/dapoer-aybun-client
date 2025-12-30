<script setup>
import heroBg from '@/assets/img/hero-bg.png'
import rendangImg from '@/assets/img/rendang.png'
import tumpengImg from '@/assets/img/tumpeng.png'
</script>

<template>
  <div class="h-full w-full">
    <!-- Hero -->
    <div class="h-[calc(100vh-8rem)] rounded-3xl mb-10">
      <div class="hero h-full rounded-3xl relative overflow-hidden" :style="{ backgroundImage: `url(${heroBg})` }">

        <div class="hero-overlay rounded-3xl"></div>

        <!-- Teks di atas, agak ke kiri -->
        <div class="absolute top-12 left-6 sm:top-24 sm:left-24 max-w-xl text-left text-neutral-content">
          <h1 class="text-2xl md:text-4xl mb-3">
            Struggling to find the <span class="font-bold text-shadow-lg/50">perfect catering</span> for
            your events?
          </h1>
          <p class="text-lg md:text-xl">
            Let us take care of your food, so you can enjoy the moment!
          </p>
        </div>

        <!-- Gambar Tumpeng -->
        <img :src="tumpengImg" alt="Tumpeng" class="absolute bottom-0 left-0 w-40 sm:w-96" />

        <!-- Gambar Rendang -->
        <img :src="rendangImg" alt="Rendang"
          class="absolute bottom-0 right-0 w-40 sm:w-128 translate-x-8 translate-y-6 sm:translate-x-20 sm:translate-y-15" />
      </div>
    </div>
  </div>
</template>
