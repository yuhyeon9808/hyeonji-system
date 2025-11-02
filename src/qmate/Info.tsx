import Image from 'next/image';
import React from 'react';

export default function Info() {
  return (
    <div>
      <div className="flex items-center gap-4 ">
        <span className="text-24">1. Project Info</span>
        <span className="flex-1 border-t border-gray-light "></span>
      </div>

      <div className="flex lg:flex-row flex-col gap-x-10 py-5 w-full items-center  pb-10 ">
        <Image
          src="/qmate/qmate_phone4.png"
          alt="q-mate 메인화면"
          width={250}
          height={250}
          className="w-full h-auto lg:w-[250px] lg:h-[250px] max-w-[400px] "
        />
        <div>
          <ul className="h-full text-18 flex flex-col justify-center pl-2 lg:pl-0 pt-5 lg:pt-0">
            <li>
              <span>period </span>
              <span className="font-sans text-14">2025.09 ~ 2025.10</span>
            </li>
            <li>
              <span>team </span>
              <span className="font-sans text-14">Frontend 2 · Backend 3</span>
            </li>
            <li>
              <span>role </span>
              <span className="font-sans text-14">
                로그인·테마·매칭 플로우·커스텀 질문 <br />
              </span>
              <span className="ml-12 font-sans text-14">/ 디자인·영상편집</span>
            </li>
            <li className="max-w-[364px]">
              <span>stack </span>
              <span className="font-sans text-14 ">
                Next.js · TypeScript · Tailwind CSS · Shadcn/ui React Query ·
                Zustand · Axios · Motion · Web API
              </span>
            </li>
            <li>
              <span>deployment </span>
              <a
                href="https://q-mate.vercel.app"
                className="font-sans text-14 underline"
                target="_blank"
              >
                https://q-mate.vercel.app
              </a>
            </li>
            <li>
              <span>documentation </span>
              <a
                href="https://buly.kr/BeLEiFS"
                className="font-sans text-14 underline"
                target="_blank"
              >
                https://buly.kr/BeLEiFS
              </a>
            </li>
            <li>
              <span>github </span>
              <a
                href="https://github.com/Sua90827/q-mate"
                className="font-sans text-14 underline"
                target="_blank"
              >
                https://github.com/Sua90827/q-mate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
