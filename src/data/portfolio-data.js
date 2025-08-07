// ==========================================
// PORTFOLIO CONFIGURATION FILE
// ==========================================
// این فایل تمام اطلاعات سایت شما را در خود دارد
// برای تغییر هر بخش، فقط کافیست این فایل را ویرایش کنید

import { 
  Github, Linkedin, Mail, Phone, 
  Code2, Server, Database, Globe, 
  Briefcase, FileText, Cpu, Brain, 
  GraduationCap, Trophy, DollarSign, 
  Shield, Star, Calendar, Award,
  MapPin, Heart, Target, Lightbulb, 
  Rocket, Users, Code, CheckCircle,
  ExternalLink, MessageSquare
} from 'lucide-vue-next'

// ==========================================
// PERSONAL INFORMATION
// ==========================================
export const personalInfo = {
  name: "Erfan Mohammadpour",
  title: "AI Specialist & Backend Developer",
  subtitle: "Machine Learning Engineer",
  email: "thisiserfun@gmail.com",
  phone: "+989391739506",
  location: "Tehran, Iran",
  university: "K.N. Toosi University (KNTU)",
  
  // Short descriptions
  shortBio: "Visionary AI Specialist & Machine Learning Engineer with Stanford, IBM & Google certifications",
  
  // Hero section typing animation
  typingTexts: "AI Specialist | Backend Developer | Machine Learning Engineer",
  animatedSkills: ['Python', 'PHP/Laravel', 'TensorFlow', 'PyTorch', 'MySQL', 'Docker', 'AI/ML', 'Backend'],
  
  // Main bio paragraphs for About page
  fullBio: [
    `I am a passionate AI Specialist and Machine Learning Engineer who transforms complex data into 
    intelligent solutions that revolutionize industries. With over 4 years of hands-on experience, 
    I've architected and deployed cutting-edge AI systems that power national infrastructure, serving 
    millions of users across government, fintech, and enterprise sectors. My expertise bridges the gap 
    between theoretical AI research and practical, scalable implementations that deliver real business value.`,
    
    `My AI journey is backed by prestigious certifications from Stanford University, IBM, and Google, 
    validating my expertise in Machine Learning, Deep Learning, and Data Science. I specialize in 
    developing sophisticated neural networks using TensorFlow and PyTorch, implementing computer vision 
    solutions that achieve 95%+ accuracy, and building NLP systems that understand and process human 
    language with remarkable precision. From predictive analytics to intelligent automation, I've 
    successfully deployed over 20 AI-powered solutions that have transformed how businesses operate.`,
    
    `Beyond AI, I bring robust backend engineering expertise with PHP/Laravel and Python, architecting 
    microservices that handle millions of requests daily. I've built secure voting systems for government 
    elections, real-time streaming platforms serving thousands of concurrent users, and blockchain-based 
    platforms that revolutionize traditional industries. My unique combination of AI expertise and backend 
    mastery allows me to create end-to-end intelligent systems that are not just smart, but also scalable, 
    secure, and production-ready.`,
    
    `What sets me apart is my proven track record of excellence: Ranked 4th nationally in Mathematics 
    and Computer Science Olympiad, Gold Medal winner, and Iran's representative at World Olympiads in 
    South Korea (2019 & 2020). Currently advancing my research at K.N. Toosi University of Technology, 
    I'm at the forefront of AI innovation, exploring reinforcement learning, generative AI, and quantum 
    machine learning. My mission is to push the boundaries of what's possible with AI, creating intelligent 
    systems that don't just solve problems—they anticipate and prevent them.`
  ],
  
  // Professional Summary for HomePage
  professionalSummary: [
    `Erfan Mohammadpour is a visionary AI Specialist and Machine Learning Engineer who has revolutionized 
    how enterprises leverage artificial intelligence. With prestigious certifications from Stanford University, 
    IBM, and Google, he brings world-class expertise in deep learning, neural networks, and intelligent system 
    design. His AI solutions have powered national infrastructure, transformed government operations, and 
    enabled businesses to make data-driven decisions with unprecedented accuracy.`,
    
    `Combining cutting-edge AI research with robust backend engineering, Erfan has architected and deployed 
    over 20 enterprise-grade intelligent systems serving millions of users. From developing computer vision 
    models with 95%+ accuracy to building NLP systems that process human language with remarkable precision, 
    his work spans the full spectrum of AI applications. As a Gold Medal Olympiad winner and World Olympiad 
    representative, he brings exceptional problem-solving abilities to create AI solutions that don't just 
    meet requirements—they exceed expectations and set new industry standards.`
  ]
}

