export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'bootcamp' | 'dsa' | 'webdev' | 'genai' | 'systemdesign';
  instructor: string;
  instructorRole: string;
  rating: number;
  reviewsCount: number;
  enrolledCount: string;
  originalPrice: number;
  currentPrice: number;
  badge?: string;
  badgeColor?: string;
  isLive?: boolean;
  startDate?: string;
  tags: string[];
  features: string[];
  thumbnailGradient: string;
  iconName: string;
  syllabusHighlights: {
    week: string;
    title: string;
    topics: string[];
  }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  badge?: string;
  durations: {
    duration: string;
    originalPrice: number;
    salePrice: number;
    monthlyEquivalent: number;
  }[];
  features: string[];
  highlightPerks: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogoText: string;
  package: string;
  avatar: string;
  content: string;
  courseTaken: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'courses' | 'placements' | 'pricing';
}

export interface SaleState {
  isActive: boolean;
  isModalOpen: boolean;
  isUnlocked: boolean;
  couponCode: string;
  discountPercentage: number;
  targetEndTime: number; // timestamp in ms
  remainingTime: {
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
  };
  isCouponApplied: boolean;
  hasInteracted: boolean;
}
