<template>
  <section id="contact" class="section-padding bg-white dark:bg-dark-bg">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get In <span class="gradient-text">Touch</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-4"></div>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? Let's work together to bring your ideas to life.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="card" data-aos="fade-right">
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Send class="w-5 h-5" />
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-4 p-4 bg-green-100 dark:bg-green-900/20 border border-green-400 dark:border-green-600 rounded-lg">
            <p class="text-green-700 dark:text-green-400">Message sent successfully! I'll get back to you soon.</p>
          </div>
        </div>

        <!-- Contact Info & Map -->
        <div class="space-y-8" data-aos="fade-left">
          <!-- Contact Information -->
          <div class="card">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            
            <div class="space-y-4">
              <a
                v-for="contact in contactInfo"
                :key="contact.type"
                :href="contact.link"
                class="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div class="p-3 rounded-lg bg-gradient-to-br from-primary-500/10 to-purple-500/10 group-hover:from-primary-500/20 group-hover:to-purple-500/20 transition-colors">
                  <component :is="contact.icon" class="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">{{ contact.type }}</p>
                  <p class="text-gray-600 dark:text-gray-400">{{ contact.value }}</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Social Links -->
          <div class="card">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Follow Me</h3>
            
            <div class="flex gap-4">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 group"
                :aria-label="social.name"
              >
                <component :is="social.icon" class="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          <!-- Availability -->
          <div class="card bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/10 dark:to-purple-900/10">
            <div class="flex items-center gap-3">
              <div class="relative">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <div class="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <p class="font-semibold text-gray-900 dark:text-white">Available for Work</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Open to freelance and full-time opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const contactInfo = [
  {
    type: 'Email',
    value: 'erfan@example.com',
    link: 'mailto:erfan@example.com',
    icon: Mail
  },
  {
    type: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
    icon: Phone
  },
  {
    type: 'Location',
    value: 'San Francisco, CA',
    link: '#',
    icon: MapPin
  }
]

const socials = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/erfanmhp' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/erfanmhp' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/erfanmhp' }
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
</script>