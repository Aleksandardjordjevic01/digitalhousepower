'use client';

import { BentoItem } from './bento-item';
import { CursorCard, CursorCardsContainer } from './ui/cursor-cards';
import { 
  LayoutTemplate, 
  Palette, 
  Megaphone, 
  Wrench, 
  ShoppingCart, 
  TrendingUp 
} from 'lucide-react';

export const ServicesSection = () => {
  const customColors = ['#56ede5', '#fed21e'];
  
  return (
    <section className="w-full py-16 bg-[#030303]">
      <div className="container mx-auto px-4">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-xl sm:text-3xl font-bold text-white text-start mb-4">
            Digital services we provide
          </h2>
          <p className="text-start text-gray-400 mb-12 max-w-3xl text-sm">
            We combine design, development, and marketing to ensure your business has a strong and visible online presence.
          </p>
          
          <CursorCardsContainer className="bento-grid">
            <CursorCard 
              className="h-full rounded-2xl"
              customGradientColors={customColors}
              glowIntensity={400}
            >
              <BentoItem
                icon={<LayoutTemplate className="w-6 h-6 text-black" />}
                title="WEBSITE DEVELOPMENT"
                description="Modern, responsive, and functional sites tailored to your brand."
              />
            </CursorCard>
            
            <CursorCard 
              className="h-full rounded-2xl"
              customGradientColors={customColors}
              glowIntensity={400}
            >
              <BentoItem
                icon={<Palette className="w-6 h-6 text-black" />}
                title="GRAPHIC DESIGN"
                description="Creative visual solutions for online and offline communication."
              />
            </CursorCard>
            
            <CursorCard 
              className="h-full rounded-2xl"
              customGradientColors={customColors}
              glowIntensity={400}
            >
              <BentoItem
                icon={<Megaphone className="w-6 h-6 text-black" />}
                title="DIGITAL MARKETING"
                description="Result-driven campaigns – advertising, social media, SEO."
              />
            </CursorCard>
            
            <CursorCard 
              className="h-full rounded-2xl"
              customGradientColors={customColors}
              glowIntensity={400}
            >
              <BentoItem
                icon={<Wrench className="w-6 h-6 text-black" />}
                title="MAINTENANCE & SUPPORT"
                description="Worry-free care for your website and systems, with no stress or downtime."
              />
            </CursorCard>
            
            <CursorCard 
              className="h-full rounded-2xl"
              customGradientColors={customColors}
              glowIntensity={400}
            >
              <BentoItem
                icon={<ShoppingCart className="w-6 h-6 text-black" />}
                title="E-COMMERCE SOLUTIONS"
                description="Online stores that sell, websites that convert designed to engage and built to perform."
              />
            </CursorCard>
            
            <CursorCard 
              className="h-full rounded-2xl"
              customGradientColors={customColors}
              glowIntensity={400}
            >
              <BentoItem
                icon={<TrendingUp className="w-6 h-6 text-black" />}
                title="SEO OPTIMIZATION"
                description="Better search engine ranking, more visitors and clients bringing your business the visibility it deserves."
              />
            </CursorCard>
          </CursorCardsContainer>
        </div>
      </div>
    </section>
  );
};
