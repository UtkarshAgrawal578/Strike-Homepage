import { Course, PricingPlan } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'thunder-100',
    title: 'Thunder: 100 Days of Code',
    subtitle: 'Comprehensive live bootcamp taking you from absolute zero to building production-grade distributed full-stack systems.',
    category: 'bootcamp',
    instructor: 'Rohit Negi',
    instructorRole: 'Ex-Uber, IIT-G, Top Educator',
    rating: 4.98,
    reviewsCount: 4820,
    enrolledCount: '18,500+',
    originalPrice: 11999,
    currentPrice: 7199,
    badge: 'FLAGSHIP LIVE BATCH',
    badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold',
    isLive: true,
    startDate: 'Batch Starts Next Monday',
    tags: ['Full Stack', 'System Design', 'DevOps', 'Live Projects', 'DSA'],
    features: [
      '100+ Live Interactive Coding Sessions',
      'Production MERN + TypeScript + Microservices',
      'High-Level & Low-Level System Design (HLD/LLD)',
      'Docker, Kubernetes, CI/CD Pipeline Deployment',
      'Daily Practice Problem Sets & TA Doubts Resolving',
      '1-on-1 Resume Reviews & Mock Interviews'
    ],
    thumbnailGradient: 'from-amber-500/20 via-orange-600/10 to-indigo-950/40',
    iconName: 'Zap',
    syllabusHighlights: [
      {
        week: 'Weeks 1-3',
        title: 'Modern Frontend & TypeScript Architecture',
        topics: ['Advanced JavaScript Core', 'React 19 Hooks & Internals', 'TypeScript in Production', 'Tailwind & UI Optimization']
      },
      {
        week: 'Weeks 4-7',
        title: 'Backend Systems & Database Design',
        topics: ['Node.js & Express at Scale', 'PostgreSQL & MongoDB Deep Dive', 'Redis Caching & Pub-Sub', 'Kafka Event Streaming']
      },
      {
        week: 'Weeks 8-11',
        title: 'System Design (HLD + LLD) & Security',
        topics: ['Load Balancers, Rate Limiters', 'OAuth2, JWT & RBAC Security', 'Design Patterns (SOLID)', 'Scalable Chat & Video Architecture']
      },
      {
        week: 'Weeks 12-14',
        title: 'DevOps, CI/CD & Capstone Production Deploy',
        topics: ['Docker Containerization', 'Kubernetes Orchestration', 'AWS EC2, S3, CloudFront', 'CI/CD with GitHub Actions']
      }
    ]
  },
  {
    id: 'genai-engineering',
    title: 'Complete Generative AI Engineering Bootcamp',
    subtitle: 'Build & Deploy Autonomous Multi-Agent Systems, RAG Pipelines, Fine-tuned LLMs & Vector Databases.',
    category: 'genai',
    instructor: 'Rohit Negi & AI Research Team',
    instructorRole: 'AI Systems Specialists',
    rating: 4.95,
    reviewsCount: 3150,
    enrolledCount: '12,200+',
    originalPrice: 14999,
    currentPrice: 8999,
    badge: 'TRENDING #1',
    badgeColor: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold',
    isLive: true,
    startDate: 'Enrolling Now',
    tags: ['Gen AI', 'LangChain', 'LlamaIndex', 'Autonomous Agents', 'RAG'],
    features: [
      'Build Multi-Agent Workflows from Scratch',
      'Enterprise Production RAG Architecture',
      'Fine-Tuning Llama 3 & Mistral with LoRA/QLoRA',
      'Vector Databases (Pinecone, Qdrant, Milvus)',
      'Evaluation Frameworks (Ragas, TruLens)',
      '5 Real-World Autonomous Enterprise AI Projects'
    ],
    thumbnailGradient: 'from-cyan-500/20 via-blue-600/10 to-purple-950/40',
    iconName: 'Cpu',
    syllabusHighlights: [
      {
        week: 'Module 1',
        title: 'Foundations of LLMs & Prompt Engineering',
        topics: ['Transformer Architecture Internals', 'Context Windows & Tokenization', 'Advanced Chain-of-Thought Prompting']
      },
      {
        week: 'Module 2',
        title: 'RAG & Vector Search Systems',
        topics: ['Chunking Strategies', 'Dense & Sparse Embeddings', 'Hybrid Search & Re-ranking']
      },
      {
        week: 'Module 3',
        title: 'Autonomous AI Agents & Orchestration',
        topics: ['LangGraph & AutoGen Workflows', 'Tool Calling & Function Execution', 'Multi-Agent Consensus Protocols']
      }
    ]
  },
  {
    id: 'dsa-cpp-mastery',
    title: 'DSA Mastery in C++: Beginner to FAANG',
    subtitle: 'Master Data Structures & Algorithms with First Principles problem solving, visual animations, and 450+ curated problems.',
    category: 'dsa',
    instructor: 'Rohit Negi',
    instructorRole: 'Ex-Uber SDE, AIR 202',
    rating: 4.99,
    reviewsCount: 8940,
    enrolledCount: '34,000+',
    originalPrice: 8999,
    currentPrice: 5399,
    badge: 'ALL-TIME BESTSELLER',
    badgeColor: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-bold',
    isLive: false,
    startDate: 'Instant Lifetime Access',
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
    iconName: 'Code2',
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
    title: 'High Level Design (HLD) & Low Level Design (LLD)',
    subtitle: 'Architect massive scale systems handling 100M+ users. Learn scalability, microservices, and design patterns.',
    category: 'systemdesign',
    instructor: 'Rohit Negi',
    instructorRole: 'Ex-Uber, Distributed Systems',
    rating: 4.96,
    reviewsCount: 2900,
    enrolledCount: '9,800+',
    originalPrice: 9999,
    currentPrice: 5999,
    badge: 'SENIOR SDE ESSENTIAL',
    badgeColor: 'bg-gradient-to-r from-purple-400 to-pink-500 text-black font-bold',
    isLive: false,
    startDate: 'Instant Access',
    tags: ['HLD', 'LLD', 'Microservices', 'Distributed Systems', 'Security'],
    features: [
      'Design Real Systems: WhatsApp, Uber, Netflix, TinyURL',
      'SOLID Principles & 23 Gang of Four Patterns',
      'CAP Theorem, Sharding, Consistency Models',
      'API Gateways, Rate Limiting & Zero Trust Security',
      'Real Architectural Blueprints & Code Demos',
      'Senior Engineering Interview Prep'
    ],
    thumbnailGradient: 'from-purple-500/20 via-indigo-600/10 to-slate-950/40',
    iconName: 'Layers',
    syllabusHighlights: [
      {
        week: 'Part 1',
        title: 'Low Level Design & Object Oriented Mastery',
        topics: ['Design Patterns with Code', 'Schema Modeling', 'Concurrency & Multithreading']
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
    title: 'DevOps: Foundations to Cloud Production',
    subtitle: 'Master Docker, Kubernetes, Terraform, AWS, Prometheus, Grafana, and automated CI/CD pipelines.',
    category: 'systemdesign',
    instructor: 'DevOps Lead Team',
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
    iconName: 'Server',
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
    title: 'Complete DSA + Generative AI Super Combo',
    subtitle: 'The ultimate 2-in-1 tech mastery bundle combining algorithmic problem solving with cutting-edge AI Agent engineering.',
    category: 'bootcamp',
    instructor: 'Rohit Negi',
    instructorRole: 'Lead Instructor',
    rating: 4.99,
    reviewsCount: 5200,
    enrolledCount: '21,000+',
    originalPrice: 19999,
    currentPrice: 10999,
    badge: 'MAXIMUM VALUE',
    badgeColor: 'bg-gradient-to-r from-fuchsia-400 to-rose-500 text-black font-bold',
    isLive: true,
    startDate: 'Immediate Access + Live Batch',
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
    iconName: 'Sparkles',
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

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'strike-plus',
    name: 'Strike Plus',
    tagline: 'Complete access to all foundational courses and curated problem libraries for serious career climbers.',
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
    tagline: 'The all-inclusive elite membership. Everything in Plus + All upcoming Live Bootcamps & Gen AI Agents.',
    popular: true,
    badge: 'MOST POPULAR FOR JOB SEEKERS',
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
