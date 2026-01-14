import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Brain, 
  CheckCircle,
  Menu,
  X,
  Star,
  Sparkles,
  Clock,
  Gift,
  CreditCard,
  Lock,
  ArrowRight,
  Play,
  Users,
  Award,
  BookOpen
} from 'lucide-react';
import { Button } from './components/Button';
import { FeatureCard } from './components/FeatureCard';
import { TestimonialCard } from './components/TestimonialCard';
import { AccordionItem } from './components/AccordionItem';
import { FadeIn } from './components/FadeIn';
import { FeatureItem, TestimonialItem, FAQItem } from './types';

// Data
const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: "Mentalidade Blindada",
    description: "Elimine crenças limitantes sobre dinheiro e programe seu cérebro para enxergar oportunidades onde outros veem crises.",
    icon: Brain
  },
  {
    id: 2,
    title: "Investimentos do Zero",
    description: "Passo a passo prático para sair da poupança e montar uma carteira rentável e segura em menos de 30 dias.",
    icon: TrendingUp
  },
  {
    id: 3,
    title: "Renda Passiva Automática",
    description: "Aprenda a criar máquinas de dinheiro que trabalham 24h por dia para você, sem precisar do seu tempo ativo.",
    icon: Zap
  },
  {
    id: 4,
    title: "Fugindo das Armadilhas",
    description: "Saiba exatamente como bancos e corretoras tentam lucrar em cima de você e blinde seu patrimônio.",
    icon: ShieldCheck
  }
];

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Lucas Ferreira",
    role: "Designer, 26 anos",
    content: "Eu achava que precisava ser rico para investir. O Felipe me mostrou que com R$ 100 eu já podia começar. Hoje recebo dividendos todo mês!",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Mariana Costa",
    role: "Engenheira, 29 anos",
    content: "O capítulo sobre 'Liberdade Geográfica' mudou meu jogo. Apliquei o método, organizei minhas finanças e vou passar 6 meses viajando.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Roberto Campos",
    role: "Empresário, 34 anos",
    content: "Queria ter lido isso aos 20. Linguagem direta, sem 'economês'. É um manual de sobrevivência para quem quer vencer no capitalismo.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "O método funciona para quem é totalmente iniciante?",
    answer: "Sim! O e-book foi escrito pensando exatamente em quem está começando do zero. Não usamos termos técnicos complicados sem explicação. É um guia passo a passo."
  },
  {
    id: 2,
    question: "Quanto tempo preciso dedicar para ver resultados?",
    answer: "Aplicando as técnicas de organização financeira, você verá sobra de caixa já no primeiro mês. A parte de investimentos é focada em longo prazo, mas a construção começa agora."
  },
  {
    id: 3,
    question: "Tenho alguma garantia se não gostar?",
    answer: "Absolutamente. Oferecemos garantia incondicional de 7 dias. Se você ler e achar que não vale 10x o valor investido, devolvemos 100% do seu dinheiro. Sem perguntas."
  },
  {
    id: 4,
    question: "Como recebo o acesso ao material?",
    answer: "O acesso é imediato e enviado para o seu e-mail assim que o pagamento for confirmado. Você poderá baixar o e-book em PDF e ler no celular, tablet ou computador."
  }
];

const BONUSES = [
  { icon: BookOpen, title: "Planilha de Orçamento", description: "A mesma planilha que uso pessoalmente" },
  { icon: Play, title: "3 Aulas Bônus em Vídeo", description: "Conteúdo exclusivo não disponível em nenhum outro lugar" },
  { icon: Users, title: "Acesso ao Grupo VIP", description: "Comunidade exclusiva de investidores" },
];

