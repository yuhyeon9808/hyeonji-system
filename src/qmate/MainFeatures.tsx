import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MainFeatures() {
  return (
    <div className="px-2 pt-7">
      <div className="flex items-center gap-4 ">
        <span className="text-24">3. Main Features</span>
        <span className="flex-1 border-t border-gray "></span>
      </div>

      <div className="flex items-center gap-4 ">
        <span className="my-5 py-1 font-sans font-bold text-20">
          [ 🤝 1:1 연결 ]
        </span>
        <span className="flex-1 border-t border-gray-light "></span>
      </div>
      <div className="font-sans pt-3 flex flex-col lg:flex-row gap-x-5 items-center lg:items-start sm:text-14">
        <Image
          src="/qmate/matching.gif"
          alt="1:1 연결"
          width={300}
          height={535}
          className="object-contain"
        />
        <ul className="pt-3 lg:pt-0 leading-7">
          <li>
            <ul className="  mt-2">
              <li>
                - 로그인 후 관계 유형(커플/친구)을 선택하며, 커플 관계일 경우
                기념일을 함께 설정합니다.
              </li>
              <li>
                - 한 사용자가 발급한 초대 코드를 상대방이 입력하면 연결이
                완료됩니다.
              </li>
              <li>
                - 연결이 완료된 이후 하루 한 질문으로 생각을 나누고, 일정 공유
                기능으로 함께한 시간을 기록합니다.
              </li>
            </ul>
            <hr className="my-5 text-gray-light" />
            <p className="pt-2 font-semibold underline">
              상태 변화 기반의 자동 전환 로직
            </p>
            <ul>
              <li>
                - 초대 코드 입력 시 status가 ACTIVE로 변경되면 자동으로 메인
                페이지로 이동합니다.
              </li>
              <li>
                - useMatchInfo훅에서 <code>refetchInterval</code>을 설정해
                실시간 연결 상태를 폴링합니다.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr className="my-5 text-gray-light" />

      <div className="font-sans">
        <ul>
          <li className="mt-5">
            <div className="flex items-center gap-4 ">
              <span className="my-5 py-1 font-sans font-bold   text-20">
                [ 🌱 캐릭터 성장 시스템 ]
              </span>
              <span className="flex-1 border-t border-gray-light "></span>
            </div>
            <div className="font-sans pt-3 flex flex-col lg:flex-row gap-x-5 items-center lg:items-start sm:text-14">
              <Image
                src="/qmate/grow.gif"
                alt="캐릭터 성장 시스템"
                width={300}
                height={535}
                className="object-contain"
              />
              <ul className="pt-3 lg:pt-0 leading-7">
                <li>
                  - 두 사용자가 모두 질문에 답변을 완료할 때마다 캐릭터에게
                  경험치(+10P)가 부여됩니다.
                </li>
                <li>
                  - 답변 완료 후 메인 화면 진입 시, 버블 애니메이션을 통해
                  경험치가 상승하는 장면이 연출됩니다. 또한 캐릭터를 클릭하면
                  점프하는 상호작용 애니메이션이 재생되어, 사용자와 캐릭터 간의
                  연결감을 높입니다.
                </li>
                <li>
                  - 경험치가 일정 수준에 도달하면 캐릭터의 외형이 변화하며,
                  관계의 성장 단계를 시각적으로 표현합니다. <br />
                  아기 (0 EXP) → 어린이 (300 EXP) → 어른 (1000 EXP)
                </li>
              </ul>
            </div>
            <hr className="my-5 text-gray-light" />
          </li>
          <div className="flex items-center gap-4 ">
            <span className="my-5 py-1 font-sans font-bold text-20">
              [ 🌓 시간대별 테마 변화 ]
            </span>
            <span className="flex-1 border-t border-gray-light "></span>
          </div>
          <div className="font-sans pt-3 flex flex-col lg:flex-row gap-x-5 items-center lg:items-start sm:text-14">
            <Image
              src="/qmate/theme.gif"
              alt="시간대별 테마 변화"
              width={300}
              height={535}
              className="object-contain"
            />
            <ul className="pt-3 lg:pt-0 leading-7">
              <li>
                <ul className="  mt-2">
                  <li>
                    - 하루의 시간대에 따라 화면 테마가 자동으로 전환되며,
                    캐릭터의 상태 또한 함께 변화합니다.
                  </li>
                  <ul className="list-disc list-inside">
                    <li>
                      아침 (06:00 ~ 16:59) : 밝고 활기찬 색감으로 하루의 시작을
                      표현
                    </li>
                    <li>
                      오후 (17:00 ~ 19:59) : 따뜻하고 여유로운 색감으로 편안한
                      분위기 연출
                    </li>
                    <li>
                      밤 (20:00 ~ 05:59) : 차분하고 몽환적인 색감으로 하루의
                      마무리 표현
                    </li>
                  </ul>
                  <li>
                    - 밤 시간대에는 캐릭터가 눈을 감은 모습으로 변경되어, 하루의
                    끝을 함께하는 느낌을 제공합니다.
                  </li>
                </ul>
                <hr className="my-5 text-gray-light" />
                <p className="pt-2 font-semibold underline">
                  시간대별 테마 자동 전환
                </p>
                <ul>
                  <li>
                    미들웨어에서 서버 시간 기준으로 현재 시간대를 계산해 쿠키에
                    저장하고,레이아웃에서 쿠키를 읽어 data-theme 속성으로
                    반영했습니다.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="my-5 text-gray-light" />

          <div className="flex items-center gap-4 ">
            <span className="my-5 py-1 font-sans font-bold text-20">
              [ ❓ 오늘의 질문과 커스텀 질문 ]
            </span>
            <span className="flex-1 border-t border-gray-light "></span>
          </div>
          <div className="font-sans pt-3 flex flex-col lg:flex-row gap-x-5 items-center lg:items-start sm:text-14">
            <Image
              src="/qmate/question.gif"
              alt="시간대별 테마 변화"
              width={300}
              height={535}
              className="object-contain"
            />
            <ul className="pt-3 lg:pt-0 leading-7">
              <li>
                <span className="pt-2 font-semibold ">
                  ▶ 질문 발송 & 답변 시스템
                </span>
                <ul className="  mt-2">
                  <li>
                    - 매일 기본 설정된 시간에 관리자가 새로운 질문을
                    발송하며,사용자는 설정 메뉴에서 발송 시간을 직접 변경할 수
                    있습니다.
                  </li>
                  <li>
                    - 기본 질문 외에도 직접 커스텀 질문을 등록할 수
                    있으며,등록된 커스텀 질문이 있을 경우 해당 질문이 우선적으로
                    발송됩니다.
                  </li>
                  <li>
                    - 두 사용자가 모두 답변을 완료해야만 서로의 답변을 확인할 수
                    있습니다.
                  </li>
                  <li>
                    - 필터 기능을 통해 수정 가능한 커스텀 질문만 선택적으로
                    조회할 수 있어 질문 관리의 편의성과 개인화된 경험을
                    제공합니다.
                  </li>
                </ul>
                <hr className="my-5 text-gray-light" />

                <span className="font-semibold ">▶ 질문 평가 & 통계</span>
                <ul className="  mt-2">
                  <li>
                    - 사용자는 답변 완료 후, 해당 질문에 대한 평가를 진행할 수
                    있습니다.
                  </li>
                  <li>
                    - 매월 1일에는 그동안 평가한 질문의 데이터를 기반으로
                    카테고리별 통계가 제공되며, 모달 형태의 차트를 통해 질문
                    선호도를 시각적으로 확인할 수 있습니다.
                  </li>
                </ul>
                <hr className="my-5 text-gray-light" />
                <span className="font-semibold ">▶ 공유 기능</span>
                <ul className="  mt-2">
                  <li>
                    - 브라우저의 공유 기능을 활용해 자신의 답변 이미지를 바로
                    공유할 수 있습니다.
                  </li>
                  <li>
                    - 공유 기능을 사용하지 않는 경우, 이미지를 저장하여 사용
                    가능합니다
                  </li>
                </ul>
              </li>
            </ul>
            <hr className="my-5 text-gray-light" />
          </div>
          <hr className="my-5 text-gray-light" />

          <div className="flex items-center gap-4 ">
            <span className="my-5 py-1 font-sans font-bold text-20">
              [ 📅 캘린더 ]
            </span>
            <span className="flex-1 border-t border-gray-light "></span>
          </div>
          <div className="font-sans pt-3 flex flex-col lg:flex-row gap-x-5 items-center lg:items-start sm:text-14">
            <Image
              src="/qmate/calender.gif"
              alt="캘린더"
              width={300}
              height={535}
              className="object-contain"
            />
            <ul className="pt-3 lg:pt-0 leading-7">
              <li>
                <ul className="  mt-2">
                  <li>
                    - 사용자는 일정을 등록·수정·삭제할 수 있으며, 캘린더 뷰를
                    통해 전체 일정을 한눈에 확인할 수 있습니다.
                  </li>
                  <li>
                    - 오늘을 기준으로 1년 이내의 일정을 리스트 형태로 조회할 수
                    있습니다
                  </li>
                  <li>
                    - 일정 등록 또는 수정 시 반복 주기와 알림 여부를 함께 설정할
                    수 있습니다.
                  </li>
                  <li>
                    - 관계 유형이 연인으로 설정된 경우, 사귄 날짜를
                    기준으로100일, N주년, 생일 등의 기념일이 자동 등록되며, 해당
                    날짜에 알림이 발송됩니다. 친구 관계의 경우에는 생일 일정만
                    자동 등록됩니다.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="my-5 text-gray-light" />
        </ul>
      </div>
      <Link href="/system/qmate" className="pb-10 flex justify-end">
        <span>◀&nbsp;</span>
        <span className=" text-18"> PrevPage</span>
      </Link>
    </div>
  );
}
