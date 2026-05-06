import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from './components/Button';
import { ChapterCard } from './components/ChapterCard';
import { TestimonialCard } from './components/TestimonialCard';
import { AccordionItem } from './components/AccordionItem';
import { FadeIn } from './components/FadeIn';
import { Chapter, SpreadsheetRow, ReaderNote, FAQItem } from './types';

const PRICE_BRL = 49;
const ISBN = '978-65-87123-04-2';
const PAGES = 184;
const PUBLISHER = 'Edição independente';
const DEPOSITO_LEGAL = 'BN-2025-04719';

const CHAPTERS: Chapter[] = [
  {
    num: '01',
    title: 'O dia em que descobri que poupança rendia menos que a inflação',
    pages: 'p. 11–24',
    preview:
      'Junho de 2017. R$ 18.300 na poupança da Caixa há quatro anos. Calculei o IPCA acumulado e percebi que tinha perdido R$ 2.140 sem nem encostar no dinheiro. Esse capítulo abre a planilha desse mês — receita, fixos, sobra — e o primeiro CDB que comprei errado.',
  },
  {
    num: '02',
    title: 'Por que copiar um plano FIRE americano dá errado no Brasil',
    pages: 'p. 25–46',
    preview:
      'Mr. Money Mustache funciona com 4% de regra de saque, S&P 500 e tax-deferred 401(k). No Brasil temos IR sobre rendimento, IOF, custo de saúde particular pós-CLT, herança patrimonial e Selic alta. O cálculo muda tanto que a regra dos 4% vira 3,1%.',
  },
  {
    num: '03',
    title: 'Os três anos que deram R$ 0 (BBAS3 em 2022 e o que aprendi)',
    pages: 'p. 47–72',
    preview:
      'Comprei 1.200 BBAS3 a R$ 38 em janeiro de 2022 achando que entendia análise fundamentalista. Vendi a R$ 28 em outubro depois de assistir vídeo de YouTuber em pânico. Capítulo abre a operação completa — corretagem, IR sobre prejuízo declarado, e os erros que repeti em mais duas teses.',
  },
  {
    num: '04',
    title: 'A planilha que finalmente fez sentido (e por que ela é chata)',
    pages: 'p. 73–94',
    preview:
      'Sem dashboard bonito, sem gráfico de pizza colorido. Quatro abas: Receita, Fixos, Variável, Carteira. Atualizo na primeira sexta do mês. Capítulo mostra a planilha real (link no fim do livro) e por que ferramenta complexa demais é a primeira a ser abandonada.',
  },
  {
    num: '05',
    title: 'Reserva de emergência sem romantismo',
    pages: 'p. 95–112',
    preview:
      'Seis meses de despesa fixa em Tesouro Selic, sem misturar com objetivo de viagem. O capítulo discute o que entra e o que não entra em "despesa fixa" (plano de saúde sim, restaurante não), e o erro comum de dimensionar reserva sobre receita em vez de gasto.',
  },
  {
    num: '06',
    title: 'Aposentadoria pelo INSS: o que sobra de verdade',
    pages: 'p. 113–138',
    preview:
      'Simulação real: 35 anos de contribuição teto, idade mínima, fator. Resultado é menos do que o jovem CLT acredita. Esse capítulo abre os números do meu CNIS e mostra por que o INSS é parte do plano, não substituto dele.',
  },
  {
    num: '07',
    title: 'O custo de ser pai aos 38 (e o que isso muda no plano)',
    pages: 'p. 139–162',
    preview:
      'Plano de saúde familiar, escola, herança CLT. Capítulo discute decisões que não estão em livro de FIRE americano — escola particular vs pública de bairro, plano dental vs reserva, e a conversa com a parceira que adiou minha independência em três anos (e por que valeu).',
  },
  {
    num: '08',
    title: 'O que farei diferente nos próximos oito anos',
    pages: 'p. 163–184',
    preview:
      'Não há método. Há concentração maior em renda fixa pós-CDI, exposição internacional via BDR limitada a 10%, e parar de cair em tese de microcap. Capítulo final é uma carta pra quem está nos primeiros R$ 50k.',
  },
];

