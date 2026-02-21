import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  return (
    <button
      className={`
        px-4 py-2 rounded-md font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6900]
        ${variant === 'primary' ? 'bg-[#FF6900] text-white hover:bg-[#F54900]' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </button>
  );
};