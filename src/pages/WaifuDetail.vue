<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Detail Semua Waifu Basah</h2>

    <div class="row g-4">
      <div class="col-md-6 col-lg-3" v-for="waifu in waifus" :key="waifu.id">
        <WaifuCard :waifu="waifu" />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import WaifuCard from '../components/WaifuCard.vue'
import type { Waifu } from '../components/WaifuCard.vue'

export default defineComponent({
  components: { WaifuCard },
  setup() {
    const waifus = ref<Waifu[]>([])

    onMounted(async () => {
      try {
        const res = await fetch('/Daki.json')
        const data: Waifu[] = await res.json()
        // Ambil hanya 4 waifu
        waifus.value = data.slice(0, 4)
      } catch (error) {
        console.error('Gagal load Daki.json:', error)
      }
    })

    return { waifus }
  }
})
</script>

<style scoped>
/* Styling opsional */
</style>
