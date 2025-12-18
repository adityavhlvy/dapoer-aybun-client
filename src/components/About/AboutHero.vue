<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="bg-base-100 min-h-screen">
        <!-- Hero Image Section -->
        <div class="h-96 w-full relative">
            <div class="absolute inset-0 bg-emerald-900/80 flex items-center justify-center">
                 <div class="text-center text-white px-4">
                     <h1 class="text-5xl font-light mb-4 font-baskervville tracking-widest">Dapoer <span class="font-bold">AyBun</span></h1>
                     <p class="text-xl max-w-2xl mx-auto opacity-90">Serving happiness through authentic homemade cuisine since 2023.</p>
                 </div>
            </div>
            <!-- Background Pattern or Image -->
            <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop"
                 class="w-full h-full object-cover mix-blend-overlay opacity-30" alt="Kitchen background" />
        </div>

        <!-- Our Story -->
        <div class="py-20 px-6 sm:px-20 max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row items-center gap-10">
                <div class="flex-1">
                    <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
                         class="rounded-3xl shadow-2xl skew-y-2 transform transition-transform hover:skew-y-0 duration-500" alt="Cooking" />
                </div>
                <div class="flex-1 space-y-6">
                    <h2 class="text-3xl font-light text-emerald-900 border-l-4 border-yellow-400 pl-4">Our <span class="font-bold">Story</span></h2>
                    <p class="leading-relaxed text-gray-700 text-lg">
                        It all started from a small home kitchen and a big passion for sharing authentic flavors.
                        "AyBun" stands for <span class="font-bold text-emerald-700">Ayah & Bunda</span>, representing the love and family warmth infused into every dish we cook.
                        What began as cooking for friends and family has grown into a catering service trusted by hundreds to serve their special moments.
                    </p>
                    <p class="leading-relaxed text-gray-700 text-lg">
                        We believe that food is not just about taste, but about the memories it creates. That's why we stick to traditional recipes,
                        fresh ingredients, and zero shortcuts.
                    </p>
                </div>
            </div>
        </div>

        <!-- Mission / Vision -->
        <div class="bg-emerald-50 py-20 px-6">
             <div class="max-w-6xl mx-auto text-center">
                 <h2 class="text-3xl font-bold text-emerald-900 mb-12">Driven by Passion</h2>
                 <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div class="card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                         <div class="card-body items-center text-center">
                             <div class="p-4 bg-emerald-100 rounded-full mb-4">
                                <Icon icon="mdi:heart-outline" width="40" class="text-emerald-700" />
                             </div>
                             <h3 class="card-title text-xl mb-2">Authenticity</h3>
                             <p>Preserving the genuine taste of traditional Indonesian cuisine.</p>
                         </div>
                     </div>
                     <div class="card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                         <div class="card-body items-center text-center">
                             <div class="p-4 bg-emerald-100 rounded-full mb-4">
                                <Icon icon="mdi:leaf" width="40" class="text-emerald-700" />
                             </div>
                             <h3 class="card-title text-xl mb-2">Quality</h3>
                             <p>Using only the freshest local ingredients for every meal.</p>
                         </div>
                     </div>
                     <div class="card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                         <div class="card-body items-center text-center">
                             <div class="p-4 bg-emerald-100 rounded-full mb-4">
                                <Icon icon="mdi:emoticon-happy-outline" width="40" class="text-emerald-700" />
                             </div>
                             <h3 class="card-title text-xl mb-2">Hospitality</h3>
                             <p>Serving every customer like a member of our own family.</p>
                         </div>
                     </div>
                 </div>
             </div>
        </div>

    </div>
</template>

<style scoped></style>
