<template>
  <div id="app" class="app-container">
    <Navbar />

    <main class="main-content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  components: {
    Navbar,
    Footer
  }
})
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
