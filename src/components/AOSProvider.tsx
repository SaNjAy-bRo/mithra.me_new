"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Dynamically import AOS only on the client
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        once: true,
        duration: 800,
        offset: 50,
        delay: 0,
      });
      AOS.refresh();
    };

    initAOS();
  }, []);

  return <>{children}</>;
}
