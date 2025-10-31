import type { Metadata } from 'next';
import './globals.css';
import DesktopLayer from '@/src/components/computer/layout/DesktopLayer';

export const metadata: Metadata = {
  title: 'Hyeonji OS',
  description: '유현지 포트폴리오 사이트 입니다.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="h-full overflow-hidden">
        <DesktopLayer>{children}</DesktopLayer>
      </body>
    </html>
  );
}
