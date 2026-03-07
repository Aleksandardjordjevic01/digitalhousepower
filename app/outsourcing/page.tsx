"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import { CursorCardsContainer, CursorCard } from "@/components/ui/cursor-cards";
import { Check, Users, Target, Code, Handshake } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function OutsourcingPage() {
  const { t } = useLanguage();
  const glowColors = ["#6536a1", "#3f97e7", "#59dbe9", "#21dcdb", "#7cf8ee", "#fddf60", "#ffbb01"];

  const clientNeeds = [
    "outsourcingPage.need1",
    "outsourcingPage.need2",
    "outsourcingPage.need3",
    "outsourcingPage.need4",
  ];

  const expertise = [
    "outsourcingPage.expertise1",
    "outsourcingPage.expertise2",
    "outsourcingPage.expertise3",
    "outsourcingPage.expertise4",
    "outsourcingPage.expertise5",
    "outsourcingPage.expertise6",
    "outsourcingPage.expertise7",
    "outsourcingPage.expertise8",
  ];

  const approaches = [
    {
      titleKey: "outsourcingPage.approach1Title",
      descKey: "outsourcingPage.approach1Desc",
      icon: Target,
    },
    {
      titleKey: "outsourcingPage.approach2Title",
      descKey: "outsourcingPage.approach2Desc",
      icon: Users,
    },
    {
      titleKey: "outsourcingPage.approach3Title",
      descKey: "outsourcingPage.approach3Desc",
      icon: Code,
    },
    {
      titleKey: "outsourcingPage.approach4Title",
      descKey: "outsourcingPage.approach4Desc",
      icon: Handshake,
    },
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
            className="text-start mb-6 sm:mb-7 md:mb-8"
          >
            <Badge className="mb-3 sm:mb-4 text-sm sm:text-base text-black">{t("outsourcingPage.badge")}</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
              <span className="text-[#77debb]">{t("outsourcingPage.title")}</span>
            </h1>
          </motion.div>

          {/* Partner Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">
              {t("outsourcingPage.partnerTitle")}
            </h2>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-300 text-justify leading-relaxed max-w-5xl">
              <p>
                {t("outsourcingPage.intro1")}
              </p>
              <p>
                {t("outsourcingPage.intro2")}
              </p>
              <p>
                {t("outsourcingPage.intro3")}
              </p>
            </div>
          </motion.div>

          {/* How We Work Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 sm:mb-7 md:mb-8"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{t("outsourcingPage.howWeWorkTitle")}</h2>
            <p className="text-gray-300 text-justify text-xs sm:text-sm leading-relaxed max-w-5xl mb-6 sm:mb-7 md:mb-8">
              {t("outsourcingPage.howWeWorkDesc1")}
            </p>
            <p className="text-gray-300 text-justify text-xs sm:text-sm leading-relaxed max-w-5xl mb-8 sm:mb-10 md:mb-12">
              {t("outsourcingPage.howWeWorkDesc2")}
            </p>

            <ul className="space-y-2 sm:space-y-3 max-w-4xl mb-10 sm:mb-12 md:mb-16">
              {clientNeeds.map((needKey, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 text-gray-300"
                >
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#34bb92] mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{t(needKey)}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-xs sm:text-sm text-justify leading-relaxed max-w-5xl">
              {t("outsourcingPage.standards")}
            </p>
          </motion.div>

          {/* Approach Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 sm:mb-7 md:mb-8"
          >
            <CursorCardsContainer className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {approaches.map((approach, index) => {
                const glowColor = glowColors[index % glowColors.length];
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <CursorCard 
                    className="h-full rounded-xl sm:rounded-2xl"
                    glowColor={glowColor}
                    borderColor={glowColor}
                    glowIntensity={500}
                  >
                    <div className="relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 h-full bg-black/[0.7] border border-white/[0.12]">
                      {/* Glossy overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none rounded-xl sm:rounded-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none rounded-xl sm:rounded-2xl" />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="mb-3 sm:mb-4 p-3 sm:p-4 bg-[#34bb92]/10 rounded-lg sm:rounded-xl inline-flex">
                          <approach.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#34bb92]" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                          {t(approach.titleKey)}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm text-justify leading-relaxed">
                          {t(approach.descKey)}
                        </p>
                      </div>
                    </div>
                  </CursorCard>
                </motion.div>
              )})}
            </CursorCardsContainer>
          </motion.div>

          {/* Areas of Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">
              {t("outsourcingPage.expertiseTitle")}
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm text-justify leading-relaxed max-w-5xl mb-6 sm:mb-7 md:mb-8">
              {t("outsourcingPage.expertiseIntro")}
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-5xl">
              {expertise.map((expertiseKey, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 text-gray-300"
                >
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#34bb92] mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{t(expertiseKey)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Long-Term Partnership Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-10 sm:mb-12 md:mb-16 bg-[#0a0a0a] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
              {t("outsourcingPage.partnershipTitle")}
            </h2>
            <p className="text-gray-300 text-justify text-xs sm:text-sm leading-relaxed">
              {t("outsourcingPage.partnershipDesc")}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
