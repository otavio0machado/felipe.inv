import React, { useRef } from 'react';
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
    <div className={`border-b border-white/5 last:border-0 transition-colors duration-300 ${isOpen ? 'bg-white/[0.02]' : ''}`}>
      <button
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
        onClick={onClick}
      >
        <span className={`text-lg font-semibold transition-all duration-300 ${isOpen ? 'text-gradient' : 'text-slate-200 group-hover:text-white'}`}>
          {item.question}
        </span>

        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-neon/20 rotate-180' : 'bg-white/5 group-hover:bg-white/10'}`}>
          <ChevronDown
            className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-neon' : 'text-slate-400'}`}
          />
        </div>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="pb-6 text-slate-400 leading-relaxed pl-0">
          {item.answer}
        </div>
      </div>
    </div>
  );
};