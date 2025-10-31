'use client';

import DesktopIcons from '@/src/components/computer/DesktopIcons';
import Footer from '@/src/components/computer/layout/Footer';
import Image from 'next/image';
import WordPadPage from '@/src/components/computer/WordPadPage';
import Contact from '@/src/components/contact/Contact';

import React, { useState } from 'react';
import DownloadModal from '../../portfolio/DownloadModal';

export default function DesktopLayer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeModal, setActiveModal] = useState<null | 'contact' | 'download'>(
    null
  );
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <DesktopIcons
        onOpenContact={() => setActiveModal('contact')}
        onOpenDownload={() => setActiveModal('download')}
      />

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
        onOpenContact={() => setActiveModal('contact')}
        onOpenDownload={() => setActiveModal('download')}
      />

      {activeModal === 'contact' && (
        <Contact onClose={() => setActiveModal(null)} />
      )}

      {activeModal === 'download' && (
        <DownloadModal onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}
