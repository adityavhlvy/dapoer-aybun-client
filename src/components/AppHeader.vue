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

</script>

<template>

    <div class="navbar py-5">

        <!-- Logo Section - With Logo-->
        <div class="flex flex-1">
            <div class="flex items-center">
                <RouterLink to="/">
                    <img alt="Dapoer Aybun logo" class="logo hover:animate-pulse" src="@/assets/logo.svg" width="75" />
                </RouterLink>
                <div class="divider divider-horizontal"></div>
                <div>
                    <div class="flex-col font-baskervville text-center">
                        <div>Dapoer</div>
                        <div class="tracking-widest">AyBun</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation Links -->
        <div class="flex flex-2 justify-center">
            <div class="bg-base-100 rounded-full px-3 py-2">
                <nav class="flex gap-2">
                    <RouterLink to="/" class="btn btn-sm btn-success btn-ghost rounded-full" active-class="btn-active">
                        Home</RouterLink>
                    <RouterLink to="#" class="btn btn-sm btn-success btn-ghost rounded-full">Menu
                    </RouterLink>
                    <RouterLink to="#" class="btn btn-sm btn-success btn-ghost rounded-full">Order
                    </RouterLink>
                    <RouterLink to="/about" class="btn btn-sm btn-success btn-ghost rounded-full"
                        active-class="btn-active">About
                    </RouterLink>
                    <RouterLink to="#" class="btn btn-sm btn-success btn-ghost rounded-full">Testimonies
                    </RouterLink>
                    <RouterLink to="#" class="btn btn-sm btn-success btn-ghost rounded-full">Contact
                    </RouterLink>
                </nav>
            </div>
        </div>

        <!-- Theme Selector -->
        <div class="flex flex-1 justify-end">
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn m-1 capitalize">
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

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Baskervville+SC:wght@400..700&display=swap'); */
</style>