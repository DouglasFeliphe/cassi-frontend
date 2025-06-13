import { useState } from 'react';
import { Card, CardContent, CardTitle } from '../../../../components/ui/card';
import { PrimaryButton, SecondaryButton } from '@/components/ui/custom-button';
import { DataField } from '@/components/ui/data-field';
import { H3Subtitle, H4Title, BodyText } from '@/components/ui/typography';
import { ContactVerificationModal } from '@/components/ContactVerificationModal';
import { SuccessMessage } from '@/components/SuccessMessage';
import { WarningMessage } from '@/components/WarningMessage';

export const MainContentSection = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showWarningMessage, setShowWarningMessage] = useState(false);
  const [showYesNoButtons, setShowYesNoButtons] = useState(false);
  const [interlocutorRecognized, setInterlocutorRecognized] = useState<
    boolean | null
  >(null);

  const notificationData = {
    beneficiary: 'Leandro Henrique',
    interlocutor: 'Leandro Henrique',
    openingDate: '29/01/2022',
  };

  const handleDontRecognize = () => {
    setShowYesNoButtons(true);
  };

  const handleYesClick = () => {
    setInterlocutorRecognized(true);
    setIsModalOpen(true);
  };

  const handleNoClick = () => {
    setInterlocutorRecognized(false);
    setIsModalOpen(true);
  };

  const handleRecognize = () => {
    setShowSuccessMessage(true);
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    setShowWarningMessage(true);
  };

  return (
    <section className="flex flex-col items-start justify-center gap-10 px-20 py-10 w-full bg-web-neutral-100">
      <div className="flex items-start gap-8 w-full bg-web-neutral-100">
        {/* Left Column - Notification Details */}
        <Card className="flex-1 rounded-[8.19px] border-none bg-transparent">
          <CardContent className="p-0 space-y-10">
            {/* Header */}
            <div className="flex flex-col items-start gap-2 w-full">
              <H3Subtitle className="self-stretch mt-[-1.00px]">
                Olá, {notificationData.beneficiary}
              </H3Subtitle>
              <BodyText className="self-stretch">
                Foi realizada a abertura de uma Notificação de Intermediação
                Preliminar (NIP) em seu nome.
              </BodyText>
            </div>

            {/* Notification Data */}
            <div className="flex flex-col items-start justify-center gap-6 w-full">
              <div className="flex items-center gap-2.5 py-2 w-full border-b border-[#d9d9d9]">
                <CardTitle>
                  <H4Title className="w-fit mt-[-1.00px] text-web-primary-100-default whitespace-nowrap">
                    Dados do notificação
                  </H4Title>
                </CardTitle>
              </div>

              {/* Beneficiary and Interlocutor */}
              <div className="flex items-start gap-4 w-full">
                <DataField
                  label="Beneficiário"
                  value={notificationData.beneficiary}
                />
                <DataField
                  label="Interlocutor"
                  value={notificationData.interlocutor}
                />
              </div>

              {/* Opening Date */}
              <div className="flex items-start gap-4 w-full">
                <DataField
                  label="Data de abertura"
                  value={notificationData.openingDate}
                />
              </div>
            </div>

            {/* Success Message, Warning Message, or Recognition Section */}
            {showSuccessMessage ? (
              <div className="py-[9px] w-full border-t border-[#d9d9d9]">
                <SuccessMessage isVisible={showSuccessMessage} />
              </div>
            ) : showWarningMessage ? (
              <div className="py-[9px] w-full border-t border-[#d9d9d9]">
                <WarningMessage
                  isVisible={showWarningMessage}
                  interlocutorRecognized={interlocutorRecognized ?? true}
                />
              </div>
            ) : (
              <div className="flex flex-col items-start justify-center gap-4 py-[9px] w-full border-t border-[#d9d9d9]">
                <H4Title className="self-stretch mt-[-1.00px] text-web-neutral-800">
                  Reconhece esta NIP?
                </H4Title>

                {!showYesNoButtons ? (
                  <div className="flex items-center gap-2">
                    <SecondaryButton onClick={handleDontRecognize}>
                      Não reconheço
                    </SecondaryButton>
                    <PrimaryButton onClick={handleRecognize}>
                      Sim, foi aberto por mim
                    </PrimaryButton>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <BodyText>Você reconhece o interlocutor?</BodyText>
                    <div className="flex items-center gap-2">
                      <SecondaryButton onClick={handleNoClick}>
                        Não
                      </SecondaryButton>
                      <PrimaryButton onClick={handleYesClick}>
                        Sim
                      </PrimaryButton>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Right Column - Explanation */}
        <Card className="w-[411px] border-none bg-transparent rounded-[8.19px]">
          <CardContent className="p-0 space-y-[13.11px]">
            <H3Subtitle className="self-stretch mt-[-0.82px]">
              Por que é importante que você responda esse questionário?
            </H3Subtitle>
            <img
              className="w-[411px] h-[231px] object-cover"
              alt="Unsplash"
              src="/unsplash-mmjmfdgnsm8.png"
            />
            <BodyText className="self-stretch">
              Na CASSI, buscamos aprimorar continuamente nossos serviços e
              métodos de atendimento. Nosso objetivo é acelerar o processo de
              análise das suas solicitações e torná-lo mais eficiente. Ao
              responder ao questionário, você nos ajuda a alcançar maior
              assertividade e rapidez no atendimento às suas necessidades.
            </BodyText>
          </CardContent>
        </Card>
      </div>

      {/* Contact Verification Modal */}
      <ContactVerificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleModalConfirm}
        beneficiaryName={notificationData.beneficiary}
      />
    </section>
  );
};
