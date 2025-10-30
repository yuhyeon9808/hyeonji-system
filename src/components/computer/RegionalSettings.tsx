import Image from 'next/image';
import React from 'react';

export default function RegionalSettings() {
  return (
    <div className="  border-t-amber-50 border-r-gray-dark w-[350px] h-8 border-l-amber-50 border-2 ml-1 cursor-pointer font-sam hidden lg:block  ">
      <div className="flex items-center ml-3 h-full">
        <Image src="/icons/world.png" alt="window" width={17} height={17} />

        <span className="font-sam text-18 hidden md:block pl-2">
          Regional Settings Properties
        </span>
      </div>
    </div>
  );
}
