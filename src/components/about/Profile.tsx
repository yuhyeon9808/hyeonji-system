import Image from 'next/image';
import React from 'react';
import LeftProfile from './LeftProfile';
import FullProfile from './FullProfile';

export default function Profile() {
  return (
    <div className="w-full h-auto flex justify-center bg-[#E6E6E6]">
      <div className="md:px-5 lg:my-10 max-w-[782px] w-full h-auto bg-white-soft lg:border border-gray-line ">
        <div className="w-full  flex justify-center my-10 font-sans font-bold">
          <p className="text-3xl">
            이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;력&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서
          </p>
        </div>
        <p className="font-sans ml-3 font-bold mb-3">1. 기본정보</p>
        <div className="flex  ">
          <Image
            src="/profile.png"
            alt="증명사진"
            width={90}
            height={120}
            className="border border-gray-dark hidden md:block ml-3 "
          />
          <LeftProfile />
        </div>
        <FullProfile />
      </div>
    </div>
  );
}
