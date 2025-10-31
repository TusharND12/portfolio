import { NextRequest, NextResponse } from 'next/server';
import { personalInfo, skills, projects, experiences, achievements, terminalCommands } from '@/lib/data';

// AI Chat endpoint (simplified version without actual AI)
// To enable real AI, integrate OpenAI or Anthropic API
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Enhanced AI responses with comprehensive portfolio data search
    const lowerMessage = message.toLowerCase();
    let response = '';

    // Helper function to search through data
    const searchProjects = (query: string) => {
      return projects.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.technologies.some(t => t.toLowerCase().includes(query))
      );
    };

    const searchSkills = (query: string) => {
      const allSkills = [
        ...skills.frontend,
        ...skills.backend,
        ...(skills.ml_ai || []),
        ...skills.tools,
        ...(skills.deployment || []),
        ...(skills.advanced_ml || [])
      ];
      return allSkills.filter(s => s.name.toLowerCase().includes(query));
    };

    // Comprehensive search responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      response = `$ whoami
tushar-ai-assistant

$ ls -la portfolio/
drwxr-xr-x 8 tushar tushar 4096 Dec 2024 projects/
drwxr-xr-x 6 tushar tushar 4096 Dec 2024 skills/
drwxr-xr-x 4 tushar tushar 4096 Dec 2024 experience/
drwxr-xr-x 3 tushar tushar 4096 Dec 2024 achievements/

$ cat README.md
AI Assistant for ${personalInfo.name}'s Portfolio
===============================================

Available commands:
• search projects python    # Find Python projects
• search skills react       # Find React expertise  
• search achievements ml    # Find ML achievements
• search experience intern  # Find internship details
• contact info             # Get contact information

$ help
Type your query to search through portfolio data...`;
    }
    else if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      const allSkills = [
        ...skills.frontend,
        ...skills.backend,
        ...(skills.ml_ai || []),
        ...skills.tools,
        ...(skills.deployment || []),
        ...(skills.advanced_ml || [])
      ];
      const topSkills = allSkills.slice(0, 10).map(s => s.name);
      response = `$ ls -la skills/
drwxr-xr-x 6 tushar tushar 4096 Dec 2024 frontend/
drwxr-xr-x 6 tushar tushar 4096 Dec 2024 backend/
drwxr-xr-x 6 tushar tushar 4096 Dec 2024 ml_ai/
drwxr-xr-x 6 tushar tushar 4096 Dec 2024 tools/
drwxr-xr-x 6 tushar tushar 4096 Dec 2024 deployment/

$ cat skills/README.md
Expertise in 25+ technologies across multiple domains:

Frontend Technologies:
${skills.frontend.map(s => `- ${s.name} (${s.level}%)`).join('\n')}

Backend Technologies:
${skills.backend.map(s => `- ${s.name} (${s.level}%)`).join('\n')}

ML/AI Technologies:
${skills.ml_ai?.map(s => `- ${s.name} (${s.level}%)`).join('\n') || '- TensorFlow, Keras, OpenCV, Scikit-learn'}

Tools & Deployment:
${skills.tools.map(s => `- ${s.name} (${s.level}%)`).join('\n')}

$ echo "Top Skills: ${topSkills.join(', ')}"
Top Skills: ${topSkills.join(', ')}`;
    }
    else if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
      const featuredProjects = projects.filter(p => p.featured);
      response = `$ ls -la projects/
${projects.map((p, i) => `drwxr-xr-x 8 tushar tushar 4096 Dec 2024 ${p.title.replace(/\s+/g, '_').toLowerCase()}/`).join('\n')}

$ cat projects/README.md
Total Projects: ${projects.length}
Featured Projects: ${featuredProjects.length}

Featured Project List:
${featuredProjects.map((p, i) => `${i+1}. ${p.title}\n   Description: ${p.description.split('.')[0]}\n   Technologies: ${p.technologies.join(', ')}\n`).join('')}

$ echo "Search commands: 'react projects', 'python projects', 'ml projects'"
Search commands: 'react projects', 'python projects', 'ml projects'

