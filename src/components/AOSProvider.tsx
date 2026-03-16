"use client";
import { useEffect } from "react";
// import AOS from "aos"; // Moved to dynamic import inside useEffect
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        once: true,
        duration: 800,
        offset: 50,
        delay: 0,
      });
      // Refresh to ensure all elements are detected
      AOS.refresh();
    };

    initAOS();
  }, []);

  return <>{children}</>;
}
