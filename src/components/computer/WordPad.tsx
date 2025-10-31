import Image from 'next/image';
import React from 'react';

export default function WordPad({ title }: { title: string }) {
  return (
    <div className=" bg-gray-check border-t-gray-dark w-[280px] border-2 border-l-gray-dark h-8 border-r-amber-50 border-b-amber-50 ml-1 cursor-pointer font-sam">
      <div className="flex items-center h-full">
        <Image
          src="/icons/pad1.png"
          alt="wordPad"
          width={15}
          height={15}
          className="mx-2"
        />
        <span className="font-sam text-18 ">{title}</span>
      </div>
    </div>
  );
}
