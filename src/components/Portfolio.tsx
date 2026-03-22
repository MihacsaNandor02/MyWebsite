import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PortfolioModal from "./PortfolioModal";
import FightClubModal from "./FightClubModal";

const Portfolio = () => {
    const [isFightClubOpen, setIsFightClubOpen] = useState(false);
    const [isGenericOpen, setIsGenericOpen] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "200px" });

    return (
        <section id="portfolio" ref={ref} className="pb-24 mt-32 sm:mt-36 md:mt-32 xl:mt-28 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-4 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
                        >
                            <Zap className="w-3 h-3" /> Selected Case Studies
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] uppercase italic"
                        >
                            BUILT WITH INTENT. <br />
                            <span className="text-primary ">DESIGNED TO CONVERT.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="space-y-12">
                    {/* Featured Case Study Card - Fight Club */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group relative cursor-pointer"
                        onClick={() => setIsFightClubOpen(true)}
                    >
                        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-card/10 backdrop-blur-xl">
                            <div className="grid lg:grid-cols-12">
                                <div className="lg:col-span-7 relative h-[400px] lg:h-[700px] overflow-hidden bg-[#0a0a0a]">
                                    <img
                                        src="/portfolio/bdf-hero-clean.png"
                                        alt="Black Diamond Fight Redesign"
                                        className="w-full h-full object-cover object-right transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/20 via-transparent to-transparent hidden lg:block" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent lg:hidden" />

                                    <div className="absolute top-8 left-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-px bg-yellow-400" />
                                            <span className="text-yellow-400 text-xs font-black uppercase tracking-[0.3em] italic">Redesign Case Study</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-10">
                                    <div className="space-y-4">
                                        <Badge className="bg-yellow-400 text-black border-none font-black italic uppercase tracking-tighter px-4 py-1">Featured Project</Badge>
                                        <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.9]">
                                            BLACK <span className="text-yellow-400">DIAMOND</span> FIGHT
                                        </h3>
                                        <p className="text-xl text-white/50 leading-tight max-w-md">
                                            Turning a cluttered legacy site into a high-impact, conversion-focused digital engine.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        {[
                                            { label: "Content Clarity", val: "STRATEGIC", icon: Target },
                                            { label: "Design Level", val: "PREMIUM", icon: Zap },
                                        ].map((stat, i) => (
                                            <div key={i} className="space-y-1">
                                                <div className="flex items-center gap-2 text-yellow-400/60 mb-2">
                                                    <stat.icon className="w-4 h-4" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
                                                </div>
                                                <p className="text-3xl font-black italic uppercase tracking-tighter">{stat.val}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4">
                                        <Button
                                            size="lg"
                                            className="h-16 mx-auto sm:mx-0 px-6 md:px-10 text-base md:text-lg font-black italic uppercase tracking-widest rounded-2xl bg-white text-black hover:bg-yellow-400 transition-all flex items-center gap-4 group/btn"
                                        >
                                            The Transformation
                                            <ArrowUpRight className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </motion.div>

                    {/* Secondary Case Study - Generic/Concept */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative cursor-pointer"
                            onClick={() => setIsGenericOpen(true)}
                        >
                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/10 backdrop-blur-xl aspect-video">
                                <img
                                    src="/portfolio/content.png"
                                    alt="Torockó Beauty System"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h4 className="text-2xl font-black tracking-tight uppercase italic mb-2">TOROCKÓ BEAUTY: NATURAL ESSENCE</h4>
                                    <p className="text-white/60 text-sm line-clamp-1">Visual language and e-commerce UX for artisan cosmetics.</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex flex-col justify-center p-8 rounded-[2rem] border border-dashed border-white/10 hover:border-primary/50 transition-colors group cursor-pointer">
                            <h4 className="text-xl font-bold mb-2 text-white/40 group-hover:text-white transition-colors uppercase italic tracking-tighter">Your Project Here?</h4>
                            <p className="text-muted-foreground mb-6">We're ready to build your next conversion machine.</p>
                            <Button variant="link" className="text-primary p-0 h-auto font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                Start Your Redesign <ArrowUpRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Modal Integrations */}
                <FightClubModal isOpen={isFightClubOpen} onClose={() => setIsFightClubOpen(false)} />
                <PortfolioModal isOpen={isGenericOpen} onClose={() => setIsGenericOpen(false)} />

                {/* Preload critical modal images ONLY when section comes into view */}
                {isInView && (
                    <div className="hidden" aria-hidden="true">
                        <img src="/portfolio/bdf-after.png" alt="preload" />
                        <img src="/portfolio/bdf-before.png" alt="preload" />
                        <img src="/portfolio/hero.png" alt="preload" />
                        <img src="/portfolio/mobile.png" alt="preload" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
