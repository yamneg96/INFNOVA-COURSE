import React from 'react';

interface ErrorStateProps {
  message?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message = 'Something went wrong.' }) => (
  <div className="w-full text-center py-8 text-red-600 font-semibold">
    {message}
  </div>
);