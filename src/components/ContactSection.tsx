"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2, Check } from "lucide-react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { useDictionary } from "@/components/DictionaryProvider";
import { t } from "@/lib/t";

interface ContactSectionProps {
  initialPackage?: string | null;
  packageCategory?: 'website' | 'seo' | null;
  id?: string;
}

type Step = "form" | "confirmation";

/**
 * PASTE YOUR GOOGLE APPS SCRIPT URL HERE
 */
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxuEILaezFqyOX3jhif1xa4b8zFBT8-AKI-eTmMl-kgdF0xfay-qpDyM2CCH7vUGMG_/exec";

const ContactSection: React.FC<ContactSectionProps> = ({ initialPackage, packageCategory, id }) => {
  const dictionary = useDictionary();
  const [step, setStep] = useState<Step>("form");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = useMemo(() => z.object({
    name: z.string().trim().min(1, t(dictionary, "contact.err_name")).max(100),
    email: z.string().trim().email(t(dictionary, "contact.err_email")).max(255),
    phone: z.string().trim().min(5, t(dictionary, "contact.err_phone")).max(20),
    website: z.string().trim().max(255).optional(),
    need: z.string().min(1, t(dictionary, "contact.err_need")),
    timezone: z.string().optional(),
  }), [dictionary]);

  type FormData = z.infer<typeof formSchema>;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    website: "",
    need: initialPackage || "",
    timezone: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const needOptions = [
    { value: "Essential Website", label: t(dictionary, "contact.packages.essential.name") },
    { value: "Recommended Website", label: t(dictionary, "contact.packages.recommended.name") },
    { value: "Custom Website", label: t(dictionary, "contact.packages.custom.name") },
    { value: "Local SEO", label: t(dictionary, "contact.packages.local.name") },
    { value: "Growth SEO", label: t(dictionary, "contact.packages.growth.name") },
    { value: "Not sure yet", label: t(dictionary, "contact.packages.not_sure.name") },
  ];

  const packageDetails: Record<string, { price: string; features: string[] }> = {
    "Essential Website": {
      price: t(dictionary, "contact.packages.essential.price"),
      features: [
        t(dictionary, "contact.packages.essential.f1"),
        t(dictionary, "contact.packages.essential.f2"),
        t(dictionary, "contact.packages.essential.f3"),
        t(dictionary, "contact.packages.essential.f4"),
        t(dictionary, "contact.packages.essential.f5"),
        t(dictionary, "contact.packages.essential.f6")
      ]
    },
    "Recommended Website": {
      price: t(dictionary, "contact.packages.recommended.price"),
      features: [
        t(dictionary, "contact.packages.recommended.f1"),
        t(dictionary, "contact.packages.recommended.f2"),
        t(dictionary, "contact.packages.recommended.f3"),
        t(dictionary, "contact.packages.recommended.f4"),
        t(dictionary, "contact.packages.recommended.f5"),
        t(dictionary, "contact.packages.recommended.f6")
      ]
    },
    "Custom Website": {
      price: t(dictionary, "contact.packages.custom.price"),
      features: [
        t(dictionary, "contact.packages.custom.f1"),
        t(dictionary, "contact.packages.custom.f2"),
        t(dictionary, "contact.packages.custom.f3"),
        t(dictionary, "contact.packages.custom.f4"),
        t(dictionary, "contact.packages.custom.f5")
      ]
    },
    "Local SEO": {
      price: t(dictionary, "contact.packages.local.price"),
      features: [
        t(dictionary, "contact.packages.local.f1"),
        t(dictionary, "contact.packages.local.f2"),
        t(dictionary, "contact.packages.local.f3"),
        t(dictionary, "contact.packages.local.f4"),
        t(dictionary, "contact.packages.local.f5")
      ]
    },
    "Growth SEO": {
      price: t(dictionary, "contact.packages.growth.price"),
      features: [
        t(dictionary, "contact.packages.growth.f1"),
        t(dictionary, "contact.packages.growth.f2"),
        t(dictionary, "contact.packages.growth.f3"),
        t(dictionary, "contact.packages.growth.f4"),
        t(dictionary, "contact.packages.growth.f5")
      ]
    },
    "Not sure yet": {
      price: t(dictionary, "contact.packages.not_sure.price"),
      features: [
        t(dictionary, "contact.packages.not_sure.f1"),
        t(dictionary, "contact.packages.not_sure.f2"),
        t(dictionary, "contact.packages.not_sure.f3"),
        t(dictionary, "contact.packages.not_sure.f4"),
        t(dictionary, "contact.packages.not_sure.f5")
      ]
    }
  };

  // Detect timezone on mount
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setFormData(prev => ({ ...prev, timezone: tz }));
    } catch (e) {
      console.error("Failed to detect timezone:", e);
    }
  }, []);

  // Update form if initialPackage changes
  useEffect(() => {
    if (initialPackage) {
      setFormData(prev => ({ ...prev, need: initialPackage }));
    }
  }, [initialPackage]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    // Basic phone validation: only allow digits, spaces, +, -, (, )
    if (field === "phone") {
      const filtered = value.replace(/[^0-9+\-()\s]/g, "");
      setFormData((prev) => ({ ...prev, [field]: filtered }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formBody.append(key, value);
      });

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      setStep("confirmation");
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const effectiveNeed = formData.need || "Recommended Website";
  const currentPackage = packageDetails[effectiveNeed];
  const isDefault = !formData.need;

  return (
    <section id={id || "contact"} className="pb-16 pt-16 lg:mt-12 px-4 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <Reveal width="100%">
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-foreground mb-6 lg:mt-4">
              {t(dictionary, "contact.title_main")} <span className="text-primary italic">{t(dictionary, "contact.title_highlight")}</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-muted-foreground text-lg sm:text-xl xl:text-2xl max-w-2xl mx-auto font-medium">
              {t(dictionary, "contact.subtitle")}
            </p>
          </Reveal>
        </div>

        <Reveal width="100%" overflowVisible>
          <>
            {step === "confirmation" ? (
              <div className="max-w-xl mx-auto">
                <div
                  className="relative rounded-2xl p-8 md:p-10
                    bg-[#111317]
                    backdrop-blur-xl
                    border border-[hsl(220,10%,18%)]
                    shadow-[0_4px_30px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.03)]
                    text-center"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                  <div className="relative z-10">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {t(dictionary, "contact.conf_title")}
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      {t(dictionary, "contact.conf_desc")}
                    </p>
                    <div className="bg-[#1a1c23] rounded-xl p-6 text-left border border-[hsl(220,10%,20%)]">
                      <h3 className="text-foreground font-semibold mb-3">{t(dictionary, "contact.conf_next_steps")}</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• {t(dictionary, "contact.conf_step1")}</li>
                        <li>• {t(dictionary, "contact.conf_step2")}</li>
                        <li>• {t(dictionary, "contact.conf_step3")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 min-[930px]:grid-cols-2 gap-8 lg:gap-8 xl:gap-12 items-stretch max-w-2xl min-[930px]:max-w-6xl xl:max-w-7xl mx-auto w-full">
                  <div className="h-full">
                    <div
                      className="relative rounded-3xl p-8 min-[900px]:p-10 lg:p-8 xl:p-10
                        bg-[#111317]
                        backdrop-blur-xl
                        border border-[hsl(220,10%,18%)]
                        shadow-[0_2rem_4rem_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.05)]
                        h-full flex flex-col"
                    >
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold uppercase tracking-wider mb-6 w-fit">
                        {t(dictionary, "contact.form_tag")}
                      </div>

                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

                      <div className="relative z-10 flex-grow">
                        <h2 className="text-3xl md:text-4xl lg:text-[2.35rem] font-bold text-foreground mb-10">
                          {t(dictionary, "contact.form_title_part1")}<span className="text-primary">{t(dictionary, "contact.form_title_part2")}</span>
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-5 mt-4">
                          <div className="grid grid-cols-1 gap-6 lg:gap-4">
                            <div className="space-y-3 lg:space-y-2">
                              <Label htmlFor="name" className="text-base font-semibold text-foreground/90">
                                {t(dictionary, "contact.label_name")} <span className="text-primary">*</span>
                              </Label>
                              <Input
                                id="name"
                                type="text"
                                placeholder={t(dictionary, "contact.placeholder_name")}
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                className="bg-[#1a1c23] border-[hsl(220,10%,20%)] h-12 sm:h-14 text-sm sm:text-lg lg:text-[1rem] focus:ring-primary/20 text-foreground"
                              />
                              {errors.name && (
                                <p className="text-sm text-destructive mt-1">{errors.name}</p>
                              )}
                            </div>

                            <div className="space-y-3 lg:space-y-2">
                              <Label htmlFor="email" className="text-base font-semibold text-foreground/90">
                                {t(dictionary, "contact.label_email")} <span className="text-primary">*</span>
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder={t(dictionary, "contact.placeholder_email")}
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="bg-[#1a1c23] border-[hsl(220,10%,20%)] h-12 sm:h-14 text-sm sm:text-lg lg:text-[1rem] focus:ring-primary/20 text-foreground"
                              />
                              {errors.email && (
                                <p className="text-sm text-destructive mt-1">{errors.email}</p>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-6 lg:gap-4">
                            <div className="space-y-3 lg:space-y-2">
                              <Label htmlFor="phone" className="text-base font-semibold text-foreground/90">
                                {t(dictionary, "contact.label_phone")} <span className="text-primary">*</span>
                              </Label>
                              <Input
                                id="phone"
                                type="tel"
                                placeholder={t(dictionary, "contact.placeholder_phone")}
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                className="bg-[#1a1c23] border-[hsl(220,10%,20%)] h-12 sm:h-14 text-sm sm:text-lg lg:text-[1rem] focus:ring-primary/20 text-foreground"
                              />
                              {errors.phone && (
                                <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                              )}
                            </div>

                            <div className="space-y-3 lg:space-y-2">
                              <Label htmlFor="website" className="text-base font-semibold text-foreground/90">
                                {t(dictionary, "contact.label_website")} <span className="text-muted-foreground font-normal">{t(dictionary, "contact.label_optional")}</span>
                              </Label>
                              <Input
                                id="website"
                                type="url"
                                placeholder={t(dictionary, "contact.placeholder_website")}
                                value={formData.website}
                                onChange={(e) => handleInputChange("website", e.target.value)}
                                className="bg-[#1a1c23] border-[hsl(220,10%,20%)] h-12 sm:h-14 text-sm sm:text-lg lg:text-[1rem] focus:ring-primary/20 text-foreground"
                              />
                            </div>
                          </div>

                          <div className="space-y-3 lg:space-y-2">
                            <Label htmlFor="need" className="text-base font-semibold text-foreground/90">
                              {t(dictionary, "contact.label_need")} <span className="text-primary">*</span>
                            </Label>
                            <Select
                              value={formData.need}
                              onValueChange={(value) => handleInputChange("need", value)}
                            >
                              <SelectTrigger className="bg-[#1a1c23] border-[hsl(220,10%,20%)] h-12 sm:h-14 text-sm sm:text-lg lg:text-[1rem] focus:ring-primary/20 text-foreground">
                                <SelectValue placeholder={t(dictionary, "contact.placeholder_select")} />
                              </SelectTrigger>
                              <SelectContent className="bg-[#111317] border-[hsl(220,10%,20%)]">
                                {needOptions.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                    className="text-lg py-3 cursor-pointer text-foreground/90 focus:bg-primary/10 focus:text-primary transition-colors"
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.need && (
                              <p className="text-sm text-destructive mt-1">{errors.need}</p>
                            )}
                          </div>

                          <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full h-16 lg:h-14 mt-6 lg:mt-4 glow-primary text-xl lg:text-lg font-bold transition-all active:scale-[0.98]"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                                {t(dictionary, "contact.btn_sending")}
                              </>
                            ) : (
                              t(dictionary, "contact.btn_send")
                            )}
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Column: Package Overview */}
                  <div className="h-full">
                    <div
                      className="relative rounded-3xl p-8 min-[900px]:p-10 lg:p-8 xl:p-10
                        bg-[#111317]
                        backdrop-blur-xl
                        border border-[hsl(220,10%,18%)]
                        shadow-[0_2rem_4rem_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.05)]
                        min-h-[500px] lg:min-h-[450px] flex flex-col h-full overflow-hidden"
                    >
                      <div className="flex items-center gap-3 mb-8 lg:mb-6">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold uppercase tracking-wider w-fit">
                          {t(dictionary, "contact.overview_tag")}
                        </div>
                        {isDefault && (
                          <span className="text-primary/60 text-xs md:text-sm font-bold italic animate-pulse">
                            {t(dictionary, "contact.overview_popular")}
                          </span>
                        )}
                      </div>

                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

                      <div className="relative z-10 flex flex-col h-full overflow-hidden">
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col">
                          <div className="mb-8">
                            <h3 className="text-3xl md:text-4xl lg:text-[2.35rem] font-bold text-foreground mb-3">
                              {needOptions.find(o => o.value === (formData.need || "Recommended Website"))?.label || effectiveNeed}
                            </h3>
                            {currentPackage.price !== "Custom" && currentPackage.price !== "Quote" && currentPackage.price !== "Ofertă" && currentPackage.price !== "TBD" && (
                              <div className="flex items-baseline gap-2">
                                <span className="text-4xl md:text-[2.2rem] font-extrabold text-primary pt-2">{currentPackage.price}</span>
                                <span className="text-muted-foreground text-lg font-medium">
                                  {effectiveNeed.includes("SEO") ? t(dictionary, "pricing.per_month") : t(dictionary, "pricing.per_project")}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="flex-grow overflow-y-auto pr-4 scrollbar-hide py-2">
                            <p className="text-muted-foreground text-lg md:text-xl lg:text-lg font-medium mb-6 lg:mb-4">{t(dictionary, "contact.overview_included")}</p>
                            <ul className="space-y-5 lg:space-y-3">
                              {currentPackage.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-4">
                                  <div className={`mt-1 flex-shrink-0 w-6 h-6 lg:w-5 lg:h-5 rounded-full flex items-center justify-center ${packageCategory === 'seo' ? 'bg-teal-500/20' : 'bg-primary/20'}`}>
                                    <Check className={`w-3.5 h-3.5 lg:w-3 lg:h-3 ${packageCategory === 'seo' ? 'text-teal-400' : 'text-primary'}`} />
                                  </div>
                                  <span className="text-foreground/90 text-lg md:text-xl lg:text-lg xl:text-2xl pb-2 font-medium leading-relaxed">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-8 pt-8 border-t border-[hsl(220,10%,20%)] lg:block hidden">
                            <p className="text-lg text-muted-foreground leading-relaxed italic opacity-80">
                              {t(dictionary, "contact.overview_quote")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Contact Card - INSIDE GRID FOR PERFECT ALIGNMENT */}
                  <div className="mt-8 min-[930px]:mt-16 min-[930px]:col-span-2 w-full">
                    <div className="relative rounded-3xl p-8 min-[900px]:p-10 lg:p-8 xl:p-10 min-[930px]:max-w-2xl mx-auto
                        bg-[#111317]
                        backdrop-blur-xl
                        border border-[hsl(220,10%,18%)]
                        shadow-[0_2rem_4rem_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.05)]
                        flex flex-col gap-6">

                      {/* Header */}
                      <div className="text-center sm:text-left">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full
                            bg-[#25D366]/10 border border-[#25D366]/20
                            text-[#25D366] text-xs font-bold uppercase tracking-wider mb-6 w-fit mx-auto sm:mx-0">
                          {t(dictionary, "contact.direct_tag")}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                          {t(dictionary, "contact.direct_title")}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto sm:mx-0 text-pretty">
                          {t(dictionary, "contact.direct_desc")}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-[hsl(220,10%,18%)]"></div>

                      {/* WhatsApp Contact */}
                      <a href="https://wa.me/40768919621?text=Hi%2C%20I'm%20interested%20in%20your%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col gap-1 items-center sm:items-start">

                        {/* Phone number row */}
                        <div className="flex items-center gap-3">
                          {/* WhatsApp icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 flex-shrink-0"
                            fill="#25D366">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
                                    -.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075
                                    -.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059
                                    -.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52
                                    .149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52
                                    -.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51
                                    -.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372
                                    -.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074
                                    .149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625
                                    .712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413
                                    .248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.571
                                    a.75.75 0 0 0 .92.92l5.716-1.471A11.943 11.943 0 0 0 12 24
                                    c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75
                                    a9.708 9.708 0 0 1-4.953-1.355l-.355-.211-3.674.944.982-3.573
                                    -.232-.368A9.715 9.715 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25
                                    S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                          </svg>
                          <span className="text-foreground font-semibold text-lg tracking-wide">
                            +40 768 919 621
                          </span>
                        </div>

                        {/* CTA row */}
                        <div className="flex items-center gap-2 pl-0 sm:pl-8
                            text-[#25D366] text-base font-medium
                            group-hover:gap-3 transition-all duration-200">
                          <span>{t(dictionary, "contact.direct_whatsapp")}</span>
                          <svg xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-200 group-hover:translate-x-1">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                        </div>
                      </a>

                      {/* Divider */}
                      <div className="border-t border-[hsl(220,10%,18%)]"></div>

                      {/* Hours */}
                      <p className="text-muted-foreground text-sm text-center sm:text-left">
                        {t(dictionary, "contact.direct_hours")}
                        <span className="text-foreground/40 pl-1">{t(dictionary, "contact.direct_timezone")}</span>
                      </p>
                      {/* Google Maps Section - NEW for Local SEO */}
                      <div className="mt-8 min-[930px]:mt-12 w-full max-w-2xl mx-auto overflow-hidden rounded-3xl border border-[hsl(220,10%,18%)] bg-[#111317] shadow-2xl">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.2272827173!2d24.5625000!3d46.5456000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474967cd20000001%3A0x0!2zQnVpdi4gMSBEZWNlbWJyaWUgMTkxOCAyMTMsIFTDonJndSBNdXJlyJl!5e0!3m2!1sen!2sro!4v1712784000000"
                          width="100%"
                          height="400"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Future Builds Location - Târgu Mureș"
                          className="opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
