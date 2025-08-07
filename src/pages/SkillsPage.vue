<template>
  <div class="min-h-screen py-20">
    <!-- Page Header -->
    <section class="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-10 right-10 w-64 h-64 bg-blue-200/30 dark:bg-blue-700/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200/30 dark:bg-indigo-700/20 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4" data-aos="fade-down">
          My <span class="gradient-text">Skills</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-aos="fade-up">
          AI/ML technologies and data science tools I use to build intelligent systems
        </p>
      </div>
    </section>

    <!-- Skills Categories with Progress Bars -->
    <section class="py-16 bg-white dark:bg-dark-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Illustration -->
          <div class="flex items-center justify-center" data-aos="fade-right">
            <div class="relative w-full max-w-md">
              <img 
                src="/src/assets/images/skills-illustration.svg" 
                alt="Skills illustration"
                class="w-full h-auto"
                onerror="this.src='https://via.placeholder.com/500x500?text=Skills+Illustration'"
              />
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Brain class="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          <!-- Skills Progress -->
          <div class="space-y-8" data-aos="fade-left">
            <div v-for="(category, index) in skillCategories" :key="category.name" 
                 class="space-y-4"
                 :data-aos-delay="index * 100">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <component :is="category.icon" class="w-6 h-6 text-primary-500" />
                {{ category.name }}
              </h3>
              
              <div v-for="skill in category.skills" :key="skill.name" class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-gray-700 dark:text-gray-300 font-medium">{{ skill.name }}</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">{{ skill.level }}%</span>
                </div>
                <div class="relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    class="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full transition-all duration-1500 ease-out skill-progress"
                    :style="{ width: showProgress ? `${skill.level}%` : '0%' }"
                  >
                    <span class="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Skills Grid -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12" data-aos="fade-up">
          Technology <span class="gradient-text">Stack</span>
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div v-for="(tech, index) in technologies" 
               :key="tech.name"
               class="group relative"
               data-aos="zoom-in"
               :data-aos-delay="index * 50">
            <div class="card text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
              <div class="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <img v-if="tech.logo" :src="tech.logo" :alt="tech.name" class="w-full h-full object-contain" />
                <component v-else :is="tech.icon" class="w-full h-full text-primary-500" />
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white">{{ tech.name }}</h4>
              <div class="mt-2 h-1 bg-gradient-to-r from-primary-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            
            <!-- Tooltip -->
            <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {{ tech.description }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications & Achievements -->
    <section class="py-16 bg-white dark:bg-dark-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12" data-aos="fade-up">
          Certifications & <span class="gradient-text">Achievements</span>
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a v-for="(cert, index) in certifications" 
               :key="cert.title"
               :href="cert.url"
               target="_blank"
               rel="noopener noreferrer"
               class="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
               data-aos="flip-left"
               :data-aos-delay="index * 100">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Award class="w-6 h-6 text-primary-500" />
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors">{{ cert.title }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ cert.issuer }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-500 mb-1">{{ cert.date }}</p>
                <p class="text-xs text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">Click to verify certificate</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Code2, Database, Palette, Globe, Server, Cpu, Award, Brain } from 'lucide-vue-next'
import AOS from 'aos'

// Import data from centralized config
import {
  skillCategories,
  technologies,
  certifications
} from '../data/portfolio-data.js'

const showProgress = ref(false)

onMounted(() => {
  setTimeout(() => {
    showProgress.value = true
  }, 500)
  AOS.refresh()
})
</script>

<style scoped>
.skill-progress {
  transition: width 1.5s ease-out;
}
</style>