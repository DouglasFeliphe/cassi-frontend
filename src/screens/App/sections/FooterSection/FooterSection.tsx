import { Separator } from '@/components/ui/separator';
import { SocialIcon } from '@/components/ui/social-icon';

const footerLinks = [
  {
    title: 'Home',
    links: [],
  },
  {
    title: 'Conheça a CASSI',
    links: [
      'Institucional',
      'Informações financeiras',
      'Governança corporativa',
      'Como trabalhamos',
      'Faça parte da nossa equipe',
    ],
  },
  {
    title: 'Nossos Planos',
    links: [
      'Plano CASSI Essencial',
      'Plano CASSI Família',
      'Plano CASSI Vida',
      'Quero contratar',
      'Plano de Associados',
    ],
  },
  {
    title: 'Já tenho um plano CASSI',
    links: ['Cobertura do meu plano', 'Cronogramas', 'Telemedicina'],
  },
  {
    title: 'CliniCASSI',
    links: ['Atenção Primária Saúde', 'Localize sua CliniCASSI'],
  },
];

const socialIcons = [
  { name: 'Facebook', src: '/intersect.svg' },
  { name: 'LinkedIn', src: '/linkedin-escuro.svg' },
  { name: 'Instagram', src: '/instagram-escuro.svg' },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center gap-8 px-20 py-10 w-full bg-web-primary-100-default">
      <div className="flex max-w-screen-xl items-center justify-between w-full">
        <img
          className="w-[105.86px] h-[52px]"
          alt="Web logo cassi"
          src="/web-logo-cassi.svg"
        />

        <div className="flex items-center gap-6">
          {socialIcons.map((icon, index) => (
            <SocialIcon
              key={index}
              src={icon.src}
              alt={icon.name}
              variant="footer"
            />
          ))}
        </div>
      </div>

      <Separator className="max-w-screen-xl w-full bg-web-secondary-100-default h-px" />

      <div className="flex max-w-screen-xl justify-between w-full">
        {footerLinks.map((section, index) => (
          <div key={index} className="flex flex-col gap-[13px]">
            <h3 className="font-bold text-web-neutral-0 text-xl leading-7 underline whitespace-nowrap [font-family:'Arial-Bold',Helvetica]">
              {section.title}
            </h3>

            {section.links.length > 0 && (
              <div className="flex flex-col gap-[7px]">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="font-h6-text text-web-neutral-0 text-[length:var(--h6-text-font-size)] leading-[var(--h6-text-line-height)] whitespace-nowrap"
                  >
                    {link}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};
