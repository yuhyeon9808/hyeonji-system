import { PROFILE } from '@/src/constants/profile';
import React from 'react';

export default function LeftProfile() {
  return (
    <div className=" font-sans w-full h-full ml-3 border divide-y text-14 mr-3 m ">
      {PROFILE.map((item, idx) => (
        <div className="flex w-full whitespace-pre" key={idx}>
          <p className="bg-profile border-r font-semibold w-[110px] text-center py-1">
            {item.title}
          </p>
          {item.title === 'Github' ? (
            <a href="https://github.com/yuhyeon9808" target="_blank">
              <p className="ml-3 py-1 underline">{item.info}</p>
            </a>
          ) : (
            <p className="ml-3 py-1">{item.info}</p>
          )}
        </div>
      ))}
    </div>
  );
}
