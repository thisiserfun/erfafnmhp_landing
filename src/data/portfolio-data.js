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
    {name: 'GitHub', icon: Github, url: 'https://github.com/thisiserfun'},
    {name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/erfan-mohammdapour/'},
    {name: 'Email', icon: Mail, url: 'mailto:thisiserfun@gmail.com'}
]

// ==========================================
// QUICK STATISTICS
// ==========================================
export const quickStats = [
    {value: '4+', label: 'Years Experience', icon: Calendar},
    {value: '20+', label: 'Enterprise Projects', icon: Briefcase},
    {value: '15+', label: 'AI/ML Technologies', icon: Code2},
    {value: '2', label: 'Olympiad Medals', icon: Award}
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
            {name: 'TensorFlow & Keras', level: 92},
            {name: 'PyTorch', level: 88},
            {name: 'Scikit-learn', level: 90},
            {name: 'Computer Vision & NLP', level: 85}
        ]
    },
    {
        name: 'Backend Development',
        icon: Server,
        skills: [
            {name: 'PHP (Laravel)', level: 95},
            {name: 'Python (Django/Flask)', level: 90},
            {name: 'RESTful APIs', level: 92},
            {name: 'Microservices', level: 87}
        ]
    },
    {
        name: 'Database & DevOps',
        icon: Database,
        skills: [
            {name: 'MySQL & PostgreSQL', level: 90},
            {name: 'Docker & Kubernetes', level: 85},
            {name: 'CI/CD Pipelines', level: 88},
            {name: 'Data Analysis', level: 92}
        ]
    }
]

// Technology Stack Icons
export const technologies = [
    {
        name: 'Python',
        description: 'AI/ML & Backend',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
        name: 'PHP',
        description: 'Backend Development',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    },
    {
        name: 'Laravel',
        description: 'PHP Framework',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
    },
    {
        name: 'TensorFlow',
        description: 'ML Framework',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
    },
    {
        name: 'PyTorch',
        description: 'Deep Learning',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
    },
    {
        name: 'MySQL',
        description: 'Database',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
        name: 'PostgreSQL',
        description: 'Database',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
        name: 'Docker',
        description: 'Containerization',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
        name: 'Pandas',
        description: 'Data Analysis',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'
    },
    {
        name: 'NumPy',
        description: 'Numerical Computing',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg'
    },
    {
        name: 'Git',
        description: 'Version Control',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
        name: 'Django',
        description: 'Python Framework',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
    }
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
        title: 'Moniaz',
        category: 'EdTech / LMS',
        description: 'Next-generation modular smart educational management platform',
        longDescription: 'Moniaz is an advanced, fully modular educational platform built on microservices architecture and modern technologies. It offers a complete ecosystem for buying and selling courses, managing schools, dedicated student and teacher dashboards, task assignments, online sessions and VOD streaming, exams, blockchain-based certifications, and interactive learning tools. With a professional UX design and PWA support, Moniaz delivers a smooth, scalable, and engaging learning experience.',
        tech: [
            'Microservices Architecture',
            'Node.js',
            'WebRTC',
            'RTMP',
            'Blockchain Certification',
            'PWA',
            'Responsive UI/UX'
        ],
        icon: DollarSign,
        image: '/images/projects/moniaz-platform.jpg',
        features: [
            'Dedicated dashboards for students, teachers, admins, and advisors',
            'Course marketplace for buying and selling educational content',
            'Classroom, exam, and question bank management',
            'Live sessions, webinars, and VOD playback',
            'Assignments and project management system',
            'Messaging, discussion boards, and academic advising',
            'Blockchain-based digital certifications',
            'Advanced security with 2FA and RBAC'
        ],
        liveUrl: 'https://www.moniaz.ir/',
        githubUrl: null,
        featured: true
    },
    {
        id: 2,
        title: 'MADT Real Estate Tokenization Platform',
        category: 'Blockchain / Real Estate',
        description: 'Blockchain-powered platform for fractional real estate ownership and liquidity.',
        longDescription: 'MADT is an advanced blockchain-based platform revolutionizing the real estate market by enabling fractional ownership of high-value properties. Through secure property tokenization, investors gain access to verified real estate assets with increased liquidity, transparency, and global reach. Each token represents a share in a specific property, backed by legal frameworks to ensure investor rights. The platform integrates real-time market data, automated compliance, and secure transactions, opening doors to democratized real estate investment.',
        tech: [
            'Node.js',
            'React.js',
            'GraphQL',
            'JWT',
            'Socket.io',
            'Smart Contracts'
        ],
        icon: DollarSign,
        image: '/images/projects/madt-project.jpg',
        features: [
            'Fractional ownership of premium real estate',
            'Blockchain-based property tokenization',
            'Legally compliant asset-backed tokens',
            'Global marketplace for property investment',
            'Liquidity solutions through secondary markets',
            'Secure and transparent transactions'
        ],
        liveUrl: 'https://madt.ir',
        githubUrl: null,
        featured: true
    },
    {
        id: 3,
        title: 'Bitoment Smart Asset Management Hub',
        category: 'DeFi / Asset Management',
        description: 'Next-generation platform bridging CeFi and DeFi investment products.',
        longDescription: 'Bitoment is a smart asset management hub that seamlessly integrates centralized finance (CeFi) and decentralized finance (DeFi), giving investors access to a wide range of institutionally managed digital investment products. The platform leverages AI-powered analytics for portfolio optimization, real-time risk assessment, and automated rebalancing. With a focus on transparency, security, and performance, Bitoment empowers both retail and institutional investors to diversify and grow their digital asset portfolios with ease.',
        tech: [
            'Python',
            'TensorFlow',
            'Blockchain',
            'React',
            'Smart Contracts',
            'REST APIs'
        ],
        icon: Brain,
        image: '/images/projects/bitoment-project.jpg',
        features: [
            'Seamless bridge between CeFi and DeFi ecosystems',
            'Institutionally managed investment products',
            'AI-driven analytics and portfolio optimization',
            'Real-time risk monitoring and reporting',
            'Diverse asset classes and yield strategies',
            'Secure custody and transaction infrastructure'
        ],
        liveUrl: null,
        githubUrl: null,
        featured: true
    }

]

