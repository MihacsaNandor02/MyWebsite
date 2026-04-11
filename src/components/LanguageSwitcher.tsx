"use client";

import { usePathname, useRouter, useParams } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params?.locale as string) || "ro";

  const changeLanguage = (lng: string) => {
    if (lng === currentLocale) return;

    // Get the part of the path after the locale
    // e.g., if pathname is /ro/privacy-policy, segments are ["", "ro", "privacy-policy"]
    const segments = pathname.split("/");
    segments[1] = lng;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  const isEn = currentLocale === "en";
  const isRo = currentLocale === "ro";

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <span
        onClick={() => changeLanguage("ro")}
        className={`cursor-pointer transition-colors ${
          isRo ? "text-foreground font-bold underline" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        RO
      </span>
      <span className="text-muted-foreground/30">|</span>
      <span
        onClick={() => changeLanguage("en")}
        className={`cursor-pointer transition-colors ${
          isEn ? "text-foreground font-bold underline" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </span>
    </div>
  );
};

export default LanguageSwitcher;
