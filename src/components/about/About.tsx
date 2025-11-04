import React from 'react';
import Title from './Title';

export default function About() {
  return (
    <div className="font-sans text-18">
      <div className="font-sam ">
        <hr className="w-full h-[1px] mt-10   bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
        <p className="w-full text-center py-3">
          Frontend Developer README <br />
          Version 1.0 — Hyeonji OS <br />
          November, 2025
        </p>
        <hr className="w-full h-[1px]  bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
        <p className="text-center py-7">
          (c) 2025 Hyeonji. All rights reserved.
        </p>
        <p className="pl-2">
          This file contains an introduction and <br />
          environment overview for the portfolio project Hyeonji OS
        </p>

        <div className="px-2">
          <Title title="User_Manual" w={160} />
          <div className="font-sans my-5 text-14">
            <span className="font-bold inline-block mb-5 ">
              새로운 시작점에서 :
            </span>
            <p className=" leading-[1.9] tracking-[0.02em] ">
              아이디어를 결과로 만드는 디자인은 즐거웠지만, 정해진 정답과 과정이
              없다는 점에서 한계를 느꼈습니다. 프론트엔드는 시각과 기능이 만나는
              지점에서 결과가 즉각적으로 드러나는 매력이 있습니다. 코드 한 줄이
              화면의 완성으로 이어질 때의 성취가, 제가 이 일을 선택한
              이유입니다. 앞으로 시각적 완성도와 구조적인 안정감을 함께 갖춘
              결과로 신뢰를 주는 개발자로 성장하고 싶습니다.
            </p>
          </div>
        </div>
        <div className="px-2">
          <Title title="Frontend_Stack_v1.0" w={220} />
          <div className=" my-5 ">
            <p className="  tracking-[0.02em] font-sam text-18 leading-6">
              TypeScript · JavaScript <br /> Next.js / React · Tailwind CSS ·
              Zustand · React-Query
              <br />
              Figma · Photoshop · Illustrator
            </p>
          </div>
        </div>

        <div className="px-2 flex flex-col lg:items-end my-5">
          <div>
            <Title title="Developer_Info" w={350} />
            <a
              href="https://github.com/yuhyeon9808"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="inline-block mt-3 ">
                github:
                <span className="hover:text-blue-600">
                  https://github.com/yuhyeon9808
                </span>
              </p>
            </a>
            <span className="block ">email : bwj9808@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center gap-4 py-10 ">
          <span className="flex-1 border-t"></span>
          <span>End of File</span>
          <span className="flex-1 border-t"></span>
        </div>
      </div>
    </div>
  );
}
