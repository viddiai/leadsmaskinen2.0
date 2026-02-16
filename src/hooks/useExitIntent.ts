"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export function useExitIntent() {
  const [triggered, setTriggered] = useState(false);
  const hasShown = useRef(false);

  const show = useCallback(() => {
    if (hasShown.current) return;
    const shown = sessionStorage.getItem("exit-intent-shown");
    if (shown) return;
    hasShown.current = true;
    setTriggered(true);
    sessionStorage.setItem("exit-intent-shown", "1");
  }, []);

  // Desktop: mouse leaves viewport upward
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [show]);

  // Mobile fallback: user scrolls back up after scrolling 50%+ of page
  useEffect(() => {
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent > maxScroll) maxScroll = scrollPercent;
      // Trigger when user scrolled past 50% and then scrolls back up significantly
      if (maxScroll > 0.5 && scrollPercent < maxScroll - 0.15) {
        show();
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  const dismiss = useCallback(() => setTriggered(false), []);

  return { triggered, dismiss };
}
