"use client";

import Header from "@/components/Header";
import { DictionaryProvider } from "@/components/DictionaryProvider";
import { t } from "@/lib/t";
import BackgroundEffect from "@/components/BackgroundEffect";

interface PolicyClientProps {
  dictionary: any;
  type: "privacy" | "terms";
}

const PolicyClient = ({ dictionary, type }: PolicyClientProps) => {
  const isPrivacy = type === "privacy";
  const baseKey = isPrivacy ? "policies.privacy" : "policies.terms";

  return (
    <DictionaryProvider dictionary={dictionary}>
      <div className="min-h-screen bg-background text-foreground relative">
        <BackgroundEffect />
        <Header />
        <main className="max-w-4xl mx-auto py-24 px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter">
            {t(dictionary, `${baseKey}.title`)}
          </h1>
          <p className="text-muted-foreground mb-12 font-medium">
            {t(dictionary, `${baseKey}.updated`)}
          </p>

          <div className="space-y-12">
            {[1, 2, 3, 4].map((num) => (
              <section key={num}>
                <h2 className="text-2xl font-bold mb-4 text-primary tracking-tight">
                  {t(dictionary, `${baseKey}.s${num}_t`)}
                </h2>
                <p className="text-lg leading-relaxed text-foreground/80">
                  {t(dictionary, `${baseKey}.s${num}_d`)}
                  {isPrivacy && num === 4 && (
                    <>
                      {" "}
                      <a href="mailto:contact@futurebuilds.ro" className="text-primary hover:underline font-semibold">
                        contact@futurebuilds.ro
                      </a>.
                    </>
                  )}
                </p>
              </section>
            ))}
          </div>
        </main>
      </div>
    </DictionaryProvider>
  );
};

export default PolicyClient;
