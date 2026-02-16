'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface MenuToggleIconProps extends React.SVGProps<SVGSVGElement> {
  open?: boolean;
  duration?: number;
}

export function MenuToggleIcon({
  open = false,
  duration = 200,
  className,
  ...props
}: MenuToggleIconProps) {
  const style = {
    transition: `transform ${duration}ms ease-in-out`,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-6 w-6', className)}
      {...props}
    >
      <line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        style={{
          ...style,
          transformOrigin: 'center',
          transform: open ? 'rotate(45deg) translate(6px, 6px)' : 'none',
        }}
      />
      <line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        style={{
          ...style,
          opacity: open ? 0 : 1,
        }}
      />
      <line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        style={{
          ...style,
          transformOrigin: 'center',
          transform: open ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
        }}
      />
    </svg>
  );
}
