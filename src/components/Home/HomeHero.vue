    <script setup>

    import { ref, onMounted } from "vue";

    import heroBg from '@/assets/img/hero-bg.png'
    import rendangImg from '@/assets/img/rendang.png'
    import tumpengImg from '@/assets/img/tumpeng.png'
    import orangesImg from '@/assets/img/oranges.png'

    import productMockup1 from '@/assets/img/product-mockup-1.png'
    import productMockup2 from '@/assets/img/product-mockup-2.png'
    import productMockup3 from '@/assets/img/product-mockup-3.png'
    import productMockup4 from '@/assets/img/product-mockup-4.png'

    import { Icon } from "@iconify/vue";

    const menuItems = [
        {
            name: 'Rendang',
            desc: 'Authentic Minang-style beef, slow-cooked in coconut milk and spices.',
            price: 'Rp 45.000',
            images: [productMockup1, productMockup4, productMockup3, productMockup2],
        },
        {
            name: 'Tumpeng',
            desc: 'Traditional cone-shaped rice with assorted side dishes, perfect for celebrations.',
            price: 'Rp 350.000',
            images: [productMockup1, productMockup4, productMockup3, productMockup2],
        },
        {
            name: 'Kasturi Orange',
            desc: 'Refreshing kasturi orange drink, zesty and packed with vitamin C.',
            price: 'Rp 15.000',
            images: [productMockup1, productMockup4, productMockup3, productMockup2],
        },
        {
            name: 'Telang Jelly Tea',
            desc: 'Vibrant butterfly pea flower tea with refreshing jelly twist.',
            price: 'Rp 18.000',
            images: [productMockup1, productMockup4, productMockup3, productMockup2],
        },
        {
            name: 'Sate Padang',
            desc: 'Skewered beef satay served with thick, savory, spicy sauce — a true Padang specialty.',
            price: 'Rp 30.000',
            images: [productMockup1, productMockup4, productMockup3, productMockup2],
        },
        {
            name: 'Ayam Bakar Madu',
            desc: 'Grilled chicken marinated in honey and spices, tender and smoky with a sweet glaze.',
            price: 'Rp 40.000',
            images: [productMockup1, productMockup4, productMockup3, productMockup2],
        },
        {
            name: 'Es Cendol',
            desc: 'Refreshing Indonesian iced dessert with pandan jelly, coconut milk, and palm sugar syrup.',
            price: 'Rp 12.000',
            images: [productMockup1, productMockup4, productMockup3, productMockup2],
        },
        {
            name: 'Kue Lapis Legit',
            desc: 'Traditional layered cake with rich butter and spice flavor, perfect for special occasions.',
            price: 'Rp 25.000',
            images: [productMockup1, productMockup4, productMockup3, productMockup2],
        },
    ]

    const testimonyItems = [
        {
            name: "Dimas Skibidi",
            role: "Bapak Rumah Tangga",
            img: "https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp",
            text: "Mantab banget, ngga ada obat. Enak pakai banget!!!"
        },
        {
            name: "Aulia Rahman",
            role: "Mahasiswa",
            img: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
            text: "Harga bersahabat, rasa mantap jiwa. Recommended banget pokoknya!"
        },
        {
            name: "Siti Marlina",
            role: "Guru",
            img: "https://img.daisyui.com/images/profile/demo/distracted3@192.webp",
            text: "Cateringnya selalu fresh dan rapi. Anak-anak di sekolah suka semua."
        },
        {
            name: "Budi Santoso",
            role: "Wiraswasta",
            img: "https://img.daisyui.com/images/profile/demo/distracted1@192.webp",
            text: "Paketannya praktis, ngga ribet. Event jadi lebih lancar."
        },
        {
            name: "Jenny",
            role: "Content Creator",
            img: "https://img.daisyui.com/images/profile/demo/distracted2@192.webp",
            text: "Selain enak, plating-nya aesthetic banget. Cocok buat konten juga!"
        }
    ]

    const activeIndex = ref(0);

    onMounted(() => {
        setInterval(() => {
            activeIndex.value = (activeIndex.value + 1) % testimonyItems.length;
        }, 5000); // ganti tiap 5 detik
    });

