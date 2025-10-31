'use client';
import { DESKTOP_ICONS } from '@/src/constants/menu';
import Image from 'next/image';
import Link from 'next/link';

export default function DesktopIcons({
  onOpenContact,
}: {
  onOpenContact: () => void;
}) {
  return (
    <div className="w-20 ml-5 md:flex flex-col gap-4 justify-start mt-10 hidden">
      {DESKTOP_ICONS.map((item) =>
        item.type === 'action' ? (
          <button
            key={item.name}
            onClick={onOpenContact}
            className="flex flex-col items-center focus:outline-none"
          >
            <Image src={item.Icon} alt={item.name} width={50} height={50} />
            <span className="mt-1 text-white-soft font-sam text-18">
              {item.name}
            </span>
          </button>
        ) : (
          <Link href={item.href!} key={item.name}>
            <div className="flex flex-col items-center">
              <Image src={item.Icon} alt={item.name} width={50} height={50} />
              <span className="mt-1 text-white-soft font-sam text-18">
                {item.name}
              </span>
            </div>
          </Link>
        )
      )}
    </div>
  );
}
