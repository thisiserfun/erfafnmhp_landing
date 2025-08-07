<template>
  <div>
    <button
      v-if="!isOpen"
      @click="toggleChat"
      class="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
      aria-label="Open chat"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="fixed bottom-6 right-6 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300 animate-slideUp"
    >
      <div class="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-4 rounded-t-2xl flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 class="font-bold text-lg">ErfanBot</h3>
            <span class="text-xs opacity-90 flex items-center">
              <span class="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
              Online
            </span>
          </div>
        </div>
        <button
          @click="toggleChat"
          class="hover:bg-white/20 p-2 rounded-lg transition-colors duration-200"
          aria-label="Close chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-4">
        <div 
          v-for="(message, index) in messages" 
          :key="index"
          :class="[
            'flex items-start space-x-2 animate-fadeIn',
            message.sender === 'user' ? 'justify-end' : 'justify-start'
          ]"
        >
          <div v-if="message.sender === 'bot'" class="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <div 
            :class="[
              'max-w-[70%] p-3 rounded-2xl',
              message.sender === 'user' 
                ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-br-none' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
            ]"
          >
            <p class="text-sm">{{ message.text }}</p>
            <span class="text-xs opacity-70 mt-1 block">
              {{ formatTime(message.timestamp) }}
            </span>
          </div>

          <div v-if="message.sender === 'user'" class="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>

        <div v-if="isTyping" class="flex items-start space-x-2">
          <div class="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl rounded-bl-none">
            <div class="flex space-x-1">
              <span class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
              <span class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
              <span class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="showQuickReplies" class="px-4 pb-2">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(reply, index) in quickReplies"
            :key="index"
            @click="sendQuickReply(reply)"
            class="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors duration-200"
          >
            {{ reply }}
          </button>
        </div>
      </div>

      <form @submit.prevent="sendMessage" class="p-4 border-t dark:border-gray-700">
        <div class="flex items-center space-x-2">
          <input
            v-model="newMessage"
            type="text"
            placeholder="Type your message..."
            class="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
            :disabled="isTyping"
          />
          <button
            type="submit"
            :disabled="!newMessage.trim() || isTyping"
            class="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from 'vue'

const isOpen = ref(false)
const messages = ref([])
const newMessage = ref('')
const isTyping = ref(false)
const messagesContainer = ref(null)
const showQuickReplies = ref(true)

const quickReplies = [
  "Tell me about Erfan",
  "What services do you offer?",
  "How can I contact you?",
  "Show me your projects"
]

const botResponses = {
  greeting: [
    "Hello! I'm ErfanBot, your virtual assistant. How can I help you today?",
    "Hi there! Welcome to Erfan's portfolio. What would you like to know?"
  ],
  about: [
    "Erfan is a passionate Full-Stack Developer with expertise in Vue.js, React, Node.js, and more. With years of experience in creating modern web applications, he specializes in building scalable and user-friendly solutions.",
    "Erfan is dedicated to crafting exceptional digital experiences. His skill set includes frontend technologies like Vue.js and React, backend development with Node.js, and database management with PostgreSQL and MongoDB."
  ],
  services: [
    "Erfan offers a range of services including: Web Development (Frontend & Backend), UI/UX Design, API Development, Database Design, and Technical Consulting. Each project is approached with attention to detail and a focus on delivering high-quality results.",
    "Services available: Full-Stack Web Development, Progressive Web Apps, RESTful API Development, Database Architecture, Performance Optimization, and Code Review & Consultation."
  ],
  contact: [
    "You can reach Erfan through the contact form on this website, or directly via email at erfan.mhp@gmail.com. He's also active on LinkedIn and GitHub - links are available in the footer!",
    "The best way to contact Erfan is through the contact section of this website. You can also connect on professional networks like LinkedIn or check out his work on GitHub."
  ],
  projects: [
    "Erfan has worked on various exciting projects including e-commerce platforms, SaaS applications, and custom web solutions. Check out the Projects section to see detailed case studies and live demos!",
    "The portfolio showcases projects like Bitoment (Crypto Platform), Blufund (Investment Platform), and many more. Each project demonstrates different technical skills and problem-solving approaches."
  ],
  skills: [
    "Erfan's technical skills include: Frontend (Vue.js, React, TypeScript), Backend (Node.js, Express, Python), Databases (PostgreSQL, MongoDB), and DevOps (Docker, CI/CD). He's always learning and adapting to new technologies!",
    "Core competencies include JavaScript/TypeScript, Vue.js ecosystem, React & Next.js, Node.js & Express, Database Design, RESTful APIs, Git Version Control, and Agile methodologies."
  ],
  default: [
    "That's an interesting question! Feel free to explore the website to learn more, or ask me something specific about Erfan's work, skills, or how to get in touch.",
    "I'd be happy to help you learn more about Erfan's work. You can ask about his projects, technical skills, services, or how to get in contact!"
  ]
}

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value && messages.value.length === 0) {
    setTimeout(() => {
      addBotMessage(botResponses.greeting[0])
    }, 500)
  }
}

const addBotMessage = (text) => {
  messages.value.push({
    sender: 'bot',
    text,
    timestamp: new Date()
  })
  scrollToBottom()
}

const sendMessage = () => {
  if (!newMessage.value.trim()) return

  messages.value.push({
    sender: 'user',
    text: newMessage.value,
    timestamp: new Date()
  })

  const userInput = newMessage.value.toLowerCase()
  newMessage.value = ''
  showQuickReplies.value = false
  isTyping.value = true

  setTimeout(() => {
    let response = ''
    
    if (userInput.includes('about') || userInput.includes('erfan') || userInput.includes('who')) {
      response = botResponses.about[Math.floor(Math.random() * botResponses.about.length)]
    } else if (userInput.includes('service') || userInput.includes('offer') || userInput.includes('help')) {
      response = botResponses.services[Math.floor(Math.random() * botResponses.services.length)]
    } else if (userInput.includes('contact') || userInput.includes('email') || userInput.includes('reach')) {
      response = botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)]
    } else if (userInput.includes('project') || userInput.includes('portfolio') || userInput.includes('work')) {
      response = botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)]
    } else if (userInput.includes('skill') || userInput.includes('technology') || userInput.includes('tech')) {
      response = botResponses.skills[Math.floor(Math.random() * botResponses.skills.length)]
    } else if (userInput.includes('hi') || userInput.includes('hello') || userInput.includes('hey')) {
      response = botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)]
    } else {
      response = botResponses.default[Math.floor(Math.random() * botResponses.default.length)]
    }

    isTyping.value = false
    addBotMessage(response)
  }, 1500)

  scrollToBottom()
}

const sendQuickReply = (reply) => {
  newMessage.value = reply
  sendMessage()
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const formatTime = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date)
}

watch(messages, () => {
  scrollToBottom()
})
</script>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideUp {
  animation: slideUp 0.3s ease-out;
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

@media (max-width: 640px) {
  .fixed.w-96 {
    width: calc(100vw - 3rem);
    right: 1.5rem;
  }
}
</style>