// ==========================================
// SOCIAL LINKS
// ==========================================
export const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/thisiserfun' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/erfan-mohammdapour/' },
  { name: 'Email', icon: Mail, url: 'mailto:thisiserfun@gmail.com' }
]

// ==========================================
// QUICK STATISTICS
// ==========================================
export const quickStats = [
  { value: '4+', label: 'Years Experience', icon: Calendar },
  { value: '20+', label: 'Enterprise Projects', icon: Briefcase },
  { value: '15+', label: 'AI/ML Technologies', icon: Code2 },
  { value: '2', label: 'Olympiad Medals', icon: Award }
]

// ==========================================
// SKILLS & TECHNOLOGIES
// ==========================================

// Skill Categories with Progress Bars
export const skillCategories = [
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      { name: 'TensorFlow & Keras', level: 92 },
      { name: 'PyTorch', level: 88 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'Computer Vision & NLP', level: 85 }
    ]
  },
  {
    name: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'PHP (Laravel)', level: 95 },
      { name: 'Python (Django/Flask)', level: 90 },
      { name: 'RESTful APIs', level: 92 },
      { name: 'Microservices', level: 87 }
    ]
  },
  {
    name: 'Database & DevOps',
    icon: Database,
    skills: [
      { name: 'MySQL & PostgreSQL', level: 90 },
      { name: 'Docker & Kubernetes', level: 85 },
      { name: 'CI/CD Pipelines', level: 88 },
      { name: 'Data Analysis', level: 92 }
    ]
  }
]

// Technology Stack Icons
export const technologies = [
  { name: 'Python', description: 'AI/ML & Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'PHP', description: 'Backend Development', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', description: 'PHP Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'TensorFlow', description: 'ML Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'PyTorch', description: 'Deep Learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'MySQL', description: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', description: 'Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', description: 'Containerization', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Pandas', description: 'Data Analysis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', description: 'Numerical Computing', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Git', description: 'Version Control', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Django', description: 'Python Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' }
]

// Simple skill categories for HomePage
export const homeSkillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['TensorFlow & PyTorch', 'Scikit-learn & Pandas', 'Neural Networks & Deep Learning', 'Computer Vision & NLP']
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['PHP (Laravel)', 'Python (Django/Flask)', 'RESTful APIs', 'Microservices Architecture']
  },
  {
    title: 'Database & DevOps',
    icon: Database,
    skills: ['MySQL & PostgreSQL', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Git & Version Control']
  }
]

// ==========================================
// PROJECTS
// ==========================================
export const featuredProjects = [
  {
    id: 1,
    title: 'Commodex',
    category: 'Blockchain/DeFi',
    description: 'Global Commodity Derivatives Trading Platform',
    longDescription: 'A 24/7 blockchain-based global marketplace for trading commodity derivatives with tokenized real-world assets as collateral, offering transparency and capital efficiency.',
    tech: ['Blockchain', 'Smart Contracts', 'DeFi', 'Web3', 'Node.js'],
    icon: DollarSign,
    image: '/src/assets/images/projects/commodex-project.jpg',
    features: ['24/7 Global Trading', 'Tokenized Collateral', 'Transparent Settlement', 'Capital Efficiency'],
    liveUrl: 'https://commodex.io',
    githubUrl: null,
    featured: true
  },
  {
    id: 2,
    title: 'MADT Platform',
    category: 'Blockchain/Real Estate',
    description: 'Real Estate Tokenization Platform',
    longDescription: 'A real estate tokenization platform enabling fractional ownership and liquidity for high-quality global properties through blockchain.',
    tech: ['Node.js', 'React.js', 'GraphQL', 'JWT', 'Socket.io'],
    icon: DollarSign,
    image: '/src/assets/images/projects/madt-project.jpg',
    features: ['Fractional Ownership', 'Property Tokenization', 'Global Properties', 'Liquidity Solutions'],
    liveUrl: 'https://madt.io',
    githubUrl: null,
    featured: true
  },
  {
    id: 3,
    title: 'Bitoment',
    category: 'DeFi/Asset Management',
    description: 'Smart Asset Management Hub',
    longDescription: 'A smart asset management hub connecting CeFi and DeFi, offering easy access to diverse, institutionally managed digital investment products.',
    tech: ['Python', 'TensorFlow', 'Blockchain', 'React', 'Smart Contracts'],
    icon: Brain,
    image: '/src/assets/images/projects/bitoment-project.jpg',
    features: ['CeFi/DeFi Bridge', 'Institutional Management', 'Diverse Products', 'Smart Analytics'],
    liveUrl: 'https://bitoment.com',
    githubUrl: null,
    featured: true
  }
]

