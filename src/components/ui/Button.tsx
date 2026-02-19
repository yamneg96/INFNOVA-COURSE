import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  return (
    <button
      className={`
        px-4 py-2 rounded-md font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
        ${variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </button>
  );
};