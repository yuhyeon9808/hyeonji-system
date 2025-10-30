import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/src/components/computer/layout/Footer';
import DesktopIcons from '@/src/components/computer/DesktopIcons';
import Image from 'next/image';
import WordPadPage from '@/src/components/computer/WordPadPage';

export const metadata: Metadata = {
  title: 'Hyeonji OS ',
  description: '유현지 포트폴리오 사이트 입니다.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko ">
      <body className="h-full overflow-hidden">
        <DesktopIcons />
        <Image
          src="/icons/back.png"
          alt="Regional Settings Properties"
          width={440}
          height={487}
          className="fixed top-10 right-10 hidden lg:block"
        />
        <WordPadPage>{children}</WordPadPage>
        <Footer />
      </body>
    </html>
  );
}
