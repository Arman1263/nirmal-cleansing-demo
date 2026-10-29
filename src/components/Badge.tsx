import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'neutral' | 'subtle' | 'warning' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'brand',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[11px] font-medium px-2 py-0.5 rounded-full',
    md: 'text-xs font-semibold px-2.5 py-1 rounded-full',
  };

  const variantStyles = {
    brand: 'bg-[#EBF3ED] text-[#2E6F40] border border-[#C6DEC9]',
    neutral: 'bg-[#F4F2EC] text-[#57534E] border border-[#E7E5E4]',
    subtle: 'bg-white text-[#44403C] border border-[#E7E5E4] shadow-xs',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200',
    outline: 'bg-transparent text-[#2E6F40] border border-[#2E6F40]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 leading-none tracking-wide select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

