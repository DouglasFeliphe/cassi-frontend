import { HeaderButton } from '@/components/ui/custom-button';
import { Input } from '@/components/ui/input';
import { SocialIcon } from '@/components/ui/social-icon';
import { SmallText } from '@/components/ui/typography';
import { SearchIcon } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const navItems = [
  { label: 'Home', hasDropdown: false },
  { label: 'Conheça a CASSI', hasDropdown: true },
  { label: 'Nossos planos', hasDropdown: true },
  { label: 'Já tenho um plano CASSI', hasDropdown: true },
  { label: 'CliniCASSI', hasDropdown: true },
  { label: 'Fale com a CASSI', hasDropdown: false },
];

const socialIcons = [
  { src: '/intersect.svg', alt: 'Facebook Icon' },
  { src: '/linkedin-escuro.svg', alt: 'LinkedIn Icon' },
  { src: '/instagram-claro.svg', alt: 'Instagram Icon' },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] z-[2]">
      {/* Top navigation bar */}
      <div className="flex h-[84px] items-center justify-center px-20 py-0 relative self-stretch w-full bg-web-neutral-0">
        <div className="flex max-w-screen-xl w-[1280px] items-center justify-between relative">
          {/* Logo */}
          <img
            className="relative w-[105.86px] h-[52px]"
            alt="CASSI Logo"
            src="/web-logo-cassi.svg"
          />

          {/* Search bar */}
          <div className="flex items-center h-[50px] gap-2.5 p-2.5 bg-web-neutral-0 rounded border border-solid border-[#d9d9d9]">
            <SearchIcon className="w-[26px] h-[26px] text-web-neutral-400" />
            <Input
              className="border-0 shadow-none h-auto p-0 opacity-50 font-h6-text text-web-neutral-400 text-[length:var(--h6-text-font-size)] tracking-[var(--h6-text-letter-spacing)] leading-[var(--h6-text-line-height)]"
              placeholder="Faça sua busca aqui"
            />
          </div>

          {/* Social media section */}
          <div className="flex items-center gap-6">
            <SmallText>Siga a CASSI nas redes sociais:</SmallText>

            <div className="flex items-center gap-6">
              {socialIcons.map((icon, index) => (
                <SocialIcon
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  variant="header"
                />
              ))}
            </div>
          </div>

          {/* User profile section */}
          <div className="flex items-center gap-2.5 px-[26px] py-[13px]">
            <img
              className="w-[22.83px] h-[30.37px] object-cover"
              alt="User Avatar"
              src="/image-1.png"
            />
            <span className="font-a-text-button text-web-primary-100-default text-[length:var(--a-text-button-font-size)] tracking-[var(--a-text-button-letter-spacing)] leading-[var(--a-text-button-line-height)]">
              Lorem Ipsum
            </span>
          </div>

          {/* Login button */}
          <HeaderButton>Fazer login</HeaderButton>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-web-neutral-300" />

      {/* Main navigation menu */}
      <nav className="flex h-[50px] items-center justify-center px-20 py-3 w-full bg-web-neutral-0 shadow-[0px_3px_2px_#0000000f]">
        <NavigationMenu className="max-w-screen-xl">
          <NavigationMenuList className="flex items-center gap-[30px]">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.hasDropdown ? (
                  <NavigationMenuTrigger className="h-[22px] font-h6-text text-web-neutral-400 text-[length:var(--h6-text-font-size)] tracking-[var(--h6-text-letter-spacing)] leading-[var(--h6-text-line-height)] bg-transparent hover:bg-transparent focus:bg-transparent">
                    {item.label}
                  </NavigationMenuTrigger>
                ) : (
                  <span className="h-[22px] font-h6-text text-web-neutral-400 text-[length:var(--h6-text-font-size)] tracking-[var(--h6-text-letter-spacing)] leading-[var(--h6-text-line-height)] cursor-pointer">
                    {item.label}
                  </span>
                )}
                {item.hasDropdown && (
                  <NavigationMenuContent>
                    {/* Dropdown content would go here */}
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};
