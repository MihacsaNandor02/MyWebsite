"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  instant?: boolean;
  fullHeight?: boolean;
  overflowVisible?: boolean;
}

export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0.25,
  duration = 0.5,
  instant = false,
  fullHeight = false,
  overflowVisible = false,
}: RevealProps) => {
  const ref = useRef(null);
  // Do NOT use once:true — it prevents re-triggering on back-navigation.
  // We track "already animated" manually so it still only animates once per mount.
  const isInView = useInView(ref, { margin: "0px" });
  const mainControls = useAnimation();
  const hasAnimated = useRef(false);

  // Reset animation state on every mount (covers back-navigation)
  useEffect(() => {
    hasAnimated.current = false;
    mainControls.set("hidden");
  }, [mainControls]);

  useEffect(() => {
    if (hasAnimated.current) return;
    if (isInView || instant) {
      hasAnimated.current = true;
      mainControls.start("visible");
    }
  }, [isInView, mainControls, instant]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        height: fullHeight ? "100%" : "auto",
      }}
      className={fullHeight ? "flex flex-col" : ""}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
        style={fullHeight ? { height: "100%", display: "flex", flexDirection: "column", flex: 1 } : {}}
      >
        {children}
      </motion.div>
    </div>
  );
};
