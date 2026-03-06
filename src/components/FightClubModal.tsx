import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, ExternalLink, Smartphone, UserCheck, CreditCard, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FightClubModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FightClubModal = ({ isOpen, onClose }: FightClubModalProps) => {
    const [sliderPos, setSliderPos] = useState(50);

    const handleMove = (clientX: number, container: HTMLElement) => {
        const rect = container.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        setSliderPos((x / rect.width) * 100);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        const container = (e.currentTarget as HTMLElement).parentElement;
        if (!container) return;

        const onMove = (moveEvent: MouseEvent) => {
            handleMove(moveEvent.clientX, container);
        };

        const onUp = () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        const container = (e.currentTarget as HTMLElement).parentElement;
        if (!container) return;

        const onMove = (touchEvent: TouchEvent) => {
            handleMove(touchEvent.touches[0].clientX, container);
        };

        const onEnd = () => {
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', onEnd);
        };

        window.addEventListener('touchmove', onMove);
        window.addEventListener('touchend', onEnd);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-5xl p-0 overflow-hidden bg-[#050505] border-white/5 shadow-2xl rounded-[2rem] text-white">
                <div className="max-h-[90vh] overflow-y-auto scrollbar-hide">
                    {/* 1. Flagship Static Hero */}
                    <div className="relative group overflow-hidden h-[220px] sm:h-[360px] md:h-[420px]">
                        <motion.img
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            src="/portfolio/bdf-after.png"
                            alt="Black Diamond Fight Redesign Hero"
                            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                    </div>

                    <div className="px-8 md:px-16 pb-16 space-y-24">
                        {/* 2. Project Title & Overview */}
                        <div className="mt-12 space-y-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-px bg-yellow-400" />
                                    <span className="text-yellow-400 text-xs font-black uppercase tracking-[0.3em] italic">Platinum Case Study</span>
                                </div>
                                <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase italic leading-[0.8]">
                                    BLACK <span className="text-yellow-400">DIAMOND.</span>
                                </h2>
                            </div>

                            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                                <div className="space-y-6 flex-1">
                                    <p className="text-xl md:text-2xl text-white/50 font-medium leading-tight max-w-2xl">
                                        Total digital rebirth for an elite MMA facility, transforming their online presence into a lead-generation powerhouse with a brutal, high-performance aesthetic.
                                    </p>
                                </div>
                                <div className="flex shrink-0 gap-4">
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400/60 mb-1">Impact</p>
                                        <p className="text-xl font-bold italic uppercase tracking-tighter">+240% Leads</p>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400/60 mb-1">Focus</p>
                                        <p className="text-xl font-bold italic uppercase tracking-tighter">Funnel UX</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. The Transformation Slider (Reverted to Body) */}
                        <section className="space-y-10">
                            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                                <div className="space-y-3">
                                    <h3 className="text-4xl font-black italic uppercase tracking-tighter">The <span className="text-yellow-400">Transformation</span></h3>
                                    <p className="text-white/40 max-w-lg">From a cluttered legacy site to a streamlined conversion engine. Drag the slider to witness the rebirth.</p>
                                </div>
                                <Badge variant="outline" className="text-white/30 border-white/10 px-4 py-2 uppercase tracking-widest text-xs italic font-black">
                                    Side-By-Side Comparison
                                </Badge>
                            </div>

                            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 bg-black group/slider">
                                {/* Comparison Canvas */}
                                <div className="absolute inset-0 select-none">
                                    {/* After (Redesign) */}
                                    <div className="absolute inset-0">
                                        <img
                                            src="/portfolio/bdf-after.png"
                                            alt="After Redesign"
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Before (Original) - Clipped by Slider */}
                                    <div
                                        className="absolute inset-0 border-r-2 border-yellow-400 z-10"
                                        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                                    >
                                        <img
                                            src="/portfolio/bdf-before.png"
                                            alt="Before Redesign"
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover grayscale opacity-80 blur-[2px]"
                                        />
                                        <div className="absolute inset-0 bg-black/20" />
                                    </div>

                                    {/* Labels */}
                                    <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
                                        <Badge className="bg-black/60 backdrop-blur-md border-white/10 text-white/40 px-4 py-2 tracking-widest">LEGACY SITE</Badge>
                                    </div>
                                    <div className="absolute bottom-8 right-8 z-20 pointer-events-none">
                                        <Badge className="bg-yellow-400 text-black px-4 py-2 tracking-widest font-black">NEW PERFORMANCE ERA</Badge>
                                    </div>
                                </div>

                                {/* Handle */}
                                <div
                                    className="absolute inset-y-0 z-30 w-1 bg-yellow-400 cursor-ew-resize group/handle"
                                    style={{ left: `${sliderPos}%` }}
                                    onMouseDown={handleMouseDown}
                                    onTouchStart={handleTouchStart}
                                >
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(250,204,21,0.5)] border-4 border-[#0a0a0a] group-active/handle:scale-125 transition-transform">
                                        <div className="flex gap-1.5">
                                            <div className="w-1.5 h-4 bg-black/30 rounded-full" />
                                            <div className="w-1.5 h-4 bg-black rounded-full" />
                                            <div className="w-1.5 h-4 bg-black/30 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4. Strategic Impact Grid (Large / Light Overlays) */}
                        <section className="space-y-12">
                            <div className="space-y-2">
                                <h3 className="text-4xl font-black italic uppercase tracking-tighter">Strategic <span className="text-yellow-400">Wins</span></h3>
                                <p className="text-white/40 text-lg">Detailed breakthroughs in the 2.0 architecture.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {[
                                    {
                                        img: "/portfolio/bdf-mobile.png",
                                        title: "Mobile-First UX",
                                        desc: "Seamless performance and one-touch scheduling for athletes on the move.",
                                        icon: <Smartphone className="w-6 h-6 text-black" />
                                    },
                                    {
                                        img: "/portfolio/bdf-branding.png",
                                        title: "Elite Branding",
                                        desc: "Visual trust metrics tied directly to Zoltan's national championship authority.",
                                        icon: <UserCheck className="w-6 h-6 text-black" />
                                    },
                                    {
                                        img: "/portfolio/bdf-programs.png",
                                        title: "Program Clarity",
                                        desc: "Strategic segmentation of Juniors, Fit, and Elite training paths.",
                                        icon: <CreditCard className="w-6 h-6 text-black" />
                                    },
                                    {
                                        img: "/portfolio/bdf-testimonials.png",
                                        title: "Proof Systems",
                                        desc: "High-impact social evidence integrated into the core scrolling experience.",
                                        icon: <TrendingUp className="w-6 h-6 text-black" />
                                    }
                                ].map((screen, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group/screen space-y-6"
                                    >
                                        <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 bg-white/5">
                                            <img
                                                src={screen.img}
                                                alt={screen.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover grayscale opacity-80 group-hover/screen:grayscale-0 group-hover/screen:opacity-100 group-hover/screen:scale-105 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover/screen:bg-black/0 transition-colors duration-500" />
                                            <div className="absolute top-8 left-8 p-4 rounded-2xl bg-yellow-400 shadow-2xl scale-90 group-hover/screen:scale-100 transition-transform duration-500">
                                                {screen.icon}
                                            </div>
                                        </div>
                                        <div className="px-4">
                                            <h4 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-2">{screen.title}</h4>
                                            <p className="text-white/60 leading-relaxed font-medium text-lg">{screen.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* 5. Final CTA */}
                        <div className="p-6 md:p-14 rounded-[3rem] bg-yellow-400/5 border border-yellow-400/10 flex flex-col items-center text-center space-y-10 mt-12 mb-12">
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.9]">
                                    WANT RESULTS <span className="text-yellow-400">LIKE THIS?</span>
                                </h3>
                                <p className="text-lg text-white/50 max-w-2xl mx-auto font-medium leading-tight">
                                    Your website shouldn't just look pretty. It should be your hardest working employee. Let’s build your machine.
                                </p>
                            </div>
                            <Button
                                size="lg"
                                className="h-16 w-full sm:w-auto px-4 sm:px-8 md:px-12 text-sm sm:text-lg md:text-xl font-black italic uppercase tracking-widest rounded-[1.5rem] bg-yellow-400 hover:bg-yellow-500 text-black shadow-[0_0_50px_rgba(250,204,21,0.2)] hover:shadow-[0_0_70px_rgba(250,204,21,0.3)] hover:-translate-y-2 transition-all group/btn"
                                onClick={() => {
                                    onClose();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Get Your Design Strategy
                                <ArrowRight className="ml-4 w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default FightClubModal;
