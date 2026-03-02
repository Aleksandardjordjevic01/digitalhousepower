"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  CursorCardsContainer,
  CursorCard,
} from "@/components/ui/cursor-cards";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import {
  Building2,
  Car,
  AlertTriangle,
  Radio,
  Monitor,
  BarChart3,
  Cloud,
  Lightbulb,
  Pencil,
  Settings,
  Wrench,
  Check,
} from "lucide-react";

export default function SmartCityPage() {
  const { t } = useLanguage();
  const mainSolutions = [
    {
      titleKey: "smartCityPage.smartCity.title",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      icon: Building2,
      image: "/assets/images/smart-city.png",
      descriptionKey: "smartCityPage.smartCity.desc",
      detailedDescriptionKey: "smartCityPage.smartCity.detailed",
      keyServiceAreaKeys: [
        "smartCityPage.smartCity.area1",
        "smartCityPage.smartCity.area2",
        "smartCityPage.smartCity.area3",
        "smartCityPage.smartCity.area4",
        "smartCityPage.smartCity.area5",
        "smartCityPage.smartCity.area6",
        "smartCityPage.smartCity.area7",
      ],
      valueDeliveredKey: "smartCityPage.smartCity.value",
    },
    {
      titleKey: "smartCityPage.smartHighway.title",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      icon: Car,
      image: "/assets/images/smart-highway.png",
      descriptionKey: "smartCityPage.smartHighway.desc",
      detailedDescriptionKey: "smartCityPage.smartHighway.detailed",
      keyServiceAreaKeys: [
        "smartCityPage.smartHighway.area1",
        "smartCityPage.smartHighway.area2",
        "smartCityPage.smartHighway.area3",
        "smartCityPage.smartHighway.area4",
        "smartCityPage.smartHighway.area5",
        "smartCityPage.smartHighway.area6",
        "smartCityPage.smartHighway.area7",
      ],
      valueDeliveredKey: "smartCityPage.smartHighway.value",
    },
    {
      titleKey: "smartCityPage.emergency.title",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      icon: AlertTriangle,
      image: "/assets/images/emergency-system.png",
      descriptionKey: "smartCityPage.emergency.desc",
      detailedDescriptionKey: "smartCityPage.emergency.detailed",
      keyServiceAreaKeys: [
        "smartCityPage.emergency.area1",
        "smartCityPage.emergency.area2",
        "smartCityPage.emergency.area3",
        "smartCityPage.emergency.area4",
        "smartCityPage.emergency.area5",
        "smartCityPage.emergency.area6",
      ],
      valueDeliveredKey: "smartCityPage.emergency.value",
    },
  ];

  const systemsIntegration = [
    {
      titleKey: "smartCityPage.integration.item1",
      icon: Radio,
    },
    {
      titleKey: "smartCityPage.integration.item2",
      icon: Monitor,
    },
    {
      titleKey: "smartCityPage.integration.item3",
      icon: BarChart3,
    },
    {
      titleKey: "smartCityPage.integration.item4",
      icon: Cloud,
    },
  ];

  const ourRole = [
    {
      titleKey: "smartCityPage.role.item1",
      icon: Lightbulb,
    },
    {
      titleKey: "smartCityPage.role.item2",
      icon: Pencil,
    },
    {
      titleKey: "smartCityPage.role.item3",
      icon: Settings,
    },
    {
      titleKey: "smartCityPage.role.item4",
      icon: Wrench,
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
      <section className="relative pt-32 pb-16 md:pt-20 md:pb-24 overflow-hidden">

        <div className="relative max-w-[1300px] mx-auto px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-start mb-4"
          >
            <Badge className="mb-4 text-base text-black">{t("smartCityPage.badge")}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-[#77debb]">{t("smartCityPage.title")}</span>
            </h1>
          </motion.div>

          {/* Smart Solutions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 text-start"
          >
            <h2 className="text-xl md:text-2xl text-start uppercase font-semibold text-gray-300 mb-4">
              {t("smartCityPage.subtitle")}
            </h2>
            <p className="text-sm text-white/70 max-w-4xl text-justify">
              {t("smartCityPage.description")}
            </p>
          </motion.div>

          {/* Main Solutions Cards */}
          <CursorCardsContainer className="grid md:grid-cols-3 gap-8 mb-24">
            {mainSolutions.map((solution, index) => {
              const glowColor = glowColors[index % glowColors.length];
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex"
              >
                <CursorCard 
                  className="h-full rounded-2xl w-full"
                  glowColor={glowColor}
                  borderColor={glowColor}
                  glowIntensity={500}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-black/[0.4] backdrop-blur-sm border border-white/[0.12] flex flex-col h-full">
                    {/* Glossy overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Colored Header */}
                      <div
                        className="h-48 flex items-center justify-center relative bg-[#37a987]/15 backdrop-blur-lg"
                      >
                        {/* Inner glow effect */}
                        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(55,169,135,0.6),inset_0_0_50px_rgba(55,169,135,0.4),inset_0_0_30px_rgba(55,169,135,0.3)]" />
                        
                        {/* Glass effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-black/20" />
                        
                        <Image
                          src={solution.image}
                          alt={t(solution.titleKey)}
                          width={200}
                          height={200}
                          className="object-contain p-4 relative z-10"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-lg font-bold mb-3 text-center">
                          {t(solution.titleKey)}
                        </h3>
                        <p className="text-gray-400 text-xs mb-4 text-center italic">
                          {t(solution.descriptionKey)}
                        </p>
                        <p className="text-gray-400 text-xs mb-6 text-justify leading-relaxed">
                          {t(solution.detailedDescriptionKey)}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold mb-3 text-gray-300">
                            {t("smartCityPage.keyServiceAreasLabel")}
                          </h4>
                          <ul className="space-y-2">
                            {solution.keyServiceAreaKeys.map((areaKey, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-xs text-gray-400"
                              >
                                <Check className="h-4 w-4 text-[#34bb92] mt-0.5 flex-shrink-0" />
                                <span>{t(areaKey)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-white/10 mt-auto">
                          <h4 className="text-sm font-semibold mb-2 text-gray-300">
                            {t("smartCityPage.valueDeliveredLabel")}
                          </h4>
                          <p className="text-xs text-gray-400 italic">
                            {t(solution.valueDeliveredKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CursorCard>
              </motion.div>
            )})}
          </CursorCardsContainer>

          {/* How The Systems Work Together */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-center">
              {t("smartCityPage.integration.title")}
            </h2>
            <p className="text-gray-400 text-sm text-center mb-12 max-w-3xl mx-auto">
              {t("smartCityPage.integration.subtitle")}
            </p>

            <CursorCardsContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemsIntegration.map((item, index) => {
                const glowColor = glowColors[index % glowColors.length];
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <CursorCard 
                    className="h-full rounded-2xl"
                    glowColor={glowColor}
                    borderColor={glowColor}
                    glowIntensity={500}
                  >
                    <div className="relative rounded-2xl p-6 h-full flex flex-col items-center text-center bg-black/[0.7] border border-white/[0.12]">
                      {/* Glossy overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none rounded-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none rounded-2xl" />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="mb-4 p-4 bg-[#34bb92]/10 rounded-xl w-fit mx-auto">
                          <item.icon className="h-12 w-12 text-[#34bb92]" />
                        </div>
                        <h3 className="text-sm font-semibold">{t(item.titleKey)}</h3>
                      </div>
                    </div>
                  </CursorCard>
                </motion.div>
              )})}
            </CursorCardsContainer>

            <p className="text-gray-400 text-sm text-center mt-12 max-w-3xl mx-auto">
              {t("smartCityPage.integration.footer")}
            </p>
          </motion.div>

          {/* DigitalHousePower's Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              {t("smartCityPage.role.title")}
            </h2>
            <p className="text-gray-400 text-sm text-center mb-12 max-w-3xl mx-auto">
              {t("smartCityPage.role.subtitle")}
            </p>

            <CursorCardsContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ourRole.map((item, index) => {
                const glowColor = glowColors[(index + 4) % glowColors.length];
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                >
                  <CursorCard 
                    className="h-full rounded-2xl"
                    glowColor={glowColor}
                    borderColor={glowColor}
                    glowIntensity={500}
                  >
                    <div className="relative rounded-2xl p-6 h-full flex flex-col items-center text-center bg-black/[0.7] border border-white/[0.12]">
                      {/* Glossy overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none rounded-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none rounded-2xl" />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="mb-4 p-4 bg-[#34bb92]/10 rounded-xl w-fit mx-auto">
                          <item.icon className="h-12 w-12 text-[#34bb92]" />
                        </div>
                        <h3 className="text-sm font-semibold">{t(item.titleKey)}</h3>
                      </div>
                    </div>
                  </CursorCard>
                </motion.div>
              )})}
            </CursorCardsContainer>

            <p className="text-gray-400 text-center text-sm mt-12 max-w-3xl mx-auto">
              {t("smartCityPage.role.footer")}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
