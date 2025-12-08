'use client';

import { Navbar } from '../../../components/Navbar';
import { Contact } from '../../../components/Contact';
import { ServicePricingSection, PricingTier } from '../../../components/ServicePricingSection';
import { Reveal } from '../../../components/ui/Section';

const webDevTiers: PricingTier[] = [
    {
        name: 'Site Vitrine',
        description: 'Perfeito para apresentar sua atividade online.',
        price: 'R$ 3.500',
        features: ['Design responsivo sob medida', 'Até 5 páginas', 'Otimização SEO básica', 'Formulário de contato', 'Hospedagem 1 ano inclusa', 'Suporte 3 meses'],
        buttonText: 'Escolher este Plano',
    },
    {
        name: 'Site Business',
        description: 'Solução completa para desenvolver seu negócio.',
        price: 'R$ 6.000',
        features: ['Design premium personalizado', 'Até 10 páginas', 'SEO avançado + Blog', 'Sistema de agendamento', 'Integrações (CRM, Email)', 'Analytics avançados', 'Suporte 6 meses'],
        buttonText: 'Escolher este Plano',
        highlight: true,
    },
    {
        name: 'E-commerce',
        description: 'Loja virtual completa com vendas integradas.',
        price: 'R$ 9.000',
        features: ['Design e-commerce exclusivo', 'Produtos ilimitados', 'Pagamento seguro (Stripe/Pix)', 'Gestão de estoque', 'Painel administrativo', 'SEO para e-commerce', 'Suporte 12 meses'],
        buttonText: 'Iniciar Loja',
    },
];

const seoTiers: PricingTier[] = [
    {
        name: 'SEO Essencial',
        description: 'Ideal para iniciar seu ranqueamento.',
        price: 'R$ 1.200',
        period: '/mês',
        features: ['Auditoria SEO inicial', 'Otimização técnica básica', '5 palavras-chave foco', 'Relatório mensal', 'Suporte via email'],
        buttonText: 'Escolher Plano',
    },
    {
        name: 'SEO Avançado',
        description: 'Estratégia completa de crescimento orgânico.',
        price: 'R$ 2.500',
        period: '/mês',
        features: ['Auditoria SEO completa', 'Otimização técnica avançada', '15 palavras-chave foco', 'Criação de conteúdo (2 posts/mês)', 'Link building básico', 'Relatório detalhado'],
        buttonText: 'Escolher Plano',
        highlight: true,
    },
    {
        name: 'SEO Premium',
        description: 'Para empresas com grandes ambições.',
        price: 'R$ 4.500',
        period: '/mês',
        features: ['Estratégia SEO 360º', 'Palavras-chave ilimitadas', 'Conteúdo premium (4 posts/mês)', 'Link building avançado', 'Análise de concorrentes', 'Consultor dedicado', 'Suporte prioritário'],
        buttonText: 'Escolher Plano',
    },
];

const adsTiers: PricingTier[] = [
    {
        name: 'Google Ads Essencial',
        description: 'Ideal para começar no tráfego pago.',
        price: 'R$ 1.500',
        period: '/mês',
        features: ['Configuração de conta', 'Campanha Search (3 grupos)', 'Geolocalização precisa', 'Relatório mensal', 'Suporte por email'],
        buttonText: 'Iniciar Campanha',
    },
    {
        name: 'Google Ads Avançado',
        description: 'Estratégia completa de crescimento.',
        price: 'R$ 3.000',
        period: '/mês',
        features: ['Gestão completa de campanhas', 'Search + Display', 'Remarketing dinâmico', 'Otimização semanal', 'Relatório quinzenal', 'Consultor dedicado'],
        buttonText: 'Escolher Plano',
        highlight: true,
    },
    {
        name: 'Google Ads Premium',
        description: 'Solução corporativa para alta escala.',
        price: 'R$ 6.000',
        period: '/mês',
        features: ['Estratégia multi-canal', 'Shopping + Vídeo (YouTube)', 'Otimização com IA', 'Testes A/B contínuos', 'Dashboard personalizado', 'Suporte 24/7'],
        buttonText: 'Fale Conosco',
    },
];

