import React, { useState } from 'react';
import { ModalButton } from './ui/custom-button';
import { FormField } from './ui/form-field';
import { H3Subtitle, BodyText } from './ui/typography';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

interface ContactVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  beneficiaryName: string;
}

export const ContactVerificationModal: React.FC<
  ContactVerificationModalProps
> = ({ isOpen, onClose, onConfirm, beneficiaryName }) => {
  const [email, setEmail] = useState('leandro.henrique@gmail.com');
  const [phone, setPhone] = useState('(61) 9 9999-9999');

  const handleConfirm = () => {
    console.log('Dados confirmados:', { email, phone });
    onConfirm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[600px] bg-white p-8">
        <DialogHeader className="space-y-4 text-left">
          <DialogTitle>
            <H3Subtitle className="text-2xl">
              Verificar dados de contato
            </H3Subtitle>
          </DialogTitle>
          <DialogDescription>
            <BodyText className="text-base leading-relaxed">
              Considerando que você não reconheceu a Notificação de
              Intermediação Preliminar (NIP), a CASSI entrará em contato para
              compreender melhor a situação. Por favor, verifique as informações
              abaixo e, se necessário, atualize-as:
            </BodyText>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <FormField
            label="Beneficiário"
            value={beneficiaryName}
            onChange={() => {}}
            disabled
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="E-mail"
              type="email"
              value={email}
              onChange={setEmail}
            />
            <FormField
              label="Celular"
              type="tel"
              value={phone}
              onChange={setPhone}
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <ModalButton variant="outline" onClick={onClose}>
            Voltar
          </ModalButton>
          <ModalButton onClick={handleConfirm}>Confirmar dados</ModalButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};
