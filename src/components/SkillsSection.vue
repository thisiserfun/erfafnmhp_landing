<template>
  <section id="skills" class="section-padding bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My <span class="gradient-text">Skills</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
      </div>

      <!-- Skills Categories -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="category in skillCategories" 
          :key="category.name"
          class="card"
          data-aos="fade-up"
          :data-aos-delay="category.delay"
        >
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 rounded-lg bg-gradient-to-br from-primary-500/10 to-purple-500/10">
              <component :is="category.icon" class="w-6 h-6 text-primary-500" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ category.name }}</h3>
          </div>

          <div class="space-y-4">
            <div v-for="skill in category.skills" :key="skill.name" class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-gray-700 dark:text-gray-300 font-medium">{{ skill.name }}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ skill.level }}%</span>
              </div>
              <div class="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  class="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: showProgress ? `${skill.level}%` : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Skills Tags -->
      <div class="mt-12" data-aos="fade-up">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Other Technologies</h3>
        <div class="flex flex-wrap justify-center gap-3">
          <span 
            v-for="tech in technologies" 
            :key="tech"
            class="px-4 py-2 bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:scale-105"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Code2, Database, Palette, Globe, Server, Cpu } from 'lucide-vue-next'

const showProgress = ref(false)

const skillCategories = [
  {
    name: 'Frontend Development',
    icon: Code2,
    delay: 0,
    skills: [
      { name: 'Vue.js / React', level: 95 },
      { name: 'JavaScript / TypeScript', level: 90 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'Tailwind CSS', level: 85 }
    ]
  },
  {
    name: 'Backend Development',
    icon: Server,
    delay: 100,
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'RESTful APIs', level: 90 }
    ]
  },
  {
    name: 'Database & Tools',
    icon: Database,
    delay: 200,
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Git & GitHub', level: 92 },
      { name: 'Docker', level: 70 }
    ]
  },
  {
    name: 'UI/UX Design',
    icon: Palette,
    delay: 300,
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 75 },
      { name: 'Responsive Design', level: 95 },
      { name: 'User Research', level: 80 }
    ]
  },
  {
    name: 'DevOps & Cloud',
    icon: Globe,
    delay: 400,
    skills: [
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Kubernetes', level: 65 },
      { name: 'Linux', level: 85 }
    ]
  },
  {
    name: 'Mobile & Other',
    icon: Cpu,
    delay: 500,
    skills: [
      { name: 'React Native', level: 78 },
      { name: 'Flutter', level: 70 },
      { name: 'GraphQL', level: 82 },
      { name: 'WebSockets', level: 85 }
    ]
  }
]

const technologies = [
  'Redux', 'Vuex', 'Pinia', 'Next.js', 'Nuxt.js', 'Jest', 'Cypress', 
  'Webpack', 'Vite', 'SASS', 'Redis', 'Nginx', 'Firebase', 'Supabase',
  'Stripe', 'OAuth', 'JWT', 'Socket.io', 'Three.js', 'D3.js'
]

onMounted(() => {
  setTimeout(() => {
    showProgress.value = true
  }, 500)
})
</script>