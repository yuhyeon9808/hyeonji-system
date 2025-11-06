import Image from 'next/image';
import React from 'react';

export default function Scentrie() {
  return (
    <div className="w-full my-14 border-y">
      <div className="flex flex-col items-center mx-1 sm:px-0">
        <h2 className="mt-10 mb-10 pb-3 text-4xl text-center border-b">
          SCENTRIE - FAX TRANSMISSION REPOR
        </h2>

        <dl className="grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-x-6 gap-y-1 lg:gap-y-2 leading-relaxed text-18 w-[310px] sm:w-[400px] md:w-[540px] mx-2">
          <dt className="text-18">PROJECT</dt>
          <dd className="font-sans text-14">Scentrie</dd>

          <dt className="text-18">PERIOD</dt>
          <dd className="font-sans text-14">2025.07 ~ 2025.08</dd>

          <dt className="text-18">TYPE</dt>
          <dd className="font-sans text-14">개인 프로젝트</dd>

          <dt className="text-18">STACK</dt>
          <dd className="md:w-[460px] font-sans text-14">
            Next.js · TypeScript · Tailwind CSS · DaisyUI headlessui · React
            Query · Zustand · Axios · Swiper.js
          </dd>
        </dl>
      </div>

      <div className="w-full flex flex-col items-center ">
        <hr className="w-full h-[1px] mt-10 bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
        <div className="w-[310px] sm:w-[400px] md:w-[540px] mx-2">
          <p className="pt-3 pb-1 text-18">LINKS :</p>

          <dl className="grid sm:grid-cols-[140px_1fr] gap-x-3 gap-y-1 font-sam text-18 leading-[1.9] tracking-[0.02em] ">
            <dt>DEPLOYMENT :</dt>
            <dd>
              <a
                href="https://scentrie.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600 break-all"
              >
                https://scentrie.vercel.app
              </a>
            </dd>

            <dt>TEST ACCOUNT :</dt>
            <dd>
              ID : test@gmail.com <br />
              PW : test1234
            </dd>

            <dt>DOCS :</dt>
            <dd>
              <a
                href="https://buly.kr/BTQUWud"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600 break-all text-blue-600"
              >
                https://buly.kr/BTQUWud
              </a>
            </dd>

            <dt>GITHUB :</dt>
            <dd>
              <a
                href="https://github.com/yuhyeon9808/scentrie"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600 break-all"
              >
                https://github.com/yuhyeon9808/scentrie
              </a>
            </dd>
          </dl>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <hr className="w-full h-[1px] mt-3 bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
        <div className="w-[310px] sm:w-[400px] md:w-[540px] mx-2">
          <p className="pt-3 pb-1 text-18">MESSAGE :</p>
          <p className="font-sans text-14 leading-[1.9] tracking-[0.02em]">
            센트리에는 ‘Scent’와 ‘Galerie’의 합성어로 향기의 갤러리라는 뜻을
            가지고 있습니다. 다양한 브랜드 향수를 통합 제공하는 향수
            커머스·큐레이션 플랫폼으로 샘플·본품 구매, 정기 구독, 추천 향수
            서비스 등을 제공합니다.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <hr className="w-full h-[1px] mt-3 bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
        <div className="w-[310px] sm:w-[400px] md:w-[540px] mx-2">
          <p className="pt-3 pb-1 text-18">FEATURES :</p>
          <ul className="font-sans text-14 leading-[2.3] tracking-[0.02em] pb-3">
            <li>□ 노트 / 무드 필터 </li>
            <li>□ 향수 정기구독 서비스 </li>
            <li>□ 향수 취향 테스트</li>
            <li>□ 센트리에 매거진</li>
            <li>□ 장바구니</li>
            <li>□ 주문내역</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col items-center pb-3">
        <hr className="w-full h-[1px] bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
        <div className="w-[310px] sm:w-[400px] md:w-[540px] mx-2">
          <p className="pt-3 pb-1 text-18">ATTACHED FILES :</p>

          <div className="relative mx-auto mt-3 h-[310px] w-[310px] sm:w-[400px] md:w-[540px] bg-[#7A6F81] flex items-center justify-center">
            <Image
              src="/scentrie/scentrie_mockup.png"
              alt="센트리에 시연 목업"
              className="object-contain"
              width={290}
              height={290}
            />
          </div>
          <Image
            src="/scentrie/scentrie_detail1.png"
            alt="센트리에 상세페이지"
            className="object-contain  w-[310px] sm:w-[400px] md:w-[540px] my-5"
            width={540}
            height={540}
          />
          <Image
            src="/scentrie/scentrie_suggest.png"
            alt="센트리에 향수 추천"
            className="object-contain  w-[310px] sm:w-[400px] md:w-[540px] mb-3"
            width={540}
            height={540}
          />

          <Image
            src="/scentrie/scentrie_magazine.png"
            alt="센트리에 매거진"
            className="object-contain  w-[310px] sm:w-[400px] md:w-[540px] mb-3"
            width={540}
            height={540}
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <hr className="w-full h-[1px] mt-3 bg-[repeating-linear-gradient(to_right,#737373_0_10px,transparent_10px_13px)] border-none" />
        <div className="w-[310px] sm:w-[400px] md:w-[540px] mx-2">
          <p className="pt-3 pb-1 text-18">TROUBLESHOOTING LOG :</p>
          <p className="font-sans text-14 leading-[1.9] tracking-[0.02em]">
            □ 검색·메뉴 상태 충돌 — 검색 상태(searchQuery)와 메뉴
            상태(activeMenu)가 한 로직 내에서 처리되어 우선순위가 꼬이던 문제를,
            조건문을 분리하고 우선순위를 명확히 정의하여 검색 유지·전체 보기
            전환 모두 정상적으로 작동하도록 개선했습니다.
          </p>
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
