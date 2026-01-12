import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Brain, 
  CheckCircle,
  Menu,
  X
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

  // Lock body scroll when mobile menu is open
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
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-neon selection:text-slate-950 overflow-x-hidden">
      
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* 1. Sticky Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-black italic tracking-tighter text-white">
            Felipe<span className="text-neon">.Inv</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">O que você aprende</a>
            <a href="#testimonials" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Resultados</a>
            <Button variant="primary" size="sm" onClick={scrollToCheckout}>
              Garantir Acesso
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 md:hidden shadow-2xl animate-slide-down">
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 font-semibold py-2">Módulos</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 font-semibold py-2">Depoimentos</a>
            <Button variant="primary" fullWidth onClick={() => { setIsMobileMenuOpen(false); scrollToCheckout(); }}>
              GARANTIR ACESSO
            </Button>
          </div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Content */}
            <div className="flex-1 text-center lg:text-left">
              <FadeIn delay={100}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/10 border border-neon/20 text-neon text-xs font-bold uppercase tracking-wider mb-6">
                  <CheckCircle className="w-3 h-3" /> Método Validado
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                  Pare de trabalhar <br className="hidden md:block"/> pelo dinheiro. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-emerald-200 to-white">
                    Faça o dinheiro trabalhar por você.
                  </span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={300}>
                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
                  O método definitivo para atingir a independência financeira antes dos 30, sem precisar ser um gênio da matemática ou herdeiro.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    variant="primary" 
                    size="xl" 
                    pulse 
                    onClick={scrollToCheckout}
                    className="shadow-[0_0_40px_rgba(52,211,153,0.3)]"
                  >
                    QUERO MINHA LIBERDADE AGORA
                  </Button>
                </div>
                <p className="mt-4 text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-2">
                  <ShieldCheck className="w-4 h-4" /> Compra segura e acesso imediato
                </p>
              </FadeIn>
            </div>

            {/* Right: Book 3D Mockup */}
            <div className="flex-1 w-full max-w-md lg:max-w-full flex justify-center perspective-1000">
              <FadeIn delay={500} className="w-full flex justify-center">
                <div className="relative w-64 md:w-80 aspect-[2/3] animate-float">
                  {/* Glow behind book */}
                  <div className="absolute inset-0 bg-neon rounded-lg blur-[50px] opacity-20 transform scale-110 translate-y-4" />
                  {/* Book Cover */}
                  <div className="relative w-full h-full bg-slate-900 rounded-r-2xl rounded-l-sm shadow-2xl border-l-4 border-slate-700 overflow-hidden transform rotate-y-[-15deg] rotate-x-[5deg]">
                    <img 
                      src="https://images.unsplash.com/photo-1611974765270-ca1258634369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Capa do E-book" 
                      className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-900/50" />
                    <div className="absolute bottom-8 left-6 right-6">
                      <p className="text-neon text-sm font-bold tracking-widest uppercase mb-1">E-book Oficial</p>
                      <h2 className="text-3xl font-black text-white leading-tight">INDEPENDÊNCIA <br/> FINANCEIRA <br/> AOS 30</h2>
                    </div>
                    {/* Spine Highlight */}
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/20 to-transparent" />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section id="features" className="py-20 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                O Que Você Vai <span className="text-neon">Dominar</span>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-slate-400 max-w-xl mx-auto">
                Chega de teoria chata. Aqui você vai encontrar o caminho prático para construir riqueza real.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, idx) => (
              <FadeIn key={feature.id} delay={idx * 150} className="h-full">
                <FeatureCard feature={feature} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Social Proof Section */}
      <section id="testimonials" className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Quem Aplicou, <span className="text-gold">Mudou de Vida</span>
              </h2>
            </FadeIn>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x">
            {TESTIMONIALS.map((testimonial, idx) => (
              <FadeIn key={testimonial.id} delay={idx * 150} className="flex-shrink-0 w-full md:w-auto md:flex-1 flex">
                <TestimonialCard testimonial={testimonial} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              Dúvidas Frequentes
            </h2>
          </FadeIn>
          
          <div className="space-y-2 bg-slate-900/50 p-6 md:p-10 rounded-3xl border border-slate-800">
            {FAQS.map((faq, idx) => (
              <FadeIn key={faq.id} delay={idx * 100}>
                <AccordionItem 
                  item={faq} 
                  isOpen={openFAQ === faq.id}
                  onClick={() => toggleFAQ(faq.id)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer & Sticky CTA Mobile */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-32 md:pb-16">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <div className="text-2xl font-black italic tracking-tighter text-slate-600 mb-6">
              Felipe<span className="text-slate-500">.Inv</span>
            </div>
            <div className="flex justify-center gap-8 mb-8 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-neon transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-neon transition-colors">Privacidade</a>
              <a href="#" className="hover:text-neon transition-colors">Sobre</a>
            </div>
            <p className="text-slate-700 text-xs">
              © {new Date().getFullYear()} Felipe Investimentos. Todos os direitos reservados.
              <br />
              Este site não faz parte do site do Facebook ou Facebook Inc.
            </p>
          </FadeIn>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div id="checkout" className="fixed bottom-0 left-0 w-full p-4 bg-slate-900/95 backdrop-blur-xl border-t border-neon/30 z-50 md:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <Button variant="primary" fullWidth size="lg" pulse onClick={() => console.log('Checkout Clicked')}>
          QUERO MINHA LIBERDADE AGORA
        </Button>
      </div>

    </div>
  );
};

export default App;