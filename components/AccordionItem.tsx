import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b rule">
      <button
        className="w-full py-5 flex items-start justify-between gap-6 text-left hover:text-terracotta transition-colors"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg md:text-xl text-ink leading-snug">{item.question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-terracotta shrink-0 mt-1.5" strokeWidth={1.5} />
        ) : (
          <Plus className="w-5 h-5 text-ink/60 shrink-0 mt-1.5" strokeWidth={1.5} />
        )}
      </button>
      {isOpen && (
        <p className="pb-6 pr-12 text-ink-soft leading-relaxed text-[15px]">{item.answer}</p>
      )}
    </div>
  );
};
