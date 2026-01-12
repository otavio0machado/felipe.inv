import React, { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-slate-800 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
        onClick={onClick}
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-neon' : 'text-slate-200 group-hover:text-white'}`}>
          {item.question}
        </span>
        <ChevronDown 
          className={`w-6 h-6 text-neon transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
        />
      </button>
      
      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="pb-6 text-slate-400 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
};