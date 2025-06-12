import React from 'react';
import { FooterSection } from './sections/FooterSection';
import { HeaderSection } from './sections/HeaderSection/HeaderSection';
import { MainContentSection } from './sections/MainContentSection';

export const App = (): JSX.Element => {
  return (
    <main className="w-full bg-white">
      <div className="flex flex-col w-full items-start">
        <HeaderSection />
        <MainContentSection />
        <FooterSection />
      </div>
    </main>
  );
};
