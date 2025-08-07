<template>
  <div id="app" class="min-h-screen bg-white dark:bg-dark-bg">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
    <Chatbot />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Chatbot from './components/Chatbot.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  })
})
</script>
