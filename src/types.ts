export type AppMode = 'institucional' | 'landing';

export type InstitucionalPage = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'courses' 
  | 'calculator' 
  | 'testimonials' 
  | 'location' 
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge?: string;
  whoIsItFor: string;
  keyBenefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface CourseItem {
  id: string;
  title: string;
  category: 'Curso' | 'Mentoria' | 'E-book / Combo';
  price: string;
  description: string;
  image: string;
  targetAudience: string;
  features: string[];
  checkoutUrl?: string;
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  stars: number;
  type: 'Cliente Previdenciário' | 'Mentorado / Advogado';
  avatar?: string;
}

export interface BenefitCalculationResult {
  type: 'BPC/LOAS' | 'Aposentadoria por Idade' | 'Invalidez / Auxílio-Doença' | 'Planejamento';
  eligible: boolean | 'Análise Necessária';
  scorePercent: number;
  recommendation: string;
  keyRequirementsMet: string[];
  missingRequirements: string[];
  summaryMessage: string;
}
