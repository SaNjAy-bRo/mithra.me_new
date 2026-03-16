"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        once: true,
        duration: 800,
        offset: 50,
        delay: 0,
      });
      AOS.refresh();
    }
  }, []);

  return <>{children}</>;
}
