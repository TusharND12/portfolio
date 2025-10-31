// Portfolio Data Configuration
// Customize this file with your own information

export const personalInfo = {
  name: "Tushar Dhokane",
  title: "Full-Stack Developer & ML Engineer",
  tagline: "Building intelligent solutions with cutting-edge technology • 1st Place Winner - Fusion National Level Hackathon 2025",
  email: "tushardhokane12@gmail.com",
  github: "https://github.com/TusharND12",
  linkedin: "https://linkedin.com/in/tushar-dhokane12",
  twitter: "https://twitter.com/tushar_dhokane",
  location: "Pune, Maharashtra, India",
  phone: "+91 9623541671",
  summary: "Full Stack Developer with comprehensive experience in software development lifecycle, specializing in concept design, testing, and deployment. Proficient in backend and frontend technologies, including Python, Java, and SQL. Achievements include optimizing coding processes for increased efficiency and producing clean code for complex applications. Recognized for exceptional critical thinking and problem-solving abilities that lead to effective solutions.",
};

export const skills = {
  frontend: [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "HTML5", level: 98, icon: "🌐" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "JavaScript", level: 92, icon: "📘" },
    { name: "CSS3", level: 88, icon: "🎭" },
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "Express.js", level: 88, icon: "🚀" },
    { name: "Python", level: 95, icon: "🐍" },
    { name: "Java", level: 85, icon: "☕" },
    { name: "SQL", level: 87, icon: "🗃️" },
  ],
  ml_ai: [
    { name: "TensorFlow", level: 92, icon: "🧠" },
    { name: "Keras", level: 90, icon: "🔥" },
    { name: "OpenCV", level: 88, icon: "👁️" },
    { name: "Scikit-learn", level: 85, icon: "🔬" },
    { name: "Pandas", level: 90, icon: "🐼" },
  ],
  tools: [
    { name: "Git", level: 93, icon: "📦" },
    { name: "GitHub", level: 95, icon: "🐙" },
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "Mongoose", level: 82, icon: "🦫" },
    { name: "WebSockets", level: 80, icon: "🔌" },
  ],
  deployment: [
    { name: "Vercel", level: 90, icon: "▲" },
    { name: "Netlify", level: 85, icon: "🌐" },
    { name: "Heroku", level: 80, icon: "🚀" },
    { name: "Firebase", level: 88, icon: "🔥" },
    { name: "Docker", level: 75, icon: "🐳" },
  ],
  advanced_ml: [
    { name: "PyTorch", level: 90, icon: "🔥" },
    { name: "Transformers", level: 85, icon: "🤗" },
    { name: "ONNX Runtime", level: 80, icon: "⚡" },
    { name: "Flask", level: 88, icon: "🌶️" },
    { name: "Model Compression", level: 92, icon: "🗜️" },
  ],
};

export const projects = [
  {
    id: "project-1",
    title: "EdgeCompress - Multimodal Foundation Model Compression",
    description: "State-of-the-art pipeline for compressing large multimodal foundation models into edge-friendly architectures with minimal accuracy loss",
    technologies: ["Python", "TypeScript", "PyTorch", "Transformers", "ONNX Runtime", "Flask", "Machine Learning"],
    image: "/images/artificial-intelligence-3382507_1280.jpg",
    github: "https://github.com/TusharND12/Edge-Intelligence-Compression-project",
    live: "https://edge-compress-demo.vercel.app",
    featured: true,
    color: "#ffbe0b",
    achievements: [
      "Universal model support for any vision-language model (CLIP, BLIP, LLaVA)",
      "Triple compression strategy: Quantization, Pruning, Knowledge Distillation",
      "Target: <1GB model size with real-time inference",
      "Comprehensive metrics: Accuracy, latency, model size tracking",
      "Modern web UI with beautiful, intuitive interface",
      "Performance benchmarks: CLIP-Base 338MB → 85MB (1.2% accuracy drop)"
    ],
  },
  {
    id: "project-2",
    title: "Academix WebApp",
    description: "Social web application for student certification uploads with real-time interactions and messaging",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "WebSockets"],
    image: "/images/kindpng_1272110.png",
    github: "https://github.com/pramay88/Academix",
    live: "https://academix-app.vercel.app",
    featured: true,
    color: "#8338ec",
    achievements: [
      "Full-stack social platform for students",
      "Real-time messaging and notifications",
      "REST API integration",
      "Firebase Realtime Database integration"
    ],
  },
  {
    id: "project-3",
    title: "Power Fault Detection System",
    description: "JavaScript-based system for detecting and analyzing power system faults with real-time monitoring",
    technologies: ["JavaScript", "Real-time Monitoring", "Data Analysis", "Fault Detection"],
    image: "/images/111224-Detection-Eng-blog-header-512x354@2x_9177328cfb.webp",
    github: "https://github.com/TusharND12/Power_Fault_Detection",
    live: "https://power-fault-detection.vercel.app",
    featured: true,
    color: "#ff6b6b",
    achievements: [
      "Real-time fault monitoring",
      "JavaScript-based detection algorithms",
      "Power system analysis",
      "Automated alert system"
    ],
  },
  {
    id: "project-4",
    title: "Pigeon Pea Disease Detection",
    description: "Machine Learning model for automated detection of pigeon pea diseases with 95% classification accuracy",
    technologies: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "CNN"],
    image: "/images/leaf_disease_detection_using_image_processing1.jpg",
    github: "https://github.com/TusharND12/Pigeon-Pea-Disease-Detection",
    live: "https://pigeon-pea-detection.vercel.app",
    featured: true,
    color: "#ff006e",
    achievements: [
      "Collected and labeled 1,800+ images across 7 disease classes",
      "Achieved 95% classification accuracy",
      "Advanced precision agriculture research",
      "Published research collaboration with Binghamton University"
    ],
  },
  {
    id: "project-5",
    title: "Ulcerative Colitis Detection System",
    description: "Deep learning model for automated detection of Ulcerative Colitis from colonoscopy images with 85% accuracy",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Deep Learning"],
    image: "/images/Prevent-Hospitalizations_Main-min.jpg",
    github: "https://github.com/TusharND12/Ulcerative-Colitis-Detection",
    live: "https://colitis-detection.herokuapp.com",
    featured: true,
    color: "#3a86ff",
    achievements: [
      "85% accuracy in initial testing",
      "CNN-based classification techniques",
      "Medical image preprocessing pipeline",
      "Automated detection system"
    ],
  },
  {
    id: "project-6",
    title: "AI Voice Assistant",
    description: "Intelligent voice assistant that integrates with web browsers using advanced NLP and speech recognition",
    technologies: ["Python", "Speech Recognition", "NLP", "Web Integration", "AI"],
    image: "/images/download.jpg",
    github: "https://github.com/TusharND12/AI-Voice-Assistant",
    live: "https://voice-assistant-demo.vercel.app",
    featured: true,
    color: "#06ffa5",
    achievements: [
      "Web browser integration",
      "Natural language processing",
      "Real-time speech recognition",
      "Intelligent response generation"
    ],
  },
];

