import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load page components
const Index = lazy(() => import("./pages/Index"));
// const Services = lazy(() => import("./pages/Services"));
// const LandingPagesService = lazy(() => import("./pages/LandingPagesService"));
// const SEOService = lazy(() => import("./pages/SEOService"));
// const WebsiteRedesignService = lazy(() => import("./pages/WebsiteRedesignService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" /></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* 
            <Route path="/services" element={<Services />} />
            <Route path="/services/landing-pages" element={<LandingPagesService />} />
            <Route path="/services/seo" element={<SEOService />} />
            <Route path="/services/website-redesign" element={<WebsiteRedesignService />} />
            */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