const performanceTiers: PricingTier[] = [
    {
        name: 'Otimização Base',
        description: 'Melhore a velocidade essencial do site.',
        price: 'R$ 1.200',
        features: ['Auditoria de performance', 'Otimização de imagens', 'Cache de navegador', 'Minificação CSS/JS', 'Relatório antes/depois'],
        buttonText: 'Otimizar Agora',
    },
    {
        name: 'Otimização Avançada',
        description: 'Performance máxima (Core Web Vitals).',
        price: 'R$ 2.800',
        features: ['Auditoria completa', 'Otimização de imagens (WebP)', 'Cache avançado (Redis/Varnish)', 'Configuração de CDN', 'Lazy loading inteligente', 'Garantia de pontuação verde'],
        buttonText: 'Otimizar Agora',
        highlight: true,
    },
    {
        name: 'Otimização Premium',
        description: 'Solução definitiva de velocidade.',
        price: 'R$ 5.000',
        features: ['Análise de arquitetura', 'Refatoração de código crítico', 'CDN Enterprise', 'Monitoramento RUM', 'Consultoria técnica', 'Treinamento para equipe'],
        buttonText: 'Fale Conosco',
    },
];

const maintenanceTiers: PricingTier[] = [
    {
        name: 'Básico',
        description: 'Manutenção essencial para segurança.',
        price: 'R$ 300',
        period: '/mês',
        features: ['Atualizações de plugins/core', 'Backup semanal', 'Monitoramento 24/7', 'Suporte por email'],
        buttonText: 'Assinar',
    },
    {
        name: 'Pro',
        description: 'Segurança e performance garantidas.',
        price: 'R$ 700',
        period: '/mês',
        features: ['Atualizações prioritárias', 'Backup diário', 'Monitoramento avançado', 'Horas de desenvolvimento (2h)', 'Otimização de performance', 'Suporte prioritário'],
        buttonText: 'Assinar',
        highlight: true,
    },
    {
        name: 'Enterprise',
        description: 'Gestão completa do seu ambiente digital.',
        price: 'Sob Consulta',
        period: '/mês',
        features: ['Atualizações em tempo real', 'Backups em múltiplos locais', 'Monitoramento de segurança proativo', 'Desenvolvimento contínuo', 'SLA Garantido', 'Gerente de contas'],
        buttonText: 'Fale Conosco',
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-vortex-black min-h-screen">
            <Navbar />

            {/* Page Header */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-vortex-accent/5 blur-[120px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <Reveal>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                            Nossos <span className="text-vortex-accent">Serviços</span>
                        </h1>
                        <p className="text-xl text-vortex-muted max-w-2xl mx-auto font-light leading-relaxed">
                            Soluções completas para escalar sua presença digital.
                            Escolha o pacote ideal para o seu momento.
                        </p>
                    </Reveal>
                </div>
            </section>

            <ServicePricingSection
                category="Desenvolvimento"
                title="Criação de Sites & Apps"
                subtitle="Escolha a solução que corresponde às suas necessidades e orçamento."
                tiers={webDevTiers}
                colorTheme="vortex"
            />

            <ServicePricingSection
                category="Visibilidade"
                title="Otimização SEO"
                subtitle="Aumente sua visibilidade no Google com nossas estratégias de busca."
                tiers={seoTiers}
                colorTheme="green"
            />

            <ServicePricingSection
                category="Tráfego Pago"
                title="Google Ads & Performance"
                subtitle="Gere mais leads e vendas com campanhas otimizadas."
                tiers={adsTiers}
                colorTheme="orange"
            />

            <ServicePricingSection
                category="Velocidade"
                title="Otimização de Performance"
                subtitle="Acelere seu site para uma melhor experiência do usuário e SEO."
                tiers={performanceTiers}
                colorTheme="blue"
            />

            <ServicePricingSection
                category="Suporte"
                title="Manutenção & Segurança"
                subtitle="Mantenha seu site sempre atualizado, seguro e rápido."
                tiers={maintenanceTiers}
                colorTheme="purple"
            />

            <Contact />
        </div>
    );
}
