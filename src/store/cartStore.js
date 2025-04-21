import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    itemCount: state => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },
    totalPrice: state => {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  actions: {
    addItem(item) {
      const existingItem = this.items.find(i => i.id === item.id)
      if (existingItem) {
        existingItem.quantity += item.quantity
      } else {
        this.items.push(item)
      }
    },
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id)
    },
    clearCart() {
      this.items = []
    }
  }
})
