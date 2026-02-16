'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface BentoItemProps {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export const BentoItem = ({ className, icon, title, description, children }: BentoItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
    };

    item.addEventListener('mousemove', handleMouseMove);

    return () => {
      item.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={itemRef} className={cn('bento-item', className)}>
      {icon && (
        <div className="mb-6 w-14 h-14 rounded-xl bg-[#34bb92] flex items-center justify-center">
          {icon}
        </div>
      )}
      <h3 className="text-base font-bold text-white mb-2">{title}</h3>
      <p className="text-xs text-gray-400 text-justify leading-relaxed">{description}</p>
      {children}
    </div>
  );
};
