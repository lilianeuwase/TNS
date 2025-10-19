'use client';

import { useLenisScroll } from '@/hooks/useLenisScroll';
import Loader from './Loader';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenisScroll();

  return (
    <>
      <Loader />
      {children}
    </>
  );
}
