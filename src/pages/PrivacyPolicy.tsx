import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-4xl mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">Last Updated: March 18, 2026</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">1. Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly to us, such as when you fill out our contact form, including your name, email address, phone number, and website URL.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to communicate with you about our services, provide technical support, and improve our website and services.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">3. Data Security</h2>
          <p className="mb-4">We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">4. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:futurebuilds@futurebuilds.dev" className="text-primary hover:underline">futurebuilds@futurebuilds.dev</a>.</p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
