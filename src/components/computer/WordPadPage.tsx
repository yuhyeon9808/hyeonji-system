'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

const MENU = ['File', 'Edit', 'View', 'Insert', 'Format', 'Help'];

export default function WordPadPage({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const titleMap: Record<string, string> = {
    '/system/about': 'About - WordPad',
    '/system/qmate': 'Qmate - WordPad',
    '/system/scentrie': 'Scentrie - WordPad',
    '/': 'System ready - WordPad',
  };

  const title = titleMap[pathname] ?? 'WordPad';
  return (
    <div className="flex flex-col md:fixed md:top-10 lg:top-28 md:bottom-20 lg:left-40 md:left-35 md:right-10 lg:right-40 bg-gray-light font-sam border-window h-screen pb-10 md:pb-0 md:h-auto md:min-h-0">
      <div className=" mt-1 mx-3 h-8 bg-blue-point flex items-center">
        <Image
          src="/icons/pad1.png"
          alt="wordPad"
          width={20}
          height={20}
          className="mx-3"
        />
        <p className="text-24 text-white-sof hidden md:block text-white-soft">
          {title}
        </p>
        <p className="text-24 text-white-soft md:hidden">
          {title.split('-')[0]}
        </p>
        <div className="flex-1 flex gap-1 justify-end">
          <button className="border-window  bg-gray-light p-1">
            <Image
              src="/icons/question-icon.png"
              alt="question"
              width={15}
              height={15}
            />
          </button>
          <button className="border-window bg-gray-light p-1 mr-1 ">
            <Image src="/icons/close.png" alt="close" width={15} height={15} />
          </button>
        </div>
      </div>
      <div className="mx-3 h-8 flex gap-4 items-center border-b-2 pl-2 pb-1 border-b-gray-line  ">
        {MENU.map((item, idx) => (
          <span key={idx} className="text-16 font-gal ">
            <span className="underline">{item[0]}</span>
            {item.slice(1)}
          </span>
        ))}
      </div>
      <div className="flex ml-3 border-2 border-t-white-soft border-b-gray-line  border-x-0 mr-3">
        <div className="flex ml-1">
          <Image
            src="/icons/pad_icon1.png"
            alt="아이콘 그림"
            width={450}
            height={10}
            className="py-[3px] mr-5 "
          />

          <div className="hidden md:block">
            <div className="border-r-2 border-white-soft "></div>
            <div className="border-r-2 border-gray-line"></div>
          </div>
        </div>
      </div>
      <div className="pl-2 border-t-2 border-white-soft mx-3 py-2 flex">
        <div className="border-r-2 border-b-2 border-r-white-soft border-b-white-soft">
          <div className="bg-white-soft w-80  border-2 border-t-gray-dark border-b-gray flex items-center justify-between border-r-gray">
            <span className="text-16 font-gal ml-2">Times New Roman</span>
            <div className=" border-2 border-l-gray border-t-gray border-b-gray-dark border-r-gray-dark">
              <button className="bg-gray-light px-1 border-t-2 border-l-2 border-t-white-soft border-l-white-soft text-14">
                ▼
              </button>
            </div>
          </div>
        </div>
        <div className="border-r-2 border-b-2 border-r-white-soft border-b-white-soft ml-5 hidden md:block">
          <div className="bg-white-soft w-20  border-2 border-t-gray-dark border-b-gray flex items-center justify-between  border-r-gray">
            <span className="text-16 font-gal ml-2">10</span>
            <div className=" border-2 border-l-gray border-t-gray border-b-gray-dark border-r-gray-dark">
              <button className="bg-gray-light px-1 border-t-2 border-l-2 border-t-white-soft border-l-white-soft text-14">
                ▼
              </button>
            </div>
          </div>
        </div>
        <div className="text-20 ml-5 hidden lg:block">
          <button className="border-window px-2.5 p1-1 font-bold">B</button>
          <button className="border-window pl-2 pr-3 font-bold italic">
            I
          </button>
          <button className="border-window px-2.5 p1-1 font-bold underline">
            U
          </button>
        </div>
      </div>
      <div className="h-full bg-white-soft mx-3 flex-1 border-2 border-gray-dark border-b-gray border-r-gray overflow-y-auto">
        {children}
      </div>
      <div className="h-8 border-t-2 border-white-soft mx-3 flex justify-between items-center">
        <p className="py-1 pl-6 text-18">For Help, Press F1</p>
        <div className="border-2 border-t-gray border-r-white-soft border-b-white-soft border-l-gray  w-10 h-6"></div>
      </div>
    </div>
  );
}