export const experiences = [
  {
    title: "Research Internship",
    company: "Binghamton University (VU-BU Centre of Design Thinking and Innovation)",
    period: "08/2024 - 12/2024",
    location: "New York, United States",
    description: "5-month research internship focusing on advanced machine learning and design thinking methodologies",
    achievements: [
      "First professional experience in international research collaboration",
      "Worked on cutting-edge ML projects in precision agriculture",
      "Collaborated with international research team at Binghamton University",
      "Developed innovative solutions using design thinking principles",
      "Enhanced cross-cultural communication and research skills",
      "Contributed to VUxBU Centre research initiatives",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Vishwakarma University (Collaboration with Binghamton University)",
    period: "08/2024 - 12/2024",
    location: "Pune, India",
    description: "Developed advanced machine learning models for precision agriculture and medical diagnosis",
    achievements: [
      "Collected and labeled 1,800+ pigeon pea plant images across 7 disease classes",
      "Achieved 95% classification accuracy in pigeon pea disease detection",
      "Designed preprocessing pipeline using OpenCV for noise reduction and augmentation",
      "Implemented CNN using TensorFlow and Scikit-learn for enhanced performance",
      "Advanced precision agriculture research initiatives",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Academix WebApp (Personal Project)",
    period: "2023 - 2024",
    location: "Remote",
    description: "Built comprehensive social web application for student certification management",
    achievements: [
      "Designed and developed social web application for student certification uploads",
      "Built frontend using React.js with responsive design",
      "Created backend APIs with Node.js and Express.js",
      "Integrated MongoDB/Mongoose for database management",
      "Implemented Firebase Realtime Database for messaging and notifications",
      "Utilized REST APIs for seamless frontend-backend communication",
    ],
  },
  {
    title: "Software Developer",
    company: "Ulcerative Colitis Detection System (Research Project)",
    period: "2023 - 2024",
    location: "Remote",
    description: "Developed deep learning model for automated medical diagnosis",
    achievements: [
      "Developed deep learning model for automated Ulcerative Colitis detection",
      "Achieved 85% accuracy during initial testing phases",
      "Utilized TensorFlow, Keras, and OpenCV for preprocessing and augmentation",
      "Employed CNN-based classification techniques for enhanced reliability",
      "Created automated detection system for colonoscopy images",
    ],
  },
];

export const achievements = [
  {
    id: "hackathon-winner",
    title: "1st Place Winner",
    description: "Fusion National Level Hackathon 2025 - AIML Domain",
    icon: "🏅",
    unlocked: true,
  },
  {
    id: "research-intern",
    title: "Research Intern",
    description: "Binghamton University - VUxBU Centre",
    icon: "🔬",
    unlocked: true,
  },
  {
    id: "ml-expert",
    title: "ML Expert",
    description: "95% accuracy in disease detection models",
    icon: "🧠",
    unlocked: true,
  },
  {
    id: "first-visit",
    title: "Welcome Explorer",
    description: "Visited the Developer Universe",
    icon: "🌟",
    unlocked: false,
  },
  {
    id: "terminal-master",
    title: "Terminal Master",
    description: "Used 10 terminal commands",
    icon: "💻",
    unlocked: false,
  },
  {
    id: "planet-explorer",
    title: "Planet Explorer",
    description: "Visited all project planets",
    icon: "🚀",
    unlocked: false,
  },
  {
    id: "secret-finder",
    title: "Secret Finder",
    description: "Found the hidden easter egg",
    icon: "🥚",
    unlocked: false,
  },
  {
    id: "theme-switcher",
    title: "Theme Switcher",
    description: "Tried all theme modes",
    icon: "🎨",
    unlocked: false,
  },
];

export const terminalCommands = {
  help: "Available commands: help, about, skills, projects, contact, clear, ls, cd, cat, whoami, sudo, matrix, theme, resume, ml, ai, edgecompress, hackathon",
  about: `
╔══════════════════════════════════════════════════════════╗
║                   ABOUT ${personalInfo.name.toUpperCase()}                    ║
╚══════════════════════════════════════════════════════════╝

${personalInfo.title}
${personalInfo.tagline}

📍 Location: ${personalInfo.location}
📧 Email: ${personalInfo.email}
📱 Phone: ${personalInfo.phone}
🐙 GitHub: ${personalInfo.github}

🎓 3rd-year Computer Engineering student
💻 Passionate about AI, ML, and full-stack development
🔬 Research experience in precision agriculture and medical diagnosis
🚀 Building intelligent solutions with cutting-edge technology

I'm a passionate developer with expertise in building modern web
applications and machine learning models. I love creating immersive
experiences and solving complex problems with elegant code.
  `,
  whoami: personalInfo.name,
  sudo: "Nice try! But you don't have root access here 😄",
  ml: `
🧠 MACHINE LEARNING EXPERTISE:

• Pigeon Pea Disease Detection (95% accuracy)
• Ulcerative Colitis Detection (85% accuracy)
• TensorFlow, Keras, OpenCV specialist
• CNN and Deep Learning expert
• 1,800+ labeled images processed
• Research collaboration with Binghamton University
  `,
  ai: `
🤖 AI & VOICE ASSISTANCE:

• AI Voice Assistant with web browser integration
• Natural Language Processing expertise
• Speech Recognition and response generation
• Real-time AI interactions
• Intelligent automation systems
  `,
  resume: `
📄 RESUME SUMMARY:

Full Stack Developer with comprehensive experience in software
development lifecycle, specializing in concept design, testing,
and deployment. Proficient in backend and frontend technologies.

🎯 Key Achievements:
• 🏅 1st Place Winner - Fusion National Level Hackathon 2025 (AIML Domain)
• 🔬 Research Internship at Binghamton University (VUxBU Centre)
• 🧠 95% accuracy in ML disease detection models
• 💻 Full-stack web application development
• 🔌 Real-time communication systems
• 🏥 Medical AI diagnosis systems
• 🌾 Precision agriculture research
• 🗜️ Advanced model compression (EdgeCompress project)

📚 Education: B.Tech Computer Engineering (3rd Year)
🏢 Experience: Research Intern at Binghamton University
🌐 Location: Pune, Maharashtra, India
  `,
  edgecompress: `
🗜️ EDGECOMPRESS PROJECT:

State-of-the-art multimodal foundation model compression pipeline
for compressing large vision-language models into edge-friendly
architectures with minimal accuracy loss.

🚀 Features:
• Universal model support (CLIP, BLIP, LLaVA, etc.)
• Triple compression: Quantization, Pruning, Distillation
• Target: <1GB model size with real-time inference
• Modern web UI with comprehensive metrics
• Performance: CLIP-Base 338MB → 85MB (1.2% drop)

🛠️ Technologies: Python, TypeScript, PyTorch, Transformers,
ONNX Runtime, Flask, Machine Learning

📊 Benchmarks:
• CLIP-Base: 338MB → 85MB (1.2% accuracy drop)
• BLIP-Large: 1.8GB → 450MB (2.1% accuracy drop)
• LLaVA-7B: 13GB → 950MB (3.5% accuracy drop)
  `,
  hackathon: `
🏅 FUSION NATIONAL LEVEL HACKATHON 2025:

🏆 1ST PLACE WINNER - AIML DOMAIN

This national-level hackathon victory showcases my expertise
in Artificial Intelligence and Machine Learning. Our team
developed an innovative solution that impressed judges and
competed against top talent from across the country.

🎯 Key Highlights:
• National-level competition victory
• AIML (AI/ML) domain expertise demonstrated
• Team collaboration and leadership skills
• Innovative problem-solving approach
• Recognition in competitive programming environment

🚀 Skills Demonstrated:
• Machine Learning model development
• AI algorithm implementation
• Problem-solving under pressure
• Team coordination and leadership
• Technical presentation skills

This achievement reflects my commitment to excellence
and passion for cutting-edge AI/ML technologies!
  `,
};

