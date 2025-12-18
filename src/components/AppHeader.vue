<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const themes = [
    { name: 'light', icon: '🌞' },
    { name: 'dark', icon: '🌚' },
    { name: 'cupcake', icon: '🧁' },
    { name: 'bumblebee', icon: '🐝' },
    { name: 'emerald', icon: '💚' },
    { name: 'corporate', icon: '🏢' },
    { name: 'synthwave', icon: '🌃' },
    { name: 'halloween', icon: '🎃' },
    { name: 'forest', icon: '🌲' },
    { name: 'lofi', icon: '🎧' },
    { name: 'pastel', icon: '🩷' },
    { name: 'night', icon: '🌙' },
    { name: 'coffee', icon: '☕' },
    { name: 'dracula', icon: '🧛‍♂️' },
]

const selectedTheme = ref(localStorage.getItem('theme') || 'light')

const setTheme = (theme) => {
    selectedTheme.value = theme
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
}

onMounted(() => {
    setTheme(selectedTheme.value)
})

import logo from '@/assets/logo.svg'
import { useCartStore } from '@/stores/cart'
import { Icon } from '@iconify/vue'

const cartStore = useCartStore()


</script>

<template>

    <div class="navbar py-5">

        <!-- Left - Logo Section - With Logo-->
        <div class="flex flex-1">
            <div class="flex items-center">
                <RouterLink to="/">
                    <img alt="Dapoer Aybun logo" class="sm:hover:animate-pulse w-40 sm:w-20" :src="logo"/>
                </RouterLink>
                <div class="divider divider-horizontal"></div>
                <div>
                    <div class="flex-col font-baskervville text-center text-xs sm:text-base">
                        <div>Dapoer</div>
                        <div class="tracking-widest">AyBun</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Center - Navigation Links (Hidden on small devices) -->
        <div class="hidden sm:flex flex-2 justify-center">
            <div class="bg-slate-800 rounded-full px-3 py-2">
                <nav class="flex gap-2 text-white">
                    <RouterLink to="/" class="btn btn-sm btn-success btn-ghost rounded-full " active-class="btn-active">
                        Home</RouterLink>
                    <RouterLink to="/menu" class="btn btn-sm btn-success btn-ghost rounded-full" active-class="btn-active">Menu
                    </RouterLink>
                    <RouterLink to="/order" class="btn btn-sm btn-success btn-ghost rounded-full" active-class="btn-active">Order
                    </RouterLink>
                    <RouterLink to="/about" class="btn btn-sm btn-success btn-ghost rounded-full"
                        active-class="btn-active">About
                    </RouterLink>
                    <RouterLink to="/testimonials" class="btn btn-sm btn-success btn-ghost rounded-full" active-class="btn-active">Testimonies
                    </RouterLink>
                    <RouterLink to="/contact" class="btn btn-sm btn-success btn-ghost rounded-full" active-class="btn-active">Contact
                    </RouterLink>
                </nav>
            </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="sm:hidden flex flex-2 justify-end">
            <div class="dropdown dropdown-center">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <RouterLink to="/" active-class="active">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/menu" active-class="active">Menu</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/order" active-class="active">Order</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about" active-class="active">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/testimonials" active-class="active">Testimonials</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact" active-class="active">Contact</RouterLink>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Right- Theme Selector -->
        <div class="flex flex-1 justify-end items-center gap-2">
            <!-- Cart Button -->
            <RouterLink to="/order" class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <Icon icon="mdi:cart-outline" width="24" height="24" />
                    <span v-if="cartStore.totalItems > 0" class="badge badge-sm badge-primary indicator-item">{{ cartStore.totalItems }}</span>
                </div>
            </RouterLink>

            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-sm sm:btn-md m-1 capitalize">
                    {{themes.find(t => t.name === selectedTheme)?.icon}}
                    {{ selectedTheme }}
                </div>
                <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm">
                    <li v-for="theme in themes" :key="theme.name">
                        <a @click="setTheme(theme.name)" class="capitalize">
                            <span class="mr-2">{{ theme.icon }}</span>
                            {{ theme.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>




    </div>
</template>

<style scoped></style>
