import React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const base = "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-paper focus:ring-terracotta";

  const variants: Record<string, string> = {
    primary: "bg-ink text-paper hover:bg-ink-soft",
    ghost: "border border-ink/20 text-ink hover:bg-ink/5",
    mark: "bg-terracotta text-paper hover:bg-terracotta-deep",
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-[15px]",
    lg: "px-7 py-4 text-base",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
