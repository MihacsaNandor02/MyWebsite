"use client";

const BackgroundEffect = () => {

    return (
        <div
            className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden"
            style={{
                background: `linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-mid)), hsl(var(--gradient-end)))`
            }}
        >
            {/* Static Aurora Mesh Blobs */}
            <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[100px] opacity-20" />
            <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/5 rounded-full blur-[100px] opacity-15" />
            <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] opacity-15" />

            {/* Tactile Grain Overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] sm:opacity-[0.05] mix-blend-overlay" />

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/30 opacity-40" />
        </div>
    );
};


export default BackgroundEffect;
