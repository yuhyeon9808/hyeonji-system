import Image from 'next/image';
import React from 'react';

export default function Qmate() {
  return (
    <div className="w-full my-14 border-y">
      <div className="flex flex-col items-center mx-1 sm:px-0">
        <h2 className="mt-10 mb-10 pb-3 text-4xl text-center border-b">
          FAX TRANSMISSION REPORT
        </h2>

        <dl className="grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-x-6 gap-y-1 lg:gap-y-2 leading-relaxed text-18 w-[310px] sm:w-[400px] md:w-[540px] mx-2">
          <dt className="text-18">PROJECT</dt>
          <dd className="font-sans text-14">Q-mate</dd>

          <dt className="text-18">PERIOD</dt>
          <dd className="font-sans text-14">2025.09 ~ 2025.10</dd>

          <dt className="text-18">TEAM</dt>
          <dd className="font-sans text-14">Frontend 2 · Backend 3</dd>

          <dt className="text-18">ROLE</dt>
          <dd className="font-sans text-14">
            로그인 · 테마 · 매칭 · 커스텀 질문 · 일정 리스트 · 디자인 · 영상편집
          </dd>

          <dt className="text-18">STACK</dt>
          <dd className="md:w-[460px] font-sans text-14">
            Next.js · TypeScript · Tailwind CSS · Shadcn/ui · React Query ·
            Zustand · Axios · Motion · Web API
          </dd>
        </dl>
      </div>

      <div className="w-full flex flex-col items-center">
        <hr className="w-full h-[1px] mt-10 bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
        <div className="w-[310px] sm:w-[400px] md:w-[540px] mx-2">
          <p className="pt-3 pb-1 text-18">MESSAGE :</p>
          <p className="font-sans text-14 leading-[1.9] tracking-[0.02em]">
            Q-mate는 1:1 매칭 기반의 데일리 Q&amp;A 서비스로, 두 사용자가 같은
            질문에 답한 뒤 모두 제출을 완료해야 서로의 답을 확인할 수 있습니다.
            이 ‘동시 공개’ 구조는 기다림을 경험으로 전환하고, 답변이 교차하는
            순간에 몰입을 유도합니다.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <hr className="w-full h-[1px] mt-3 bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
        <div className="w-[310px] sm:w-[400px] md:w-[540px] mx-2">
          <p className="pt-3 pb-1 text-18">FEATURES :</p>
          <ul className="font-sans text-14 leading-[2.3] tracking-[0.02em] pb-3">
            <li>□ 1대1 연결 </li>
            <li>□ 오늘의 질문 &amp; 커스텀 질문</li>
            <li>□ 캘린더 &amp; 기념일</li>
            <li>□ 시간대별 테마</li>
            <li>□ 캐릭터 성장 시스템</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col items-center pb-3">
        <hr className="w-full h-[1px] bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
        <div className="w-[310px] sm:w-[400px] md:w-[540px] mx-2">
          <p className="pt-3 pb-1 text-18">ATTACHED FILES :</p>

          <div className="relative mx-auto mt-3 h-[310px] w-[310px] sm:w-[400px] md:w-[540px] bg-[#70C2E3] flex items-center justify-center">
            <Image
              src="/qmate/qmate_phone2.png"
              alt="큐메이트 시연 목업"
              className="object-contain"
              width={310}
              height={310}
            />
          </div>
          <video controls className="w-full h-auto mt-3" preload="metadata">
            <source src="/qmate/Q-mate.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <hr className="w-full h-[1px] bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
        <div className="w-[310px] sm:w-[400px] md:w-[540px] mx-2">
          <p className="pt-3 pb-1 text-18">MY ROLE IN DEVELOPMENT</p>
          <ul className="font-sans text-14 leading-[1.9] tracking-[0.02em]">
            <li>
              □ 시간대별 테마 — 서버 시간 기반 쿠키 저장, SSR 시점부터 일관된
              테마 유지
            </li>
            <li>
              □ 매칭 플로우 — React Query refetchInterval로 상태 감지, ACTIVE 시
              자동 전환
            </li>
            <li>
              □ 커스텀 질문 — 커스텀/기본 단일 구조, 토글 필터로 선택적 조회
            </li>
            <li>
              □ 일정 리스트 — page/size 페이지네이션, 기념일 삭제 제한으로
              안정적 UX 제공
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <hr className="w-full h-[1px] mt-3 bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
        <div className="w-[310px] sm:w-[400px] md:w-[540px] mx-2">
          <p className="pt-3 pb-1 text-18">TROUBLESHOOTING LOG :</p>
          <ul className="font-sans text-14 leading-[1.9] tracking-[0.02em]">
            <li>
              □ <span className="text-18 font-sam"> Hydration Error — </span>
              서버·클라이언트 시간 불일치로 생긴 테마 오류를, 서버 시간 기반
              쿠키와 data-theme 초기화로 일관되게 해결
            </li>
            □ <span className="text-18 font-sam">OAuth Redirect Error — </span>
            HTTPS/HTTP 불일치 오류 해결을 위해, FE가 콜백부터 라우팅까지
            주도하고 BE는 토큰 발급만 담당하도록 아키텍처를 전환하여 안정적인
            연동 달성
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col items-center ">
        <hr className="w-full h-[1px] mt-3 bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
        <div className="w-[310px] sm:w-[400px] md:w-[540px] mx-2">
          <p className="pt-3 pb-1 text-18">LINKS :</p>

          <dl className="grid sm:grid-cols-[120px_1fr] gap-x-3 gap-y-1 font-sam text-18 leading-[1.9] tracking-[0.02em] ">
            <dt>DEPLOYMENT :</dt>
            <dd>
              <a
                href="https://q-mate.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600 break-all"
              >
                https://q-mate.vercel.app
              </a>
            </dd>

            <dt>DOCS :</dt>
            <dd>
              <a
                href="https://buly.kr/BeLEiFS"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600 break-all"
              >
                https://buly.kr/BeLEiFS
              </a>
            </dd>

            <dt>GITHUB :</dt>
            <dd>
              <a
                href="https://github.com/Sua90827/q-mate"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600 break-all"
              >
                https://github.com/Sua90827/q-mate
              </a>
            </dd>
          </dl>
        </div>
        <hr className="w-full h-[1px] mt-3 bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
      </div>

      <div className="w-full flex flex-col items-center">
        <p className="w-[310px] sm:w-[400px] md:w-[540px] mx-2 py-3 text-18">
          NOTE : This report was automatically generated by Hyeonji OS Fax
          Driver v1.3
        </p>
      </div>
    </div>
  );
}