const SPREADSHEET: SpreadsheetRow[] = [
  { year: '2017', income: 'R$ 76.200', invested: 'R$ 6.840', total: 'R$ 25.140', note: 'poupança + 1º CDB' },
  { year: '2019', income: 'R$ 92.400', invested: 'R$ 18.700', total: 'R$ 71.500' },
  { year: '2021', income: 'R$ 118.000', invested: 'R$ 31.200', total: 'R$ 198.400' },
  { year: '2022', income: 'R$ 124.300', invested: 'R$ 27.800', total: 'R$ 174.900', note: 'BBAS3 −R$ 12k' },
  { year: '2024', income: 'R$ 158.000', invested: 'R$ 49.600', total: 'R$ 612.300' },
  { year: '2025', income: 'R$ 172.500', invested: 'R$ 58.100', total: 'R$ 894.000' },
];

const READER_NOTES: ReaderNote[] = [
  {
    name: 'Camila',
    context: 'Analista de logística, 31 anos · Curitiba',
    applied: 'cap. 4 + 5 — planilha + reserva',
    text:
      'Lia influencer falando que precisava ter ETF americano e investir no exterior. Apliquei a planilha de quatro abas do capítulo 4 numa terça à noite e descobri que estava gastando R$ 920 por mês em assinaturas que esquecera. A reserva de seis meses (cap. 5) saiu em sete meses, sem cortar nada além disso.',
  },
  {
    name: 'Rodrigo',
    context: 'Médico residente, 29 anos · Recife',
    applied: 'cap. 3 — operação BBAS3 documentada',
    text:
      'O capítulo do BBAS3 me pegou. Eu tinha entrado em VALE3 com a mesma cabeça do Felipe em 2022 e aceitado prejuízo. Ler em letra de forma que outra pessoa fez exatamente o mesmo erro me ajudou a parar de carregar isso como vergonha pessoal.',
  },
];

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'Isso é recomendação de investimento?',
    answer:
      'Não. O autor não é assessor de investimentos credenciado pela CVM nem analista de valores mobiliários (CVM 20/2014). O livro é um relato pessoal de oito anos, com a planilha do autor, decisões e erros — cada leitor deve avaliar a própria realidade ou procurar profissional registrado antes de aplicar dinheiro. Há disclaimer regulatório explícito na primeira página.',
  },
  {
    id: 2,
    question: 'Funciona pra quem está começando do zero, sem reserva?',
    answer:
      'Os capítulos 4 (planilha) e 5 (reserva) são desenhados pra quem ainda não tem reserva nem método de acompanhamento. Mas o livro inteiro pressupõe uma renda mensal CLT ou PJ estável. Se a sua questão hoje é endividamento ativo, o livro indica autores que tratam disso melhor — não tenta ser tudo.',
  },
  {
    id: 3,
    question: 'Existe garantia de devolução?',
    answer:
      'Não há garantia de "se não gostar, devolvo". O livro tem uma amostra grátis de 38 páginas (capítulos 1 e 2 inteiros), suficiente pra você decidir se a abordagem te serve. Se não te serve depois da amostra, basta não comprar o resto.',
  },
  {
    id: 4,
    question: 'Por que R$ 49 e não menos?',
    answer:
      'É o preço fixo desde a primeira tiragem em 2024. Não tem countdown, "−75% por tempo limitado", nem parcelamento em 12x. Esse modelo de gatilho de urgência é exatamente o que o livro critica em vários capítulos — não faria sentido vendê-lo assim.',
  },
  {
    id: 5,
    question: 'Em que formato vem? Posso imprimir?',
    answer:
      'PDF tipográfico (não escaneado), formato A5, otimizado tanto pra leitura em tela quanto pra impressão em casa frente-e-verso. Sem DRM, sem watermark. Você pode imprimir, anotar à mão, repassar pra um familiar.',
  },
  {
    id: 6,
    question: 'Quem é o Felipe Andrade?',
    answer:
      'CLT em São Paulo, 36 anos quando o livro foi escrito. Engenheiro elétrico de formação, trabalha na área de manutenção industrial. Não tem canal no YouTube, não tem mentoria, não vende curso de fórmula. O livro é a única coisa que ele oferece publicamente.',
  },
];

