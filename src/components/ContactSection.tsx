import { useState, useEffect } from "react";
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

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(5, "Phone number is required").max(20),
  website: z.string().trim().max(255).optional(),
  need: z.string().min(1, "Please select an option"),
  timezone: z.string().optional(),
});

interface ContactSectionProps {
  initialPackage?: string | null;
  packageCategory?: 'website' | 'seo' | null;
  id?: string;
}

type FormData = z.infer<typeof formSchema>;

type Step = "form" | "confirmation";

const needOptions = [
  { value: "Essential Website", label: "Essential Website" },
  { value: "Recommended Website", label: "Recommended Website" },
  { value: "Custom Website", label: "Custom Website" },
  { value: "Local SEO", label: "Local SEO" },
  { value: "Growth SEO", label: "Growth SEO" },
  { value: "Not sure yet", label: "Not sure yet" },
];

const packageDetails: Record<string, { price: string; features: string[] }> = {
  "Essential Website": {
    price: "€2,499",
    features: [
      "Free Mockup Included",
      "Custom High-End Design",
      "Conversion Optimization",
      "Mobile & Speed Optimization",
      "Standard Website SEO",
      "1 Month Unlimited Modifications"
    ]
  },
  "Recommended Website": {
    price: "€4,999",
    features: [
      "Everything in Essential",
      "Ready in 10 Days",
      "Traffic Tracking",
      "Top 5 On Google Guaranteed",
      "Full Website Optimization",
      "Organic Traffic Setup"
    ]
  },
  "Custom Website": {
    price: "Quote",
    features: [
      "Everything in Recommended",
      "Built Around You",
      "E-Commerce Ready",
      "Website Redesign",
      "Custom Quote"
    ]
  },
  "Local SEO": {
    price: "€250",
    features: [
      "Get Found on Google Maps",
      "Rank for Main Keyword",
      "Competitor Analysis",
      "Bi-Weekly Updates",
      "Monthly Progress Reports"
    ]
  },
  "Growth SEO": {
    price: "€319",
    features: [
      "Top 3 on Google in 90 Days",
      "Rank for Multiple Keywords",
      "Full Site Optimization",
      "Beat Top Competitors",
      "Monthly Progress Reports"
    ]
  },
  "Not sure yet": {
    price: "TBD",
    features: [
      "Strategy Session Included",
      "Goal Alignment",
      "Tech Audit & Review",
      "Custom Roadmap Planning",
      "Find the Best Fit for You"
    ]
  }
};

/**
 * PASTE YOUR GOOGLE APPS SCRIPT URL HERE
 */
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxuEILaezFqyOX3jhif1xa4b8zFBT8-AKI-eTmMl-kgdF0xfay-qpDyM2CCH7vUGMG_/exec";

