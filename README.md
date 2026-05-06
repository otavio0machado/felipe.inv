# Independência aos 35 — landing study case

Landing fictícia para um livro de educação financeira brasileiro chamado
*Independência aos 35*, escrito por um autor independente que conta oito anos
de jornada da poupança até R$ 1,2 milhão. Este repositório é um **study case**
para portfolio — não há livro real, autor real ou loja em operação.

## Sobre este study case

A versão original deste repo era um template clássico de **info-produto
Hotmart**: hero "+2.500 Alunos Transformados", desconto fake "R$ 197 → R$ 47
(-75%)", features "Mentalidade Blindada" / "Renda Passiva Automática", paleta
neon cyan-purple-gold com glow infinito, e três depoimentos com nome plástico
e foto Unsplash. O footer trazia inclusive o disclaimer literal de Facebook
Ads — "Este site não faz parte do site do Facebook ou Facebook Inc." — que é
uma assinatura inconfundível de funil pago de venda agressiva.

O exercício aqui foi inverter cada eixo da venda enxuta-mas-pressiva pra um
posicionamento que **assumisse a regulação CVM existente no Brasil** e
parecesse um produto editorial sério, não Hotmart:

- O produto deixou de ser *"método"* e passou a ser **livro** (PDF
  tipográfico A5, 184 páginas, ISBN 978-65-87123-04-2, depósito legal
  fictício BN-2025-04719).
- O autor deixou de ser **influencer com promessa** e passou a ser **CLT
  com diário e planilha aberta** — engenheiro elétrico, 36 anos, sem canal
  no YouTube, sem mentoria.
- O preço passou a ser **R$ 49 fixo desde a primeira tiragem**, sem
  countdown, sem "−75%", sem 12x sem juros. (O livro inteiro critica
  esses gatilhos em vários capítulos — não faria sentido vendê-lo
  com gatilho.)
- A garantia de **7 dias incondicional** virou **38 páginas grátis** de
  amostra real (capítulos 1 e 2 inteiros). Você lê antes e decide.
- Os três testimonials genéricos viraram **duas notas de leitor**, cada
  uma citando o **capítulo aplicado** e o **resultado concreto**
  observado — não "mudou minha vida".
- Foi adicionado **disclaimer regulatório explícito** em destaque
  visual (Resolução CVM 20/2014), copiado da primeira página do livro
  fictício, que reconhece que o autor não é credenciado e que nada
  é recomendação de investimento.

## Estrutura

| Seção | Por quê |
| ---- | ---- |
| Hero | Capa do livro como ilustração CSS, não foto stock 3D com glow |
| Aviso CVM | Disclaimer da primeira página do livro, em destaque editorial |
| Sumário | Oito capítulos com número, título, prévia e faixa de páginas |
| Planilha aberta | Tabela com receita anual / aportado / acumulado de 2017 a 2025, com nota inline do prejuízo de BBAS3 em 2022 |
| Trecho amostra | Capítulo 03 ("Os três anos que deram R$ 0") com drop cap editorial |
| Notas de leitor | Duas relatos, cada um com capítulo aplicado e resultado |
| Sobre o autor | Bio honesta — UFSCar 2011, manutenção industrial, sem produtos paralelos |
| Comprar | Preço fixo + ficha bibliográfica completa em coluna lateral |
| Dúvidas | 6 perguntas reais, incluindo "isso é recomendação de investimento?" como primeira |

## Decisões de design

- **Paleta papel**: bege `#F5F0E6` de fundo, off-black `#131316`, terracota
  `#B0532E` como acento, verde-oliva escuro `#4A5340` para sombras. Lembra
  miolo de livro de finanças sério (*O Investidor Inteligente* edição papel),
  não dashboard SaaS.
- **Tipografia**: *EB Garamond* serif para títulos e corpo de capítulos
  (densidade editorial), *IBM Plex Mono* para números e ficha bibliográfica
  (sensação de paper técnico), *Inter* para nav e CTAs.
- **Capa do livro**: ilustração CSS com hierarquia tipográfica + sombra
  offset estilo carimbo de oficina, em vez de mockup 3D Unsplash com glow
  cyan-purple animado.
- **Tabular numbers**: a tabela de planilha usa `font-variant-numeric:
  tabular-nums` pra que os valores monetários fiquem alinhados verticalmente
  como em planilha de verdade.
- **Drop cap**: o trecho amostra do capítulo 3 abre com letra capitular em
  terracota, como em romance de bolso. Marcador editorial subliminar de
  "isto é livro, não landing".
- **Restrição de ícones**: 5 ícones funcionais em todo o site (Menu, X,
  ArrowRight, Download, Mail). Removidos: Sparkles, Zap, Brain,
  ShieldCheck, Award, Star, Quote, Gift, CreditCard, Lock, BookOpen,
  Users, Play, Clock, CheckCircle, TrendingUp.

## Stack

`React 19` · `TypeScript` · `Vite 6` · `Tailwind via CDN` · `lucide-react`

## Rodar local

```bash
npm install
npm run dev
```

## Aviso

Todo conteúdo do site — autor Felipe Andrade, planilha, ISBN, depósito
legal, notas de leitor, e-mails de contato — é **fictício**. Foi escrito
pra parecer plausível como produto editorial e demonstrar que landing
de info-produto pode existir sem chavão Hotmart. As decisões editoriais
(preço fixo, ficha bibliográfica completa, disclaimer CVM) são propostas
do study case, não do mercado real.
