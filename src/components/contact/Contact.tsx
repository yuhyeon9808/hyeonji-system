'use client';

import WindowModal from '../common/WindowModal';

export default function Contact({ onClose }: { onClose: () => void }) {
  return (
    <WindowModal title="Contact Me" onClose={onClose}>
      <p className="mb-3">
        감사합니다.
        <br /> 더 궁금한 점이 있다면 <br /> 편하게 연락 주세요.
      </p>
      <div>
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex gap-2">
            <span className="font-bold">전화번호</span>
            <span>010-9845-5266</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">이메일</span>
            <span>bwj9808@gmail.com</span>
          </div>
        </div>
      </div>
    </WindowModal>
  );
}
