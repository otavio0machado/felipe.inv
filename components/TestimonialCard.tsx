import React from 'react';
import { TestimonialItem } from '../types';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-full md:w-auto md:flex-1 bg-slate-900/80 backdrop-blur border border-slate-800 p-8 rounded-2xl hover:border-slate-600 transition-colors duration-300 flex flex-col justify-between">
      <div>
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
          ))}
        </div>

        <p className="text-slate-200 mb-6 text-lg leading-relaxed font-medium">
          "{testimonial.content}"
        </p>
      </div>

      <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
        <div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden border border-slate-600">
           {/* Placeholder for avatar if image fails or generic */}
           <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
          <span className="text-neon text-xs font-semibold uppercase tracking-wider">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
};