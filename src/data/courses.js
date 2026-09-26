export const COURSES_DATA = [
  {
    id: 'thunder-web',
    title: 'Thunder: 100 Days of Code',
    subtitle: 'Master Full Stack Web Development, Distributed System Design (HLD & LLD), React, TypeScript, Node.js, and DevOps from Scratch with Live Coding.',
    category: 'bootcamp',
    instructor: 'Rohit Negi & Aditya Tandon',
    instructorRole: 'Ex-Uber SDE & Senior Distributed Systems Architect',
    rating: 4.98,
    reviewsCount: 4820,
    enrolledCount: '18,500+',
    originalPrice: 11999,
    currentPrice: 7199,
    badge: 'FLAGSHIP LIVE BATCH',
    badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold',
    isLive: true,
    startDate: 'Live Batch Enrolling',
    duration: '100+ Hours • 72 Modules',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80',
    tags: ['Full Stack', 'React 19', 'System Design', 'DevOps', 'Live Projects'],
    features: [
      '100+ Hours of Live Interactive Classes',
      'Advanced High Level & Low Level System Design',
      'Production MERN + TypeScript Architecture',
      'Docker, Kubernetes, CI/CD Pipeline Deployments',
      'Daily Doubt Solving on Dedicated Discord',
      '1-on-1 Resume Reviews & Mock Interviews'
    ],
    thumbnailGradient: 'from-amber-500/20 via-orange-600/10 to-purple-950/40',
    syllabusHighlights: [
      {
        week: 'Module 1 (Weeks 1-3)',
        title: 'Modern Frontend & TypeScript Architecture',
        topics: ['JavaScript V8 Internals & Event Loop', 'React 19 Hooks & Server Components', 'TypeScript in Production', 'Tailwind CSS & Responsive Layouts']
      },
      {
        week: 'Module 2 (Weeks 4-7)',
        title: 'Distributed Backend & Database Mastery',
        topics: ['Node.js & Express Scalable Architecture', 'PostgreSQL Relational Schema Design', 'MongoDB Indexing & Sharding', 'Redis Caching & Kafka Pub-Sub']
      },
      {
        week: 'Module 3 (Weeks 8-11)',
        title: 'System Design (HLD + LLD) & Security',
        topics: ['Architecting Uber, Netflix & WhatsApp', 'SOLID Principles & 23 GoF Design Patterns', 'OAuth2, JWT & RBAC Security', 'Load Balancing & Rate Limiting']
      },
      {
        week: 'Module 4 (Weeks 12-14)',
        title: 'DevOps & Capstone Production Deployment',
        topics: ['Docker Multi-stage Containerization', 'Kubernetes Helm & AWS Deployment', 'CI/CD with GitHub Actions', 'Full Production Capstone Launch']
      }
    ]
  },
  {
    id: 'genai-engineering',
    title: 'The Complete Generative AI Engineering Bootcamp',
    subtitle: 'Build & Deploy Autonomous AI Agents, Enterprise RAG Pipelines, Fine-tuned LLMs & Multi-Agent Swarms with LangChain & LangGraph.',
    category: 'genai',
    instructor: 'Rohit Negi',
    instructorRole: 'Ex-Uber SDE & AI Systems Specialist',
    rating: 4.96,
    reviewsCount: 3150,
    enrolledCount: '12,200+',
    originalPrice: 14999,
    currentPrice: 8999,
    badge: 'TRENDING #1',
    badgeColor: 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold',
    isLive: true,
    startDate: 'Enrolling Now',
    duration: '80+ Hours • 45 Modules',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    tags: ['Generative AI', 'LangGraph', 'Autonomous Agents', 'RAG', 'Vector DBs'],
    features: [
      'Build Multi-Agent Workflows & Autonomous Swarms',
      'Enterprise Production RAG Architecture',
      'Fine-Tuning Llama 3 & Mistral with LoRA/QLoRA',
      'Vector Databases (Pinecone, Qdrant, Milvus)',
      'Evaluation Frameworks (Ragas, TruLens)',
      '5 Real-World Autonomous Enterprise AI Projects'
    ],
    thumbnailGradient: 'from-purple-500/20 via-indigo-600/10 to-cyan-950/40',
    syllabusHighlights: [
      {
        week: 'Phase 1',
        title: 'LLM Foundations & Prompt Engineering',
        topics: ['Transformer Architecture Internals', 'Context Windows & Tokenization', 'Advanced Chain-of-Thought Prompting']
      },
      {
        week: 'Phase 2',
        title: 'Production RAG & Vector Embeddings',
        topics: ['Chunking Strategies & Hybrid Search', 'Pinecone & Qdrant Integration', 'Re-ranking & Context Compression']
      },
      {
        week: 'Phase 3',
        title: 'Autonomous Multi-Agent Swarms',
        topics: ['LangGraph State Machines', 'Tool Calling & Function Execution', 'Multi-Agent Consensus Protocols']
      }
    ]
  },
  {
    id: 'dsa-cpp-mastery',
    title: 'Data Structures and Algorithms in C++: Beginner to Advanced',
    subtitle: 'Master DSA from First Principles. 450+ curated problems, visual memory animations, and FAANG interview preparation.',
    category: 'dsa',
    instructor: 'Rohit Negi',
    instructorRole: 'Ex-Uber SDE, AIR 202 GATE',
    rating: 4.99,
    reviewsCount: 8940,
    enrolledCount: '34,000+',
    originalPrice: 8999,
    currentPrice: 5399,
    badge: 'ALL-TIME BESTSELLER',
    badgeColor: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-bold',
    isLive: false,
    startDate: 'Instant Lifetime Access',
    duration: '150+ Hours • 450+ Problems',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    tags: ['C++', 'DSA', 'LeetCode Hard', 'FAANG Prep', 'First Principles'],
    features: [
      '450+ Hand-Picked Coding Problems',
      'First Principles Step-by-Step Visualization',
      'Arrays, Trees, DP, Graphs, Segment Trees',
      'Interview Patterns & Space-Time Optimization',
      'Company-wise Mock Tests & Contests',
      'Lifetime Access + Dedicated Discord Support'
    ],
    thumbnailGradient: 'from-emerald-500/20 via-teal-600/10 to-zinc-950/40',
    syllabusHighlights: [
      {
        week: 'Phase 1',
        title: 'Core Fundamentals & Pointers',
        topics: ['Memory Layout & Pointer Arithmetic', 'Time & Space Complexity', 'Bit Manipulation & Math for Tech']
      },
      {
        week: 'Phase 2',
        title: 'Linear & Non-Linear Structures',
        topics: ['Two Pointers & Sliding Window', 'Recursion & Backtracking', 'Trees, BST & Heaps']
      },
      {
        week: 'Phase 3',
        title: 'Advanced Dynamic Programming & Graphs',
        topics: ['DP Patterns & Optimization', 'Graph Traversal, Shortest Paths', 'Tries & Disjoint Set Union']
      }
    ]
  },
  {
    id: 'system-design-security',
    title: 'High Level Design (HLD) & System Design Mastery',
    subtitle: 'Architect massive scale systems handling 100M+ active users. Scalability, microservices, databases, and enterprise security.',
    category: 'systemdesign',
    instructor: 'Rohit Negi',
    instructorRole: 'Ex-Uber Distributed Systems',
    rating: 4.96,
    reviewsCount: 2900,
    enrolledCount: '9,800+',
    originalPrice: 9999,
    currentPrice: 5999,
    badge: 'SENIOR SDE ESSENTIAL',
    badgeColor: 'bg-gradient-to-r from-purple-400 to-pink-500 text-black font-bold',
    isLive: false,
    startDate: 'Instant Lifetime Access',
    duration: '60+ Hours • 35 Systems',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
    tags: ['HLD', 'Distributed Systems', 'Microservices', 'Security', 'Kafka'],
    features: [
      'Design Real Systems: WhatsApp, Uber, Netflix, TinyURL',
      'SOLID Principles & 23 Gang of Four Patterns',
      'CAP Theorem, Sharding, Consistency Models',
      'API Gateways, Rate Limiting & Zero Trust Security',
      'Real Architectural Blueprints & Code Demos',
      'Senior Engineering Interview Prep'
    ],
    thumbnailGradient: 'from-purple-500/20 via-indigo-600/10 to-slate-950/40',
    syllabusHighlights: [
      {
        week: 'Part 1',
        title: 'Low Level Design & Object Oriented Patterns',
        topics: ['SOLID Principles with Real Code', 'Design Patterns (Factory, Strategy, Observer)', 'Concurrency & Thread Pools']
      },
      {
        week: 'Part 2',
        title: 'Distributed Systems & HLD Architectures',
        topics: ['Database Sharding & Replication', 'Message Queues (Kafka/RabbitMQ)', 'CDN & Distributed Caching']
      }
    ]
  },
  {
    id: 'devops-cloud',
    title: 'DevOps: From Foundations to Production',
    subtitle: 'Master Docker, Kubernetes, Terraform, AWS, Prometheus, Grafana, and automated CI/CD pipelines.',
    category: 'systemdesign',
    instructor: 'Aditya Tandon & DevOps Team',
    instructorRole: 'Cloud Architects',
    rating: 4.92,
    reviewsCount: 1650,
    enrolledCount: '6,400+',
    originalPrice: 8499,
    currentPrice: 4999,
    badge: 'PRODUCTION READY',
    badgeColor: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-black font-bold',
    isLive: false,
    startDate: 'Instant Access',
    duration: '50+ Hours • 25 Deployments',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    tags: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD'],
    features: [
      'Containerizing Complex Microservices',
      'K8s Helm Charts & Ingress Controllers',
      'Infrastructure as Code (IaC) with Terraform',
      'Zero-Downtime Blue/Green Deployments',
      'Production Monitoring with Grafana & Loki',
      'Cloud Security & Cost Optimization'
    ],
    thumbnailGradient: 'from-sky-500/20 via-indigo-600/10 to-slate-950/40',
    syllabusHighlights: [
      {
        week: 'Module 1',
        title: 'Containers & Linux Internals',
        topics: ['Linux Kernel Namespaces & Cgroups', 'Multi-stage Docker Builds', 'Docker Compose Clusters']
      },
      {
        week: 'Module 2',
        title: 'Kubernetes & Cloud Infrastructure',
        topics: ['K8s Pods, Deployments & StatefulSets', 'AWS VPC, EKS, IAM', 'Terraform Modules']
      }
    ]
  },
  {
    id: 'dsa-genai-combo',
    title: 'Complete DSA + GenAI Combo: Algorithms to AI Agents',
    subtitle: 'The ultimate 2-in-1 tech mastery bundle combining algorithmic problem solving with cutting-edge AI Agent engineering.',
    category: 'bootcamp',
    instructor: 'Rohit Negi',
    instructorRole: 'Founder & Lead Instructor',
    rating: 4.99,
    reviewsCount: 5200,
    enrolledCount: '21,000+',
    originalPrice: 19999,
    currentPrice: 10999,
    badge: 'MAXIMUM VALUE',
    badgeColor: 'bg-gradient-to-r from-fuchsia-400 to-rose-500 text-black font-bold',
    isLive: true,
    startDate: 'Immediate Access + Live Batch',
    duration: '230+ Hours Total',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80',
    tags: ['Combo Bundle', 'DSA', 'Gen AI', 'Career Fast-Track', 'All Access'],
    features: [
      'Includes Complete DSA in C++ Mastery',
      'Includes Full Generative AI Bootcamp',
      '200+ Live Doubts Solving Hours',
      'Exclusive Access to Coder Arena Pro',
      'Weekly Mentorship Sessions with Rohit Negi',
      'Verified Dual Certification'
    ],
    thumbnailGradient: 'from-fuchsia-500/20 via-violet-600/10 to-slate-950/40',
    syllabusHighlights: [
      {
        week: 'Track 1',
        title: 'Algorithmic Mastery (DSA Complete)',
        topics: ['Complete C++ Fundamentals to Hard DP', 'FAANG Interview Patterns', 'Mock Coding Contests']
      },
      {
        week: 'Track 2',
        title: 'Next-Gen AI Engineering',
        topics: ['LLM Architecture & Agents', 'Full RAG Pipelines', 'Autonomous Coding Assistants']
      }
    ]
  }
];

