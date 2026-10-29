import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className = '',
      disabled,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 select-none';

    const sizeStyles = {
      sm: 'text-xs px-3.5 py-2 gap-1.5 shadow-xs',
      md: 'text-sm px-5 py-2.5 gap-2 shadow-xs',
      lg: 'text-base px-6 py-3.5 gap-2.5 shadow-sm',
    };

    const variantStyles = {
      primary:
        'bg-[#2E6F40] text-white hover:bg-[#1B4326] focus-visible:ring-[#2E6F40] shadow-sm hover:shadow-md',
      secondary:
        'bg-[#1C1917] text-[#FAF9F6] hover:bg-[#292524] focus-visible:ring-[#1C1917] shadow-sm',
      outline:
        'border border-[#D6D3D1] bg-transparent text-[#1C1917] hover:bg-[#F4F2EC] hover:border-[#A8A29E] focus-visible:ring-[#2E6F40]',
      ghost:
        'bg-transparent text-[#44403C] hover:bg-[#F4F2EC] hover:text-[#1C1917] focus-visible:ring-[#2E6F40]',
      whatsapp:
        'bg-[#25D366] text-white hover:bg-[#1EBE5D] focus-visible:ring-[#25D366] shadow-sm hover:shadow-md',
    };

    const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : rel}
          className={combinedClasses}
          aria-disabled={disabled || isLoading}
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
          )}
          <span>{children}</span>
          {!isLoading && rightIcon && (
            <span className="inline-flex shrink-0">{rightIcon}</span>
          )}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

