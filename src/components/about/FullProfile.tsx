import React from 'react';

export default function FullProfile() {
  return (
    <div className="mb-10  mx-3">
      <p className="font-sans  font-bold my-3">2. 학력사항</p>
      <div className=" font-sans  border divide-y text-14 ">
        <div className="bg-profile w-full grid grid-cols-3  text-center">
          <p className="py-1 font-semibold">년/월/일</p>
          <p className="border-x py-1 font-semibold">학교명</p>
          <p className="py-1 font-semibold">전공과 및 학과</p>
        </div>
        <div className="w-full grid grid-cols-3 text-center ">
          <p className="py-1">2017.02 - 2019.02</p>
          <p className="flex items-center justify-center border-x py-1">
            배화여자대학교
          </p>
          <p className="flex items-center justify-center ">비서행정학과</p>
        </div>
      </div>

      <p className="font-sans font-bold my-3">3. 수료사항</p>
      <div className=" font-sans  border divide-y text-14  ">
        <div className="bg-profile w-full grid grid-cols-3  text-center">
          <p className="py-1 font-semibold">년/월/일</p>
          <p className="border-x py-1 font-semibold">기관명</p>
          <p className="py-1 font-semibold">수료과정</p>
        </div>
        <div className="w-full grid grid-cols-3 text-center ">
          <p className="py-1">2025.04 - 2025.10</p>
          <p className="border-x py-1 flex items-center justify-center">
            제로베이스
          </p>
          <p className="py-1 flex items-center justify-center">프론트엔드</p>
        </div>
        <div className="w-full grid grid-cols-3  text-center  ">
          <p className="py-1">2017.02 - 2019.02</p>
          <p className="border-x py-1 flex items-center justify-center">
            SBS 아카데미
          </p>
          <p className="py-1 flex items-center justify-center">웹디자인</p>
        </div>
      </div>

      <p className="font-sans font-bold my-3">4. 경력사항</p>
      <div className=" font-sans border divide-y text-14  ">
        <div className="bg-profile w-full grid grid-cols-3  text-center">
          <p className="py-1 font-semibold">회사명</p>
          <p className="border-x py-1 font-semibold">직위 및 업무내용</p>
          <p className="py-1 font-semibold">업무 기간</p>
        </div>
        <div>
          <div className="w-full grid grid-cols-3  text-center  ">
            <p className="py-1 flex items-center justify-center">
              블랙트라이브
            </p>
            <p className="border-x py-1 flex items-center justify-center">
              디자이너
            </p>
            <p className="py-1">2020.12 - 2024.04</p>
          </div>
        </div>
        <div className="w-full grid grid-cols-3  text-center  ">
          <p className="py-1 flex items-center justify-center">
            현대해상화재보험
          </p>
          <p className="border-x py-1 flex items-center justify-center">
            임원 비서
          </p>
          <p className="py-1">2019.05 - 2020.05</p>
        </div>
      </div>
      <p className="font-sans font-bold my-3">5. 기술스택</p>
      <div className=" font-sans  border divide-y text-14  ">
        <div className="bg-profile w-full  text-center flex">
          <p className="py-1 font-semibold w-[110px] md:w-[218px]">구분</p>
          <p className="border-l py-1 font-semibold flex-1">기술</p>
        </div>
        <div>
          <div className="w-full flex text-center  ">
            <p className="py-1 w-[110px] md:w-[218px] my-auto ">프론트엔드</p>
            <p className="border-l py-1 flex-1">
              TypeScript, React, Next.js, Tailwind CSS, <br />
              Zustand, React-Query
            </p>
          </div>
        </div>
        <div className="w-full flex  text-center  ">
          <p className="py-1 w-[110px] md:w-[218px]">디자인 툴</p>
          <p className="border-l py-1 flex-1">Figma, Photoshop, Illustrator</p>
        </div>
      </div>
    </div>
  );
}
