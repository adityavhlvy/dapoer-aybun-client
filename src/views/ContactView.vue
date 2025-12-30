<script setup>
import { CONTACT_INFO } from '@/data/content.js'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Hubungi Kami',
  meta: [
    { name: 'description', content: 'Alamat dan kontak Dapoer Aybun. Siap melayani pesanan katering Anda di Padang dan sekitarnya.' },
  ],
})
</script>

<template>
  <div class="py-10 px-4 sm:px-10 bg-base-100 min-h-screen">
    <div class="max-w-6xl mx-auto">
       <div class="text-center mb-10">
            <h1 class="text-4xl font-light">Get in <span class="font-bold text-emerald-800">Touch</span></h1>
            <p class="py-4">We'd love to hear from you. Reach out to us for any inquiries.</p>
       </div>

       <div class="flex flex-col lg:flex-row gap-10">
          <!-- Information -->
          <div class="flex-1 space-y-8">
              <div class="card bg-base-200 shadow-lg">
                <div class="card-body">
                    <h2 class="card-title text-emerald-800 border-b pb-2 mb-4">Contact Information</h2>

                    <div class="space-y-4">
                        <div>
                            <h3 class="font-bold text-sm">Address</h3>
                            <p>{{ CONTACT_INFO.address }}</p>
                        </div>
                        <div>
                            <h3 class="font-bold text-sm">Phone / WhatsApp</h3>
                            <p class="font-mono text-lg">{{ CONTACT_INFO.phone }}</p>
                        </div>
                        <div>
                            <h3 class="font-bold text-sm">Email</h3>
                            <p>{{ CONTACT_INFO.email }}</p>
                        </div>
                         <div>
                            <h3 class="font-bold text-sm">Operation Hours</h3>
                            <p>{{ CONTACT_INFO.hours.weekdays }}</p>
                            <p>{{ CONTACT_INFO.hours.sunday }}</p>
                        </div>
                    </div>
                </div>
              </div>
          </div>

          <!-- Map -->
          <div class="flex-1 h-96 lg:h-auto min-h-[400px] rounded-box overflow-hidden shadow-lg relative bg-gray-200">
               <!-- Example Embed Map -->
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.17067824855!2d100.3524581!3d-0.9169639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b942e2b117bb%3A0x5a3174296c00510d!2sJl.%20Jend.%20Sudirman%2C%20Padang%2C%20Sumatera%20Barat!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
          </div>
       </div>
    </div>
  </div>
</template>
