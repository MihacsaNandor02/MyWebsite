import { Quote, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Maria Garcia",
    title: "Owner, Garcia's Tacos",
    quote: "Our old website looked nice but didn't bring in customers. Design Hug showed us websites need to be built for conversions. We launched in 3 weeks and got our first customer that week.",
  },
  {
    name: "Robert Chen",
    title: "Owner, Chen's Dental Practice",
    quote: "We struggled to get new patients. Within 90 days of launching our new website, we had 40+ appointment requests. We're now fully booked 3 weeks out.",
  },
  {
    name: "Angela Rodriguez",
    title: "Marketing Manager, HomeFix Construction",
    quote: "We went from 2-3 qualified leads per month to 12-15. The website is beautiful and actually brings in business. Can't recommend enough.",
  },
];

const TestimonialCard = ({ name, title, quote }: { name: string; title: string; quote: string }) => (
  <div className="relative p-8 rounded-3xl bg-card/60 backdrop-blur-md border border-border/50 shadow-[0_0.5rem_1.875rem_rgb(0,0,0,0.04)] min-w-[340px] max-w-[400px] mx-4 hover:border-primary/20 transition-all duration-300">
    {/* Quote Icon */}
    <div className="flex justify-center mb-6">
      <Quote className="w-8 h-8 text-primary/40" />
    </div>

    {/* Quote Text */}
    <p className="text-foreground/90 text-lg md:text-xl leading-relaxed text-center mb-6">
      "{quote}"
    </p>

    {/* Star Rating */}
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[hsl(var(--star-gold))] text-[hsl(var(--star-gold))]" />
      ))}
    </div>

    {/* Client Info */}
    <div className="text-center">
      <p className="text-foreground font-semibold text-base">{name}</p>
      <p className="text-muted-foreground text-sm mt-1">{title}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: true }
  );

  return (
    <section id="testimonials" className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real results from real businesses we've helped grow
            </p>
          </Reveal>
        </div>

        {/* Carousel */}
        <Reveal width="100%" delay={0.6}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex py-4">
              {/* Duplicate testimonials for seamless loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
