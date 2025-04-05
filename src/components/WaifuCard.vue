<template>
  <div class="card h-100 shadow-sm">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ waifu.name }}</h5>
      <p class="card-text small">{{ waifu.description }}</p>
      <div class="mt-auto">
        <p class="fw-bold text-primary">$ {{ waifu.price }}</p>
        <button class="btn btn-success w-100 mt-2" @click="buyWaifu">
          Beli Sekarang
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useCartStore } from '../store/cartStore.ts'
import { useRouter } from 'vue-router'

export interface Waifu {
  id: number
  name: string
  description: string
  image: string
  price: number
}

export default defineComponent({
  props: {
    waifu: {
      type: Object as PropType<Waifu>,
      required: true
    }
  },
  setup(props) {
    const cart = useCartStore()
    const router = useRouter()

    const buyWaifu = () => {
      cart.addToCart({
        id: props.waifu.id,
        name: props.waifu.name,
        price: props.waifu.price,
        quantity: 1
      })
      alert(`Berhasil beli ${props.waifu.name}!`)
      router.push('/')
    }

    return { buyWaifu }
  }
})
</script>

<style scoped>
.card {
  min-height: 320px;
}
</style>
