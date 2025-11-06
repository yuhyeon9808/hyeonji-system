'use client';
import React from 'react';
import WindowModal from '../common/WindowModal';
import { usePathname } from 'next/navigation';

export default function DownloadModal({ onClose }: { onClose: () => void }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/portfolio.pdf';
    link.download = '유현지_포트폴리오.pdf';
    link.click();
  };

  const pathname = usePathname();
  const showModal = pathname === '/system/portfolio';

  return (
    showModal && (
      <WindowModal
        title="Portfolio.pdf"
        onClose={onClose}
        height={200}
        onConfirm={handleDownload}
      >
        <p>포트폴리오 파일을 다운로드하시겠습니까?</p>
      </WindowModal>
    )
  );
}
