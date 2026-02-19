import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, color = 'bg-blue-100 text-blue-800' }) => (
  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${color}`}>{children}</span>
);