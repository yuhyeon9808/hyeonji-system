'use client';
import Image from 'next/image';
import React from 'react';

export default function Portfolio() {
  const filePath = '/portfolio.pdf';
  const fileName = '유현지_포트폴리오.pdf';

  return (
    <div className="text-16 leading-relaxed font-sans">
      <div>
        <p className="mt-10 mb-4 text-24 font-bold">포트폴리오 다운</p>
        <hr className="mb-5" />
      </div>
      <a className="flex justify-end mb-5" href={filePath} download={fileName}>
        <div className="flex">
          <Image
            src="/icons/pdf.png"
            alt="pdf"
            width={50}
            height={50}
            className="w-5 h-auto object-contain mr-2"
          />
          <p className="text-16 font-bold underline">{fileName}</p>
        </div>
        <div>
          <span className="mx-2 text-gray">·</span>
          <span className="text-gray-dark text-[13px]">60.2MB</span>
        </div>
      </a>
      <p>프로젝트별 상세 설명과 시각 자료가 포함된 포트폴리오입니다.</p>
      <p className="py-5 text-gray italic text-14"> 미리보기 :</p>
      <div
        className="group relative border-2 border-gray-light mb-10 cursor-pointer"
        onClick={() => window.open(filePath, '_blank')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && window.open(filePath, '_blank')}
      >
        <iframe
          src={`${filePath}#toolbar=0`}
          title="포트폴리오 미리보기"
          className="w-full h-[400px]"
          style={{
            filter: 'blur(3px) brightness(0.95)',
            imageRendering: 'pixelated',
          }}
        />
      </div>
    </div>
  );
}
