'use client';
import React from 'react';
import Window from '../Window';
import WordPad from '../WordPad';
import { usePathname } from 'next/navigation';
import RegionalSettings from '../RegionalSettings';
import Version from '../Version';
import Nav from './Nav';

interface FooterProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenContact: () => void;
  onOpenDownload: () => void;
}

export default function Footer({
  open,
  setOpen,
  onOpenContact,
  onOpenDownload,
}: FooterProps) {
  const pathname = usePathname();

  const titleMap: Record<string, string> = {
    '/system/about': 'About - WordPad',
    '/system/qmate': 'Qmate - WordPad',
    '/system/scentrie': 'Scentrie - WordPad',
    '/': 'System ready - WordPad',
  };

  const title = titleMap[pathname];

  return (
    <>
      <Nav
        open={open}
        setOpen={setOpen}
        onOpenContact={onOpenContact}
        onOpenDownload={onOpenDownload}
      />
      <footer className="w-full h-10 bg-gray-light border border-t-emerald-50 fixed bottom-0 flex items-center">
        <Window setOpen={setOpen} />
        <WordPad title={title} />
        <RegionalSettings />
        <Version />
      </footer>
    </>
  );
}
