import React from 'react';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent, CardTitle } from '../../../../components/ui/card';

export const MainContentSection = (): JSX.Element => {
  // Data for notification details
  const notificationData = {
    beneficiary: 'Leandro Henrique',
    interlocutor: 'Leandro Henrique',
    openingDate: '29/01/2022',
  };

  return (
    <section className="flex flex-col items-start justify-center gap-10 px-20 py-10 w-full bg-web-neutral-100">
      <div className="flex items-start gap-8 w-full bg-web-neutral-100">
        {/* Left Column - Notification Details */}
        <Card className="flex-1 rounded-[8.19px] border-none bg-transparent">
          <CardContent className="p-0 space-y-10">
            {/* Header */}
            <div className="flex flex-col items-start gap-2 w-full">
              <h3 className="self-stretch mt-[-1.00px] font-h3-text-subtitle font-[number:var(--h3-text-subtitle-font-weight)] text-web-primary-100-default text-[length:var(--h3-text-subtitle-font-size)] tracking-[var(--h3-text-subtitle-letter-spacing)] leading-[var(--h3-text-subtitle-line-height)] [font-style:var(--h3-text-subtitle-font-style)]">
                Olá, &lt;nome&gt;
              </h3>
              <p className="self-stretch font-p-text font-[number:var(--p-text-font-weight)] text-web-neutral-400 text-[length:var(--p-text-font-size)] tracking-[var(--p-text-letter-spacing)] leading-[var(--p-text-line-height)] [font-style:var(--p-text-font-style)]">
                Foi realizada a abertura de uma Notificação de Intermediação
                Preliminar (NIP) em seu nome.
              </p>
            </div>

            {/* Notification Data */}
            <div className="flex flex-col items-start justify-center gap-6 w-full">
              <div className="flex items-center gap-2.5 py-2 w-full border-b border-[#d9d9d9]">
                <CardTitle className="w-fit mt-[-1.00px] font-h4-text-title font-[number:var(--h4-text-title-font-weight)] text-web-primary-100-default text-[length:var(--h4-text-title-font-size)] tracking-[var(--h4-text-title-letter-spacing)] leading-[var(--h4-text-title-line-height)] whitespace-nowrap [font-style:var(--h4-text-title-font-style)]">
                  Dados do notificação
                </CardTitle>
              </div>

              {/* Beneficiary and Interlocutor */}
              <div className="flex items-start gap-4 w-full">
                <div className="flex flex-col items-start flex-1">
                  <div className="inline-flex items-start gap-1 pb-1">
                    <h4 className="w-fit mt-[-1.00px] font-h4-text-title font-[number:var(--h4-text-title-font-weight)] text-web-neutral-400 text-[length:var(--h4-text-title-font-size)] tracking-[var(--h4-text-title-letter-spacing)] leading-[var(--h4-text-title-line-height)] whitespace-nowrap [font-style:var(--h4-text-title-font-style)]">
                      Beneficiário
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <p className="w-fit mt-[-1.00px] font-p-text font-[number:var(--p-text-font-weight)] text-web-neutral-400 text-[length:var(--p-text-font-size)] tracking-[var(--p-text-letter-spacing)] leading-[var(--p-text-line-height)] whitespace-nowrap [font-style:var(--p-text-font-style)]">
                      {notificationData.beneficiary}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start flex-1">
                  <div className="inline-flex items-start gap-1 pb-1">
                    <h4 className="w-fit mt-[-1.00px] font-h4-text-title font-[number:var(--h4-text-title-font-weight)] text-web-neutral-400 text-[length:var(--h4-text-title-font-size)] tracking-[var(--h4-text-title-letter-spacing)] leading-[var(--h4-text-title-line-height)] whitespace-nowrap [font-style:var(--h4-text-title-font-style)]">
                      Interlocutor
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <p className="w-fit mt-[-1.00px] font-p-text font-[number:var(--p-text-font-weight)] text-web-neutral-400 text-[length:var(--p-text-font-size)] tracking-[var(--p-text-letter-spacing)] leading-[var(--p-text-line-height)] whitespace-nowrap [font-style:var(--p-text-font-style)]">
                      {notificationData.interlocutor}
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Date */}
              <div className="flex items-start gap-4 w-full">
                <div className="flex flex-col items-start flex-1">
                  <div className="inline-flex items-start gap-1 pb-1">
                    <h4 className="w-fit mt-[-1.00px] font-h4-text-title font-[number:var(--h4-text-title-font-weight)] text-web-neutral-400 text-[length:var(--h4-text-title-font-size)] tracking-[var(--h4-text-title-letter-spacing)] leading-[var(--h4-text-title-line-height)] whitespace-nowrap [font-style:var(--h4-text-title-font-style)]">
                      Data de abertura
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <p className="w-fit mt-[-1.00px] font-p-text font-[number:var(--p-text-font-weight)] text-web-neutral-400 text-[length:var(--p-text-font-size)] tracking-[var(--p-text-letter-spacing)] leading-[var(--p-text-line-height)] whitespace-nowrap [font-style:var(--p-text-font-style)]">
                      {notificationData.openingDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recognition Section */}
            <div className="flex flex-col items-start justify-center gap-4 py-[9px] w-full border-t border-[#d9d9d9]">
              <h4 className="self-stretch mt-[-1.00px] font-h4-text-title font-[number:var(--h4-text-title-font-weight)] text-web-neutral-800 text-[length:var(--h4-text-title-font-size)] tracking-[var(--h4-text-title-letter-spacing)] leading-[var(--h4-text-title-line-height)] [font-style:var(--h4-text-title-font-style)]">
                Reconhece esta NIP?
              </h4>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="text-web-primary-100-default border-web-primary-100-default rounded-[3.28px] px-[13.11px] py-[8.19px] h-auto"
                >
                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[13.1px] tracking-[0] leading-[19.7px]">
                    Não reconheço
                  </span>
                </Button>
                <Button className="bg-web-primary-100-default text-web-neutral-0 rounded-[3.28px] px-[13.11px] py-[8.19px] h-auto">
                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[13.1px] tracking-[0] leading-[19.7px]">
                    Sim, foi aberto por mim
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Explanation */}
        <Card className="w-[411px] border-none bg-transparent rounded-[8.19px]">
          <CardContent className="p-0 space-y-[13.11px]">
            <h3 className="self-stretch mt-[-0.82px] font-h3-text-subtitle font-[number:var(--h3-text-subtitle-font-weight)] text-web-primary-100-default text-[length:var(--h3-text-subtitle-font-size)] tracking-[var(--h3-text-subtitle-letter-spacing)] leading-[var(--h3-text-subtitle-line-height)] [font-style:var(--h3-text-subtitle-font-style)]">
              Por que é importante que você responda esse questionário?
            </h3>
            <img
              className="w-[411px] h-[231px] object-cover"
              alt="Unsplash"
              src="/unsplash-mmjmfdgnsm8.png"
            />
            <p className="self-stretch font-p-text font-[number:var(--p-text-font-weight)] text-web-neutral-400 text-[length:var(--p-text-font-size)] tracking-[var(--p-text-letter-spacing)] leading-[var(--p-text-line-height)] [font-style:var(--p-text-font-style)]">
              Na CASSI, buscamos aprimorar continuamente nossos serviços e
              métodos de atendimento. Nosso objetivo é acelerar o processo de
              análise das suas solicitações e torná-lo mais eficiente. Ao
              responder ao questionário, você nos ajuda a alcançar maior
              assertividade e rapidez no atendimento às suas necessidades.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
