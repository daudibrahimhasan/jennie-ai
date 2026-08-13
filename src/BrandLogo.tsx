import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'dark',
  className = ''
}) => {
  const sizeClasses = {
    sm: { img: 'w-6 h-6', text: 'text-lg font-semibold' },
    md: { img: 'w-7 h-7 md:w-8 md:h-8', text: 'text-xl font-bold' },
    lg: { img: 'w-8 h-8 md:w-9 md:h-9', text: 'text-2xl font-bold' }
  };

  const textColors = {
    dark: 'text-[#010542]',
    light: 'text-white'
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`inline-flex items-center space-x-2 group select-none ${className}`}>
      <img
        src="/logo.png"
        alt="openJennie Logo"
        className={`${currentSize.img} object-contain shrink-0 group-hover:scale-105 transition-transform duration-200`}
      />
      <span className={`tracking-tight ${textColors[variant]} ${currentSize.text}`}>
        jennie-AI
      </span>
    </div>
  );
};
