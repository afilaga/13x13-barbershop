"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

const BootScreen = dynamic(() => import("@/components/BootScreen"), {
  ssr: false,
});

export default function DesktopPreloader() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);
    const timer = window.setTimeout(updateViewport, 0);

    mediaQuery.addEventListener("change", updateViewport);
    return () => {
      window.clearTimeout(timer);
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  if (!isActive || isDesktop === false) {
    return null;
  }

  if (isDesktop === null) {
    return (
      <div
        data-testid="desktop-preloader"
        className="fixed inset-0 z-[9999] hidden items-center justify-center bg-[#0a0a0a] lg:flex"
        aria-hidden="true"
      >
        <Image
          src="/logo_white.webp"
          alt=""
          width={200}
          height={100}
          className="h-auto w-[200px] opacity-80 mix-blend-lighten"
          priority
        />
      </div>
    );
  }

  return <BootScreen onComplete={() => setIsActive(false)} />;
}