// All projects (including non-featured)
export const allProjects = [
    ...featuredProjects,
    {
        id: 4,
        title: 'Karo Educational VOD Platform',
        category: 'EdTech / Kids Learning',
        description: 'AI-powered educational video-on-demand platform for children.',
        longDescription: 'Karo is an innovative educational video-on-demand (VOD) platform designed specifically for children, combining engaging multimedia learning experiences with advanced machine learning algorithms. It offers personalized content recommendations based on each child’s learning style and progress, while providing a secure environment with strict parental controls. Parents can monitor performance, track progress, and set learning goals through an intuitive dashboard. Built with modern technologies, Karo ensures safe, adaptive, and fun learning for young minds.',
        tech: [
            'PHP',
            'React Native',
            'ELK Stack',
            'Machine Learning Models',
            'REST APIs'
        ],
        icon: GraduationCap,
        image: '/images/projects/karo-project.jpg',
        features: [
            'AI-powered personalized content recommendations',
            'Secure and age-appropriate content filtering',
            'Parental control dashboard with learning analytics',
            'Progress tracking and achievement badges',
            'Cross-platform accessibility (Web & Mobile)',
            'Interactive and engaging video learning experience'
        ],
        liveUrl: 'https://karo-app.ir/',
        githubUrl: null,
        featured: true
    },
    {
        id: 5,
        title: 'National Comprehensive Smart Cooperative System',
        category: 'Government / Cooperative Management',
        description: 'Integrated digital platform for managing and supporting cooperatives nationwide.',
        longDescription: 'A secure, AI-enabled, and fully integrated government platform designed to digitize and streamline the management of cooperatives across the country. This system provides online services for cooperative members, managers, inspectors, and unions, enabling registration, reporting, compliance checks, and data-driven decision-making. Built with scalability and high security in mind, it supports millions of users and offers real-time monitoring, analytics, and seamless integration with other national systems.',
        tech: [
            'PHP',
            'Python',
            'Docker Swarm',
            'PostgreSQL',
            'AI Analytics',
            'RESTful APIs'
        ],
        icon: Shield,
        image: '/images/projects/national-cooperative-system.jpg',
        features: [
            'Online cooperative registration and management',
            'Member, manager, and inspector dashboards',
            'Automated compliance and reporting tools',
            'Real-time monitoring and analytics',
            'Secure authentication with 2FA and RBAC',
            'Integration with other government services'
        ],
        liveUrl: 'https://taavoni.mcls.gov.ir/',
        githubUrl: null,
        featured: true
    },
    {
        id: 6,
        title: 'Tolerance Trading Room',
        category: 'AI Trading',
        description: 'Proprietary AI Trading Engine',
        longDescription: 'A proprietary trading engine that uses real-time, exclusive ecosystem data to generate superior, consistent returns (alpha).',
        tech: ['Python', 'TensorFlow', 'Real-time Analytics', 'ML Models', 'Trading APIs'],
        icon: Brain,
        image: '/images/projects/tolerance-project.jpg',
        features: ['AI Trading', 'Real-time Data', 'Alpha Generation', 'Risk Management'],
        liveUrl: null,
        githubUrl: null,
        featured: false
    },
    {
        id: 7,
        title: 'National Toy Festival Platform',
        category: 'Event & Cultural Platform',
        description: 'Interactive digital platform for the National Toy Festival organized by Kanoon.',
        longDescription: 'An engaging, user-friendly, and fully responsive web platform designed for the National Toy Festival, hosted by the Institute for the Intellectual Development of Children and Young Adults (Kanoon). The platform provides comprehensive festival information, online registration for participants, interactive showcases of toys and creative works, and a seamless mobile-friendly experience. Built with modern front-end technologies, it offers a vibrant and playful interface that captures the spirit of creativity and innovation.',
        tech: [
            'HTML5',
            'CSS3',
            'JavaScript (ES6)',
            'Responsive Design',
            'Bootstrap'
        ],
        icon: Star,
        image: '/images/projects/toy-festival-platform.jpg',
        features: [
            'Online participant registration',
            'Festival schedule and program details',
            'Interactive toy showcases and galleries',
            'Mobile-first responsive design',
            'Multilingual support',
            'Engaging and playful UI/UX'
        ],
        liveUrl: null,
        githubUrl: null,
        featured: true
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
    {value: '4+', label: 'Years Experience', delay: 0},
    {value: '20+', label: 'AI Projects', delay: 100},
    {value: '15+', label: 'ML Technologies', delay: 200},
    {value: '2', label: 'Olympiad Medals', delay: 300}
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
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Skills', path: '/skills'},
    {name: 'Projects', path: '/projects'},
    {name: 'CV', path: '/cv'},
    {name: 'Contact', path: '/contact'}
]