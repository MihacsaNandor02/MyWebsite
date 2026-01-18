const ProblemSection = () => {
  const problems = [
    "You're losing customers to competitors with better websites",
    "You don't know if your website is actually bringing in leads",
    "You've been quoted $5K–$15K by agencies for something simple",
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16 max-w-4xl mx-auto leading-tight">
          Your Website Should Be Making You Money,{" "}
          <span className="text-[hsl(220,10%,50%)]">Not Costing You Time</span>
        </h2>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-8 min-h-[180px] flex items-center
                bg-[hsl(220,15%,8%)]/80 
                backdrop-blur-xl
                border border-[hsl(220,10%,18%)]
                shadow-[0_4px_30px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.03)]
                hover:border-[hsl(220,10%,25%)]
                transition-all duration-300"
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
              
              <p className="text-lg md:text-xl text-[hsl(220,10%,70%)] font-medium leading-relaxed relative z-10">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
