import { HeroGeometric } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import FAQs from "@/components/faq";
import { CTASection } from "@/components/cta-section";

export default function Home() {
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
        badge="SECURE & SCALABLE IT SYSTEMS"
        title1="IT Infrastructure and Digital Solutions"
        title2="for Modern Business"
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
        title="Send us an email to discuss a new project"
        description="We are a team of creatives excited about unique ideas, helping companies create an amazing identity by crafting top-notch UI/UX."
        action={{
          text: "Contact us",
          href: "#contact"
        }}
      />
    </main>
  );
}
