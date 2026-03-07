"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  CursorCardsContainer,
  CursorCard,
} from "@/components/ui/cursor-cards";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import { useLanguage } from "@/lib/language-context";
import {
  Monitor,
  Network,
  Globe,
  Building2,
  Shield,
  Wifi,
  Cloud,
  TrendingUp,
  Database,
  Code,
  Headphones,
  Video,
  Check,
} from "lucide-react";

export default function ServicesPage() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Monitor,
      titleKey: "servicesPage.consulting.title",
      descKey: "servicesPage.consulting.desc",
      scopeKeys: [
        "servicesPage.consulting.scope1",
        "servicesPage.consulting.scope2",
        "servicesPage.consulting.scope3",
        "servicesPage.consulting.scope4",
      ],
    },
    {
      icon: Network,
      titleKey: "servicesPage.engineering.title",
      descKey: "servicesPage.engineering.desc",
      scopeKeys: [
        "servicesPage.engineering.scope1",
        "servicesPage.engineering.scope2",
        "servicesPage.engineering.scope3",
        "servicesPage.engineering.scope4",
      ],
    },
    {
      icon: Globe,
      titleKey: "servicesPage.smartcity.title",
      descKey: "servicesPage.smartcity.desc",
      scopeKeys: [
        "servicesPage.smartcity.scope1",
        "servicesPage.smartcity.scope2",
        "servicesPage.smartcity.scope3",
        "servicesPage.smartcity.scope4",
      ],
    },
    {
      icon: Building2,
      titleKey: "servicesPage.publicsector.title",
      descKey: "servicesPage.publicsector.desc",
      scopeKeys: [
        "servicesPage.publicsector.scope1",
        "servicesPage.publicsector.scope2",
        "servicesPage.publicsector.scope3",
        "servicesPage.publicsector.scope4",
      ],
    },
    {
      icon: Shield,
      titleKey: "servicesPage.security.title",
      descKey: "servicesPage.security.desc",
      scopeKeys: [
        "servicesPage.security.scope1",
        "servicesPage.security.scope2",
        "servicesPage.security.scope3",
        "servicesPage.security.scope4",
      ],
    },
    {
      icon: Wifi,
      titleKey: "servicesPage.networks.title",
      descKey: "servicesPage.networks.desc",
      scopeKeys: [
        "servicesPage.networks.scope1",
        "servicesPage.networks.scope2",
        "servicesPage.networks.scope3",
        "servicesPage.networks.scope4",
      ],
    },
    {
      icon: Cloud,
      titleKey: "servicesPage.cloud.title",
      descKey: "servicesPage.cloud.desc",
      scopeKeys: [
        "servicesPage.cloud.scope1",
        "servicesPage.cloud.scope2",
        "servicesPage.cloud.scope3",
        "servicesPage.cloud.scope4",
      ],
    },
    {
      icon: TrendingUp,
      titleKey: "servicesPage.bi.title",
      descKey: "servicesPage.bi.desc",
      scopeKeys: [
        "servicesPage.bi.scope1",
        "servicesPage.bi.scope2",
        "servicesPage.bi.scope3",
        "servicesPage.bi.scope4",
      ],
    },
    {
      icon: Database,
      titleKey: "servicesPage.erp.title",
      descKey: "servicesPage.erp.desc",
      scopeKeys: [
        "servicesPage.erp.scope1",
        "servicesPage.erp.scope2",
        "servicesPage.erp.scope3",
        "servicesPage.erp.scope4",
      ],
    },
    {
      icon: Code,
      titleKey: "servicesPage.digital.title",
      descKey: "servicesPage.digital.desc",
      scopeKeys: [
        "servicesPage.digital.scope1",
        "servicesPage.digital.scope2",
        "servicesPage.digital.scope3",
        "servicesPage.digital.scope4",
      ],
    },
    {
      icon: Headphones,
      titleKey: "servicesPage.contact.title",
      descKey: "servicesPage.contact.desc",
      scopeKeys: [
        "servicesPage.contact.scope1",
        "servicesPage.contact.scope2",
        "servicesPage.contact.scope3",
        "servicesPage.contact.scope4",
      ],
    },
    {
      icon: Video,
      titleKey: "servicesPage.multimedia.title",
      descKey: "servicesPage.multimedia.desc",
      scopeKeys: [
        "servicesPage.multimedia.scope1",
        "servicesPage.multimedia.scope2",
        "servicesPage.multimedia.scope3",
        "servicesPage.multimedia.scope4",
      ],
    },
  ];

  const glowColors = [
    "#6536a1", // purple
    "#3f97e7", // blue
    "#59dbe9", // light blue
    "#21dcdb", // cyan
    "#7cf8ee", // light cyan
    "#fddf60", // yellow
    "#ffbb01", // orange
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-foreground relative overflow-hidden">
      <AnimatedDotsBackground />
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-24 overflow-hidden">

        <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-start mb-8 sm:mb-12 md:mb-16"
          >
            <Badge className="mb-3 sm:mb-4 text-sm sm:text-base text-black">{t("servicesPage.badge")}</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
              <span className="text-[#77debb]">{t("servicesPage.title")}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-start uppercase font-semibold text-gray-300 mb-3 sm:mb-4">
              {t("servicesPage.subtitle")}
            </p>
            <p className="text-xs sm:text-sm text-white/70 max-w-4xl text-justify">
              {t("servicesPage.description")}
            </p>
          </motion.div>

          {/* Services Grid */}
          <CursorCardsContainer className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => {
              const glowColor = glowColors[index % glowColors.length];
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CursorCard 
                  className="h-full rounded-xl sm:rounded-2xl"
                  glowColor={glowColor}
                  borderColor={glowColor}
                  glowIntensity={500}
                >
                  <div className="relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 h-full group overflow-hidden bg-black/[0.7] border border-white/[0.12]">
                    {/* Glossy overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <div className="inline-flex p-3 sm:p-3.5 md:p-4 bg-[#34bb92]/10 rounded-lg sm:rounded-xl group-hover:bg-[#34bb92]/20 transition-colors backdrop-blur-sm">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#34bb92]" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-3.5 md:mb-4 group-hover:text-[#34bb92] transition-colors">
                  {t(service.titleKey)}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6 text-justify leading-relaxed">
                  {t(service.descKey)}
                </p>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-2.5 md:mb-3 text-gray-300">
                    {t("servicesPage.scopeLabel")}
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.scopeKeys.map((scopeKey, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400"
                      >
                        <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#34bb92] mt-0.5 flex-shrink-0" />
                        <span>{t(scopeKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                    </div>
                  </div>
                </CursorCard>
              </motion.div>
            )})}
          </CursorCardsContainer>
        </div>
      </section>
    </div>
  );
}
