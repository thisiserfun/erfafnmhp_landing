<template>
  <section id="projects" class="section-padding bg-white dark:bg-dark-bg">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured <span class="gradient-text">Projects</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-12" data-aos="fade-up">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="activeFilter = filter"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-all duration-300',
            activeFilter === filter 
              ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          ]"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group relative card overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
          data-aos="fade-up"
          :data-aos-delay="project.delay"
          @click="openProject(project)"
        >
          <!-- Project Image -->
          <div class="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20">
            <img 
              v-if="project.image"
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <component :is="project.icon" class="w-16 h-16 text-primary-500/30" />
            </div>
            
            <!-- Overlay on Hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-4 left-6 right-6">
                <span class="text-white text-sm">Click to view details</span>
              </div>
            </div>
          </div>

          <!-- Project Info -->
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 line-clamp-2">
                {{ project.description }}
              </p>
            </div>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                v-if="project.github"
                :href="project.github"
                @click.stop
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Github class="w-4 h-4" />
                <span class="text-sm">Code</span>
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                @click.stop
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
              >
                <ExternalLink class="w-4 h-4" />
                <span class="text-sm">Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12" data-aos="fade-up">
        <button class="btn-secondary">
          Load More Projects
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Github, ExternalLink, Globe, ShoppingCart, MessageSquare, Play, Users, Briefcase } from 'lucide-vue-next'

const activeFilter = ref('All')
const filters = ['All', 'Web App', 'E-Commerce', 'Mobile', 'Open Source']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
    category: 'E-Commerce',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/erfanmhp/ecommerce',
    demo: 'https://demo.example.com',
    icon: ShoppingCart,
    delay: 0
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Real-time social media analytics dashboard with data visualization and reporting features.',
    category: 'Web App',
    technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/erfanmhp/social-dashboard',
    demo: 'https://demo.example.com',
    icon: Users,
    delay: 100
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team features.',
    category: 'Web App',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind'],
    github: 'https://github.com/erfanmhp/taskmanager',
    demo: 'https://demo.example.com',
    icon: Briefcase,
    delay: 200
  },
  {
    id: 4,
    title: 'Video Streaming Platform',
    description: 'Netflix-like video streaming platform with adaptive bitrate streaming and recommendations.',
    category: 'Web App',
    technologies: ['Next.js', 'AWS', 'Redis', 'FFmpeg'],
    github: 'https://github.com/erfanmhp/streaming',
    icon: Play,
    delay: 300
  },
  {
    id: 5,
    title: 'Chat Application',
    description: 'Real-time chat application with end-to-end encryption and video calling features.',
    category: 'Mobile',
    technologies: ['React Native', 'Socket.io', 'WebRTC', 'Node.js'],
    github: 'https://github.com/erfanmhp/chatapp',
    demo: 'https://demo.example.com',
    icon: MessageSquare,
    delay: 400
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with CMS integration and dynamic content management.',
    category: 'Web App',
    technologies: ['Nuxt.js', 'Strapi', 'GraphQL', 'Vercel'],
    github: 'https://github.com/erfanmhp/portfolio',
    demo: 'https://demo.example.com',
    icon: Globe,
    delay: 500
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})

const openProject = (project) => {
  console.log('Opening project:', project.title)
}
</script>