const App: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-terracotta/30">
      {/* Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-paper/95 backdrop-blur border-b rule' : 'bg-transparent'}`}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
          <a
            href="#topo"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('topo');
            }}
            className="font-serif text-lg font-semibold tracking-tight-2 text-ink"
          >
            Independência aos 35
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm">
            <a href="#sumario" onClick={(e) => { e.preventDefault(); scrollTo('sumario'); }} className="text-ink-soft hover:text-ink transition-colors">Sumário</a>
            <a href="#planilha" onClick={(e) => { e.preventDefault(); scrollTo('planilha'); }} className="text-ink-soft hover:text-ink transition-colors">Planilha</a>
            <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollTo('sobre'); }} className="text-ink-soft hover:text-ink transition-colors">Sobre o autor</a>
            <a href="#duvidas" onClick={(e) => { e.preventDefault(); scrollTo('duvidas'); }} className="text-ink-soft hover:text-ink transition-colors">Dúvidas</a>
            <Button variant="primary" size="sm" onClick={() => scrollTo('comprar')}>
              Comprar · R$ {PRICE_BRL}
            </Button>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-paper border-t rule px-5 py-4 flex flex-col gap-1">
            <a href="#sumario" onClick={(e) => { e.preventDefault(); scrollTo('sumario'); }} className="py-3 text-ink">Sumário</a>
            <a href="#planilha" onClick={(e) => { e.preventDefault(); scrollTo('planilha'); }} className="py-3 text-ink">Planilha</a>
            <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollTo('sobre'); }} className="py-3 text-ink">Sobre o autor</a>
            <a href="#duvidas" onClick={(e) => { e.preventDefault(); scrollTo('duvidas'); }} className="py-3 text-ink">Dúvidas</a>
            <Button variant="primary" fullWidth className="mt-2" onClick={() => scrollTo('comprar')}>
              Comprar · R$ {PRICE_BRL}
            </Button>
          </div>
        )}
      </nav>

      <main>
        {/* Hero */}
        <section id="topo" className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-12 gap-10 md:gap-14">
              <div className="md:col-span-7">
                <FadeIn>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta mb-4">
                    livro · 1ª edição · {new Date().getFullYear()}
                  </p>
                </FadeIn>
                <FadeIn delay={80}>
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight-2 text-ink mb-7">
                    Independência <span className="marker">aos 35</span>.
                  </h1>
                </FadeIn>
                <FadeIn delay={160}>
                  <p className="text-lg md:text-[19px] leading-relaxed text-ink-soft max-w-xl mb-3">
                    Diário de oito anos da poupança até R$ 1,2 milhão, com a planilha
                    real, os erros que custaram caro e os capítulos sobre o que
                    nenhum livro traduzido te conta — IR, custo Brasil, herança CLT.
                  </p>
                  <p className="text-lg md:text-[19px] leading-relaxed text-ink-soft max-w-xl mb-9">
                    Não é método. Não é fórmula. Não é recomendação de investimento.
                    É um relato com números.
                  </p>
                </FadeIn>
                <FadeIn delay={220}>
                  <div className="flex flex-col sm:flex-row gap-3 mb-10">
                    <Button variant="primary" size="lg" onClick={() => scrollTo('comprar')}>
                      Comprar PDF · R$ {PRICE_BRL}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="lg" onClick={() => scrollTo('amostra')}>
                      <Download className="w-4 h-4" />
                      Baixar amostra de 38 páginas
                    </Button>
                  </div>
                </FadeIn>
                <FadeIn delay={280}>
                  <dl className="grid grid-cols-3 gap-x-6 gap-y-4 max-w-md border-t rule pt-6 font-mono text-[13px] tabular">
                    <div>
                      <dt className="text-ink/50 mb-0.5">Páginas</dt>
                      <dd className="text-ink">{PAGES}</dd>
                    </div>
                    <div>
                      <dt className="text-ink/50 mb-0.5">Capítulos</dt>
                      <dd className="text-ink">{CHAPTERS.length}</dd>
                    </div>
                    <div>
                      <dt className="text-ink/50 mb-0.5">ISBN</dt>
                      <dd className="text-ink">{ISBN.slice(-7)}</dd>
                    </div>
                  </dl>
                </FadeIn>
              </div>

              {/* Capa do livro — ilustração CSS, não foto stock de e-book 3D com glow */}
              <div className="md:col-span-5">
                <FadeIn delay={320}>
                  <figure className="relative">
                    <div className="aspect-[3/4] bg-paper-soft border rule shadow-[6px_6px_0_0_rgba(74,83,64,0.18)] p-7 md:p-9 flex flex-col justify-between">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-terracotta mb-2">
                          edição independente · 1ª impressão
                        </p>
                        <hr className="border-t rule mb-7" />
                        <p className="font-serif italic text-sm text-ink-soft mb-5">
                          Um diário de oito anos sobre como sair da poupança no Brasil
                        </p>
                      </div>
                      <div>
                        <h2 className="font-serif text-3xl md:text-4xl leading-[1.05] tracking-tight-2 text-ink mb-2">
                          Independência<br />aos 35
                        </h2>
                        <p className="font-serif italic text-base text-terracotta">com a planilha</p>
                      </div>
                      <div>
                        <hr className="border-t rule mb-3" />
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                          Felipe Andrade
                        </p>
                      </div>
                    </div>
                  </figure>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer regulatório — diferencial editorial chave */}
        <section className="py-7 border-y rule bg-paper-soft">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-wider text-terracotta mb-2">
              Aviso da primeira página
            </p>
            <p className="font-serif italic text-[16px] md:text-[17px] leading-relaxed text-ink max-w-3xl">
              &ldquo;O autor não é assessor de investimentos credenciado pela CVM nem
              analista registrado conforme a Resolução CVM 20/2014. Tudo o que
              segue é relato pessoal, e nenhum trecho deve ser interpretado
              como recomendação de compra ou venda de ativos.&rdquo;
            </p>
          </div>
        </section>

        {/* Sumário (capítulos) */}
        <section id="sumario" className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta mb-3">Sumário</p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight-2 text-ink mb-3 max-w-2xl">
                Oito capítulos. {PAGES} páginas. Uma planilha aberta.
              </h2>
              <p className="text-ink-soft max-w-2xl mb-12 leading-relaxed">
                Os dois primeiros capítulos vão na amostra grátis. Os outros seis
                cobrem o que não cabe em um post de Twitter sobre dinheiro.
              </p>
            </FadeIn>

            <div className="border-t rule">
              {CHAPTERS.map((c) => (
                <FadeIn key={c.num}>
                  <ChapterCard chapter={c} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Planilha aberta */}
        <section id="planilha" className="py-20 md:py-28 border-t rule bg-paper-soft">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <FadeIn>
              <div className="grid md:grid-cols-12 gap-8 md:gap-10 mb-10">
                <div className="md:col-span-5">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta mb-3">Planilha aberta</p>
                  <h2 className="font-serif text-3xl md:text-4xl tracking-tight-2 text-ink leading-tight mb-4">
                    Os números que estão dentro do livro.
                  </h2>
                  <p className="text-ink-soft leading-relaxed">
                    Receita anual líquida CLT, valor que coube no &ldquo;invested&rdquo;
                    de cada ano, e o total acumulado em conta + corretora ao final
                    de cada dezembro. A planilha completa do livro tem 12 anos
                    mês a mês — esta é a vista anual resumida.
                  </p>
                </div>
                <div className="md:col-span-7 self-end">
                  <table className="w-full text-sm font-mono tabular">
                    <thead>
                      <tr className="border-b rule text-left text-ink/50 text-[11px] uppercase tracking-wider">
                        <th className="py-2 font-medium">Ano</th>
                        <th className="py-2 font-medium">Receita</th>
                        <th className="py-2 font-medium">Aportado</th>
                        <th className="py-2 font-medium">Acumulado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SPREADSHEET.map((r) => (
                        <tr key={r.year} className="border-b rule/60">
                          <td className="py-3 text-ink">{r.year}</td>
                          <td className="py-3 text-ink-soft">{r.income}</td>
                          <td className="py-3 text-ink-soft">{r.invested}</td>
                          <td className="py-3 text-ink font-medium">
                            {r.total}
                            {r.note && <span className="block text-[11px] text-terracotta italic font-sans not-italic mt-0.5">{r.note}</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Trecho amostra */}
        <section id="amostra" className="py-20 md:py-28 border-t rule">
          <div className="max-w-2xl mx-auto px-5 md:px-8">
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta mb-3">Trecho · capítulo 03</p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight-2 text-ink leading-tight mb-9">
                &ldquo;Os três anos que deram R$ 0&rdquo;
              </h2>
              <p className="font-serif text-[19px] leading-[1.7] text-ink mb-5 drop-cap">
                Comprei 1.200 BBAS3 a R$ 38 em janeiro de 2022. Hoje, escrevendo
                este capítulo em outubro de 2024, sei o tamanho do erro. Mas o
                que importa não é o prejuízo de R$ 12.000 contábeis — é o que
                eu disse pra mim mesmo no espelho durante aqueles dez meses.
              </p>
              <p className="font-serif text-[19px] leading-[1.7] text-ink mb-5">
                Eu disse que entendia análise fundamentalista. Não entendia.
                Tinha lido três livros e assistido vídeos de gente que parecia
                segura, e confundi confiança alheia com competência minha.
              </p>
              <p className="font-serif text-[19px] leading-[1.7] text-ink mb-9">
                Quando vendi a R$ 28 em outubro, não foi porque algum fundamento
                tinha mudado. Foi porque um vídeo de oito minutos me convenceu,
                em pânico, que ia pra R$ 18. Não foi.
              </p>
              <div className="border-t rule pt-6 flex items-center justify-between">
                <p className="text-sm text-ink-soft">Continua na p. 51 do PDF.</p>
                <Button variant="ghost" size="sm" onClick={() => scrollTo('comprar')}>
                  Baixar capítulos 1 e 2 (grátis)
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Notas de leitor (não testimonials) */}
        <section className="py-20 md:py-28 border-t rule">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta mb-3">Notas de leitor</p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight-2 text-ink mb-3 max-w-2xl">
                Duas leitoras descrevem o que aplicaram, e em que capítulo.
              </h2>
              <p className="text-ink-soft mb-12 max-w-2xl leading-relaxed">
                Sem &ldquo;mudou minha vida&rdquo;, sem foto de stock, sem cinco estrelas
                amarelas. Cada nota cita o capítulo aplicado e o resultado
                concreto observado.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {READER_NOTES.map((n, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <TestimonialCard note={n} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre o autor */}
        <section id="sobre" className="py-20 md:py-28 border-t rule bg-paper-soft">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta mb-3">Sobre o autor</p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight-2 text-ink leading-tight mb-8">
                Felipe Andrade.
              </h2>
              <div className="space-y-5 text-[16px] md:text-[17px] leading-relaxed text-ink">
                <p>
                  CLT em São Paulo, 36 anos quando este livro foi escrito.
                  Engenheiro elétrico de formação (UFSCar, 2011), trabalha há
                  treze anos na área de manutenção industrial — empresa de
                  capital fechado, papel técnico, salário público no
                  Glassdoor pra quem quiser conferir.
                </p>
                <p>
                  Não tem canal no YouTube. Não vende mentoria, curso de
                  fórmula nem &ldquo;método de 3 passos&rdquo;. Não dá palestra paga.
                  Não aparece em <em>podcast</em> de finanças. Este livro é a
                  única coisa que oferece publicamente — e a maior parte do
                  retorno ele usa pra continuar pagando o plano de saúde
                  familiar quando eventualmente sair da CLT.
                </p>
                <p>
                  Se você procurar &ldquo;Felipe Andrade investimentos&rdquo; no
                  Instagram, encontra sete perfis. Nenhum é dele.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Comprar */}
        <section id="comprar" className="py-20 md:py-28 border-t rule">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-7">
                <FadeIn>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta mb-3">Comprar</p>
                  <h2 className="font-serif text-3xl md:text-4xl tracking-tight-2 text-ink leading-tight mb-4">
                    R$ {PRICE_BRL}, fixo.
                  </h2>
                  <p className="text-ink-soft leading-relaxed mb-6">
                    Sem &ldquo;de R$ 197 por R$ 47&rdquo;. Sem countdown. Sem 12x.
                    Esse é o preço do livro desde a primeira tiragem em 2024,
                    e seguirá sendo enquanto a edição estiver em circulação.
                  </p>
                  <p className="text-ink-soft leading-relaxed mb-8 text-[15px]">
                    Pagamento via PIX, link da Hotpay, sem cadastro. Você
                    recebe o PDF tipográfico no e-mail em até 5 minutos. Sem
                    DRM, sem watermark, sem upsell — você compra o livro e
                    acaba.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="primary" size="lg">
                      Pagar R$ {PRICE_BRL} via PIX
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="lg">
                      <Download className="w-4 h-4" />
                      Amostra grátis (PDF, 38p.)
                    </Button>
                  </div>
                </FadeIn>
              </div>
              <aside className="md:col-span-5 md:border-l rule md:pl-10">
                <FadeIn delay={120}>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink/50 mb-2">Ficha</p>
                  <dl className="space-y-3 text-sm font-mono tabular">
                    <div className="flex justify-between gap-4 border-b rule/60 pb-2">
                      <dt className="text-ink-soft">ISBN</dt>
                      <dd className="text-ink">{ISBN}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b rule/60 pb-2">
                      <dt className="text-ink-soft">Páginas</dt>
                      <dd className="text-ink">{PAGES}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b rule/60 pb-2">
                      <dt className="text-ink-soft">Edição</dt>
                      <dd className="text-ink">1ª, 2024</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b rule/60 pb-2">
                      <dt className="text-ink-soft">Editora</dt>
                      <dd className="text-ink text-right">{PUBLISHER}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b rule/60 pb-2">
                      <dt className="text-ink-soft">Depósito legal</dt>
                      <dd className="text-ink">{DEPOSITO_LEGAL}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-soft">Formato</dt>
                      <dd className="text-ink">PDF A5</dd>
                    </div>
                  </dl>
                </FadeIn>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="py-20 md:py-28 border-t rule bg-paper-soft">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta mb-3">Dúvidas</p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight-2 text-ink mb-12">
                O que leitores perguntam antes de comprar.
              </h2>
            </FadeIn>
            <div className="border-t rule">
              {FAQS.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  item={faq}
                  isOpen={openFAQ === faq.id}
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t rule py-14 text-sm">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-5">
            <p className="font-serif text-xl text-ink mb-3">Independência aos 35</p>
            <p className="text-ink-soft text-[14px] leading-relaxed max-w-sm">
              Diário de oito anos sobre sair da poupança no Brasil — com IR,
              custo Brasil, herança CLT, e a planilha do autor.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink/50 mb-3">Edição</p>
            <ul className="space-y-2 text-[13px] text-ink-soft">
              <li>1ª edição · 2024</li>
              <li>ISBN {ISBN}</li>
              <li>Depósito {DEPOSITO_LEGAL}</li>
              <li>{PAGES} páginas · A5</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink/50 mb-3">Documentos</p>
            <ul className="space-y-2 text-[13px] text-ink-soft">
              <li><a href="#duvidas" className="hover:text-terracotta transition-colors">Dúvidas</a></li>
              <li><a href="/politica-privacidade.html" className="hover:text-terracotta transition-colors">Privacidade</a></li>
              <li><a href="/termos.html" className="hover:text-terracotta transition-colors">Termos</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink/50 mb-3">Erratas</p>
            <a
              href="mailto:errata@independenciaaos35.com"
              className="inline-flex items-center gap-2 text-[13px] text-ink-soft hover:text-terracotta transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              errata@&hellip;
            </a>
            <p className="text-[12px] text-ink/50 mt-2">Encontrou erro nos números? Reporte. A errata é publicada na p. 4.</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-5 md:px-8 border-t rule pt-6 flex flex-col md:flex-row gap-3 justify-between text-[12px] text-ink/50">
          <p>© {new Date().getFullYear()} Felipe Andrade. Conteúdo do site é fictício, parte de um study case.</p>
          <p>
            Este é um <a className="underline hover:text-terracotta" href="https://github.com/otavio0machado/felipe.inv" target="_blank" rel="noopener noreferrer">study case</a>, não um livro publicado.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