$ echo "Key Stats: 95% ML accuracy, 1800+ images processed, international research"
Key Stats: 95% ML accuracy, 1800+ images processed, international research`;
    }
    else if (lowerMessage.includes('experience') || lowerMessage.includes('internship') || lowerMessage.includes('work')) {
      response = `$ ls -la experience/
drwxr-xr-x 4 tushar tushar 4096 Dec 2024 research_intern/
drwxr-xr-x 4 tushar tushar 4096 Dec 2024 ml_intern/
drwxr-xr-x 4 tushar tushar 4096 Dec 2024 fullstack_dev/

$ cat experience/current.txt
Position: Research Internship at Binghamton University (VUxBU Centre)
Location: New York, United States | Pune, India
Duration: August 2024 - December 2024 (5 months)
Status: ACTIVE

$ cat experience/history.txt
Experience Timeline:
1. Research Intern - Binghamton University (VUxBU Centre)
   Duration: Aug 2024 - Dec 2024
   Location: New York, USA | Pune, India

2. Machine Learning Intern - Vishwakarma University
   Duration: Aug 2024 - Dec 2024
   Location: Pune, India

3. Full Stack Developer - Academix WebApp
   Duration: 2023 - 2024
   Location: Remote

4. Software Developer - Medical AI Systems
   Duration: 2023 - 2024
   Location: Remote

$ echo "Specializations: ML Research, Precision Agriculture, Medical AI, Full-Stack Development"
Specializations: ML Research, Precision Agriculture, Medical AI, Full-Stack Development`;
    }
    else if (lowerMessage.includes('achievement') || lowerMessage.includes('award') || lowerMessage.includes('hackathon') || lowerMessage.includes('winner')) {
      const unlockedAchievements = achievements.filter(a => a.unlocked);
      response = `$ ls -la achievements/
${unlockedAchievements.map(a => `-rw-r--r-- 1 tushar tushar 1024 Dec 2024 ${a.id}.txt`).join('\n')}

$ cat achievements/hackathon_winner.txt
ACHIEVEMENT: 1st Place Winner
COMPETITION: Fusion National Level Hackathon 2025
DOMAIN: AIML (AI/ML)
DATE: 2025
STATUS: UNLOCKED ✅

$ cat achievements/research_intern.txt
ACHIEVEMENT: Research Intern
INSTITUTION: Binghamton University (VUxBU Centre)
DURATION: Aug 2024 - Dec 2024
LOCATION: New York, USA | Pune, India
STATUS: UNLOCKED ✅

$ cat achievements/ml_expert.txt
ACHIEVEMENT: ML Expert
SPECIALIZATION: Disease Detection Models
ACCURACY: 95%
IMAGES_PROCESSED: 1800+
STATUS: UNLOCKED ✅

$ echo "Additional Highlights: International research, precision agriculture, model compression"
Additional Highlights: International research, precision agriculture, model compression`;
    }
    else if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('student')) {
      response = `**Education Background:**

🎓 **B.Tech Computer Engineering** (3rd Year Student)
📍 **Location:** Pune, Maharashtra, India
📚 **Focus Areas:** AI/ML, Full-Stack Development, Software Engineering

**Academic Highlights:**
• Active in research and development
• Multiple hackathon victories
• International internship experience
• Strong foundation in computer science fundamentals

