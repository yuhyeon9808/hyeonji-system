import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full  flex justify-center bg-[#E6E6E6]">
      <div className="md:px-5 lg:my-10 max-w-[782px] w-full h-auto bg-white-soft lg:border border-gray-line ">
        {children}
      </div>
    </div>
  );
}
