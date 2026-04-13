"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea'; 
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface ReviewPageProps {
  dictionary: any;
  locale: string;
}

const GOOGLE_REVIEW_URL = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "https://g.page/r/your-google-review-link";

export default function ReviewPage({ dictionary, locale }: ReviewPageProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [step, setStep] = useState<'rating' | 'redirecting' | 'form' | 'success'>('rating');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = dictionary.review;

  const formSchema = z.object({
    name: z.string().min(1, t.err_name),
    service: z.string().min(1, t.err_service),
    feedback: z.string().min(1, t.err_message),
    email: z.string().email(dictionary.contact.err_email).optional().or(z.literal('')),
    bot_field: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      service: "",
      feedback: "",
      email: "",
      bot_field: "",
    },
  });

  // Handle 5-star redirect
  useEffect(() => {
    if (rating === 5) {
      setStep('redirecting');
      const timer = setTimeout(() => {
        window.location.href = GOOGLE_REVIEW_URL;
      }, 2000);
      return () => clearTimeout(timer);
    } else if (rating !== null && rating < 5) {
      setStep('form');
    }
  }, [rating]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          rating,
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setStep('success');
      toast.success(t.thank_you_title);
    } catch (error) {
      console.error(error);
      toast.error(t.err_generic);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

        <AnimatePresence mode="wait">
          {step === 'rating' && (
            <motion.div
              key="rating"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="text-muted-foreground mb-12 text-lg">
                {t.subtitle}
              </p>

              <div className="flex justify-center gap-3 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(null)}
                    onClick={() => setRating(star)}
                    className="relative focus:outline-none"
                  >
                    <Star
                      className={cn(
                        "w-10 h-10 md:w-14 md:h-14 transition-colors duration-200",
                        (hoveredRating || 0) >= star || (rating || 0) >= star
                          ? "fill-primary text-primary"
                          : "text-muted-foreground/30"
                      )}
                    />
                  </motion.button>
                ))}
              </div>
              <p className="text-sm font-medium text-muted-foreground/70">{t.stars_label}</p>
            </motion.div>
          )}

          {step === 'redirecting' && (
            <motion.div
              key="redirecting"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  >
                    <Loader2 className="w-10 h-10 text-primary" />
                  </motion.div>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">{t.redirecting}</h2>
            </motion.div>
          )}

          {step === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <Button 
                  variant="ghost" 
                  onClick={() => { setRating(null); setStep('rating'); }}
                  className="rounded-full"
                >
                  ← {dictionary.seo.breadcrumb_home}
                </Button>
                <h2 className="text-2xl font-bold">{t.form_title}</h2>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                   {/* Honeypot */}
                  <div className="hidden">
                    <FormField
                      control={form.control}
                      name="bot_field"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.label_name}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.placeholder_name} className="rounded-xl border-border bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.label_service}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-xl border-border bg-background">
                                <SelectValue placeholder={t.placeholder_service} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-xl">
                              {Object.entries(t.services).map(([key, value]) => (
                                <SelectItem key={key} value={value as string} className="rounded-lg">
                                  {value as string}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.label_email}</FormLabel>
                        <FormControl>
                          <Input placeholder={dictionary.contact.placeholder_email} className="rounded-xl border-border bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="feedback"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.label_message}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t.placeholder_message} 
                            className="rounded-xl border-border bg-background min-h-[120px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full rounded-xl py-6 text-lg font-bold shadow-lg shadow-primary/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {t.btn_sending}
                      </>
                    ) : t.btn_submit}
                  </Button>
                </form>
              </Form>
            </motion.div>
          )}

          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">{t.thank_you_title}</h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t.thank_you_desc}
              </p>
              <Button 
                variant="outline" 
                className="rounded-xl"
                onClick={() => window.location.href = `/${locale}`}
              >
                {dictionary.seo.breadcrumb_home}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
