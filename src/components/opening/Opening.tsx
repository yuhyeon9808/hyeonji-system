'use client';

import Image from 'next/image';
import React, { useEffect, useState, ReactNode } from 'react';

type Props = { children: ReactNode };

export default function Opening({ children }: Props) {
  const [showOpening, setShowOpening] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    try {
      return !localStorage.getItem('visited');
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!showOpening) return;

    try {
      new Audio('/Windows95Sound.mp3').play().catch(() => {});
    } catch {}

    const timer = setTimeout(() => {
      setShowOpening(false);
      try {
        localStorage.setItem('visited', 'true');
      } catch {}
    }, 1800);

    return () => clearTimeout(timer);
  }, [showOpening]);

  if (!showOpening) return <main>{children}</main>;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <Image
        src="/Windows-95.gif"
        alt="Windows 95 오프닝"
        width={1920}
        height={1080}
        priority
        className="object-cover w-full h-auto "
      />
    </div>
  );
}
