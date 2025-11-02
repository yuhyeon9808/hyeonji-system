import Link from 'next/link';
import React from 'react';
import Info from './Info';
import Overview from './Overview';

export default function Index() {
  return (
    <>
      <div className="px-2 pt-7">
        <h3 className="text-blue-point text-4xl  py-7 text-center">Q-mate</h3>
        <div className="text-18 pb-10">
          <ul className="space-y-2">
            <li className="flex items-center gap-4">
              <span className="whitespace-nowrap text-20">1. Project Info</span>
              <span className="flex-1 border-b border-dotted border-gray-700 h-0"></span>
              <Link href="/system/qmate" className="whitespace-nowrap">
                [1]
              </Link>
            </li>

            <li className="flex items-center gap-4">
              <span className="whitespace-nowrap text-20">2. Overview</span>
              <span className="flex-1 border-b border-dotted border-gray-700 h-0"></span>
              <Link href="/system/qmate" className="whitespace-nowrap">
                [2]
              </Link>
            </li>

            <li className="flex items-center gap-4">
              <span className="whitespace-nowrap text-20">
                3. Main Features
              </span>
              <span className="flex-1 border-b border-dotted border-gray-700 h-0"></span>
              <Link href="/system/qmate/features" className="whitespace-nowrap">
                [3]
              </Link>
            </li>

            <li className="ml-6 space-y-2 text-gray-dark">
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap">1. </span>
                <span className="font-sans text-14 font-medium">1:1 연결</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap">2. </span>
                <span className="font-sans text-14 font-medium">
                  캐릭터 성장
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap">3. </span>
                <span className="font-sans text-14 font-medium">
                  시간대별 테마
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap">4. </span>
                <span className="font-sans text-14 font-medium">
                  오늘의 질문 & 커스텀 질문
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap">5. </span>
                <span className="font-sans text-14 font-medium">캘린더</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Info />
      <Overview />
    </>
  );
}
