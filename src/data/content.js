
import productMockup1 from '@/assets/img/product-mockup-1.PNG'
import productMockup2 from '@/assets/img/product-mockup-2.PNG'
import productMockup3 from '@/assets/img/product-mockup-3.PNG'
import productMockup4 from '@/assets/img/product-mockup-4.PNG'

export const CONTACT_INFO = {
    phone: '0822-8408-7664',
    whatsapp: '0822-8408-7664',
    address: 'Jalan Jendral Sudirman, Gang Wahidin No.01',
    mapsLink: 'https://maps.app.goo.gl/sqqwWm3BLCxYipUF9',
    email: 'dapoer.aybun@example.com', // Placeholder if not provided
    hours: {
        weekdays: 'Monday - Saturday: 8 AM-8 PM',
        sunday: 'Sunday: 9 AM-6 PM'
    }
}

export const menuItems = [
    {
        name: 'Rendang',
        desc: 'Authentic Minang-style beef, slow-cooked in coconut milk and spices.',
        price: 'Rp 45.000',
        images: [productMockup1, productMockup4, productMockup3, productMockup2],
        category: 'Main Course'
    },
    {
        name: 'Tumpeng',
        desc: 'Traditional cone-shaped rice with assorted side dishes, perfect for celebrations.',
        price: 'Rp 350.000',
        images: [productMockup1, productMockup4, productMockup3, productMockup2],
        category: 'Special'
    },
    {
        name: 'Kasturi Orange',
        desc: 'Refreshing kasturi orange drink, zesty and packed with vitamin C.',
        price: 'Rp 15.000',
        images: [productMockup1, productMockup4, productMockup3, productMockup2],
        category: 'Drinks'
    },
    {
        name: 'Telang Jelly Tea',
        desc: 'Vibrant butterfly pea flower tea with refreshing jelly twist.',
        price: 'Rp 18.000',
        images: [productMockup1, productMockup4, productMockup3, productMockup2],
        category: 'Drinks'
    },
    {
        name: 'Sate Padang',
        desc: 'Skewered beef satay served with thick, savory, spicy sauce — a true Padang specialty.',
        price: 'Rp 30.000',
        images: [productMockup1, productMockup4, productMockup3, productMockup2],
        category: 'Main Course'
    },
    {
        name: 'Ayam Bakar Madu',
        desc: 'Grilled chicken marinated in honey and spices, tender and smoky with a sweet glaze.',
        price: 'Rp 40.000',
        images: [productMockup1, productMockup4, productMockup3, productMockup2],
        category: 'Main Course'
    },
    {
        name: 'Es Cendol',
        desc: 'Refreshing Indonesian iced dessert with pandan jelly, coconut milk, and palm sugar syrup.',
        price: 'Rp 12.000',
        images: [productMockup1, productMockup4, productMockup3, productMockup2],
        category: 'Dessert'
    },
    {
        name: 'Kue Lapis Legit',
        desc: 'Traditional layered cake with rich butter and spice flavor, perfect for special occasions.',
        price: 'Rp 25.000',
        images: [productMockup1, productMockup4, productMockup3, productMockup2],
        category: 'Dessert'
    },
]

export const testimonyItems = [
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

export const activityItems = [
    {
        title: "150 Pax Lunch Box Order",
        date: "2023-10-15",
        desc: "Alhamdulillah, completed an order of 150 lunch boxes for a wedding at the Multipurpose Hall. Menu: Honey Grilled Chicken, Tamarind Soup, Braised Tofu & Tempeh.",
        category: "Order",
        images: ["https://placehold.co/600x400/e2e8f0/1e293b?text=Lunch+Box+1", "https://placehold.co/600x400/e2e8f0/1e293b?text=Lunch+Box+2"]
    },
    {
        title: "Friday Charity Sharing",
        date: "2023-10-20",
        desc: "Regular Friday Blessing activity, distributing 50 lunch packs to the needy and orphans in the neighborhood.",
        category: "Social",
        images: ["https://placehold.co/600x400/dcfce7/166534?text=Charity+1", "https://placehold.co/600x400/dcfce7/166534?text=Charity+2"]
    },
    {
        title: "Independence Day Tumpeng",
        date: "2023-08-17",
        desc: "Special Independence Tumpeng order for the RW 05 competition. Festive and full of spirit!",
        category: "Order",
        images: ["https://placehold.co/600x400/fef3c7/92400e?text=Tumpeng+Indo"]
    },
    {
        title: "Office Meeting Catering",
        date: "2023-11-05",
        desc: "Providing snack boxes and buffet lunch for a local start-up's annual meeting.",
        category: "Order",
        images: ["https://placehold.co/600x400/e0e7ff/3730a3?text=Office+Meeting"]
    }
]
