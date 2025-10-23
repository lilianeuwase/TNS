"use client";

import { useState, useEffect } from "react";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import Loader from "./Loader";
import Navbar from "@/components/Navbar/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenisScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Match this with your loader animation duration
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Show only the loader while loading
  if (loading) {
    return <Loader />;
  }

  // After loading is done, show navbar + content
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
