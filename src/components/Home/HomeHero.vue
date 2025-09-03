<script setup>
import heroBg from '@/assets/img/hero-bg.png'
import rendangImg from '@/assets/img/rendang.png'
import tumpengImg from '@/assets/img/tumpeng.png'
</script>

<template>
    <div class="h-full">
        <div class="h-screen rounded-3xl pb-30">
            <div class="hero min-h-full rounded-3xl relative overflow-hidden"
                :style="{ backgroundImage: `url(${heroBg})` }">

                <div class="hero-overlay rounded-3xl"></div>

                <!-- Teks di atas, agak ke kanan -->
                <div class="absolute top-24 left-24 max-w-xl text-left text-neutral-content">
                    <h1 class="text-2xl md:text-4xl mb-3">
                        Struggling to find the <span class="font-bold">perfect catering</span> for your events?
                    </h1>
                    <p class="text-lg md:text-xl">
                        Let us take care of your food, so you can enjoy the moment!
                    </p>
                </div>

                <!-- Gambar Tumpeng -->
                <img :src="tumpengImg" alt="Tumpeng" class="absolute bottom-0 left-0 w-40 md:w-96" />

                <!-- Gambar Rendang -->
                <img :src="rendangImg" alt="Rendang"
                    class="absolute bottom-0 right-0 w-40 md:w-128 translate-x-20 translate-y-15" />
            </div>
        </div>

        <div>
            <div>Homemade Delights for Every Occasion.</div>
            <div>From savory meals to delightful snacks and refreshing drinks, we've got your event covered!</div>
        </div>
    </div>





</template>

<style scoped></style>