const App: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const scrollToCheckout = () => {
    const element = document.getElementById('checkout');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] font-sans selection:bg-neon selection:text-slate-950 overflow-x-hidden noise">
      
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sticky Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || isMobileMenuOpen ? 'glass-strong py-3 border-b border-white/5' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-black italic tracking-tighter text-white">
            Felipe<span className="text-gradient">.Inv</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group">
              O que você aprende
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#testimonials" className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group">
              Resultados
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
            </a>
            <Button variant="primary" size="sm" onClick={scrollToCheckout}>
              <Sparkles className="w-4 h-4" />
              Garantir Acesso
            </Button>
          </div>

          <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full glass-strong border-b border-white/5 p-6 flex flex-col gap-4 md:hidden animate-slide-down">
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 font-semibold py-3 px-4 hover:bg-white/5 rounded-lg transition-colors">Módulos</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 font-semibold py-3 px-4 hover:bg-white/5 rounded-lg transition-colors">Depoimentos</a>
            <a href="#checkout" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 font-semibold py-3 px-4 hover:bg-white/5 rounded-lg transition-colors">Comprar</a>
            <Button variant="primary" fullWidth onClick={() => { setIsMobileMenuOpen(false); scrollToCheckout(); }}>
              <Sparkles className="w-4 h-4" />
              GARANTIR ACESSO
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-grid">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 animate-pulse" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple/20 rounded-full blur-[120px] -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Orbs */}
        <div className="absolute top-40 left-[10%] w-2 h-2 bg-neon rounded-full animate-float opacity-60" />
        <div className="absolute top-60 right-[15%] w-3 h-3 bg-purple rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-[20%] w-2 h-2 bg-gold rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Content */}
            <div className="flex-1 text-center lg:text-left">
              <FadeIn delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon/30 text-neon text-xs font-bold uppercase tracking-wider mb-6 animate-glow">
                  <Sparkles className="w-4 h-4" />
                  <span>+2.500 Alunos Transformados</span>
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05]">
                  Pare de trabalhar <br className="hidden md:block"/>pelo dinheiro. <br/>
                  <span className="text-gradient">
                    Faça o dinheiro trabalhar por você.
                  </span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={300}>
                <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  O método definitivo para atingir a <span className="text-white font-semibold">independência financeira antes dos 30</span>, sem precisar ser um gênio da matemática ou herdeiro.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                  <Button 
                    variant="primary" 
                    size="xl" 
                    onClick={scrollToCheckout}
                    className="glow-neon animate-pulse-ring"
                  >
                    QUERO MINHA LIBERDADE
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-neon" />
                    Garantia de 7 dias
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-gold" />
                    Acesso imediato
                  </span>
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-purple" />
                    Compra segura
                  </span>
                </div>
              </FadeIn>
            </div>

            {/* Right: Book 3D Mockup */}
            <div className="flex-1 w-full max-w-md lg:max-w-lg flex justify-center">
              <FadeIn delay={500} className="w-full flex justify-center">
                <div className="relative w-72 md:w-80 aspect-[2/3] animate-float">
                  {/* Glow rings */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon via-purple to-neon rounded-2xl blur-[60px] opacity-30 animate-pulse" />
                  <div className="absolute inset-4 bg-gradient-to-br from-purple to-neon rounded-2xl blur-[40px] opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  
                  {/* Book Cover */}
                  <div className="relative w-full h-full rounded-r-2xl rounded-l-sm shadow-2xl overflow-hidden transform perspective-1000 rotate-y-[-5deg] hover:rotate-y-[0deg] transition-transform duration-500 group">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                    
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    {/* Spine */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 border-r border-slate-600" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-neon/20 border border-neon/30 text-neon text-[10px] font-bold uppercase tracking-widest mb-4">
                          <Award className="w-3 h-3" />
                          Best-Seller
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-neon text-xs font-bold tracking-widest uppercase mb-2">E-book Oficial</p>
                        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                          INDEPENDÊNCIA<br/>FINANCEIRA<br/>AOS 30
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-neon to-purple rounded-full" />
                      </div>
                      
                      <div className="text-slate-400 text-sm font-medium">
                        Por Felipe Investimentos
                      </div>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neon/30 to-transparent" />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="container mx-auto px-6 mt-20">
          <FadeIn delay={600}>
            <div className="glass rounded-2xl p-6 md:p-8 border border-white/5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-gradient mb-1">2.5K+</div>
                  <div className="text-sm text-slate-400">Alunos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-gradient-gold mb-1">4.9</div>
                  <div className="text-sm text-slate-400 flex items-center justify-center gap-1">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    Avaliação
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-gradient mb-1">150+</div>
                  <div className="text-sm text-slate-400">Páginas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-gradient-gold mb-1">7</div>
                  <div className="text-sm text-slate-400">Dias de garantia</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section id="features" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-slate-900/50 to-[#0a0a0f]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple/30 text-purple text-xs font-bold uppercase tracking-wider mb-6">
                <BookOpen className="w-4 h-4" />
                Conteúdo Completo
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                O Que Você Vai <span className="text-gradient">Dominar</span>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-slate-400 max-w-xl mx-auto text-lg">
                Chega de teoria chata. Aqui você vai encontrar o caminho prático para construir riqueza real.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((feature, idx) => (
              <FadeIn key={feature.id} delay={idx * 100} className="h-full">
                <FeatureCard feature={feature} index={idx} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-purple/5 to-[#0a0a0f]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-6">
                <Users className="w-4 h-4" />
                Histórias Reais
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Quem Aplicou, <span className="text-gradient-gold">Mudou de Vida</span>
              </h2>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
              <FadeIn key={testimonial.id} delay={idx * 150} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="checkout" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-neon/5 to-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="glass rounded-3xl p-8 md:p-12 border border-neon/20 relative overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-neon/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple/20 to-transparent" />
                
                <div className="relative">
                  {/* Badge */}
                  <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 text-gold text-sm font-bold animate-pulse">
                      <Clock className="w-4 h-4" />
                      Oferta por tempo limitado
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4">
                    Garanta Seu Acesso <span className="text-gradient">Agora</span>
                  </h2>
                  
                  <p className="text-slate-400 text-center mb-8 max-w-lg mx-auto">
                    Invista em você e comece sua jornada rumo à independência financeira hoje mesmo.
                  </p>
                  
                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-2xl text-slate-500 line-through">R$ 197</span>
                      <span className="px-3 py-1 rounded-full bg-neon/20 text-neon text-sm font-bold">-75%</span>
                    </div>
                    <div className="text-6xl md:text-7xl font-black text-white mb-2">
                      R$ <span className="text-gradient">47</span>
                    </div>
                    <p className="text-slate-400 text-sm">ou 4x de R$ 12,25 sem juros</p>
                  </div>
                  
                  {/* Bonuses */}
                  <div className="mb-8">
                    <p className="text-center text-white font-bold mb-4 flex items-center justify-center gap-2">
                      <Gift className="w-5 h-5 text-gold" />
                      Bônus Exclusivos Inclusos:
                    </p>
                    <div className="grid gap-3">
                      {BONUSES.map((bonus, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                          <div className="p-2 rounded-lg bg-neon/10">
                            <bonus.icon className="w-5 h-5 text-neon" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{bonus.title}</div>
                            <div className="text-sm text-slate-400">{bonus.description}</div>
                          </div>
                          <CheckCircle className="w-5 h-5 text-neon ml-auto flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    variant="primary" 
                    size="xl" 
                    fullWidth
                    className="glow-neon mb-6"
                    onClick={() => console.log('Checkout')}
                  >
                    <CreditCard className="w-5 h-5" />
                    QUERO GARANTIR MINHA VAGA
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  
                  {/* Trust badges */}
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-neon" />
                      Garantia 7 dias
                    </span>
                    <span className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-neon" />
                      Pagamento seguro
                    </span>
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-neon" />
                      Acesso imediato
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Dúvidas <span className="text-gradient">Frequentes</span>
              </h2>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="glass rounded-3xl p-6 md:p-10 border border-white/5">
              {FAQS.map((faq, idx) => (
                <AccordionItem 
                  key={faq.id}
                  item={faq} 
                  isOpen={openFAQ === faq.id}
                  onClick={() => toggleFAQ(faq.id)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 pt-16 pb-32 md:pb-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-2xl font-black italic tracking-tighter text-white">
              Felipe<span className="text-gradient">.Inv</span>
            </div>
            
            <div className="flex gap-8 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-neon transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-neon transition-colors">Privacidade</a>
              <a href="#" className="hover:text-neon transition-colors">Contato</a>
            </div>
          </div>
          
          <div className="text-center text-slate-600 text-xs">
            <p className="mb-2">© {new Date().getFullYear()} Felipe Investimentos. Todos os direitos reservados.</p>
            <p>Este site não faz parte do site do Facebook ou Facebook Inc.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 glass-strong border-t border-neon/30 z-50 md:hidden">
        <Button variant="primary" fullWidth size="lg" onClick={scrollToCheckout}>
          <Sparkles className="w-4 h-4" />
          GARANTIR MINHA VAGA
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

    </div>
  );
};

export default App;