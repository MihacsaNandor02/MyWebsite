import Header from "@/components/Header";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-4xl mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold mb-8">{t('policies.privacy.title')}</h1>
        <p className="text-muted-foreground mb-6">{t('policies.privacy.updated')}</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">{t('policies.privacy.s1_t')}</h2>
          <p className="mb-4">{t('policies.privacy.s1_d')}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">{t('policies.privacy.s2_t')}</h2>
          <p className="mb-4">{t('policies.privacy.s2_d')}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">{t('policies.privacy.s3_t')}</h2>
          <p className="mb-4">{t('policies.privacy.s3_d')}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">{t('policies.privacy.s4_t')}</h2>
          <p className="mb-4">
            {t('policies.privacy.s4_d')}
            <a href="mailto:futurebuilds@futurebuilds.dev" className="text-primary hover:underline">futurebuilds@futurebuilds.dev</a>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
