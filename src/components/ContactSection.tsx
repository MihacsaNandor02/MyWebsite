import { useState } from "react";
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
import { CheckCircle } from "lucide-react";
import { z } from "zod";
import { Reveal } from "./Reveal";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  website: z.string().trim().max(255).optional(),
  need: z.string().min(1, "Please select an option"),
});

type FormData = z.infer<typeof formSchema>;

type Step = "form" | "calendly" | "confirmation";

const needOptions = [
  { value: "new-website", label: "New website from scratch" },
  { value: "redesign", label: "Website redesign" },
  { value: "conversions", label: "Improve conversions / get more leads" },
  { value: "seo", label: "SEO / performance improvements" },
  { value: "not-sure", label: "Not sure yet" },
];

const ContactSection = () => {
  const [step, setStep] = useState<Step>("form");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    website: "",
    need: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
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

    setStep("calendly");
  };

  const handleBookingComplete = () => {
    setStep("confirmation");
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-xl mx-auto">
        <Reveal width="100%">
          <>
            {/* Step 1: Qualification Form */}
            {step === "form" && (
              <div
                className="relative rounded-2xl p-8 md:p-10
                  bg-[hsl(220,15%,8%)]/80 
                  backdrop-blur-xl
                  border border-[hsl(220,10%,18%)]
                  shadow-[0_0.25rem_1.875rem_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.03)]"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  {/* Header */}
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Book Your Free Strategy Call
                  </h2>
                  <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                    In 15 minutes, we'll audit your current site and show you a roadmap to Page 1.
                    <span className="block mt-2 font-semibold text-primary">Get your custom mockup design — on us.</span>
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-[hsl(220,15%,12%)] border-[hsl(220,10%,20%)] text-foreground placeholder:text-muted-foreground focus:border-primary"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-[hsl(220,15%,12%)] border-[hsl(220,10%,20%)] text-foreground placeholder:text-muted-foreground focus:border-primary"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-muted-foreground">
                        Phone <span className="text-muted-foreground text-sm">(optional)</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-[hsl(220,15%,12%)] border-[hsl(220,10%,20%)] text-foreground placeholder:text-muted-foreground focus:border-primary"
                      />
                    </div>

                    {/* Website URL */}
                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-muted-foreground">
                        Website URL <span className="text-muted-foreground text-sm">(optional)</span>
                      </Label>
                      <Input
                        id="website"
                        type="url"
                        placeholder="https://yourwebsite.com"
                        value={formData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        className="bg-[hsl(220,15%,12%)] border-[hsl(220,10%,20%)] text-foreground placeholder:text-muted-foreground focus:border-primary"
                      />
                    </div>

                    {/* What do you need? */}
                    <div className="space-y-2">
                      <Label htmlFor="need" className="text-foreground">
                        What do you need? <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.need}
                        onValueChange={(value) => handleInputChange("need", value)}
                      >
                        <SelectTrigger className="bg-[hsl(220,15%,12%)] border-[hsl(220,10%,20%)] text-foreground focus:border-primary">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-[hsl(220,15%,10%)] border-[hsl(220,10%,20%)]">
                          {needOptions.map((option) => (
                            <SelectItem
                              key={option.value}
                              value={option.value}
                              className="text-foreground focus:bg-[hsl(220,15%,15%)] focus:text-foreground"
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.need && (
                        <p className="text-sm text-destructive">{errors.need}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full mt-6 glow-primary"
                    >
                      Continue to Scheduling
                    </Button>
                  </form>
                </div>
              </div>
            )}

            {/* Step 2: Calendly Scheduling */}
            {step === "calendly" && (
              <div
                className="relative rounded-2xl p-8 md:p-10
                  bg-[hsl(220,15%,8%)]/80 
                  backdrop-blur-xl
                  border border-[hsl(220,10%,18%)]
                  shadow-[0_0.25rem_1.875rem_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.03)]"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  {/* Header */}
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
                    Schedule Your Free Discovery Call
                  </h2>
                  <p className="text-muted-foreground text-center mb-8">
                    15–30 minutes • No obligation • No sales pitch
                  </p>

                  {/* Calendly Embed Placeholder */}
                  <div className="bg-[hsl(220,15%,12%)] rounded-xl p-8 min-h-[400px] flex flex-col items-center justify-center border border-[hsl(220,10%,20%)]">
                    <p className="text-muted-foreground text-center mb-6">
                      Calendly widget will appear here.
                      <br />
                      <span className="text-sm">
                        Pre-filled with: {formData.name} ({formData.email})
                      </span>
                    </p>

                    {/* Simulated booking button for demo */}
                    <Button
                      onClick={handleBookingComplete}
                      size="lg"
                      className="glow-primary"
                    >
                      Simulate Booking Complete
                    </Button>
                  </div>

                  {/* Back button */}
                  <button
                    onClick={() => setStep("form")}
                    className="mt-6 text-muted-foreground hover:text-foreground text-sm transition-colors w-full text-center"
                  >
                    ← Back to form
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === "confirmation" && (
              <div
                className="relative rounded-2xl p-8 md:p-10
                  bg-[hsl(220,15%,8%)]/80 
                  backdrop-blur-xl
                  border border-[hsl(220,10%,18%)]
                  shadow-[0_4px_30px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.03)]
                  text-center"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  {/* Success Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                  </div>

                  {/* Success Message */}
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    You're All Set!
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Your discovery call has been scheduled. Check your email for the calendar invite and meeting details.
                  </p>

                  {/* What to Expect */}
                  <div className="bg-[hsl(220,15%,12%)] rounded-xl p-6 text-left border border-[hsl(220,10%,20%)]">
                    <h3 className="text-foreground font-semibold mb-3">What to expect:</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• We'll discuss your goals and current challenges</li>
                      <li>• You'll get a clear roadmap for your project</li>
                      <li>• No pressure, no sales pitch—just helpful guidance</li>
                    </ul>
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
