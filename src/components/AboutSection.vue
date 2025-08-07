<template>
  <section id="about" class="section-padding bg-white dark:bg-dark-bg">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About <span class="gradient-text">Me</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image/Illustration -->
        <div class="relative" data-aos="fade-right">
          <div class="relative">
            <img 
              src="https://storyset.com/illustration/programming/amico" 
              alt="Developer illustration"
              class="w-full max-w-md mx-auto rounded-lg"
            />
            <!-- Decorative elements -->
            <div class="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"></div>
            <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6" data-aos="fade-left">
          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a passionate full-stack developer with a keen interest in creating innovative solutions 
            that make a difference. With expertise in modern web technologies, I enjoy turning complex 
            problems into simple, beautiful, and intuitive designs.
          </p>
          
          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            My journey in tech started with curiosity about how things work, and it has evolved into 
            a career where I get to build amazing digital experiences every day. I believe in continuous 
            learning and staying updated with the latest technologies.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 pt-6">
            <div class="text-center" v-for="stat in stats" :key="stat.label">
              <div class="text-3xl font-bold gradient-text">{{ stat.value }}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ stat.label }}</div>
            </div>
          </div>

          <!-- Quick Info -->
          <div class="space-y-3 pt-6">
            <div class="flex items-center gap-3" v-for="info in quickInfo" :key="info.label">
              <component :is="info.icon" class="w-5 h-5 text-primary-500" />
              <span class="text-gray-600 dark:text-gray-400">
                <strong class="text-gray-900 dark:text-white">{{ info.label }}:</strong> {{ info.value }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-vue-next'
import AOS from 'aos'
import 'aos/dist/aos.css'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' }
]

const quickInfo = [
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
  { icon: GraduationCap, label: 'Education', value: 'Computer Science, MSc' },
  { icon: Briefcase, label: 'Employment', value: 'Open to opportunities' },
  { icon: Calendar, label: 'Experience', value: 'Since 2019' }
]

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  })
})
</script>