import React from "react";
import { StatusBanner } from "./ui/status-banner";

interface WarningMessageProps {
  isVisible: boolean;
  interlocutorRecognized?: boolean;
}

export const WarningMessage: React.FC<WarningMessageProps> = ({ 
  isVisible, 
  interlocutorRecognized = true 
}) => {
  if (!isVisible) return null;

  const getMessage = () => {
    if (interlocutorRecognized) {
      return (
        <>
          <span>Interlocutor </span>
          <span className="underline font-semibold">RECONHECIDO</span>
          <span> e abertura da NIP </span>
          <span className="underline font-semibold">NÃO RECONHECIDA</span>
          <span> pelo usuário.</span>
        </>
      );
    } else {
      return (
        <>
          <span>Interlocutor </span>
          <span className="underline font-semibold">NÃO RECONHECIDO</span>
          <span> e abertura da NIP </span>
          <span className="underline font-semibold">NÃO RECONHECIDA</span>
          <span> pelo usuário.</span>
        </>
      );
    }
  };

  return (
    <div className="py-4">
      <StatusBanner type="warning">
        {getMessage()}
      </StatusBanner>
    </div>
  );
};