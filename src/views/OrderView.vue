<script setup>
import { CONTACT_INFO } from '@/data/content.js'
import { useCartStore } from '@/stores/cart'
import { Icon } from '@iconify/vue'

const cartStore = useCartStore()

const whatsappLink = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello Dapoer Aybun, I would like to place an order.`
</script>

<template>
  <div class="py-16 px-4 bg-base-100 min-h-screen flex justify-center items-start">
    <div class="max-w-4xl w-full text-center">
      <h1 class="text-4xl font-light mb-8">How to <span class="font-bold text-emerald-800">Order</span></h1>

      <div class="steps steps-vertical lg:steps-horizontal w-full mb-12">
        <li class="step step-primary">Browse Menu</li>
        <li class="step step-primary">Choose Your Favorites</li>
        <li class="step step-primary">Checkout Cart</li>
        <li class="step step-primary">Confirm via WhatsApp</li>
      </div>

      <!-- Cart Section -->
      <div class="card bg-base-200 shadow-xl p-8 mb-10">
        <div class="card-body text-left">
            <h2 class="card-title text-2xl mb-4 flex items-center gap-2 border-b pb-4">
                <Icon icon="mdi:cart" />
                Your Order
            </h2>

            <div v-if="cartStore.items.length === 0" class="py-10 text-center text-gray-500">
                <Icon icon="mdi:cart-off" width="64" class="mx-auto mb-4 opacity-50" />
                <p class="text-lg">Your cart is empty.</p>
                <div class="mt-4">
                    <RouterLink to="/menu" class="btn btn-primary btn-outline">Browse Menu</RouterLink>
                </div>
            </div>

            <div v-else>
               <!-- Desktop/Table View of Cart -->
               <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th class="text-center">Qty</th>
                            <th class="text-right">Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cartStore.items" :key="item.name">
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img :src="item.images && item.images[0]" :alt="item.name" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">{{ item.name }}</div>
                                        <div class="text-sm opacity-50">{{ item.price }} / unit</div>
                                    </div>
                                </div>
                            </td>
                            <td class="text-center">
                                <div class="join">
                                    <button class="join-item btn btn-xs" @click="cartStore.decreaseQuantity(item.name)">-</button>
                                    <span class="join-item btn btn-xs no-animation">{{ item.quantity }}</span>
                                    <button class="join-item btn btn-xs" @click="cartStore.addToCart(item)">+</button>
                                </div>
                            </td>
                            <td class="text-right font-mono">
                                Rp {{ (item.rawPrice * item.quantity).toLocaleString('id-ID') }}
                            </td>
                            <td class="text-right">
                                <button @click="cartStore.removeFromCart(item.name)" class="btn btn-ghost btn-xs text-error">
                                    <Icon icon="mdi:trash-can-outline" width="20" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
               </div>

               <div class="divider"></div>

               <div class="flex flex-col md:flex-row justify-between items-center bg-base-100 p-6 rounded-lg gap-4">
                   <div class="flex items-center gap-2">
                       <span class="text-xl">Total:</span>
                       <span class="text-3xl font-bold text-emerald-800">{{ cartStore.formattedTotalPrice }}</span>
                   </div>
                   <div class="flex gap-3 w-full md:w-auto">
                        <RouterLink to="/menu" class="btn btn-ghost">Add More Items</RouterLink>
                        <a :href="cartStore.whatsappLink" target="_blank" class="btn btn-primary flex-1 md:flex-none gap-2 text-white">
                            <Icon icon="logos:whatsapp-icon" width="24" />
                            Checkout via WhatsApp
                        </a>
                   </div>
               </div>
               <p class="text-xs text-center mt-4 opacity-70">Clicking checkout will open WhatsApp with your order details pre-filled.</p>

            </div>
        </div>
      </div>

      <!-- General Inquiry -->
      <div v-if="cartStore.items.length === 0" class="card bg-base-100 shadow-sm border border-base-200">
         <div class="card-body items-center text-center">
             <p>Just want to ask a question? Chat properly via WhatsApp.</p>
             <a :href="whatsappLink" target="_blank" class="btn btn-sm btn-ghost gap-2">
                <Icon icon="logos:whatsapp-icon" width="16" />
                Chat General Inquiry
             </a>
         </div>
      </div>

    </div>
  </div>
</template>
