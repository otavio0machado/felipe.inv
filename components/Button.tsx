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
  const baseStyles = "relative font-bold uppercase tracking-wider transition-all duration-300 transform rounded-xl flex items-center justify-center gap-2 group overflow-hidden active:scale-95 cursor-pointer";

  const variants = {
    primary: "bg-gradient-to-r from-neon to-cyan-400 text-slate-950 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] border border-neon/50",
    secondary: "bg-gradient-to-r from-gold to-amber-400 text-slate-950 hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] border border-gold/50",
    outline: "bg-transparent text-neon border-2 border-neon hover:bg-neon/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/10"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
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
      {/* Gradient overlay on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};