</script>

    <template>

        <div class="h-full w-full">

            <!-- <div class="text-4xl font-bold text-yellow-500 text-center mb-10">
                Makasih ya, Dania! :D <br />
                Aku <span class="text-9xl text-pink-900">sayang</span> Kamu!!!!
            </div> -->


            <!-- Hero -->
            <div class="h-[calc(100vh-8rem)] rounded-3xl mb-10">
                <div class="hero h-full rounded-3xl relative overflow-hidden"
                    :style="{ backgroundImage: `url(${heroBg})` }">

                    <div class="hero-overlay rounded-3xl"></div>

                    <!-- Teks di atas, agak ke kiri -->
                    <div class="absolute top-12 left-6 sm:top-24 sm:left-24 max-w-xl text-left text-neutral-content">
                        <h1 class="text-2xl md:text-4xl mb-3">
                            Struggling to find the <span class="font-bold text-shadow-lg/50">perfect catering</span> for
                            your events?
                        </h1>
                        <p class="text-lg md:text-xl">
                            Let us take care of your food, so you can enjoy the moment!
                        </p>
                    </div>

                    <!-- Gambar Tumpeng -->
                    <img :src="tumpengImg" alt="Tumpeng" class="absolute bottom-0 left-0 w-40 sm:w-96" />

                    <!-- Gambar Rendang -->
                    <img :src="rendangImg" alt="Rendang"
                        class="absolute bottom-0 right-0 w-40 sm:w-128 translate-x-8 translate-y-6 sm:translate-x-20 sm:translate-y-15" />
                </div>
            </div>

            <!-- Section Break - Orange Image -->
            <div class="bg-emerald-600 pb-2 rounded-2xl mb-10">
                <div class="bg-yellow-400 rounded-xl flex py-4">
                    <div class="flex my-2 ml-2 mr-5 mt-4 sm:mr-10">
                        <!-- Gambar Oranges -->
                        <img :src="orangesImg" alt="Oranges" class="h-16 sm:w-20" />
                    </div>
                    <div class="flex flex-5">
                        <div class="flex flex-col justify-center">
                            <div class="text-sm sm:text-2xl text-emerald-800"><span class="font-bold">Homemade</span>
                                Delights for
                                Every
                                Occasion.</div>
                            <div class="text-xs sm:text-base text-emerald-800">From savory meals to delightful snacks
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
                                    <Icon color="white" icon="material-symbols:food-bank-rounded" width="72"
                                        height="72" />
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
                                        <Icon color="white" icon="streamline-ultimate:fast-food-french-fries" width="56"
                                            height="64" />
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
                                        <Icon color="white" icon="material-symbols:food-bank-rounded" width="72"
                                            height="72" />
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
                                    <Icon color="white" icon="streamline-ultimate:fast-food-french-fries" width="56"
                                        height="64" />
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

            <div class="flex-col mb-10">
                <div class="flex-col bg-base-100 rounded-t-lg">
                    <div class="text-xl sm:text-5xl font-light p-5">
                        Explore Our <span class="text-emerald-800 font-medium">Catering</span> Menu
                    </div>
                    <div class="text-xs lg:text-base pb-5 pl-6 pr-2">
                        A variety of flavorful dishes crafted to make your events unforgettable. Choose from our
                        signature
                        offerings and let us serve you with love.
                    </div>
                </div>
                <div class="bg-emerald-600 rounded-b-lg">
                    <div class="flex-col">
                        <div class="text-md lg:text-base pl-6 py-5">
                            Freshly prepared and ready to delight your taste buds. Here's what we're serving today
                        </div>
                        <div class="px-6 pb-5">
                            <!-- Carousel or else for the menu with menu name, photos, short description, and price  -->
                            <div class="carousel gap-5 w-full">
                                <div v-for="(menu, idx) in menuItems" :key="idx" class="carousel-item flex-none">
                                    <div class="card card-sm sm:card-md shadow-lg w-55 bg-base-100">

                                        <!-- Hover Gallery -->
                                        <figure
                                            class="flex justify-items-center hover-gallery min-w-30 sm:min-w-40 bg-slate-300 px-8 pb-5">
                                            <img v-for="(img, i) in menu.images" :key="i" :src="img" :alt="menu.name"
                                                class="w-20 sm:w-30" />
                                        </figure>

                                        <!-- Content -->
                                        <div class="card-body p-0">
                                            <h2 class="card-title py-5 px-5">{{ menu.name }}</h2>
                                            <p class="px-5">{{ menu.desc }}</p>
                                            <div>
                                                <div class="card-actions justify-start pb-5 pl-5">
                                                    <span class="text-xl font-bold text-emerald-700">{{ menu.price
                                                    }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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


        </div>
    </template>
<style scoped></style>