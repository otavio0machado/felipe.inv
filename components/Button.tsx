import React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false,
  size = 'md',
  pulse = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative font-bold uppercase tracking-wider transition-all duration-300 transform rounded-lg flex items-center justify-center gap-2 group overflow-hidden active:scale-95";
  
  const variants = {
    primary: "bg-neon text-slate-950 hover:bg-neon-glow hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] border border-neon",
    secondary: "bg-gold text-slate-950 hover:bg-gold-glow hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] border border-gold",
    outline: "bg-transparent text-neon border-2 border-neon hover:bg-neon/10",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg md:text-xl font-black"
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const pulseClass = pulse ? 'animate-pulse-fast' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${pulseClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Shine effect overlay for primary/secondary */}
      {(variant === 'primary' || variant === 'secondary') && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0 w-1/2 h-full skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
};