import React from 'react';
import { FeatureItem } from '../types';

interface FeatureCardProps {
  feature: FeatureItem;
  index?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index = 0 }) => {
  const Icon = feature.icon;

  // Alternate accent colors
  const accents = [
    { bg: 'from-neon/20 to-cyan-500/20', border: 'group-hover:border-neon', icon: 'text-neon', glow: 'bg-neon/10' },
    { bg: 'from-purple/20 to-violet-500/20', border: 'group-hover:border-purple', icon: 'text-purple', glow: 'bg-purple/10' },
    { bg: 'from-gold/20 to-amber-500/20', border: 'group-hover:border-gold', icon: 'text-gold', glow: 'bg-gold/10' },
    { bg: 'from-emerald/20 to-green-500/20', border: 'group-hover:border-emerald', icon: 'text-emerald', glow: 'bg-emerald/10' },
  ];

  const accent = accents[index % accents.length];

  return (
    <div className="group relative h-full">
      {/* Gradient border wrapper */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accent.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

      <div className={`relative h-full glass rounded-2xl p-8 border border-white/5 ${accent.border} transition-all duration-500 hover:-translate-y-1 overflow-hidden spotlight`}>
        {/* Corner glow */}
        <div className={`absolute -right-10 -top-10 w-40 h-40 ${accent.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Icon */}
        <div className={`relative w-14 h-14 rounded-xl ${accent.glow} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-7 h-7 ${accent.icon}`} />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
          {feature.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed">
          {feature.description}
        </p>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accent.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
    </div>
  );
};