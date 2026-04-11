"use client";

import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, ExternalLink, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useDictionary } from "@/components/DictionaryProvider";
import { t } from "@/lib/t";

interface PortfolioModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PortfolioModal = ({ isOpen, onClose }: PortfolioModalProps) => {
    const dictionary = useDictionary();

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-white/10 shadow-2xl rounded-3xl">
                <div className="max-h-[85vh] overflow-y-auto scrollbar-hide">
                    {/* Hero Image Section */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                        <img
                            src="/portfolio/hero.png"
                            alt={t(dictionary, 'modals.portfolio.alt_hero_alt')}
                            className="w-full h-[220px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-8 z-20">
                            <Badge className="mb-4 bg-primary/20 text-primary border-primary/20 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-widest font-bold">
                                {t(dictionary, 'modals.portfolio.tag')}
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-2 uppercase italic">
                                {t(dictionary, 'modals.portfolio.title_main')}<span className="text-primary">{t(dictionary, 'modals.portfolio.title_highlight')}</span>{t(dictionary, 'modals.portfolio.title_suffix')}
                            </h2>
                            <p className="text-white/70 max-w-lg text-lg font-medium leading-relaxed">
                                {t(dictionary, 'modals.portfolio.overview')}
                            </p>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 space-y-12">
                        {/* Quick Overview Section */}
                        <section className="grid sm:grid-cols-3 gap-8 py-4 border-b border-white/5">
                            <div className="space-y-1">
                                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{t(dictionary, 'modals.portfolio.label_business')}</span>
                                <p className="text-foreground font-semibold">{t(dictionary, 'modals.portfolio.val_business')}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{t(dictionary, 'modals.portfolio.label_goal')}</span>
                                <p className="text-foreground font-semibold">{t(dictionary, 'modals.portfolio.val_goal')}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{t(dictionary, 'modals.portfolio.label_delivered')}</span>
                                <p className="text-foreground font-semibold">{t(dictionary, 'modals.portfolio.val_delivered')}</p>
                            </div>
                        </section>

                        {/* Strategic Value Section */}
                        <section className="space-y-8">
                            <h3 className="text-2xl font-bold tracking-tight">{t(dictionary, 'modals.portfolio.wins_title')}<span className="text-primary italic">{t(dictionary, 'modals.portfolio.wins_highlight')}</span></h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                                {/* Left Col - Featured Elements */}
                                <div className="space-y-0 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-1 gap-4 items-stretch">
                                    {[
                                        {
                                            title: t(dictionary, 'modals.portfolio.win1_t'),
                                            desc: t(dictionary, 'modals.portfolio.win1_d')
                                        },
                                        {
                                            title: t(dictionary, 'modals.portfolio.win2_t'),
                                            desc: t(dictionary, 'modals.portfolio.win2_d')
                                        },
                                        {
                                            title: t(dictionary, 'modals.portfolio.win3_t'),
                                            desc: t(dictionary, 'modals.portfolio.win3_d')
                                        }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors flex-1"
                                        >
                                            <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-foreground mb-1 sm:text-xl">{item.title}</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed sm:text-lg">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Right Col - Large Showcase */}
                                <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-lg min-h-[400px]">
                                    <img
                                        src="/portfolio/mobile.png"
                                        alt={t(dictionary, 'modals.portfolio.alt_mobile')}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                                            <Smartphone className="w-4 h-4 text-primary" /> {t(dictionary, 'modals.portfolio.label_mobile_showcase')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Supporting Screens Section */}
                        <section className="space-y-8">
                            <h3 className="text-2xl font-bold tracking-tight text-white">{t(dictionary, 'modals.portfolio.supporting_title')}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        img: "/portfolio/content.png",
                                        label: t(dictionary, 'modals.portfolio.screen1_l'),
                                        desc: t(dictionary, 'modals.portfolio.screen1_d')
                                    },
                                    {
                                        img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
                                        label: t(dictionary, 'modals.portfolio.screen2_l'),
                                        desc: t(dictionary, 'modals.portfolio.screen2_d')
                                    }
                                ].map((screen, i) => (
                                    <div key={i} className="group space-y-4">
                                        <div className="relative rounded-2xl overflow-hidden border border-white/5 aspect-video">
                                            <img
                                                src={screen.img}
                                                alt={screen.label}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground flex items-center gap-2">
                                                {screen.label} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </h4>
                                            <p className="text-sm text-muted-foreground">{screen.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* 5. Final CTA */}
                    <div className="px-4 sm:px-8 md:px-16 pb-16">
                        <div className="p-6 sm:p-10 md:p-14 rounded-[3rem] bg-primary/5 border border-primary/10 flex flex-col items-center text-center space-y-10">
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.9]">
                                    {t(dictionary, 'modals.portfolio.cta_title')} <span className="text-primary italic">{t(dictionary, 'modals.portfolio.cta_highlight')}</span>
                                </h3>
                                <p className="text-lg text-white/50 max-w-2xl mx-auto font-medium leading-tight">
                                    {t(dictionary, 'modals.portfolio.cta_desc')}
                                </p>
                            </div>
                            <Button
                                size="lg"
                                className="h-16 w-full sm:w-auto px-4 sm:px-8 md:px-12 text-[10px] sm:text-lg md:text-xl font-black italic uppercase tracking-widest rounded-[1.5rem] bg-primary hover:bg-primary/90 text-white shadow-[0_0_50px_rgba(var(--primary),0.2)] hover:shadow-[0_0_70px_rgba(var(--primary),0.3)] hover:-translate-y-2 transition-all group/btn"
                                onClick={() => {
                                    onClose();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {t(dictionary, 'modals.portfolio.cta_btn')}
                                <ExternalLink className="ml-2 sm:ml-4 w-4 h-4 sm:w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PortfolioModal;
