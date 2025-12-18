import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { CONTACT_INFO } from '@/data/content.js'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const isCartOpen = ref(false)

  const addToCart = (product) => {
    const existingItem = items.value.find(item => item.name === product.name)
    if (existingItem) {
      existingItem.quantity++
    } else {
      // Parse price logic: "Rp 45.000" -> 45000
      const rawPrice = parseInt(product.price.replace(/[^0-9]/g, ''))
      items.value.push({
        ...product,
        rawPrice,
        quantity: 1
      })
    }
  }

  const removeFromCart = (productName) => {
    const index = items.value.findIndex(item => item.name === productName)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  const decreaseQuantity = (productName) => {
    const existingItem = items.value.find(item => item.name === productName)
    if (existingItem) {
      if(existingItem.quantity > 1) {
        existingItem.quantity--
      } else {
        removeFromCart(productName)
      }
    }
  }

  const clearCart = () => {
    items.value = []
  }

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value
  }

  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => sum + (item.rawPrice * item.quantity), 0)
  })

  // Format Total Price back to Rp string
  const formattedTotalPrice = computed(() => {
    return 'Rp ' + totalPrice.value.toLocaleString('id-ID')
  })

  const whatsappLink = computed(() => {
    const phone = CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')
    let message = "Hello, I would like to order:\n\n"

    items.value.forEach(item => {
        message += `- ${item.name} (${item.quantity}x) - Rp ${(item.rawPrice * item.quantity).toLocaleString('id-ID')}\n`
    })

    message += `\n*Total: ${formattedTotalPrice.value}*`
    message += "\n\nThank you!"

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  })

  return {
    items,
    isCartOpen,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart,
    toggleCart,
    totalItems,
    totalPrice,
    formattedTotalPrice,
    whatsappLink
  }
})
