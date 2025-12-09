import { ServiceItem, PricingTier, Testimonial, Project, WorkflowStep } from './types';

export const NAV_LINKS = [
  { label: 'Expertise', href: '#services' },
  { label: 'Projets', href: '#projects' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Avis', href: '#testimonials' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Développement Full-Stack',
    description: 'Applications web robustes, évolutives et sécurisées. Du backend complexe au frontend pixel-perfect.',
    icon: 'code',
  },
  {
    id: '2',
    title: 'Design UI/UX',
    description: "Interfaces qui n'impressionnent pas seulement, mais guident l'utilisateur intuitivement vers la conversion.",
    icon: 'palette',
  },
  {
    id: '3',
    title: 'Optimisation de Performance',
    description: 'Votre site chargé en millisecondes. Core Web Vitals optimisés pour un classement maximal sur Google.',
    icon: 'rocket',
  },
  {
    id: '4',
    title: 'Data Analytics',
    description: 'Mise en œuvre de gestionnaires de balises et tableaux de bord personnalisés pour suivre chaque étape de votre client.',
    icon: 'chart',
  },
];

export const PRICING: PricingTier[] = [
  {
    id: 'mvp',
    name: 'MVP',
    price: 'CHF 3.990',
    description: 'Pour les startups et entreprises ayant besoin de valider des idées rapidement.',
    highlight: false,
    features: [
      { text: 'Landing Page Haute Performance', included: true },
      { text: 'Design System Basique', included: true },
      { text: 'Optimisation Mobile First', included: true },
      { text: 'SEO Technique', included: true },
      { text: 'Panneau Administratif', included: false },
      { text: 'Intégrations Avancées', included: false },
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    price: 'CHF 5.990',
    description: 'Le choix définitif pour les entreprises en croissance.',
    highlight: true,
    features: [
      { text: 'Site Institutionnel ou Blog', included: true },
      { text: 'Design UI/UX Premium', included: true },
      { text: 'CMS Headless Intégré', included: true },
      { text: 'Analytics Avancé', included: true },
      { text: 'Intégration CRM & Leads', included: true },
      { text: 'Support Dev Dédié', included: true },
    ],
  },
  {
    id: 'vortex',
    name: 'Vortex',
    price: 'Sur Mesure',
    description: 'Solutions de génie logiciel sur mesure.',
    highlight: false,
    features: [
      { text: 'Plateforme SaaS / E-commerce', included: true },
      { text: 'Architecture Microservices', included: true },
      { text: 'App iOS et Android', included: true },
      { text: 'Pipeline DevOps & CI/CD', included: true },
      { text: 'Conseil en Architecture', included: true },
      { text: 'SLA Haute Disponibilité', included: true },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ricardo Almeida',
    role: 'CTO',
    company: 'Nexus Tech',
    content: "VORTEX.DEV a élevé notre standard de qualité. Le code livré est propre, moderne et la performance du site a triplé nos conversions.",
    image: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: '2',
    name: 'Fernanda Costa',
    role: 'Product Owner',
    company: 'Studio Aura',
    content: "Ils parlent la langue des développeurs et comprennent les besoins de l'entreprise. VORTEX n'est pas juste une agence, c'est un partenaire technique.",
    image: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: '3',
    name: 'Carlos Mendes',
    role: 'Founder',
    company: 'Finance Pro',
    content: "Impressionnant par la vitesse de livraison et la robustesse de la solution. La refonte de notre plateforme a été un tournant.",
    image: 'https://picsum.photos/100/100?random=3',
  },
  {
    id: '4',
    name: 'Ana Silva',
    role: 'CEO',
    company: 'StartUp One',
    content: 'Professionnalisme et compétence technique inégalés. La plateforme a évolué en douceur pour des milliers d\'utilisateurs.',
    image: 'https://picsum.photos/100/100?random=4',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Bank App',
    category: 'Fintech',
    image: 'https://picsum.photos/600/400?random=10'
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: '01',
    title: 'Découverte',
    description: 'Immersion totale dans votre entreprise pour comprendre les douleurs, les objectifs et le public cible.',
    icon: 'search',
  },
  {
    id: '02',
    title: 'Architecture',
    description: 'Conception de la solution technique, choix de la stack et planification de l\'évolutivité.',
    icon: 'cpu',
  },
  {
    id: '03',
    title: 'Développement',
    description: 'Code propre, tests automatisés et sprints agiles pour une livraison continue.',
    icon: 'terminal',
  },
  {
    id: '04',
    title: 'Optimisation',
    description: 'Suivi de la performance, SEO technique et ajustements pour une conversion maximale.',
    icon: 'zap',
  },
];