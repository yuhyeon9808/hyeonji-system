'use client';
import { DESKTOP_ICONS } from '@/src/constants/menu';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Nav({
  open,
  setOpen,
  onOpenContact,
  onOpenDownload,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenContact: () => void;
  onOpenDownload: () => void;
}) {
  return (
    <>
      {open && (
        <nav className="absolute bottom-10 bg-gray-light w-[200px] h-60 z-50 flex border-window">
          <div className="bg-[#80807E] w-8 h-full flex items-end justify-center pb-16">
            <div className="rotate-270 origin-center flex items-center">
              <p className="font-sans font-extrabold text-gray-light text-20 mr-1">
                Windows
              </p>
              <p className="text-white-soft text-18">95</p>
            </div>
          </div>

          <ul className="grid grid-rows-5 h-full flex-1">
            {DESKTOP_ICONS.map((item) => {
              if (item.type === 'contact') {
                return (
                  <li
                    key={item.name}
                    className="flex items-center hover:bg-blue-point hover:text-white-soft py-3 pl-4 cursor-pointer"
                    onClick={() => {
                      onOpenContact();
                      setOpen(false);
                    }}
                  >
                    <Image
                      src={item.Icon}
                      alt={item.name}
                      width={25}
                      height={25}
                    />
                    <p className="ml-2 text-14 underline">{item.name[0]}</p>
                    <p className="text-14">{item.name.slice(1)}</p>
                  </li>
                );
              }

              if (item.type === 'download') {
                return (
                  <li
                    key={item.name}
                    className="flex items-center hover:bg-blue-point hover:text-white-soft py-3 pl-4 cursor-pointer"
                    onClick={() => {
                      onOpenDownload();
                      setOpen(false);
                    }}
                  >
                    <Image
                      src={item.Icon}
                      alt={item.name}
                      width={25}
                      height={25}
                    />
                    <p className="ml-2 text-14 underline">{item.name[0]}</p>
                    <p className="text-14">{item.name.slice(1)}</p>
                  </li>
                );
              }

              return (
                <Link href={item.href!} key={item.name}>
                  <li
                    className="flex items-center hover:bg-blue-point hover:text-white-soft py-3 pl-4"
                    onClick={() => setOpen(false)}
                  >
                    <Image
                      src={item.Icon}
                      alt={item.name}
                      width={25}
                      height={25}
                    />
                    <p className="ml-2 text-14 underline">{item.name[0]}</p>
                    <p className="text-14">{item.name.slice(1)}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
