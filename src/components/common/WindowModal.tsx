import Image from 'next/image';
import React from 'react';

interface WindowModalProps {
  title: string;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  closeText?: string;
  width?: number;
  height?: number;
  children: React.ReactNode;
}

export default function WindowModal({
  title,
  onClose,
  onConfirm,
  confirmText = 'OK',
  closeText = 'Close',
  width = 400,
  height = 290,
  children,
}: WindowModalProps) {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-t border-l border-gray-light pointer-events-auto"
        style={{ width, height }}
      >
        <div className="bg-gray-light border-window flex flex-col h-full">
          <div className="h-9 mx-1 mt-1 bg-blue-point text-white-soft flex items-center justify-between">
            <span className="pl-2 text-14">{title}</span>
            <button
              className="bg-gray-light p-1 border-window mr-1"
              onClick={onClose}
            >
              <Image
                src="/icons/close.png"
                alt="닫기 버튼"
                width={15}
                height={15}
              />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center text-center py-6 px-4">
            {children}
          </div>

          <div className="flex gap-3 font-bold text-14 justify-center pb-6">
            <button
              className="border-window py-1 w-[100px]"
              onClick={onConfirm || onClose}
            >
              {confirmText}
            </button>
            <button className="border-window py-1 w-[100px]" onClick={onClose}>
              {closeText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
