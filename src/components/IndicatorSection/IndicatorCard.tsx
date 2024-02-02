import { StringHelpers } from '@/helpers/StringHelpers';
import React from 'react';

interface IndicatorCardProps {
  title: string;
  content: number;
}

const IndicatorCard = ({ title, content }: IndicatorCardProps) => {
  return (
    <div className="flex flex-col gap-y-2 border border-gray-400 rounded-lg text-center px-10">
      <span>{title}</span>
      <span className='font-bold text-2xl'>{StringHelpers.convertTo3Digits(content)}</span>
    </div>
  );
};

export default IndicatorCard;