I'm passionate about applying theoretical knowledge to real-world problems!`;
    }
    else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('hire') || lowerMessage.includes('collaborate')) {
      response = `$ cat contact.txt
NAME: ${personalInfo.name}
EMAIL: ${personalInfo.email}
PHONE: ${personalInfo.phone}
LOCATION: ${personalInfo.location}
GITHUB: ${personalInfo.github}
LINKEDIN: ${personalInfo.linkedin}

$ cat interests.txt
INTERESTS:
- Full-time opportunities in AI/ML
- Research collaborations  
- Freelance projects
- Open source contributions

$ echo "Contact methods: Email, LinkedIn, GitHub, Contact Form"
Contact methods: Email, LinkedIn, GitHub, Contact Form

$ echo "Always excited to discuss new opportunities!"
Always excited to discuss new opportunities!`;
    }
    else if (lowerMessage.includes('ml') || lowerMessage.includes('machine learning') || lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
      response = `I'm passionate about **Machine Learning & AI**! Here's my expertise:

🧠 **ML Specializations:**
• **Disease Detection:** 95% accuracy in pigeon pea disease classification
• **Medical AI:** 85% accuracy in ulcerative colitis detection
• **Model Compression:** EdgeCompress pipeline for multimodal models
• **Computer Vision:** OpenCV, image processing, CNN architectures

🛠️ **Technologies:** TensorFlow, Keras, OpenCV, Scikit-learn, PyTorch
📊 **Research:** Precision agriculture, medical diagnosis, edge intelligence
🏆 **Achievements:** 1,800+ labeled images, international research collaboration

Want to know more about any specific ML project or technology?`;
    }
    else if (lowerMessage.includes('react') || lowerMessage.includes('frontend') || lowerMessage.includes('javascript')) {
      response = `I love **frontend development**! Here's what I work with:

⚛️ **React.js Expert:** 95% proficiency
🎨 **Styling:** HTML5, CSS3, Tailwind CSS (90% proficiency)
📱 **Responsive Design:** Mobile-first approach
🔧 **Tools:** Modern build tools and deployment

**Featured Frontend Projects:**
• **Academix WebApp** - Full-stack social platform
• **EdgeCompress** - Modern web UI for model compression
• **This Portfolio** - Interactive 3D universe

**Skills:** JavaScript (92%), React.js (95%), HTML5 (98%), CSS3 (88%), Tailwind CSS (90%)

Interested in my frontend projects or techniques?`;
    }
    else if (lowerMessage.includes('python') || lowerMessage.includes('backend') || lowerMessage.includes('node')) {
      response = `I excel in **backend development** and **Python**:

🐍 **Python Expert:** 95% proficiency (my strongest language!)
⚙️ **Backend Technologies:** Node.js (90%), Express.js (88%), SQL (87%)
🗃️ **Databases:** MongoDB (85%), PostgreSQL, SQL
🔌 **Real-time:** WebSockets, Firebase integration

**Backend Projects:**
• **Pigeon Pea Disease Detection** - Python ML pipeline
• **Ulcerative Colitis Detection** - Medical AI backend
• **Academix WebApp** - Node.js/Express APIs
• **EdgeCompress** - Flask backend for ML compression

**Specializations:** API design, database optimization, real-time systems

Want to know more about my backend architecture or Python expertise?`;
    }
    else {
      // Search through all data for relevant information
      const projectMatches = searchProjects(lowerMessage);
      const skillMatches = searchSkills(lowerMessage);
      
      if (projectMatches.length > 0) {
        response = `I found **${projectMatches.length} project(s)** related to your query:

${projectMatches.map(p => `🎯 **${p.title}** - ${p.description}\n🛠️ Technologies: ${p.technologies.join(', ')}`).join('\n\n')}

Want more details about any of these projects?`;
      } else if (skillMatches.length > 0) {
        response = `I found these **skills/technologies** related to your query:

${skillMatches.map(s => `⚡ **${s.name}** - ${s.level}% proficiency`).join('\n')}

I use these technologies in various projects. Would you like to know more about how I apply them?`;
      } else {
        response = `That's an interesting question! I can help you find information about:

🔍 **Try searching for:**
• Specific technologies (React, Python, TensorFlow, etc.)
• Project types (ML projects, web apps, research)
• Skills or expertise areas
• Experience or achievements

Or ask me about:
• My hackathon victory
• Research internship at Binghamton University
• ML model accuracy achievements
• Contact information for opportunities

What specific information are you looking for?`;
      }
    }

    // If you want to use real AI, uncomment and configure:
    // if (process.env.OPENAI_API_KEY) {
    //   const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    //   const completion = await openai.chat.completions.create({
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //       { role: "system", content: `You are an AI assistant for ${personalInfo.name}, a ${personalInfo.title}. Answer questions about their skills, projects, and experience.` },
    //       { role: "user", content: message }
    //     ],
    //   });
    //   response = completion.choices[0].message.content;
    // }

    return NextResponse.json(
      { response },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

