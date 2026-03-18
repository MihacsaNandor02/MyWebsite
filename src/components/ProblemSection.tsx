import { UserMinus, EyeOff, Receipt, LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

interface Problem {
  icon: LucideIcon;
  text: string;
}

const problems: Problem[] = [
  {
    icon: UserMinus,
    text: "Your website is invisible on Google, while competitors on page 1 steal your leads every day.",
  },
  {
    icon: EyeOff,
    text: "No website means no visibility, no growth, and low credibility — while you’re stuck chasing customers offline.",
  },
  {
    icon: Receipt,
    text: "People are searching for your business right now — but with no website, they find your competitors instead.",
  },
];

const ProblemSection = () => {
  return (
    <section className="pt-16 pb-24 sm:pb-8 px-4 xl:mb-10 ">
      <div className="max-w-[95%] md:max-w-none justify-items-center mx-auto">
        {/* Section Headline */}
        <Reveal width="100%">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-extrabold text-center text-foreground mb-8 sm:mb-10 xl:mb- max-w-4xl mx-auto leading-tight xl:leading-[3.5rem] tracking-tight">
            Your Website Should Be Making You Money,{" "}
            <span className="text-primary italic">Not &nbsp;Lose You Customers</span>
          </h2>
        </Reveal>

        {/* Problem Cards Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[410px] sm:max-w-[65%] md:max-w-none xl:max-w-[85%] xl:gap-x-10">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Reveal key={index} delay={0.2 + index * 0.1} fullHeight width="100%">
                  <div
                    className="relative h-full group rounded-3xl p-8 flex flex-col items-center
                    bg-card/50 
                    backdrop-blur-xl
                    border border-border/50
                    shadow-[0_0.5rem_1.875rem_rgb(0,0,0,0.04),inset_0_1px_0_0_rgba(255,255,255,0.1)]
                    hover:border-primary/30
                    hover:shadow-[0_1.25rem_2.5rem_rgba(0,0,0,0.08)]
                    transition-all duration-300 hover:-translate-y-1 cursor-pointer
                    pb-12"
                  >
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                    {/* Icon */}
                    <div className="mb-6 relative z-10 p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-10 h-10 text-primary" strokeWidth={2} />
                    </div>

                    {/* Problem Text */}
                    <p className="text-lg sm:text-xl xl:text-2xl text-[hsl(220,10%,70%)] font-medium leading-relaxed xl:leading-[2.4rem] text-center relative z-10">
                      {problem.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
