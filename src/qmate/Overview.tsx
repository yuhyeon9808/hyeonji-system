import Link from 'next/link';
import React from 'react';

export default function Overview() {
  return (
    <div>
      <div className="flex items-center gap-4 ">
        <span className="text-24">2. Overview</span>
        <span className="flex-1 border-t border-gray-light "></span>
      </div>
      <p className="font-sans  leading-6 py-5 sm:text-14">
        Q-mate는 1:1 매칭을 기반으로 매일 주어지는 질문에 답하며 관계의 깊이를
        쌓아가는 데일리 Q&A 플랫폼입니다. 두 사용자가 모두 답변을 완료해야
        서로의 이야기가 공개되는 ‘동시 공개’ 구조를 통해, 서로의 생각이 같은
        타이밍에 닿는 순간의 설렘을 담았습니다. 커스텀 질문 기능으로 사용자가
        직접 궁금한 주제를 제안하며 이해의 폭을 확장하고, 캘린더를 통해 기념일과
        일정을 함께 관리하며 관계의 시간을 공유할 수 있습니다. 마지막으로,
        캐릭터 성장과 시간대별 테마 전환을 통해 감정적인 몰입과 일상의 리듬을
        더했습니다.
      </p>
      <video
        src="/qmate/Q-mate.mp4"
        preload="auto"
        controls
        playsInline
        className="pb-10"
      />
      <Link href="/system/qmate/features" className="pb-10 flex justify-end">
        <span className=" text-18">NextPage&nbsp;</span>
        <span>▶</span>
      </Link>
    </div>
  );
}
