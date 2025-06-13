import React from 'react';
import { CheckCircle } from 'lucide-react';
import { StatusBanner } from './ui/status-banner';
import { BodyText } from './ui/typography';

interface SuccessMessageProps {
  isVisible: boolean;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="space-y-4">
      <StatusBanner type="success">
        <span className="underline font-semibold">
          Abertura da NIP RECONHECIDA
        </span>
        <span> pelo usuário.</span>
      </StatusBanner>

      <div className="flex items-center gap-3 py-4">
        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
        <BodyText className="text-lg font-medium">
          Obrigado pela resposta!
        </BodyText>
      </div>
    </div>
  );
};
