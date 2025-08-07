<template>
  <section id="cv" class="section-padding bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
    <div class="max-w-4xl mx-auto text-center">
      <div data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Download My <span class="gradient-text">Resume</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
      </div>

      <div class="card max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        <div class="flex flex-col items-center space-y-6">
          <!-- CV Preview Icon -->
          <div class="relative">
            <div class="w-32 h-32 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center group hover:scale-105 transition-transform duration-300">
              <FileText class="w-16 h-16 text-primary-500" />
              <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <!-- Description -->
          <div class="space-y-4">
            <p class="text-lg text-gray-600 dark:text-gray-400">
              Get a comprehensive overview of my professional experience, education, and skills.
            </p>
            
            <!-- Key Highlights -->
            <div class="grid grid-cols-2 gap-4 py-6">
              <div class="text-center">
                <div class="text-2xl font-bold gradient-text">5+</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold gradient-text">50+</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Projects Delivered</div>
              </div>
            </div>

            <!-- Download Options -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                @click="downloadCV('pdf')"
                class="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                <Download class="w-5 h-5 group-hover:animate-bounce" />
                Download PDF
              </button>
              <button
                @click="downloadCV('word')"
                class="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <FileText class="w-5 h-5" />
                Download Word
              </button>
            </div>
          </div>

          <!-- Last Updated -->
          <p class="text-sm text-gray-500 dark:text-gray-400 italic">
            Last updated: January 2025
          </p>
        </div>
      </div>

      <!-- Timeline Preview -->
      <div class="mt-16" data-aos="fade-up">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Career Timeline</h3>
        
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-purple-600"></div>
          
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
              <div class="w-1/2"></div>
              <div class="relative flex items-center justify-center">
                <div class="w-4 h-4 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full"></div>
              </div>
              <div class="w-1/2 px-6">
                <div class="card hover:shadow-xl transition-shadow duration-300">
                  <div class="flex items-start gap-3">
                    <component :is="item.icon" class="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 class="font-semibold text-gray-900 dark:text-white">{{ item.title }}</h4>
                      <p class="text-sm text-primary-500 mb-2">{{ item.period }}</p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.description }}</p>
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
</template>

<script setup>
import { Download, FileText, Briefcase, GraduationCap, Award } from 'lucide-vue-next'

const timeline = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    period: '2023 - Present',
    description: 'Leading development of enterprise web applications at Tech Corp.',
    icon: Briefcase
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    period: '2021 - 2023',
    description: 'Developed and maintained multiple client projects at Digital Agency.',
    icon: Briefcase
  },
  {
    id: 3,
    title: 'Master\'s Degree in Computer Science',
    period: '2019 - 2021',
    description: 'Specialized in Machine Learning and Web Technologies.',
    icon: GraduationCap
  },
  {
    id: 4,
    title: 'Junior Developer',
    period: '2019 - 2021',
    description: 'Started career as a junior developer, focusing on front-end technologies.',
    icon: Award
  }
]

const downloadCV = (format) => {
  console.log(`Downloading CV in ${format} format`)
  // In a real application, this would trigger a download
  const link = document.createElement('a')
  link.href = `/cv/erfan-mohammadpour-cv.${format}`
  link.download = `erfan-mohammadpour-cv.${format}`
  link.click()
}
</script>