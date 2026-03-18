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
    price: "$2,499",
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
    price: "$4,999",
    features: [
      "Everything in Essential",
      "Ready in 10 Days",
      "Traffic Tracking",
      "Top 5 On Google Guaranteed",
      "Full Website Optimization",
      "Stop Paying for Ads"
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

  const currentPackage = formData.need ? packageDetails[formData.need] : null;

  return (
    <section id={id || "contact"} className="py-24 px-4 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
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
              <div className="grid grid-cols-1 min-[930px]:grid-cols-2 gap-8 lg:gap-8 xl:gap-12 items-stretch max-w-2xl min-[930px]:max-w-6xl xl:max-w-7xl mx-auto">
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
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold uppercase tracking-wider mb-8 lg:mb-6 w-fit">
                      Selected Package
                    </div>

                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full overflow-hidden">
                      {currentPackage ? (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col">
                          <div className="mb-8">
                            <h3 className="text-3xl md:text-4xl lg:text-[2.35rem] font-bold text-foreground mb-3">{formData.need}</h3>
                            {currentPackage.price !== "Custom" && currentPackage.price !== "Quote" && currentPackage.price !== "TBD" && (
                              <div className="flex items-baseline gap-2">
                                <span className="text-4xl md:text-[2.2rem] font-extrabold text-primary pt-2">{currentPackage.price}</span>
                                <span className="text-muted-foreground text-lg font-medium">
                                  {formData.need.includes("SEO") ? "/month" : "/project"}
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
                      ) : (
                        <div className="flex flex-col items-center justify-center p-8 text-center flex-grow">
                          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                            <CheckCircle className="w-10 h-10 text-primary opacity-20" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-4">
                            Select a Package
                          </h3>
                          <p className="text-muted-foreground text-lg max-w-xs leading-relaxed">
                            Select what you need from the list to see the full plan details and pricing.
                          </p>
                        </div>
                      )}
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
