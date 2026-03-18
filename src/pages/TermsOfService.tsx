import Header from "@/components/Header";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-4xl mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-6">Last Updated: March 18, 2026</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">1. Acceptance of Terms</h2>
          <p className="mb-4">By accessing our website and using our services, you agree to be bound by these Terms of Service.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">2. Services</h2>
          <p className="mb-4">Future Builds provides web design and SEO services. All services are subject to the terms of individual project agreements.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">3. Intellectual Property</h2>
          <p className="mb-4">The content, design, and proprietary tools used by Future Builds are protected by intellectual property laws.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">4. Limitation of Liability</h2>
          <p className="mb-4">Future Builds shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our services.</p>
        </section>
      </main>
    </div>
  );
};

export default TermsOfService;
