import React from 'react';

export interface Chapter {
  num: string;
  title: string;
  pages: string;
  preview: string;
}

export interface SpreadsheetRow {
  year: string;
  income: string;
  invested: string;
  total: string;
  note?: string;
}

export interface ReaderNote {
  name: string;
  context: string;
  applied: string;
  text: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'mark';
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
