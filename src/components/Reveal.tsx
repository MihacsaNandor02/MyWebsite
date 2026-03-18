import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    delay?: number;
    fullHeight?: boolean;
    className?: string;
    instant?: boolean;
}

export const Reveal = ({ children, width = "fit-content", delay = 0.25, fullHeight = false, className = "", instant = false }: Props) => {
    const isMobile = useIsMobile();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: isMobile ? "-20px" : "-50px" });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} className={`${className} ${fullHeight ? "h-full" : ""}`} style={{ position: "relative", width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: isMobile ? 30 : 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial={instant ? "visible" : "hidden"}
                animate={instant ? "visible" : mainControls}
                transition={{ duration: 0.5, delay: instant ? 0 : delay }}
                className={fullHeight ? "h-full" : ""}
                style={{ willChange: "transform, opacity" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

