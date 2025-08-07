<template>
  <div class="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>