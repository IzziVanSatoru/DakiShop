import { defineStore } from 'pinia'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),
  actions: {
    addToCart(item: CartItem) {
      const existing = this.items.find(i => i.id === item.id)
      if (existing) {
        existing.quantity += item.quantity
      } else {
        this.items.push({ ...item })
      }
    },
    removeFromCart(id: number) {
      this.items = this.items.filter(item => item.id !== id)
    },
    clearCart() {
      this.items = []
    }
  },
  getters: {
    totalItems(state) {
      return state.items.reduce((sum, item) => sum + item.quantity, 0)
    },
    totalPrice(state) {
      return state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    }
  }
})
