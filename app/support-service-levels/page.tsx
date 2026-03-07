"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import { CursorCardsContainer, CursorCard } from "@/components/ui/cursor-cards";
import { Check, Monitor, Headphones, Users } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function SupportServiceLevelsPage() {
  const { t } = useLanguage();
  
  const glowColors = [
    "#6536a1", // purple
    "#3f97e7", // blue
    "#59dbe9", // light blue
  ];

  const supportPackages = [
    {
      titleKey: "supportPage.basic.title",
      descKey: "supportPage.basic.desc",
      icon: Monitor,
      includeKeys: [
        "supportPage.basic.include1",
        "supportPage.basic.include2",
        "supportPage.basic.include3",
        "supportPage.basic.include4",
        "supportPage.basic.include5",
      ],
      gradient: "from-[#34bb92] to-[#2da578]",
    },
    {
      titleKey: "supportPage.remote247.title",
      descKey: "supportPage.remote247.desc",
      icon: Headphones,
      includeKeys: [
        "supportPage.remote247.include1",
        "supportPage.remote247.include2",
        "supportPage.remote247.include3",
        "supportPage.remote247.include4",
        "supportPage.remote247.include5",
      ],
      gradient: "from-[#34bb92] to-[#2da578]",
    },
    {
      titleKey: "supportPage.fullonsite.title",
      descKey: "supportPage.fullonsite.desc",
      icon: Users,
      includeKeys: [
        "supportPage.fullonsite.include1",
        "supportPage.fullonsite.include2",
        "supportPage.fullonsite.include3",
        "supportPage.fullonsite.include4",
        "supportPage.fullonsite.include5",
      ],
      gradient: "from-[#34bb92] to-[#2da578]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-foreground relative overflow-hidden">
      <AnimatedDotsBackground />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 overflow-hidden">
        <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-start mb-8 sm:mb-12 md:mb-16"
          >
            <Badge className="mb-3 sm:mb-4 text-sm sm:text-base text-black">{t("supportPage.badge")}</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-[#77debb]">
              {t("supportPage.title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-start uppercase font-semibold text-gray-300 mb-3 sm:mb-4">
              {t("supportPage.subtitle")}
            </p>
            <p className="text-xs sm:text-sm text-white/70 max-w-4xl text-justify">
              {t("supportPage.description")}
            </p>
          </motion.div>

          {/* Support Packages Grid */}
          <CursorCardsContainer className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 md:auto-rows-fr">
            {supportPackages.map((pkg, index) => {
              const glowColor = glowColors[index % glowColors.length];
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex"
              >
                <CursorCard 
                  className="h-full rounded-2xl sm:rounded-3xl w-full"
                  glowColor={glowColor}
                  borderColor={glowColor}
                  glowIntensity={500}
                >
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black/[0.7] border border-white/[0.12] flex flex-col gap-2 sm:gap-3 p-3 sm:p-4 shadow-lg w-full h-full">
                    {/* Glossy overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col gap-2 sm:gap-3 h-full">
                      {/* Header */}
                      <div className="shrink-0">
                        <div
                          className={`bg-gradient-to-r ${pkg.gradient} rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6`}
                        >
                          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <pkg.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                            <p className="text-xs sm:text-sm font-semibold text-black">DHP</p>
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-black">
                            {t(pkg.titleKey)}
                          </h3>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow p-2 sm:p-3 flex flex-col min-h-0">
                        {/* Package Description */}
                        <div className="min-h-[100px] sm:min-h-[120px] mb-3 sm:mb-4">
                          <p className="text-gray-300 text-xs text-justify leading-relaxed">
                            {t(pkg.descKey)}
                          </p>
                        </div>

                        {/* Includes Section */}
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-white">
                            {t("supportPage.includesLabel")}
                          </h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {pkg.includeKeys.map((includeKey, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 sm:gap-3 text-gray-300"
                              >
                                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#34bb92] mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm">{t(includeKey)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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
