import { motion } from "framer-motion";

const BackgroundEffect = () => {
    return (
        <div
            className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden"
            style={{
                background: `linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-mid)), hsl(var(--gradient-end)))`
            }}
        >
            {/* Aurora Mesh Blobs */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-30"
            />
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 60, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen opacity-20"
            />
            <motion.div
                animate={{
                    x: [0, 20, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 5 }}
                className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[140px] mix-blend-screen opacity-20"
            />

            {/* Tactile Grain Overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay" />

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/30 opacity-40" />
        </div>
    );
};

export default BackgroundEffect;
