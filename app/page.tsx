'use client';

import { HeroGeometric } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import FAQs from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t } = useLanguage();
  
  // TODO: Add your logo files to /public/assets/logos/ folder
  // Then update these paths to use local files like: "/assets/logos/your-logo.svg"
  const logos = [
    { src: "/assets/logos/wordpress.png", alt: "WordPress" },
    { src: "/assets/logos/shopify.png", alt: "Shopify" },
    { src: "/assets/logos/nodejs.png", alt: "Node.js" },
    { src: "/assets/logos/reactjs.png", alt: "React.js" },
    { src: "/assets/logos/mongodb.png", alt: "MongoDB" },
    { src: "/assets/logos/cpanel.png", alt: "cPanel" },
  ];

  return (
    <main>
      <HeroGeometric 
        badge={t('home.hero.badge')}
        title1={t('home.hero.title1')}
        title2={t('home.hero.title2')}
        description={t('home.hero.description')}
        secondDescription={t('home.hero.secondDescription')}
      />
      <section className="w-full py-12 bg-[#030303]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1300px] mx-auto overflow-hidden">
            <LogoCloud logos={logos} />
          </div>
        </div>
      </section>
      
      <ServicesSection />
      <TestimonialsSection />
      <FAQs />
      <CTASection 
        title={t('home.cta.title')}
        description={t('home.cta.description')}
        action={{
          text: t('home.cta.button'),
          href: "#contact"
        }}
      />
    </main>
  );
}
