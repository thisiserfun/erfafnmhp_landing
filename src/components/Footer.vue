<template>
  <footer class="bg-gray-900 dark:bg-black text-white">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1">
          <div class="flex items-center mb-4">
            <img src="/logo.svg" alt="ErfanMhp Logo" class="h-8 w-auto" />
          </div>
          <p class="text-gray-400 text-sm">
            AI Specialist creating intelligent solutions for tomorrow's challenges.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <a 
                :href="link.href" 
                class="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- AI Specializations -->
        <div>
          <h4 class="font-semibold mb-4">AI Specializations</h4>
          <ul class="space-y-2">
            <li v-for="specialization in aiSpecializations" :key="specialization">
              <span class="text-gray-400 text-sm">{{ specialization }}</span>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="font-semibold mb-4">Stay Updated</h4>
          <p class="text-gray-400 text-sm mb-4">
            Subscribe to get the latest updates and projects.
          </p>
          <form @submit.prevent="handleSubscribe" class="flex gap-2">
            <input
              type="email"
              v-model="email"
              placeholder="Your email"
              required
              class="flex-1 px-3 py-2 bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              class="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg text-sm font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <!-- Copyright -->
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Erfan Mohammadpour. All rights reserved.
          </p>

          <!-- Social Links -->
          <div class="flex gap-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-4 h-4 text-gray-400 hover:text-primary-400" />
            </a>
          </div>

          <!-- Back to Top -->
          <button
            @click="scrollToTop"
            class="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm"
          >
            <ChevronUp class="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ChevronUp } from 'lucide-vue-next'

// Import data from centralized config
import {
  socialLinks as socials,
  aiSpecializations,
  navigationItems
} from '../data/portfolio-data.js'

const email = ref('')
const currentYear = computed(() => new Date().getFullYear())

// Transform navigation items for quick links
const quickLinks = navigationItems.slice(0, 5).map(item => ({
  name: item.name,
  href: item.path === '/' ? '#home' : `#${item.name.toLowerCase()}`
}))

const handleSubscribe = () => {
  console.log('Subscribing email:', email.value)
  email.value = ''
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>