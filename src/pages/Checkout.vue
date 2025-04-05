<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Keranjang Belanja</h2>

    <div v-if="cart.items.length">
      <ul class="list-group mb-3">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          v-for="item in cart.items"
          :key="item.id"
        >
          <div>
            <strong>{{ item.name }}</strong><br />
            <small>x{{ item.quantity }}</small>
          </div>
          <div class="d-flex align-items-center">
            <span class="me-3">$ {{ item.price * item.quantity }}</span>
            <button class="btn btn-danger btn-sm" @click="removeItem(item.id)">
              &times;
            </button>
          </div>
        </li>
      </ul>

      <div class="text-end">
        <h4>Total: $ {{ cart.totalPrice }}</h4>
        <button class="btn btn-primary mt-3" @click="checkout">
          Checkout Sekarang
        </button>
      </div>
    </div>

    <div v-else class="text-center">
      <p>Keranjang kamu kosong, bro 😔</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '../store/cartStore.ts'

export default defineComponent({
  setup() {
    const cart = useCartStore()

    const removeItem = (id: number) => {
      cart.removeFromCart(id)
    }

    const checkout = () => {
      alert('Terima kasih sudah checkout dakimura premium, brooo 🛒🔥')
      cart.clearCart()
    }

    return { cart, removeItem, checkout }
  }
})
</script>

<style scoped>
/* Tambahan gaya kecil */
.list-group-item {
  font-size: 0.95rem;
}
</style>
