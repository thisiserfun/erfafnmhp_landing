<template>
  <div class="min-h-screen py-20">
    <!-- Page Header -->
    <section class="relative py-20 bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-10 right-10 w-72 h-72 bg-orange-200/30 dark:bg-orange-700/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-10 left-10 w-80 h-80 bg-red-200/30 dark:bg-red-700/20 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4" data-aos="fade-down">
          Get In <span class="gradient-text">Touch</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-aos="fade-up">
          Let's discuss your project and create something amazing together
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-16 bg-white dark:bg-dark-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="order-2 lg:order-1" data-aos="fade-right">
            <div class="card">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h2>
              
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      v-model="form.name"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                      :class="{ 'animate-pulse': isSubmitting }"
                    />
                  </div>
                  
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                      :class="{ 'animate-pulse': isSubmitting }"
                    />
                  </div>
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project Inquiry"
                    :class="{ 'animate-pulse': isSubmitting }"
                  />
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="6"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    :class="{ 'animate-pulse': isSubmitting }"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full btn-primary flex items-center justify-center gap-2 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send class="w-5 h-5" :class="{ 'animate-spin': isSubmitting }" />
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </form>

              <!-- Success Message -->
              <transition
                enter-active-class="transition ease-out duration-300"
                enter-from-class="opacity-0 transform translate-y-2"
                enter-to-class="opacity-100 transform translate-y-0"
                leave-active-class="transition ease-in duration-200"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div v-if="showSuccess" class="mt-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-400 dark:border-green-600 rounded-lg">
                  <p class="text-green-700 dark:text-green-400 flex items-center gap-2">
                    <CheckCircle class="w-5 h-5" />
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              </transition>
            </div>
          </div>

          <!-- Contact Info & Illustration -->
          <div class="order-1 lg:order-2 space-y-8" data-aos="fade-left">
            <!-- Illustration -->
            <div class="relative">
              <img 
                src="/src/assets/images/contact-illustration.svg" 
                alt="Contact illustration"
                class="w-full max-w-md mx-auto"
                onerror="this.src='https://via.placeholder.com/400x300?text=Contact+Illustration'"
              />
              <div class="absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Hand class="w-8 h-8 text-white" />
              </div>
            </div>

            <!-- Contact Information -->
            <div class="card">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div class="space-y-4">
                <a
                  v-for="contact in contactInfo"
                  :key="contact.type"
                  :href="contact.link"
                  class="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group"
                >
                  <div class="w-12 h-12 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <component :is="contact.icon" class="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ contact.type }}</p>
                    <p class="font-medium text-gray-900 dark:text-white">{{ contact.value }}</p>
                  </div>
                </a>
              </div>
            </div>

            <!-- Social Links -->
            <div class="card">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h3>
              
              <div class="flex gap-4">
                <a
                  v-for="social in socials"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  :aria-label="social.name"
                >
                  <component :is="social.icon" class="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>

            <!-- Availability Status -->
            <div class="card bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border-green-200 dark:border-green-800">
              <div class="flex items-center gap-3">
                <div class="relative">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div class="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">Currently Available</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ contactData.availability }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12" data-aos="fade-up">
          Frequently Asked <span class="gradient-text">Questions</span>
        </h2>
        
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" 
               :key="faq.question"
               class="card cursor-pointer"
               @click="toggleFAQ(index)"
               data-aos="fade-up"
               :data-aos-delay="index * 100">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ faq.question }}
              </h3>
              <ChevronDown 
                class="w-5 h-5 text-gray-500 transition-transform duration-300"
                :class="{ 'rotate-180': openFAQ === index }"
              />
            </div>
            <transition
              enter-active-class="transition ease-out duration-300"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-active-class="transition ease-in duration-200"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <p v-if="openFAQ === index" class="mt-4 text-gray-600 dark:text-gray-400">
                {{ faq.answer }}
              </p>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle, ChevronDown, Hand } from 'lucide-vue-next'
import AOS from 'aos'

// Import data from centralized config
import { contactInfo as contactData, socialLinks } from '../data/portfolio-data.js'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const openFAQ = ref(null)

const contactInfo = [
  {
    type: 'Email',
    value: contactData.email,
    link: `mailto:${contactData.email}`,
    icon: Mail
  },
  {
    type: 'Phone',
    value: contactData.phone.replace('+98', '+98 ').replace('939', '939 ').replace('173', '173 '),
    link: `tel:${contactData.phone}`,
    icon: Phone
  },
  {
    type: 'Location',
    value: contactData.location,
    link: '#',
    icon: MapPin
  }
]

const socials = socialLinks

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'I specialize in AI/ML development, backend systems with PHP/Laravel and Python, data science solutions, and intelligent system integration.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity. AI/ML models take 3-6 weeks, while full backend systems can take 2-3 months.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes! I work with clients worldwide and am comfortable with remote collaboration across different time zones.'
  },
  {
    question: 'What are your rates?',
    answer: 'Rates depend on project scope and complexity. Contact me for a detailed quote tailored to your needs.'
  }
]

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  isSubmitting.value = false
  showSuccess.value = true
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}

const toggleFAQ = (index) => {
  openFAQ.value = openFAQ.value === index ? null : index
}
</script>