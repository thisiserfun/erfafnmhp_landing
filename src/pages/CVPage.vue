<template>
  <div class="min-h-screen py-20">
    <!-- Page Header -->
    <section class="relative py-20 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-10 left-20 w-80 h-80 bg-purple-200/30 dark:bg-purple-700/20 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-20 right-10 w-64 h-64 bg-pink-200/30 dark:bg-pink-700/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4" data-aos="fade-down">
          My <span class="gradient-text">Resume</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-aos="fade-up">
          Download my professional resume and learn more about my experience
        </p>
      </div>
    </section>

    <!-- AI Research & Skills Overview -->
    <section class="py-16 bg-white dark:bg-dark-bg">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card text-center" data-aos="zoom-in">
          <div class="flex flex-col items-center space-y-8">
            <!-- AI Icon with Animation -->
            <div class="relative group">
              <div class="w-40 h-40 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-20 h-20 text-primary-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" opacity="0.3"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
              </div>
              
              <!-- Floating elements -->
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white animate-bounce">
                <CheckCircle class="w-4 h-4" />
              </div>
            </div>

            <!-- Description -->
            <div class="max-w-2xl space-y-4">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                AI Specialist & Machine Learning Engineer
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-400">
                Explore my comprehensive background in artificial intelligence, machine learning research, 
                and intelligent system development with focus on data science and AI applications.
              </p>
            </div>

            <!-- Download CV Button -->
            <div class="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="200">
              <button
                @click="downloadCV"
                class="group btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 text-lg hover:scale-105"
              >
                <svg class="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v2H4V6zm0 4h12v2H4v-2z"/>
                </svg>
                Download CV (PDF)
                <span class="text-sm opacity-75">Latest Version</span>
              </button>
            </div>

            <!-- Last Updated -->
            <p class="text-sm text-gray-500 dark:text-gray-400 italic">
              <Clock class="inline w-4 h-4 mr-1" />
              Last updated: January 2025
            </p>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div v-for="stat in stats" :key="stat.label" 
               class="text-center"
               data-aos="fade-up"
               :data-aos-delay="stat.delay">
            <div class="text-3xl font-bold gradient-text mb-1">{{ stat.value }}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12" data-aos="fade-up">
          Professional <span class="gradient-text">Journey</span>
        </h2>
        
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-purple-600"></div>
          
          <!-- Timeline Items -->
          <div class="space-y-12">
            <div
              v-for="(item, index) in timeline"
              :key="item.id"
              :class="[
                'relative flex items-center',
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              ]"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="hidden md:block md:w-5/12"></div>
              
              <!-- Timeline Dot -->
              <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-4">
                <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <component :is="item.icon" class="w-4 h-4 text-white" />
                </div>
              </div>
              
              <!-- Content Card -->
              <div class="ml-20 md:ml-0 md:w-5/12">
                <div class="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div class="flex items-start gap-4">
                    <div class="flex-1">
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {{ item.title }}
                      </h3>
                      <p class="text-primary-500 font-medium mb-2">{{ item.company }}</p>
                      <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ item.period }}</p>
                      <p class="text-gray-600 dark:text-gray-400">{{ item.description }}</p>
                      
                      <!-- Skills -->
                      <div class="flex flex-wrap gap-2 mt-3">
                        <span v-for="skill in item.skills" :key="skill"
                              class="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded">
                          {{ skill }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="py-16 bg-white dark:bg-dark-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12" data-aos="fade-up">
          Education & <span class="gradient-text">Training</span>
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(edu, index) in education" 
               :key="edu.id"
               class="card hover:shadow-2xl transition-all duration-300"
               data-aos="flip-left"
               :data-aos-delay="index * 100">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap class="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">{{ edu.degree }}</h3>
                <p class="text-primary-500 font-medium mb-2">{{ edu.institution }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ edu.period }}</p>
                <p class="text-gray-600 dark:text-gray-400">{{ edu.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Briefcase, GraduationCap, Award, Clock, CheckCircle } from 'lucide-vue-next'
import AOS from 'aos'

// Import data from centralized config
import {
  cvStats as stats,
  workExperience,
  education as educationData
} from '../data/portfolio-data.js'

// Transform work experience for timeline
const timeline = workExperience.map(job => ({
  ...job,
  icon: Briefcase,
  skills: job.technologies || []
}))

// Transform education data
const education = educationData.map(edu => ({
  ...edu,
  degree: edu.degree,
  description: edu.achievements ? edu.achievements.join('. ') : edu.description
}))

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/cv/Erfan-Mohammadpour-CV.pdf'
  link.download = 'Erfan-Mohammadpour-CV.pdf'
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>