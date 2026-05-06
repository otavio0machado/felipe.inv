import React from 'react';
import { ReaderNote } from '../types';

interface ReaderNoteCardProps {
  note: ReaderNote;
}

export const TestimonialCard: React.FC<ReaderNoteCardProps> = ({ note }) => {
  return (
    <article className="border rule p-7 md:p-8 h-full flex flex-col">
      <p className="font-serif italic text-[17px] md:text-lg leading-[1.55] text-ink mb-6 flex-1">
        &ldquo;{note.text}&rdquo;
      </p>
      <footer className="border-t rule pt-4 text-sm">
        <p className="text-ink font-medium">{note.name}</p>
        <p className="text-ink-soft text-[13px]">{note.context}</p>
        <p className="font-mono text-[12px] text-terracotta mt-2 tabular">{note.applied}</p>
      </footer>
    </article>
  );
};
