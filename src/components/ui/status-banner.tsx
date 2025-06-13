import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatusBannerProps {
  type: 'success' | 'warning';
  children: React.ReactNode;
  className?: string;
}

export const StatusBanner: React.FC<StatusBannerProps> = ({
  type,
  children,
  className,
}) => {
  const Icon = type === 'success' ? CheckCircle : AlertCircle;
  const baseClasses = 'border rounded-lg p-4 flex items-center gap-3';
  const typeClasses = {
    success: 'bg-green-100 border-green-200',
    warning: 'bg-red-50 border-red-200',
  };
  const iconClasses = {
    success: 'text-green-600',
    warning: 'text-red-600',
  };
  const textClasses = {
    success: 'text-green-800',
    warning: 'text-red-800',
  };

  return (
    <div className={cn(baseClasses, typeClasses[type], className)}>
      <Icon className={cn('w-5 h-5 flex-shrink-0', iconClasses[type])} />
      <div className={textClasses[type]}>{children}</div>
    </div>
  );
};
