import { Testimonial, FAQItem } from '../types';

export const REVIEWS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Aman Sharma',
    role: 'Software Development Engineer II',
    company: 'Uber',
    companyLogoText: 'UBER',
    package: '₹48 LPA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content: "Rohit bhaiya's explanation of graphs and dynamic programming from first principles changed how I think during technical rounds. The system design module in Thunder was directly asked in my Uber bar raiser interview!",
    courseTaken: 'Thunder 100 Days + DSA Mastery',
    rating: 5
  },
  {
    id: '2',
    name: 'Priyanka Verma',
    role: 'Backend Engineer',
    company: 'Google',
    companyLogoText: 'GOOGLE',
    package: '₹55 LPA',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    content: "The Gen AI bootcamp + DSA combo on Strike is unmatched. Rohit Negi teaches every single line of code with memory pointers and CPU caches in mind. Within 4 months of completing the batch, I cleared Google L4.",
    courseTaken: 'Complete DSA + GenAI Combo',
    rating: 5
  },
  {
    id: '3',
    name: 'Rohan Gupta',
    role: 'Full Stack Engineer',
    company: 'Microsoft',
    companyLogoText: 'MICROSOFT',
    package: '₹44 LPA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: "Coming from a tier-3 college with no on-campus offers, Strike gave me the confidence, structure, and mock interviews needed to break into big tech. The live doubt resolution on Discord is insanely active.",
    courseTaken: 'Strike Ultra Membership',
    rating: 5
  },
  {
    id: '4',
    name: 'Sneha Patel',
    role: 'Systems Architect',
    company: 'Amazon',
    companyLogoText: 'AMAZON',
    package: '₹42 LPA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content: "HLD and LLD concepts were demystified completely. Rohit sir's industry experience at Uber reflects in how real microservices, caching, and database sharding trade-offs are taught. Best investment ever.",
    courseTaken: 'System Design Mastery',
    rating: 5
  },
  {
    id: '5',
    name: 'Kavish Mehra',
    role: 'AI Engineer',
    company: 'Atlassian',
    companyLogoText: 'ATLASSIAN',
    package: '₹62 LPA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    content: "The multi-agent orchestration and production RAG projects built during the live sessions were the centerpiece of my portfolio. The interviewers were blown away by the depth of AI engineering knowledge.",
    courseTaken: 'Generative AI Engineering Bootcamp',
    rating: 5
  },
  {
    id: '6',
    name: 'Devashish Roy',
    role: 'Senior Software Engineer',
    company: 'Swiggy',
    companyLogoText: 'SWIGGY',
    package: '₹38 LPA',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    content: "The daily problem streak and Coder Arena leaderboards kept me disciplined for 100 days straight. If you follow Rohit Negi's blueprint honestly, switching to high-tier product firms is inevitable.",
    courseTaken: 'Thunder: 100 Days of Code',
    rating: 5
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'general',
    question: 'What makes STRIKE courses different from other platforms?',
    answer: 'Strike focuses strictly on First Principles and industry-grade depth. Every concept is taught from foundational memory models up to distributed microservice scale by Rohit Negi (Ex-Uber, AIR 202). You write real production code, deploy live cloud infrastructure, and build autonomous systems instead of toy projects.'
  },
  {
    category: 'courses',
    question: 'What is included in the "Thunder: 100 Days of Code" bootcamp?',
    answer: 'Thunder is our flagship live program covering 100+ live sessions spanning Modern Frontend (React 19, TypeScript), Distributed Backend (Node.js, Postgres, Redis, Kafka), System Design (HLD & LLD), DevOps (Docker, K8s, AWS), and FAANG interview preparation.'
  },
  {
    category: 'courses',
    question: 'Do I get lifetime access to recordings and lecture notes?',
    answer: 'Yes! Even for live batches like Thunder, all session recordings in crisp 1080p, detailed code repositories, architectural diagrams, lecture slides, and cheat sheets remain accessible in your Strike dashboard for lifetime revision.'
  },
  {
    category: 'placements',
    question: 'How do 1-on-1 resume reviews and mock interviews work?',
    answer: 'Students enrolled in Strike Ultra or flagship bootcamps can book 1-on-1 slots with senior engineers from Google, Uber, Amazon, and Microsoft. You receive line-by-line resume optimization, ATS scoring, and realistic 60-minute technical bar-raiser mocks with actionable feedback.'
  },
  {
    category: 'pricing',
    question: 'What is the difference between Strike Plus and Strike Ultra?',
    answer: 'Strike Plus gives you complete access to all recorded courses and the Coder Arena problem library. Strike Ultra includes everything in Plus, PLUS all current and upcoming LIVE bootcamps (like Thunder 100 and GenAI), 1-on-1 mock interviews, resume reviews, and placement referral support.'
  },
  {
    category: 'pricing',
    question: 'How does the Thunder Overdrive Hackathon discount work?',
    answer: 'During the Thunder 6.0 launch window, you can unlock an instant 40% OFF coupon code (THUNDER40) applicable to all single courses and multi-year Strike Plus/Ultra memberships with live countdown lock.'
  }
];
