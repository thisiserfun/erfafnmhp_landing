<template>
  <div class="min-h-screen py-20">
    <!-- Page Header -->
    <section class="relative py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-20 left-10 w-72 h-72 bg-green-200/30 dark:bg-green-700/20 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-10 right-20 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-700/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3" data-aos="fade-down">
          <Star class="w-12 h-12 text-primary-500" />
          Key <span class="gradient-text">Projects</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-aos="fade-up">
          Enterprise solutions, national systems, and innovative platforms
        </p>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="py-8 bg-white dark:bg-dark-bg sticky top-16 z-40 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-3" data-aos="fade-up">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105',
              activeFilter === filter 
                ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]"
          >
            {{ filter }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="group"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="card h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <!-- Project Image -->
              <div class="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20">
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  :onerror="`this.style.display='none'; this.nextElementSibling.style.display='flex'`"
                />
                <div class="w-full h-full hidden items-center justify-center">
                  <component :is="project.icon" class="w-20 h-20 text-primary-500/30" />
                </div>
                
                <!-- Category Badge -->
                <div class="absolute top-4 right-4">
                  <span class="px-3 py-1 text-xs font-semibold rounded-full bg-primary-500 text-white">
                    {{ project.category }}
                  </span>
                </div>
              </div>

              <!-- Project Info -->
              <div class="flex-1 flex flex-col">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {{ project.description }}
                </p>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-md"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- Features if available -->
                <div v-if="project.features" class="mb-4">
                  <p class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</p>
                  <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li v-for="feature in project.features" :key="feature" class="flex items-start gap-1">
                      <CheckCircle class="w-3 h-3 text-green-500 mt-0.5" />
                      <span class="text-xs">{{ feature }}</span>
                    </li>
                  </ul>
                </div>

                <!-- View Details Button -->
                <button 
                  @click="openProjectDetails(project)"
                  class="w-full py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Research Projects Section -->
    <section class="py-16 bg-white dark:bg-dark-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 flex items-center justify-center gap-3" data-aos="fade-up">
          <Brain class="w-8 h-8 text-accent-500" />
          Research <span class="gradient-text">Projects</span>
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(research, index) in researchProjects" 
               :key="research.id"
               class="card group hover:shadow-2xl transition-all duration-300"
               data-aos="flip-left"
               :data-aos-delay="index * 100">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Brain class="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">{{ research.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-3">{{ research.description }}</p>
                <ul class="space-y-1">
                  <li v-for="point in research.points" :key="point" 
                      class="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <div class="w-1 h-1 bg-primary-500 rounded-full mt-1.5"></div>
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { CheckCircle, Brain, Star } from 'lucide-vue-next'
import { Shield, DollarSign, Globe, Play, Users, ShoppingCart, GraduationCap, Tv, Gamepad, Link, Bitcoin, TrendingUp, Coins } from 'lucide-vue-next'

const router = useRouter()

// Import all projects from centralized data
import { allProjects as projectsData } from '../data/portfolio-data.js'

const activeFilter = ref('All')

// Get unique categories from projects
const categories = [...new Set(projectsData.map(p => p.category))]
const filters = ['All', ...categories]

const projects = projectsData.map(project => ({
  ...project,
  technologies: project.tech || project.technologies,
  image: project.image || '/src/assets/images/projects/default-project.jpg'
}))

// Original projects array replaced by imported data
const oldProjects = [
  {
    id: 1,
    title: 'MADT Platform',
    description: 'Tokenized Real Estate Investment Platform enabling fractional ownership and blockchain-based property investment',
    category: 'Blockchain',
    technologies: ['Node.js', 'React.js', 'GraphQL', 'JWT', 'Socket.io'],
    icon: DollarSign,
    image: '/src/assets/images/projects/madt-platform.jpg',
    features: ['Real estate tokenization', 'Smart contracts', 'Investment dashboard']
  },
  {
    id: 2,
    title: 'Sport TV',
    description: 'Live Sports Streaming Platform with microservices architecture for high-performance video delivery',
    category: 'Streaming',
    technologies: ['PHP', 'Go', 'JavaScript', 'Microservices'],
    icon: Tv,
    image: '/src/assets/images/projects/sport-tv.jpg',
    features: ['Live streaming', 'Multi-bitrate support', 'Real-time statistics']
  },
  {
    id: 3,
    title: 'Karo Platform',
    description: 'Educational VOD for Kids with ML-based personalization and content recommendation',
    category: 'Education',
    technologies: ['PHP', 'React Native', 'ELK Stack', 'ML Models'],
    icon: GraduationCap,
    image: '/src/assets/images/projects/karo-platform.jpg',
    features: ['Personalized learning', 'Parent dashboard', 'Progress tracking']
  },
  {
    id: 4,
    title: 'LSW Voting System',
    description: 'National voting system for Ministry of Cooperatives with secure authentication and real-time results',
    category: 'Government',
    technologies: ['PHP', 'Python', 'Docker Swarm'],
    icon: Shield,
    image: '/src/assets/images/projects/lsw-voting.jpg',
    features: ['Secure voting', 'Real-time counting', 'Audit trails']
  },
  {
    id: 5,
    title: 'National Toy Festival',
    description: 'Web platform for Kanoon Children\'s Cultural Center national event management',
    category: 'Government',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    icon: Gamepad,
    image: '/src/assets/images/projects/toy-festival.jpg',
    features: ['Event registration', 'Online exhibitions', 'Interactive games']
  },
  {
    id: 6,
    title: 'Nexolai',
    description: 'AI-powered platform with advanced machine learning capabilities for business intelligence',
    category: 'Enterprise',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    icon: Brain,
    image: '/src/assets/images/projects/nexolai.jpg',
    features: ['AI analytics', 'Predictive modeling', 'Data visualization']
  },
  {
    id: 7,
    title: 'Commodex',
    description: '24/7 blockchain-based global marketplace for trading commodity derivatives with tokenized real-world assets',
    category: 'Blockchain',
    technologies: ['Blockchain', 'Smart Contracts', 'DeFi'],
    icon: TrendingUp,
    image: '/src/assets/images/projects/commodex.jpg',
    features: ['24/7 trading', 'Tokenized commodities', 'Smart contract settlement']
  },
  {
    id: 8,
    title: 'Bitoment',
    description: 'Smart asset management hub connecting CeFi and DeFi for institutional digital investment products',
    category: 'Blockchain',
    technologies: ['DeFi Integration', 'Web3', 'React'],
    icon: Bitcoin,
    image: '/src/assets/images/projects/bitoment.jpg',
    features: ['CeFi/DeFi bridge', 'Portfolio management', 'Institutional tools']
  },
  {
    id: 9,
    title: 'Mintoro',
    description: 'Gold-backed token platform issuing 1 troy ounce per token for inflation-resistant digital assets',
    category: 'Blockchain',
    technologies: ['Blockchain', 'Gold Tokenization', 'Smart Contracts'],
    icon: Coins,
    image: '/src/assets/images/projects/mintoro.jpg',
    features: ['Gold-backed tokens', 'DeFi integration', 'Stable value storage']
  },
  {
    id: 10,
    title: 'Blufund',
    description: 'Revenue-based financing platform tokenizing future revenues of e-commerce and SaaS sellers',
    category: 'Blockchain',
    technologies: ['Revenue Tokenization', 'Smart Contracts', 'React'],
    icon: Link,
    image: '/src/assets/images/projects/blufund.jpg',
    features: ['Revenue tokenization', 'Automated payments', 'Investment marketplace']
  }
]

const researchProjects = [
  {
    id: 1,
    title: 'Task Offloading in Edge Computing with Meta-RL',
    description: 'Using Meta Reinforcement Learning to optimize edge computing task distribution',
    points: [
      'Reduced latency by 40% in edge networks',
      'Model adapts quickly to new network conditions',
      'Published research on adaptive task scheduling'
    ]
  },
  {
    id: 2,
    title: 'Edge Caching in Vehicular Networks with MRL',
    description: 'Meta-learning algorithm for intelligent content caching in vehicular networks',
    points: [
      'Increased Cache Hit rate by 35%',
      'Reduced content delivery latency',
      'Adaptive to traffic patterns and user behavior'
    ]
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter(p => p.category === activeFilter.value)
})

const openProjectDetails = (project) => {
  // Navigate to project detail page
  router.push(`/projects/${project.id}`)
}
</script>