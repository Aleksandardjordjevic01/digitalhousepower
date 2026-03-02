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
import { useLanguage } from '@/lib/language-context';

export const ServicesSection = () => {
  const { t } = useLanguage();
  const customColors = ['#56ede5', '#fed21e'];
  
  return (
    <section className="w-full py-16 bg-[#030303]">
      <div className="container mx-auto px-4">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-xl sm:text-3xl font-bold text-white text-start mb-4">
            {t('services.title')}
          </h2>
          <p className="text-start text-gray-400 mb-12 max-w-3xl text-sm">
            {t('services.subtitle')}
          </p>
          
          <CursorCardsContainer className="bento-grid">
            <CursorCard 
              className="h-full rounded-2xl"
              customGradientColors={customColors}
              glowIntensity={400}
            >
              <BentoItem
                icon={<LayoutTemplate className="w-6 h-6 text-black" />}
                title={t('services.web.title')}
                description={t('services.web.desc')}
              />
            </CursorCard>
            
            <CursorCard 
              className="h-full rounded-2xl"
              customGradientColors={customColors}
              glowIntensity={400}
            >
              <BentoItem
                icon={<Palette className="w-6 h-6 text-black" />}
                title={t('services.design.title')}
                description={t('services.design.desc')}
              />
            </CursorCard>
            
            <CursorCard 
              className="h-full rounded-2xl"
              customGradientColors={customColors}
              glowIntensity={400}
            >
              <BentoItem
                icon={<Megaphone className="w-6 h-6 text-black" />}
                title={t('services.marketing.title')}
                description={t('services.marketing.desc')}
              />
            </CursorCard>
            
            <CursorCard 
              className="h-full rounded-2xl"
              customGradientColors={customColors}
              glowIntensity={400}
            >
              <BentoItem
                icon={<Wrench className="w-6 h-6 text-black" />}
                title={t('services.maintenance.title')}
                description={t('services.maintenance.desc')}
              />
            </CursorCard>
            
            <CursorCard 
              className="h-full rounded-2xl"
              customGradientColors={customColors}
              glowIntensity={400}
            >
              <BentoItem
                icon={<ShoppingCart className="w-6 h-6 text-black" />}
                title={t('services.ecommerce.title')}
                description={t('services.ecommerce.desc')}
              />
            </CursorCard>
            
            <CursorCard 
              className="h-full rounded-2xl"
              customGradientColors={customColors}
              glowIntensity={400}
            >
              <BentoItem
                icon={<TrendingUp className="w-6 h-6 text-black" />}
                title={t('services.seo.title')}
                description={t('services.seo.desc')}
              />
            </CursorCard>
          </CursorCardsContainer>
        </div>
      </div>
    </section>
  );
};
