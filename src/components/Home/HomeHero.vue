<script setup>
import heroBg from '@/assets/img/hero-bg.png'
import rendangImg from '@/assets/img/rendang.png'
import tumpengImg from '@/assets/img/tumpeng.png'
import orangesImg from '@/assets/img/oranges.png'

import { Icon } from "@iconify/vue";

</script>

<template>

    <div class="h-full">

        <div class="text-4xl font-bold text-yellow-500 text-center mb-10">
            Makasih ya, Dania! :D <br />
            Aku <span class="text-9xl text-pink-900">sayang</span> Kamu!!!!
        </div>

        <div class="h-[calc(100vh-8rem)] rounded-3xl mb-10">
            <div class="hero h-full rounded-3xl relative overflow-hidden"
                :style="{ backgroundImage: `url(${heroBg})` }">

                <div class="hero-overlay rounded-3xl"></div>

                <!-- Teks di atas, agak ke kiri -->
                <div class="absolute top-24 left-24 max-w-xl text-left text-neutral-content">
                    <h1 class="text-2xl md:text-4xl mb-3">
                        Struggling to find the <span class="font-bold text-shadow-lg/50">perfect catering</span> for
                        your events?
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

        <div class="bg-green-600 pb-2 rounded-2xl mb-10">
            <div class="bg-yellow-400 rounded-xl flex">
                <div class="flex my-2 ml-2 mr-10">
                    <!-- Gambar Oranges -->
                    <img :src="orangesImg" alt="Oranges" class="w-20" />
                </div>
                <div class="flex flex-5">
                    <div class="flex flex-col justify-center">
                        <div class="text-2xl text-green-800"><span class="font-bold">Homemade</span> Delights for Every
                            Occasion.</div>
                        <div class="text-green-800">From savory meals to delightful snacks and refreshing drinks, we've
                            got your event covered!
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex gap-4">
            <div class="flex-1 bg-green-600 rounded-lg p-5 max-h-max">
                <div class="flex-col">
                    <div class="text-xl font-medium mb-1">
                        Catering
                    </div>
                    <div>
                        <div class="flex items-center">
                            <div class="pr-4">
                                <Icon icon="material-symbols:food-bank-rounded" width="72" height="72" />
                            </div>
                            <div class="text-xs text-justify">
                                From intimate gatherings to grand celebrations, we offer tailored
                                catering solutions
                                that make your events unforgettable. Let us handle the food, so you can focus on
                                creating memories.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1">
                <div class="text-3xl text-green-800 mb-10 text-center">
                    Our <span class="font-bold">Services</span>
                </div>
                <div class="bg-green-800 rounded-lg p-5 max-h-max">
                    <div class="flex-col">
                        <div class="text-xl font-medium mb-1">
                            Snacks
                        </div>
                        <div>
                            <div class="flex">
                                <div class="pr-5">
                                    <Icon icon="streamline-ultimate:fast-food-french-fries" width="56" height="64" />
                                </div>
                                <div class="text-xs text-justify">
                                    Savor the taste of tradition and creativity with our homemade meals and snacks.
                                    From crispy kale crackers to hearty ketupat gulai tunjang, every bite tells a story.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1 bg-green-600 rounded-lg p-5 max-h-max">
                <div class="flex-col">
                    <div class="text-xl font-medium mb-1">
                        Drinks
                    </div>
                    <div>
                        <div class="flex">
                            <div>
                                <Icon icon="tabler:bottle" width="72" height="72" />
                            </div>
                            <div class="text-xs text-justify">
                                Quench your thirst with our refreshing drink selections, including vibrant telang jelly
                                tea, tangy kasturi orange, and zesty lemon green tea—perfect for any occasion.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>







</template>

<style scoped></style>