<script setup>
import orangesImg from '@/assets/img/oranges.png'
import { Icon } from "@iconify/vue";
</script>

<template>
  <!-- Section Break - Orange Image -->
  <div class="bg-orange-200 pb-2 rounded-2xl mb-10">
    <div class="bg-orange-50 rounded-xl flex py-4">
      <div class="flex my-2 ml-2 mr-5 mt-4 sm:mr-10">
        <!-- Gambar Oranges -->
        <img :src="orangesImg" alt="Oranges" class="h-16 sm:w-20" />
      </div>
      <div class="flex flex-5">
        <div class="flex flex-col justify-center">
          <div class="text-sm sm:text-2xl text-orange-900"><span class="font-bold">Homemade</span>
            Delights for
            Every
            Occasion.</div>
          <div class="text-xs sm:text-base text-orange-900">From savory meals to delightful snacks
            and refreshing drinks,
            we've
            got your event covered!
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Our Services - Section (Changed in mobile screen) -->
  <div class="hidden sm:flex gap-4 mb-10">
    <div class="flex-1 bg-emerald-600 rounded-lg p-5 max-h-max">
      <div class="flex-col">
        <div class="text-xl font-medium text-white mb-1">
          Catering
        </div>
        <div>
          <div class="flex items-center">
            <div class="pr-4">
              <Icon color="white" icon="material-symbols:food-bank-rounded" width="72" height="72" />
            </div>
            <div class="text-xs text-justify text-white">
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
      <div class="text-3xl mb-10 text-center">
        Our <span class="font-bold">Services</span>
      </div>
      <div class="bg-emerald-900 rounded-lg p-5 max-h-max">
        <div class="flex-col">
          <div class="text-xl font-medium text-white mb-1">
            Snacks
          </div>
          <div>
            <div class="flex">
              <div class="pr-5">
                <Icon color="white" icon="streamline-ultimate:fast-food-french-fries" width="56" height="64" />
              </div>
              <div class="text-xs text-justify text-white">
                Savor the taste of tradition and creativity with our homemade meals and snacks.
                From crispy kale crackers to hearty ketupat gulai tunjang, every bite tells a
                story.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-1 bg-emerald-600 rounded-lg p-5 max-h-max">
      <div class="flex-col">
        <div class="text-xl font-medium text-white mb-1">
          Drinks
        </div>
        <div>
          <div class="flex">
            <div>
              <Icon color="white" icon="tabler:bottle" width="72" height="72" />
            </div>
            <div class="text-xs text-justify text-white">
              Quench your thirst with our refreshing drink selections, including vibrant telang
              jelly
              tea, tangy kasturi orange, and zesty lemon green tea, perfect for any occasion.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Our Section - Mobile -->
  <div class="sm:hidden flex-col space-y-5 mb-10">
    <div class="text-3xl mb-10 text-center">
      Our <span class="font-bold">Services</span>
    </div>

    <div>
      <div class="bg-emerald-600 rounded-lg p-5 max-h-max">
        <div class="flex-col">
          <div class="text-xl font-medium text-white mb-1">
            Catering
          </div>
          <div>
            <div class="flex items-center">
              <div class="pr-4">
                <Icon color="white" icon="material-symbols:food-bank-rounded" width="72" height="72" />
              </div>
              <div class="text-xs text-justify text-white">
                From intimate gatherings to grand celebrations, we offer tailored
                catering solutions
                that make your events unforgettable. Let us handle the food, so you can focus on
                creating memories.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-emerald-900 rounded-lg p-5 max-h-max">
      <div class="flex-col">
        <div class="text-xl font-medium text-white mb-1">
          Snacks
        </div>
        <div>
          <div class="flex">
            <div class="pr-5">
              <Icon color="white" icon="streamline-ultimate:fast-food-french-fries" width="56" height="64" />
            </div>
            <div class="text-xs text-justify text-white">
              Savor the taste of tradition and creativity with our homemade meals and snacks.
              From crispy kale crackers to hearty ketupat gulai tunjang, every bite tells a
              story.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-1 bg-emerald-600 rounded-lg p-5 max-h-max">
      <div class="flex-col">
        <div class="text-xl font-medium text-white mb-1">
          Drinks
        </div>
        <div>
          <div class="flex">
            <div>
              <Icon color="white" icon="tabler:bottle" width="72" height="72" />
            </div>
            <div class="text-xs text-justify text-white">
              Quench your thirst with our refreshing drink selections, including vibrant telang
              jelly
              tea, tangy kasturi orange, and zesty lemon green tea, perfect for any occasion.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
