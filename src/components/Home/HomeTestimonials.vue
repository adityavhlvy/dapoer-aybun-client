<script setup>
import { ref, onMounted } from "vue";
import { testimonyItems } from '@/data/content.js'

const activeIndex = ref(0);

onMounted(() => {
    setInterval(() => {
        activeIndex.value = (activeIndex.value + 1) % testimonyItems.length;
    }, 5000); // ganti tiap 5 detik
});
</script>

<template>
    <!-- Testimonials -->
    <div class="bg-base-100 pb-10 rounded-xl">
        <div class="flex flex-col">

            <!-- Title -->
            <div class="text-2xl sm:text-4xl font-light text-center pt-10 px-3">
                What Our <span class="font-bold">Customers</span> Say
            </div>

            <!-- Carousel -->
            <div class="carousel w-full px-4 sm:px-10 mt-8 space-x-4">

                <div v-for="(item, idx) in testimonyItems" :key="idx"
                    class="carousel-item w-full sm:w-80 flex-shrink-0 px-4 sm:px-2">
                    <div class="card bg-base-200 shadow-md">
                        <div class="card-body">

                            <!-- Profile -->
                            <div class="flex items-center pb-4">
                                <div class="avatar">
                                    <div
                                        class="w-12 rounded-full ring ring-emerald-600 ring-offset-base-100 ring-offset-2">
                                        <img :src="item.img" />
                                    </div>
                                </div>
                                <div class="pl-4">
                                    <h3 class="card-title text-sm sm:text-base">{{ item.name }}</h3>
                                    <p class="text-xs opacity-70">{{ item.role }}</p>
                                </div>
                            </div>

                            <!-- Testimonial Text -->
                            <p class="text-sm sm:text-base leading-relaxed">
                                {{ item.text }}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
