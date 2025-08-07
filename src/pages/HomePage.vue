<template>
  <div>
    <!-- Hero Section with Cool Animations -->
    <section class="relative min-h-screen pt-20 bg-gradient-to-br from-dark-bg via-primary-900/20 to-dark-bg overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <!-- Animated Grid -->
        <div class="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
        
        <!-- Floating Orbs -->
        <div class="absolute top-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-blob"></div>
        <div class="absolute top-40 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-20 left-1/2 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="text-left space-y-6">
            <div class="inline-block animate-slide-down">
              <span class="px-4 py-2 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border border-primary-500/50 text-primary-300 rounded-full text-sm font-medium backdrop-blur-sm">
                <Code2 class="inline w-4 h-4 mr-2" />
                {{ personalInfo.title }}
              </span>
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-slide-up">
              {{ personalInfo.name }}
            </h1>
            
            <p class="text-xl text-gray-300 leading-relaxed animate-fade-in animation-delay-200">
              {{ personalInfo.shortBio }} in intelligent systems, scalable architectures, 
              and enterprise applications. Specializing in Python, Machine Learning, PHP/Laravel, and microservices. 
              Certified by IBM, Google, and Stanford University in AI/ML technologies.
            </p>

            <div class="flex flex-wrap gap-4 animate-slide-up animation-delay-400">
              <router-link to="/projects" class="btn-primary inline-flex items-center gap-2 group">
                <Briefcase class="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View Portfolio
              </router-link>
              <router-link to="/cv" class="btn-secondary inline-flex items-center gap-2 group">
                <FileText class="w-5 h-5 group-hover:scale-110 transition-transform" />
                Download CV
              </router-link>
            </div>

            <!-- Social Links -->
            <div class="flex gap-4 pt-4 animate-fade-in animation-delay-600">
              <a v-for="social in socials" :key="social.name"
                 :href="social.url" target="_blank" rel="noopener noreferrer"
                 class="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-400 transition-all hover:scale-110">
                <component :is="social.icon" class="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>

          <!-- Right Content - Animated Code Display -->
          <div class="relative animate-float">
            <div class="relative w-full max-w-lg mx-auto">
              <!-- Code Terminal Animation -->
              <div class="bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-700 p-6 shadow-2xl">
                <div class="flex items-center gap-2 mb-4">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="ml-4 text-gray-400 text-sm">terminal</span>
                </div>
                <div class="font-mono text-sm">
                  <div class="text-accent-400">$ <span class="text-white">whoami</span></div>
                  <div class="text-gray-400 mt-2 typing-animation">{{ typedText }}</div>
                  <div class="text-accent-400 mt-4">$ <span class="text-white">skills --list</span></div>
                  <div class="text-gray-400 mt-2">
                    <span v-for="(skill, index) in displayedSkills" :key="index" 
                          class="inline-block mr-2 mb-2 px-2 py-1 bg-primary-600/20 border border-primary-500/30 rounded text-xs animate-slide-up"
                          :style="`animation-delay: ${index * 100}ms`">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Summary -->
    <section class="py-20 bg-white dark:bg-dark-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <Brain class="w-8 h-8 text-primary-500" />
            Professional Summary
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div class="max-w-4xl mx-auto">
          <p v-for="(paragraph, index) in personalInfo.professionalSummary" :key="index" 
             class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-center">
            {{ paragraph }}
          </p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div v-for="stat in quickStats" :key="stat.label" 
                 class="text-center bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/10 dark:to-accent-900/10 p-4 rounded-lg group hover:scale-105 transition-transform">
              <component :is="stat.icon" class="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <div class="text-3xl font-bold gradient-text">{{ stat.value }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Expertise -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <Cpu class="w-8 h-8 text-accent-500" />
            Technical Expertise
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(category, index) in skillCategories" :key="category.title" 
               class="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg flex items-center justify-center mb-4">
              <component :is="category.icon" class="w-6 h-6 text-primary-500" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ category.title }}</h3>
            <ul class="space-y-2">
              <li v-for="skill in category.skills" :key="skill" 
                  class="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center mt-8">
          <router-link to="/skills" class="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center gap-2 group">
            View All Skills 
            <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Key Projects -->
    <section class="py-20 bg-white dark:bg-dark-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <Star class="w-8 h-8 text-primary-500" />
            Key Projects
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(project, index) in featuredProjects" :key="project.id"
               class="group bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
            <div class="h-52 bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex items-center justify-center">
              <component :is="project.icon" class="w-16 h-16 text-primary-500/50" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.tech" :key="tech" 
                      class="px-2 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 text-xs rounded text-gray-700 dark:text-white">
                  {{ tech }}
                </span>
              </div>
              <router-link to="/projects" class="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center gap-1 group">
                View Details <ExternalLink class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </router-link>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link to="/projects" class="btn-primary inline-flex items-center gap-2 group">
            View All Projects 
            <ArrowRightIcon class="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Work Experience -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <Briefcase class="w-8 h-8 text-accent-500" />
            Work Experience
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div class="max-w-4xl mx-auto space-y-8">
          <div v-for="job in workExperience" :key="job.id" 
               class="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-200 dark:border-gray-700">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase class="w-6 h-6 text-primary-500" />
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ job.title }}</h3>
                <p class="text-primary-500 font-medium">{{ job.company }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ job.period }}</p>
                <ul class="space-y-2">
                  <li v-for="task in job.tasks" :key="task" 
                      class="text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <CheckCircle class="w-4 h-4 text-accent-500 mt-0.5" />
                    <span>{{ task }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education & Achievements -->
    <section class="py-20 bg-white dark:bg-dark-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <GraduationCap class="w-8 h-8 text-primary-500" />
            Education & Achievements
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div v-for="edu in education" :key="edu.id" 
               class="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/10 dark:to-accent-900/10 rounded-xl p-6 hover:scale-105 transition-transform">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-white dark:bg-dark-card rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap class="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">{{ edu.school }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ edu.period }}</p>
                <ul class="space-y-2">
                  <li v-for="achievement in edu.achievements" :key="achievement" 
                      class="text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <Trophy class="w-4 h-4 text-yellow-500 mt-0.5" />
                    <span class="text-sm">{{ achievement }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Let's Build Something Amazing Together
        </h2>
        <p class="text-xl text-white/90 mb-8">
          Ready to transform your ideas into scalable solutions? Let's discuss your project.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center gap-2">
            <MessageSquare class="w-5 h-5" />
            Start a Project
          </router-link>
          <a href="mailto:thisiserfun@gmail.com" class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all hover:scale-105 inline-flex items-center gap-2">
            <Mail class="w-5 h-5" />
            Email Me Directly
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { Code2, Server, Database, Globe, Briefcase, FileText, Cpu, Brain, ExternalLink, GraduationCap, Trophy, DollarSign, Shield, Star, CheckCircle, MessageSquare, Calendar, Award, Mail } from 'lucide-vue-next'

// Import all data from centralized config
import {
  personalInfo,
  socialLinks,
  quickStats,
  homeSkillCategories as skillCategories,
  featuredProjects,
  workExperience,
  education as educationData
} from '../data/portfolio-data.js'

// Use imported data
const socials = socialLinks

// Transform education data for the component
const education = educationData.map(edu => ({
  id: edu.id,
  school: edu.institution,
  period: edu.period,
  achievements: edu.achievements || [edu.description]
}))

// Typing animation
const typedText = ref('')
const fullText = personalInfo.typingTexts
const displayedSkills = ref([])
const allSkills = personalInfo.animatedSkills

let typingIndex = 0
let skillIndex = 0

onMounted(() => {
  // Typing animation
  const typeInterval = setInterval(() => {
    if (typingIndex < fullText.length) {
      typedText.value += fullText[typingIndex]
      typingIndex++
    } else {
      clearInterval(typeInterval)
    }
  }, 50)

  // Skills animation
  const skillInterval = setInterval(() => {
    if (skillIndex < allSkills.length) {
      displayedSkills.value.push(allSkills[skillIndex])
      skillIndex++
    } else {
      clearInterval(skillInterval)
    }
  }, 200)
})
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out;
}

.animate-slide-down {
  animation: slide-down 0.6s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.bg-grid-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>