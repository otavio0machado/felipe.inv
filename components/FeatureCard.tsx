import React from 'react';
import { FeatureItem } from '../types';

interface FeatureCardProps {
  feature: FeatureItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-slate-700 via-slate-800 to-neon/30 hover:to-neon transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-full bg-slate-900 rounded-2xl p-8 flex flex-col items-start gap-4 overflow-hidden">
        {/* Glow Background Effect */}
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-neon/5 rounded-full blur-3xl group-hover:bg-neon/10 transition-colors duration-500" />
        
        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 group-hover:border-neon group-hover:bg-neon/10 transition-colors duration-300">
          <Icon className="w-8 h-8 text-neon group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        <h3 className="text-xl font-bold text-white group-hover:text-neon transition-colors">
          {feature.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};