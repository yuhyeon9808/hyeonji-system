'use client';

import DesktopIcons from '@/src/components/computer/DesktopIcons';
import Footer from '@/src/components/computer/layout/Footer';
import Image from 'next/image';
import WordPadPage from '@/src/components/computer/WordPadPage';
import Contact from '@/src/components/contact/Contact';
import React, { useState } from 'react';

export default function DesktopLayer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <DesktopIcons onOpenContact={() => setIsContactOpen(true)} />

      <Image
        src="/icons/back.png"
        alt="Regional Settings Properties"
        width={440}
        height={487}
        className="fixed top-10 right-10 hidden lg:block"
      />

      <WordPadPage>{children}</WordPadPage>

      <Footer
        open={isNavOpen}
        setOpen={setIsNavOpen}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {isContactOpen && <Contact onClose={() => setIsContactOpen(false)} />}
    </>
  );
}
