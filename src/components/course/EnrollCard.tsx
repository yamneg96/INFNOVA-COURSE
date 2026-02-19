import React from 'react';
import { Button } from '../ui/Button';

interface Props {
  enrolled: boolean;
  price: number;
  onEnroll: () => void;
}

export default function EnrollCard({ enrolled, price, onEnroll }: Props) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center gap-4">
      <div className="text-lg font-semibold">{price ? `$${price}` : 'Free'}</div>
      <Button
        variant="primary"
        disabled={enrolled}
        onClick={onEnroll}
        className="w-full"
      >
        {enrolled ? 'Enrolled' : 'Enroll Now'}
      </Button>
    </div>
  );
}