// All projects (including non-featured)
export const allProjects = [
  ...featuredProjects,
  {
    id: 4,
    title: 'Mintoro',
    category: 'Blockchain/Gold',
    description: 'Gold-Backed Digital Asset Platform',
    longDescription: 'Issues gold-backed tokens (1 troy ounce per token), providing a secure, liquid, and inflation-resistant digital asset for portfolios and DeFi applications.',
    tech: ['Blockchain', 'Smart Contracts', 'Python', 'Web3', 'Security'],
    icon: Shield,
    image: '/src/assets/images/projects/mintoro-project.jpg',
    features: ['Gold-Backed Tokens', 'DeFi Integration', 'Inflation Resistant', 'Secure Storage'],
    liveUrl: 'https://mintoro.com',
    githubUrl: null,
    featured: false
  },
  {
    id: 5,
    title: 'Blufund',
    category: 'Fintech/DeFi',
    description: 'Revenue-Based Financing Platform',
    longDescription: 'Finances e-commerce and SaaS sellers by tokenizing their future revenues, delivering fast capital to businesses and high-yield assets to investors.',
    tech: ['Python', 'Django', 'Smart Contracts', 'Data Analytics', 'ML'],
    icon: DollarSign,
    image: '/src/assets/images/projects/blufund-project.jpg',
    features: ['Revenue Tokenization', 'Fast Capital', 'High-Yield Assets', 'Risk Analytics'],
    liveUrl: 'https://blufund.com',
    githubUrl: null,
    featured: false
  },
  {
    id: 6,
    title: 'Tolerance Trading Room',
    category: 'AI Trading',
    description: 'Proprietary AI Trading Engine',
    longDescription: 'A proprietary trading engine that uses real-time, exclusive ecosystem data to generate superior, consistent returns (alpha).',
    tech: ['Python', 'TensorFlow', 'Real-time Analytics', 'ML Models', 'Trading APIs'],
    icon: Brain,
    image: '/src/assets/images/projects/tolerance-project.jpg',
    features: ['AI Trading', 'Real-time Data', 'Alpha Generation', 'Risk Management'],
    liveUrl: null,
    githubUrl: null,
    featured: false
  },
  {
    id: 7,
    title: 'Sport TV',
    category: 'Streaming',
    description: 'Live Sports Streaming Platform',
    longDescription: 'High-performance streaming platform serving thousands of concurrent users with live streaming and real-time statistics.',
    tech: ['PHP', 'Go', 'JavaScript', 'Microservices'],
    icon: Globe,
    image: '/src/assets/images/projects/sporttv-project.jpg',
    features: ['Live streaming', 'Multi-bitrate', 'Real-time stats', 'Scalable Architecture'],
    liveUrl: 'https://sporttv.com',
    githubUrl: null,
    featured: false
  },
  {
    id: 8,
    title: 'Karo Platform',
    category: 'Education',
    description: 'Educational VOD for Kids with ML',
    longDescription: 'Educational video-on-demand platform for children with machine learning-based content recommendation and parental controls.',
    tech: ['PHP', 'React Native', 'ELK Stack', 'ML Models'],
    icon: GraduationCap,
    image: '/src/assets/images/projects/karo-project.jpg',
    features: ['ML Personalization', 'Parent Dashboard', 'Progress Tracking', 'Safe Content'],
    liveUrl: null,
    githubUrl: null,
    featured: false
  },
  {
    id: 9,
    title: 'LSW Voting System',
    category: 'Government',
    description: 'National Voting System - Ministry of Cooperatives',
    longDescription: 'Secure national voting platform with AI-powered analytics for government elections, handling millions of votes securely.',
    tech: ['PHP', 'Python', 'Docker Swarm', 'AI Analytics'],
    icon: Shield,
    image: '/src/assets/images/projects/voting-project.jpg',
    features: ['Secure Voting', 'Real-time Results', 'AI Analytics', 'National Scale'],
    liveUrl: null,
    githubUrl: null,
    featured: false
  },
  {
    id: 10,
    title: 'National Toy Festival',
    category: 'Event Platform',
    description: 'National Toy Festival - Kanoon',
    longDescription: 'Front-end platform for National Toy Festival organized by Institute for the Intellectual Development of Children and Young Adults.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    icon: Star,
    image: '/src/assets/images/projects/toy-festival-project.jpg',
    features: ['Event Registration', 'Interactive UI', 'Mobile Responsive', 'Festival Information'],
    liveUrl: null,
    githubUrl: null,
    featured: false
  }
]

