import { ServiceItem, PricingTier, Testimonial, Project, WorkflowStep } from './types';

export const NAV_LINKS = [
  { label: 'Expertise', href: '#services' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Planos', href: '#pricing' },
  { label: 'Feedback', href: '#testimonials' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Full-Stack Development',
    description: 'Aplicações web robustas, escaláveis e seguras. Do backend complexo ao frontend pixel-perfect.',
    icon: 'code',
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Interfaces que não apenas impressionam, mas guiam o usuário intuitivamente até a conversão.',
    icon: 'palette',
  },
  {
    id: '3',
    title: 'Performance Optimization',
    description: 'Seu site carregando em milissegundos. Core Web Vitals otimizados para máximo ranking no Google.',
    icon: 'rocket',
  },
  {
    id: '4',
    title: 'Data Analytics',
    description: 'Implementação de tag manager e dashboards personalizados para rastrear cada passo do seu cliente.',
    icon: 'chart',
  },
];

export const PRICING: PricingTier[] = [
  {
    id: 'mvp',
    name: 'MVP',
    price: 'R$ 3.500',
    description: 'Para startups e negócios que precisam validar ideias rápido.',
    highlight: false,
    features: [
      { text: 'Landing Page High-Performance', included: true },
      { text: 'Design System Básico', included: true },
      { text: 'Otimização Mobile First', included: true },
      { text: 'SEO Técnico', included: true },
      { text: 'Painel Administrativo', included: false },
      { text: 'Integrações Avançadas', included: false },
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    price: 'R$ 7.000',
    description: 'A escolha definitiva para empresas em crescimento.',
    highlight: true,
    features: [
      { text: 'Site Institucional ou Blog', included: true },
      { text: 'UI/UX Design Premium', included: true },
      { text: 'CMS Headless Integrado', included: true },
      { text: 'Analytics Avançado', included: true },
      { text: 'Integração CRM & Leads', included: true },
      { text: 'Suporte Dev Dedicado', included: true },
    ],
  },
  {
    id: 'vortex',
    name: 'Vortex',
    price: 'Custom',
    description: 'Soluções de engenharia de software sob medida.',
    highlight: false,
    features: [
      { text: 'Plataforma SaaS / E-commerce', included: true },
      { text: 'Arquitetura de Microsserviços', included: true },
      { text: 'App iOS e Android', included: true },
      { text: 'DevOps & CI/CD Pipeline', included: true },
      { text: 'Consultoria de Arquitetura', included: true },
      { text: 'SLA de Alta Disponibilidade', included: true },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ricardo Almeida',
    role: 'CTO',
    company: 'Nexus Tech',
    content: 'A VORTEX.DEV elevou nosso padrão de qualidade. O código entregue é limpo, moderno e a performance do site triplicou nossas conversões.',
    image: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: '2',
    name: 'Fernanda Costa',
    role: 'Product Owner',
    company: 'Estúdio Aura',
    content: 'Eles falam a língua dos desenvolvedores e entendem as necessidades do negócio. A VORTEX não é apenas uma agência, é um parceiro técnico.',
    image: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: '3',
    name: 'Carlos Mendes',
    role: 'Founder',
    company: 'Finanças Pro',
    content: 'Impressionante a velocidade de entrega e a robustez da solução. O redesign da nossa plataforma foi um divisor de águas.',
    image: 'https://picsum.photos/100/100?random=3',
  },
  {
    id: '4',
    name: 'Ana Silva',
    role: 'CEO',
    company: 'StartUp One',
    content: 'Profissionalismo e competência técnica ímpares. A plataforma escalou suavemente para milhares de usuários.',
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
    title: 'Discovery',
    description: 'Imersão total no seu negócio para entender dores, objetivos e o público-alvo.',
    icon: 'search',
  },
  {
    id: '02',
    title: 'Architecture',
    description: 'Desenho da solução técnica, escolha de stack e planejamento de escalabilidade.',
    icon: 'cpu',
  },
  {
    id: '03',
    title: 'Development',
    description: 'Código limpo, testes automatizados e sprints ágeis para entrega contínua.',
    icon: 'terminal',
  },
  {
    id: '04',
    title: 'Optimization',
    description: 'Monitoramento de performance, SEO técnico e ajustes para conversão máxima.',
    icon: 'zap',
  },
];