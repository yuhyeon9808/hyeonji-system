import React from 'react';

export default function Title({ title, w }: { title: string; w: number }) {
  return (
    <div>
      <hr
        className=" h-[1px] mt-10   bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none"
        style={{ width: `${w}px` }}
      />
      <span className="py-2 inline-block">{title}</span>
      <hr
        className=" h-[1px]   bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none"
        style={{ width: `${w}px` }}
      />
    </div>
  );
}
