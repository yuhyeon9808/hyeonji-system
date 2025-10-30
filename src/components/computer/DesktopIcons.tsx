import { DESKTOP_ICONS } from '@/src/constants/menu';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function DesktopIcons() {
  return (
    <div className="w-20 ml-5 md:flex flex-col gap-4 justify-start mt-10 hidden ">
      {DESKTOP_ICONS.map((items, idx) => (
        <Link href={items.href} key={idx}>
          <div className="flex flex-col items-center">
            <Image src={items.Icon} alt={items.name} width={50} height={50} />
            <span className="mt-1 text-white-soft font-sam text-18 ">
              {items.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
