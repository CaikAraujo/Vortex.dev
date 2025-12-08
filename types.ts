export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'code' | 'rocket' | 'palette' | 'chart';
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  highlight: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: 'search' | 'cpu' | 'terminal' | 'zap';
}