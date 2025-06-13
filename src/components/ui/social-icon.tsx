import React from 'react';
import { cn } from '@/lib/utils';

interface SocialIconProps {
  src: string;
  alt: string;
  variant?: 'header' | 'footer';
  className?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  src,
  alt,
  variant = 'header',
  className,
}) => {
  const baseClasses = 'flex items-center justify-center w-6 h-6 rounded-full';
  const variantClasses = {
    header: 'bg-web-primary-100-default',
    footer: 'bg-web-neutral-0',
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      <img className="w-3.5 h-3.5" alt={alt} src={src} />
    </div>
  );
};
