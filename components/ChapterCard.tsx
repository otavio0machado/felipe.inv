import React from 'react';
import { Chapter } from '../types';

interface ChapterCardProps {
  chapter: Chapter;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => {
  return (
    <article className="grid grid-cols-12 gap-6 py-7 border-b rule">
      <div className="col-span-2 md:col-span-1">
        <span className="font-mono text-[13px] text-terracotta tabular">{chapter.num}</span>
      </div>
      <div className="col-span-10 md:col-span-8">
        <h3 className="font-serif text-xl md:text-2xl leading-snug text-ink mb-2">{chapter.title}</h3>
        <p className="text-[15px] text-ink-soft leading-relaxed">{chapter.preview}</p>
      </div>
      <div className="hidden md:block md:col-span-3 text-right">
        <span className="font-mono text-xs text-ink/50 tabular">{chapter.pages}</span>
      </div>
    </article>
  );
};
