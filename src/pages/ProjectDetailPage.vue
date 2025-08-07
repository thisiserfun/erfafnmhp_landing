<template>
  <div class="min-h-screen py-20">
    <!-- Project Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-72 h-72 bg-primary-200/30 dark:bg-primary-700/20 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-accent-200/30 dark:bg-accent-700/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Project Image -->
          <div class="relative" data-aos="fade-right">
            <div class="relative z-10">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                :onerror="`this.src='https://via.placeholder.com/600x400?text=${project.title}'`"
              />
              <div class="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl"></div>
            </div>
          </div>

          <!-- Project Info -->
          <div class="space-y-6" data-aos="fade-left">
            <div class="flex items-center gap-3">
              <span class="px-4 py-2 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border border-primary-500/50 text-primary-600 rounded-full text-sm font-medium">
                {{ project.category }}
              </span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {{ project.title }}
            </h1>
            
            <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="space-y-3">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Technologies Used</h3>
              <div class="flex flex-wrap gap-3">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-4 pt-4">
              <button 
                v-if="project.liveUrl"
                class="btn-primary inline-flex items-center gap-2"
                @click="openLink(project.liveUrl)"
              >
                <Globe class="w-5 h-5" />
                View Live
              </button>
              <button 
                v-if="project.githubUrl"
                class="btn-secondary inline-flex items-center gap-2"
                @click="openLink(project.githubUrl)"
              >
                <Github class="w-5 h-5" />
                View Code
              </button>
              <router-link 
                to="/projects" 
                class="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all inline-flex items-center gap-2"
              >
                <ArrowLeft class="w-5 h-5" />
                Back to Projects
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details -->
    <section class="py-16 bg-white dark:bg-dark-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Key Features -->
          <div class="lg:col-span-2 space-y-8">
            <div data-aos="fade-up">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
              <div class="space-y-4">
                <div
                  v-for="feature in project.features"
                  :key="feature"
                  class="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/10 dark:to-accent-900/10 rounded-lg"
                >
                  <CheckCircle class="w-6 h-6 text-primary-500 mt-0.5" />
                  <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
                </div>
              </div>
            </div>

            <!-- Technical Challenges -->
            <div data-aos="fade-up" data-aos-delay="100">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Technical Implementation</h2>
              <div class="prose dark:prose-invert max-w-none">
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ project.technicalDetails || 'This project showcases advanced backend development and system architecture principles, implementing scalable solutions with modern technologies and best practices.' }}
                </p>
              </div>
            </div>
          </div>

          <!-- Project Sidebar -->
          <div class="space-y-6" data-aos="fade-left">
            <!-- Project Stats -->
            <div class="card">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Project Details</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Category</span>
                  <span class="font-medium text-gray-900 dark:text-white">{{ project.category }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Status</span>
                  <span class="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm rounded">
                    {{ project.status || 'Completed' }}
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Year</span>
                  <span class="font-medium text-gray-900 dark:text-white">{{ project.year || '2024' }}</span>
                </div>
              </div>
            </div>

            <!-- Related Projects -->
            <div class="card">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Projects</h3>
              <div class="space-y-3">
                <div 
                  v-for="related in relatedProjects" 
                  :key="related.id"
                  class="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
                  @click="$router.push(`/projects/${related.id}`)"
                >
                  <component :is="related.icon" class="w-8 h-8 text-primary-500" />
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white text-sm">{{ related.title }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ related.category }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { CheckCircle, Globe, Github, ArrowLeft, Shield, DollarSign, Tv, GraduationCap, Gamepad, Brain, TrendingUp, Bitcoin, Coins, Link, Star, Trophy, Cpu, Server } from 'lucide-vue-next'
import AOS from 'aos'

// Import projects from centralized data
import { allProjects } from '../data/portfolio-data.js'

const route = useRoute()
const router = useRouter()

// Get project based on route param
const project = computed(() => {
  const id = parseInt(route.params.id)
  const foundProject = allProjects.find(p => p.id === id)
  
  // If project not found, redirect to projects page
  if (!foundProject) {
    router.push('/projects')
    return allProjects[0]
  }
  
  // Transform project data for the component
  return {
    ...foundProject,
    technologies: foundProject.tech,
    technicalDetails: foundProject.longDescription,
    status: foundProject.liveUrl ? 'Live' : 'Completed',
    year: getProjectYear(foundProject)
  }
})

// Get project year based on category or default
const getProjectYear = (project) => {
  const yearMap = {
    'Blockchain/DeFi': '2024',
    'Blockchain/Real Estate': '2024',
    'DeFi/Asset Management': '2024',
    'Blockchain/Gold': '2024',
    'Fintech/DeFi': '2024',
    'AI Trading': '2024',
    'Streaming': '2023',
    'Education': '2023',
    'Government': '2022',
    'Event Platform': '2022',
    'Enterprise': '2023',
    'Blockchain': '2023',
    'Entertainment': '2023',
    'AI/ML': '2024',
    'IoT': '2023'
  }
  return yearMap[project.category] || '2024'
}

// Get related projects from same category
const relatedProjects = computed(() => {
  return allProjects
    .filter(p => {
      // Find projects with similar categories
      const currentCat = project.value.category.toLowerCase()
      const pCat = p.category.toLowerCase()
      return p.id !== project.value.id && (
        pCat.includes(currentCat.split('/')[0]) ||
        currentCat.includes(pCat.split('/')[0])
      )
    })
    .slice(0, 3)
    .map(p => ({
      ...p,
      icon: getProjectIcon(p)
    }))
})

// Get appropriate icon for project
const getProjectIcon = (project) => {
  const iconMap = {
    'blockchain': DollarSign,
    'defi': DollarSign,
    'gold': Shield,
    'ai': Brain,
    'streaming': Tv,
    'education': GraduationCap,
    'government': Shield,
    'entertainment': Trophy,
    'enterprise': Server,
    'iot': Cpu,
    'fintech': DollarSign,
    'event': Star
  }
  
  const category = project.category.toLowerCase()
  for (const [key, icon] of Object.entries(iconMap)) {
    if (category.includes(key)) {
      return icon
    }
  }
  return Star
}

const openLink = (url) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

onMounted(() => {
  AOS.refresh()
  window.scrollTo(0, 0)
})
</script>