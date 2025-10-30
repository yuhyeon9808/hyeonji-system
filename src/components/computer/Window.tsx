'use client';
import Image from 'next/image';
import React from 'react';

export default function Window({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className=" border-t-amber-50 border-r-gray-dark w-[90px] h-8 border-l-amber-50 border-2 ml-1 font-sam "
      onClick={() => setOpen((prev) => !prev)}
    >
      <button className="w-full flex items-center justify-center h-full">
        <Image src="/icons/windows.png" alt="window" width={28} height={28} />
        <span className="font-sam text-18 pl-1 hidden md:block">Start</span>
      </button>
    </div>
  );
}