const ContactSection: React.FC<ContactSectionProps> = ({ initialPackage, packageCategory, id }) => {
  const [step, setStep] = useState<Step>("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    website: "",
    need: initialPackage || "",
    timezone: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

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
      result.error.errors.forEach((err) => {
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
    <section id={id || "contact"} className="pb-16 pt-20 lg:mt-12 px-4 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <Reveal width="100%">
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-foreground mb-6">
              Get Started in <span className="text-primary italic">Just 2 Minutes</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-muted-foreground text-lg sm:text-xl xl:text-2xl max-w-2xl mx-auto font-medium">
              Tell us about your business and the package you’re interested in.
            </p>
          </Reveal>
        </div>

        <Reveal width="100%">
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
                      Inquiry Received!
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Thanks for reaching out! We've received your details and our team will review your project and get back to you within 24 hours.
                    </p>
                    <div className="bg-[#1a1c23] rounded-xl p-6 text-left border border-[hsl(220,10%,20%)]">
                      <h3 className="text-foreground font-semibold mb-3">Next Steps:</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Check your inbox for a confirmation email</li>
                        <li>• We'll analyze your website/market niche</li>
                        <li>• Expect a custom proposal or a quick follow-up call</li>
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
                        Start Your Project
                      </div>

                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

                      <div className="relative z-10 flex-grow">
                        <h2 className="text-3xl md:text-4xl lg:text-[2.35rem] font-bold text-foreground mb-10">
                          Let's Build Something <span className="text-primary">Great</span>
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-5 mt-4">
                          <div className="grid grid-cols-1 gap-6 lg:gap-4">
                            <div className="space-y-3 lg:space-y-2">
                              <Label htmlFor="name" className="text-base font-semibold text-foreground/90">
                                Name <span className="text-primary">*</span>
                              </Label>
                              <Input
                                id="name"
                                type="text"
                                placeholder="Jane Smith"
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
                                Email <span className="text-primary">*</span>
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="jane@company.com"
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
                                Phone <span className="text-primary">*</span>
                              </Label>
                              <Input
                                id="phone"
                                type="tel"
                                placeholder="+1 (555) 000-0000"
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
                                Website URL <span className="text-muted-foreground font-normal">(optional)</span>
                              </Label>
                              <Input
                                id="website"
                                type="url"
                                placeholder="https://yoursite.com"
                                value={formData.website}
                                onChange={(e) => handleInputChange("website", e.target.value)}
                                className="bg-[#1a1c23] border-[hsl(220,10%,20%)] h-12 sm:h-14 text-sm sm:text-lg lg:text-[1rem] focus:ring-primary/20 text-foreground"
                              />
                            </div>
                          </div>

                          <div className="space-y-3 lg:space-y-2">
                            <Label htmlFor="need" className="text-base font-semibold text-foreground/90">
                              What do you need? <span className="text-primary">*</span>
                            </Label>
                            <Select
                              value={formData.need}
                              onValueChange={(value) => handleInputChange("need", value)}
                            >
                              <SelectTrigger className="bg-[#1a1c23] border-[hsl(220,10%,20%)] h-12 sm:h-14 text-sm sm:text-lg lg:text-[1rem] focus:ring-primary/20 text-foreground">
                                <SelectValue placeholder="Select an option" />
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
                                Sending...
                              </>
                            ) : (
                              "Send Message"
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
                          Selected Package
                        </div>
                        {isDefault && (
                          <span className="text-primary/60 text-xs md:text-sm font-bold italic animate-pulse">
                            ← Most popular choice
                          </span>
                        )}
                      </div>

                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

                      <div className="relative z-10 flex flex-col h-full overflow-hidden">
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col">
                          <div className="mb-8">
                            <h3 className="text-3xl md:text-4xl lg:text-[2.35rem] font-bold text-foreground mb-3">{effectiveNeed}</h3>
                            {currentPackage.price !== "Custom" && currentPackage.price !== "Quote" && currentPackage.price !== "TBD" && (
                              <div className="flex items-baseline gap-2">
                                <span className="text-4xl md:text-[2.2rem] font-extrabold text-primary pt-2">{currentPackage.price}</span>
                                <span className="text-muted-foreground text-lg font-medium">
                                  {effectiveNeed.includes("SEO") ? "/month" : "/project"}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="flex-grow overflow-y-auto pr-4 scrollbar-hide py-2">
                            <p className="text-muted-foreground text-lg md:text-xl lg:text-lg font-medium mb-6 lg:mb-4">What's included in this plan:</p>
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
                              "Our goal is to build you a website that doesn't just look pretty, but actually acts as a 24/7 salesperson for your business."
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
                          Direct Contact
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                          Let's talk directly
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto sm:mx-0 text-pretty">
                          Prefer a quicker conversation? Reach us on WhatsApp and we'll
                          get back to you within a few hours.
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
                          <span>Chat on WhatsApp</span>
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
                        Mon – Fri, 9:00 – 18:00
                        <span className="text-foreground/40 pl-1">(Romania time)</span>
                      </p>
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