// ==========================================
// WORK EXPERIENCE
// ==========================================
export const workExperience = [
  {
    id: 1,
    title: 'AI Specialist & Back-End Developer',
    company: 'CDH (Remote)',
    period: 'August 2022 – June 2024',
    description: 'Developed AI-powered applications and machine learning models for enterprise projects.',
    tasks: [
      'Developed AI-powered applications and machine learning models for over 20 enterprise projects',
      'Implemented intelligent systems across media, education, crypto, and streaming industries',
      'Integrated machine learning algorithms with scalable backend architectures'
    ],
    technologies: ['Python', 'TensorFlow', 'Laravel', 'Docker']
  },
  {
    id: 2,
    title: 'Full-Stack Developer & AI Researcher',
    company: 'PFM',
    period: 'September 2021 – August 2022',
    description: 'Developed national voting systems with AI-powered analytics for government projects.',
    tasks: [
      'Developed national voting systems with AI-powered analytics for the Ministry of Cooperatives',
      'Implemented data analysis and visualization systems for government projects',
      'Built intelligent APIs and automated decision-making systems'
    ],
    technologies: ['Python', 'PHP', 'Machine Learning', 'Docker']
  },
  {
    id: 3,
    title: 'Software Developer',
    company: 'HashStudio',
    period: 'January 2021 – September 2021',
    description: 'Developed web applications and software solutions with AI integration.',
    tasks: [
      'Developed web applications and software solutions for various clients',
      'Implemented data processing and analysis features',
      'Collaborated on AI research projects and prototype development'
    ],
    technologies: ['Python', 'Laravel', 'MySQL']
  }
]

// ==========================================
// EDUCATION
// ==========================================
export const education = [
  {
    id: 1,
    degree: 'Computer Engineering Student',
    institution: 'K.N. Toosi University of Technology (KNTU)',
    period: '2023 - Present',
    description: 'Top engineering university in Iran with focus on scientific fundamentals and innovation in computer science.',
    achievements: ['Focus on AI/ML Research', 'Top Engineering University']
  },
  {
    id: 2,
    degree: 'High School Diploma - Mathematics & Physics',
    institution: 'Alamieh Heli High School, Tehran',
    period: '2019 - 2022',
    description: 'Elite high school with exceptional achievements in national and international competitions.',
    achievements: [
      'Rank 4 in national Math and Computer Olympiad',
      'Gold medal winner',
      'World Olympiad participant in South Korea (2019 & 2020)',
      'Ranked below 400 in Computer Engineering entrance exam'
    ]
  }
]

