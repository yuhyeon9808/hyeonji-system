'use client';

import dynamic from 'next/dynamic';
import 'simplebar-react/dist/simplebar.min.css';

const SimpleBar = dynamic(() => import('simplebar-react'), { ssr: false });

export default function ClientScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SimpleBar
      style={{ maxHeight: '100%', width: '100%' }}
      className="border-window  "
    >
      {children}
    </SimpleBar>
  );
}