export const PRICING_PLANS = [
  {
    id: 'strike-plus',
    name: 'Strike Plus',
    tagline: 'Complete access to the entire recorded course library and curated practice questions on Coder Arena.',
    popular: false,
    durations: [
      { duration: '1 Year', originalPrice: 9999, salePrice: 5999, monthlyEquivalent: 499 },
      { duration: '2 Years', originalPrice: 14999, salePrice: 8999, monthlyEquivalent: 374 },
      { duration: '3 Years', originalPrice: 19999, salePrice: 11999, monthlyEquivalent: 333 },
      { duration: '4 Years', originalPrice: 24999, salePrice: 14999, monthlyEquivalent: 312 }
    ],
    features: [
      'Full Access to Complete DSA C++ & Java Library',
      'Full Access to Web Dev & Backend Tracks',
      'Full Access to System Design (HLD & LLD)',
      'Coder Arena Pro Problem Solving Access',
      'Curated Notes, Cheat Sheets & Slides',
      'Community Discord Access with TA Support',
      'Certificate of Completion for all tracks'
    ],
    highlightPerks: ['500+ Hours Video Content', 'Self-Paced Lifetime Learning Mode']
  },
  {
    id: 'strike-ultra',
    name: 'Strike Ultra',
    tagline: 'The ultimate all-inclusive pass. Everything in Plus + All upcoming Live Bootcamps (including Thunder 100) & Gen AI.',
    popular: true,
    badge: 'RECOMMENDED FOR FULL CAREER TRANSITION',
    durations: [
      { duration: '1 Year', originalPrice: 15999, salePrice: 9599, monthlyEquivalent: 799 },
      { duration: '2 Years', originalPrice: 22999, salePrice: 13799, monthlyEquivalent: 574 },
      { duration: '3 Years', originalPrice: 29999, salePrice: 17999, monthlyEquivalent: 499 },
      { duration: '4 Years', originalPrice: 36999, salePrice: 21999, monthlyEquivalent: 458 }
    ],
    features: [
      'EVERYTHING IN STRIKE PLUS',
      '⚡ Access to ALL Live Bootcamps (including Thunder 100)',
      '🤖 Complete Generative AI Engineering Program',
      '🌟 1-on-1 Personalized Resume & LinkedIn Audit',
      '🎙️ 3 Guaranteed Mock Interviews with FAANG SDEs',
      '⚡ Direct Priority Doubt Queue with Lead Mentors',
      '👥 Private Ultra-only Mastermind Group with Rohit Negi',
      '🚀 Placement Referrals to 120+ Partner Tech Companies'
    ],
    highlightPerks: ['Live Interactive Sessions', 'Job Referral Portal Access', 'Free Access to All Future Courses']
  }
];