// ==========================================
// CERTIFICATIONS
// ==========================================
export const certifications = [
  {
    title: 'Data Analysis with Python',
    issuer: 'IBM',
    date: 'June 2025',
    credentialId: '88PDFJ38AQN7',
    url: 'https://www.coursera.org/account/accomplishments/verify/88PDFJ38AQN7'
  },
  {
    title: 'Foundations: Data, Data, Everywhere',
    issuer: 'Google',
    date: 'June 2025',
    credentialId: '74LJEDCJIV5Y',
    url: 'https://www.coursera.org/account/accomplishments/verify/74LJEDCJIV5Y'
  },
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    date: 'June 2025',
    credentialId: 'P4JD3MALSV4A',
    url: 'https://www.coursera.org/account/accomplishments/verify/P4JD3MALSV4A'
  },
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Stanford University',
    date: 'June 2025',
    credentialId: '5MSB6PEUBWEL',
    url: 'https://www.coursera.org/account/accomplishments/verify/5MSB6PEUBWEL'
  }
]

// ==========================================
// TIMELINE (About Page)
// ==========================================
export const timeline = [
  {
    id: 1,
    year: '2024',
    title: 'AI Research & Computer Engineering',
    description: 'Advancing AI research at K.N. Toosi University while pursuing cutting-edge machine learning projects and certifications from top institutions.'
  },
  {
    id: 2,
    year: '2022',
    title: 'AI Specialist & ML Engineer at CDH',
    description: 'Developed intelligent systems and machine learning models for 20+ enterprise projects across diverse industries including media, education, and fintech.'
  },
  {
    id: 3,
    year: '2021',
    title: 'AI Researcher & Developer at PFM',
    description: 'Implemented AI-powered analytics for national voting systems and developed intelligent decision-making algorithms for government projects.'
  },
  {
    id: 4,
    year: '2019',
    title: 'World Olympiad Excellence',
    description: 'Achieved Rank 4 in national Math & Computer Olympiad, earned gold medal, and represented Iran in World Olympiads in South Korea.'
  }
]

// ==========================================
// PERSONAL VALUES
// ==========================================
export const personalValues = [
  {
    icon: Shield,
    title: 'AI Ethics & Integrity',
    description: 'Developing responsible AI solutions that prioritize ethical considerations and security for sensitive applications including national projects.'
  },
  {
    icon: Cpu,
    title: 'Technical Innovation',
    description: 'Mastering cutting-edge AI technologies including deep learning, computer vision, NLP, and advanced machine learning architectures.'
  },
  {
    icon: Trophy,
    title: 'Research Excellence',
    description: 'From Olympiad achievements to AI research, continuously advancing the frontiers of artificial intelligence and contributing to scientific knowledge.'
  }
]

// ==========================================
// FOOTER SPECIALIZATIONS
// ==========================================
export const aiSpecializations = [
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Data Science',
  'Backend Development'
]

// ==========================================
// CV STATS
// ==========================================
export const cvStats = [
  { value: '4+', label: 'Years Experience', delay: 0 },
  { value: '20+', label: 'AI Projects', delay: 100 },
  { value: '15+', label: 'ML Technologies', delay: 200 },
  { value: '2', label: 'Olympiad Medals', delay: 300 }
]

// ==========================================
// CONTACT INFORMATION
// ==========================================
export const contactInfo = {
  email: 'thisiserfun@gmail.com',
  phone: '+98 939 173 9506',
  location: 'Tehran, Iran',
  availability: 'Available for freelance and full-time opportunities'
}

// ==========================================
// SITE METADATA
// ==========================================
export const siteMetadata = {
  title: 'Erfan Mohammadpour - AI Specialist & Machine Learning Engineer',
  description: 'Passionate AI Specialist and Machine Learning Engineer. Explore my portfolio, AI projects, and research.',
  keywords: 'Erfan Mohammadpour, AI Specialist, Machine Learning, Data Science, Backend Developer, PHP, Laravel, Python, TensorFlow, PyTorch',
  author: 'Erfan Mohammadpour',
  url: 'https://erfanmhp.com',
  image: '/og-image.jpg'
}

// ==========================================
// NAVIGATION ITEMS
// ==========================================
export const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'CV', path: '/cv' },
  { name: 'Contact', path: '/contact' }
]