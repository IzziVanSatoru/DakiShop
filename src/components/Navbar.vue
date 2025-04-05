<template>
  <nav style="padding: 1rem; background: #f8f9fa; display: flex; justify-content: space-between; align-items: center;">
    <router-link to="/" style="text-decoration: none; font-weight: bold; font-size: 1.5rem; color: black;">
      DakiShop
    </router-link>
    <div style="display: flex; gap: 1rem;">
      <router-link to="/" style="text-decoration: none; color: black;">Home</router-link>
      <router-link to="/waifu/1" style="text-decoration: none; color: black;">Waifu Detail</router-link>
      <router-link to="/checkout" style="text-decoration: none; color: black;">Checkout</router-link>
      <router-link to="/about" style="text-decoration: none; color: black;">About</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
router-link {
  font-size: 1rem;
}
router-link:hover {
  text-decoration: underline;
}
</style>
