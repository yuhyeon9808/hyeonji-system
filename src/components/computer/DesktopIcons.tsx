'use client';
import { DESKTOP_ICONS } from '@/src/constants/menu';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DesktopIcons({
  onOpenContact,
  onOpenDownload,
}: {
  onOpenContact: () => void;
  onOpenDownload: () => void;
}) {
  const router = useRouter();
  return (
    <div className="w-20 ml-5 md:flex flex-col gap-4 justify-start mt-10 hidden">
      {DESKTOP_ICONS.map((item) => {
        if (item.type === 'contact')
          return (
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
          );

        if (item.type === 'download')
          return (
            <button
              key={item.name}
              onClick={() => {
                onOpenDownload();
                router.push('/system/portfolio');
              }}
              className="flex flex-col items-center focus:outline-none"
            >
              <Image src={item.Icon} alt={item.name} width={50} height={50} />
              <span className="mt-1 text-white-soft font-sam text-18">
                {item.name}
              </span>
            </button>
          );

        if (!item.href) return null;

        return (
          <Link href={item.href!} key={item.name}>
            <div className="flex flex-col items-center">
              <Image src={item.Icon} alt={item.name} width={50} height={50} />
              <span className="mt-1 text-white-soft font-sam text-18">
                {item.name}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
