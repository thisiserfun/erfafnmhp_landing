<template>
  <div class="min-h-screen py-20">
    <!-- Page Header -->
    <section class="relative py-20 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-72 h-72 bg-primary-200/30 dark:bg-primary-700/20 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 dark:bg-purple-700/20 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
      </div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4" data-aos="fade-down">
          About <span class="gradient-text">Me</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-aos="fade-up">
          AI Specialist dedicated to pushing the boundaries of artificial intelligence
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 bg-white dark:bg-dark-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Profile Image Section -->
          <div class="relative" data-aos="fade-right">
            <div class="relative z-10">
              <img 
                src="/src/assets/images/erfan-profile.jpg" 
                alt="Erfan Mohammadpour"
                class="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                onerror="this.src='https://via.placeholder.com/600x400?text=Erfan+Mohammadpour'"
              />
              <div class="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl"></div>
            </div>
            
            <!-- Floating Elements -->
            <div class="absolute top-10 right-0 bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Lightbulb class="w-8 h-8 text-white" />
            </div>
            <div class="absolute bottom-10 left-0 bg-accent-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Rocket class="w-6 h-6 text-white" />
            </div>
          </div>

          <!-- Content Section -->
          <div class="space-y-6" data-aos="fade-left">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              <span class="gradient-text">{{ personalData.name }}</span>
            </h2>
            
            <div class="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p v-for="(paragraph, index) in personalData.fullBio" 
                 :key="index" 
                 data-aos="fade-up" 
                 :data-aos-delay="(index + 1) * 100">
                {{ paragraph }}
              </p>
            </div>

            <!-- Personal Info -->
            <div class="grid md:grid-cols-2 gap-4 pt-6" data-aos="fade-up" data-aos-delay="400">
              <div v-for="info in personalInfo" :key="info.label" class="flex items-center gap-3">
                <component :is="info.icon" class="w-5 h-5 text-primary-500" />
                <div>
                  <span class="text-gray-500 dark:text-gray-400 text-sm">{{ info.label }}</span>
                  <p class="text-gray-900 dark:text-white font-medium">{{ info.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Journey Timeline -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12" data-aos="fade-up">
          My <span class="gradient-text">Journey</span>
        </h2>
        
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-purple-600"></div>
          
          <!-- Timeline Items -->
          <div class="space-y-12">
            <div
              v-for="(item, index) in timeline"
              :key="item.id"
              :class="[
                'flex items-center',
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              ]"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="w-5/12"></div>
              <div class="relative z-10 w-2/12 flex justify-center">
                <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {{ item.year }}
                </div>
              </div>
              <div class="w-5/12">
                <div class="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ item.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-400">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 bg-white dark:bg-dark-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12" data-aos="fade-up">
          What Drives <span class="gradient-text">Me</span>
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(value, index) in values" :key="value.title" 
               class="text-center" 
               data-aos="zoom-in" 
               :data-aos-delay="index * 100">
            <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full flex items-center justify-center group hover:scale-110 transition-transform duration-300">
              <component :is="value.icon" class="w-10 h-10 text-primary-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ value.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { MapPin, Calendar, GraduationCap, Briefcase, Heart, Target, Lightbulb, Rocket, Users, Code, Trophy, Shield, Cpu } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import AOS from 'aos'

// Import data from centralized config
import {
  personalInfo as personalData,
  timeline,
  personalValues as values
} from '../data/portfolio-data.js'

const personalInfo = [
  { icon: MapPin, label: 'Location', value: personalData.location },
  { icon: GraduationCap, label: 'Education', value: personalData.university },
  { icon: Briefcase, label: 'Specialization', value: personalData.title.replace(' & ', '/').replace('Backend Developer', 'Backend Dev') },
  { icon: Trophy, label: 'Achievement', value: 'World Olympiad Participant' }
]

onMounted(() => {
  AOS.refresh()
})
</script>