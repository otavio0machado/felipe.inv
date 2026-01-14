import React from 'react';
import { TestimonialItem } from '../types';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="group relative h-full">
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/10 to-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      <div className="relative h-full glass rounded-2xl p-8 border border-white/5 group-hover:border-gold/30 transition-all duration-500 flex flex-col">
        {/* Quote icon */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="w-12 h-12 text-gold" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-gold text-gold drop-shadow-[0_0_3px_rgba(251,191,36,0.5)]"
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-slate-200 mb-8 text-lg leading-relaxed font-medium flex-grow">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
          {/* Avatar with gradient border */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-purple rounded-full blur-sm opacity-50" />
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold">{testimonial.name}</h4>
            <span className="text-gold text-sm font-medium">{testimonial.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};