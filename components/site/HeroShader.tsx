"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// three.js is large, so it is split into its own chunk and only fetched
// once the page is idle. The hero text never waits for it: until the
// shader mounts, the section just shows its dark background.
//
// As before, this is a purely decorative backdrop (slow colour drift, no
// flashing), so it intentionally runs regardless of prefers-reduced-motion.
const WebGLShader = dynamic(() => import("./WebGLShader"), { ssr: false });

export default function HeroShader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const start = () => setShow(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(start, 400);
    return () => clearTimeout(id);
  }, []);

  return show ? <WebGLShader /> : null;
}
