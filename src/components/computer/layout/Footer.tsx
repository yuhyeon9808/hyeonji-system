'use client';
import React, { useState } from 'react';
import Window from '../Window';
import WordPad from '../WordPad';
import { usePathname } from 'next/navigation';
import RegionalSettings from '../RegionalSettings';
import Version from '../Version';
import Nav from './Nav';

export default function Footer() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const titleMap: Record<string, string> = {
    '/system/about': 'About - WordPad',
    '/system/qmate': 'Qmate - WordPad',
    '/system/scentrie': 'Scentrie - WordPad',
    '/system/install': 'Portfolio_Download_Log - WordPad',
    '/system/contact': 'Contact - WordPad',
    '/': 'System ready - WordPad',
  };

  const title = titleMap[pathname];

  return (
    <>
      <Nav open={open} setOpen={setOpen} />
      <footer className="w-full h-10 bg-gray-light border border-t-emerald-50 fixed bottom-0 flex items-center">
        <Window setOpen={setOpen} />
        <WordPad title={title} />
        <RegionalSettings />
        <Version />
      </footer>
    </>
  );
}
