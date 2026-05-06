import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Passthrough — a animação de fade-on-scroll do template original ficava
// dependente de IntersectionObserver e produzia conteúdo invisível em scroll
// instantâneo. Para uma landing editorial densa, conteúdo sempre visível
// é o comportamento correto.
export const FadeIn: React.FC<FadeInProps> = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);
