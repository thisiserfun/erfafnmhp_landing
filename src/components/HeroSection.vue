<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-bg dark:to-gray-900">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style="animation-delay: 3s;"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div class="space-y-8">
        <!-- Profile Image or Avatar -->
        <div class="relative inline-block">
          <div class="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-purple-600 p-1 animate-pulse-slow">
            <div class="w-full h-full rounded-full bg-white dark:bg-dark-bg flex items-center justify-center">
              <span class="text-4xl md:text-5xl font-bold gradient-text">EM</span>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="space-y-6">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white animate-slide-up">
            Hello, I am <span class="gradient-text">Erfan Mohammadpour</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.2s;">
            A passionate developer and tech enthusiast
          </p>

          <!-- Typing Animation -->
          <div class="text-lg md:text-xl text-gray-500 dark:text-gray-500 animate-fade-in" style="animation-delay: 0.4s;">
            <span>I build </span>
            <span class="font-semibold text-primary-500">{{ currentText }}</span>
            <span class="animate-pulse">|</span>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style="animation-delay: 0.6s;">
          <a href="#cv" class="btn-primary inline-flex items-center gap-2">
            <ArrowDownTrayIcon class="w-5 h-5" />
            Download CV
          </a>
          <a href="#projects" class="btn-secondary inline-flex items-center gap-2">
            <FolderOpenIcon class="w-5 h-5" />
            See My Projects
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-4 animate-fade-in" style="animation-delay: 0.8s;">
          <a 
            v-for="social in socials" 
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-110"
            :aria-label="social.name"
          >
            <component :is="social.icon" class="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </a>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon class="w-8 h-8 text-gray-400 dark:text-gray-600" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowDownTrayIcon, FolderOpenIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { Github, Linkedin, Mail, Twitter } from 'lucide-vue-next'

const currentText = ref('')
const texts = ['modern web applications', 'innovative solutions', 'user experiences', 'clean code']
let textIndex = 0
let charIndex = 0
let isDeleting = false
let typingSpeed = 100

const socials = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/erfanmhp' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/erfanmhp' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/erfanmhp' },
  { name: 'Email', icon: Mail, url: 'mailto:erfan@example.com' }
]

const typeWriter = () => {
  const currentWord = texts[textIndex]
  
  if (isDeleting) {
    currentText.value = currentWord.substring(0, charIndex - 1)
    charIndex--
  } else {
    currentText.value = currentWord.substring(0, charIndex + 1)
    charIndex++
  }
  
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true
    typingSpeed = 2000
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    textIndex = (textIndex + 1) % texts.length
    typingSpeed = 100
  } else {
    typingSpeed = isDeleting ? 50 : 100
  }
}

let typingInterval

onMounted(() => {
  typingInterval = setInterval(typeWriter, typingSpeed)
})

onUnmounted(() => {
  clearInterval(typingInterval)
})
</script>