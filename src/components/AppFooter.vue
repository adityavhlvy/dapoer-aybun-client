<script setup>
import { RouterLink } from 'vue-router'
import { CONTACT_INFO } from '@/data/content.js'
</script>

<template>
    <footer class="footer sm:footer-horizontal bg-emerald-900 text-base-content p-10">
        <aside>
            <h1 class="text-4xl font-baskervville">Dapoer</h1>
            <h1 class="text-4xl font-baskervville tracking-widest -mt-3">AyBun</h1>
            <p class="pt-5">{{ CONTACT_INFO.address }}</p>
            <p>Phone / WhatsApp: {{ CONTACT_INFO.phone }}</p>
            <a :href="CONTACT_INFO.mapsLink" target="_blank" class="link">View on Google Maps</a>

        </aside>
        <nav>
            <h6 class="text-2xl mb-8"><span class="font-bold">Quick</span> Links</h6>
            <RouterLink to="/" class="link link-hover">Home</RouterLink>
            <RouterLink to="/menu" class="link link-hover">Menu</RouterLink>
            <RouterLink to="/order" class="link link-hover">Order</RouterLink>
        </nav>
        <nav>
            <h6 class="text-2xl mb-8"><span class="font-bold">Company</span></h6>
            <RouterLink to="/about" class="link link-hover">About us</RouterLink>
            <RouterLink to="/contact" class="link link-hover">Contact</RouterLink>
            <RouterLink to="/testimonials" class="link link-hover">Testimonials</RouterLink>
        </nav>
        <nav>
            <h6 class="text-2xl mb-8"><span class="font-bold">Operation</span> Hours</h6>
            <p>{{ CONTACT_INFO.hours.weekdays }}</p>
            <p>{{ CONTACT_INFO.hours.sunday }}</p>
            <p class="mt-8">“Bringing homemade goodness to your table.”</p>
        </nav>
    </footer>

</template>

<style scoped></style>
