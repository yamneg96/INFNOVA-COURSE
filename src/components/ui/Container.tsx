import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={`mx-auto ${className || ''}`}>{children}</div>
);