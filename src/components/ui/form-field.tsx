import React from 'react';
import { Input } from './input';
import { H4Title } from './typography';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'tel';
  className?: string;
  disabled?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  className,
  disabled = false,
}) => (
  <div className={cn('space-y-2', className)}>
    <H4Title className="text-base font-bold text-web-neutral-400">
      {label}
    </H4Title>
    {disabled ? (
      <div className="bg-web-neutral-300 px-4 py-3 rounded text-web-neutral-400">
        {value}
      </div>
    ) : (
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-web-neutral-300 px-4 py-3 text-web-neutral-400"
      />
    )}
  </div>
);
