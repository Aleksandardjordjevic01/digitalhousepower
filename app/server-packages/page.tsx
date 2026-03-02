"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import { CursorCardsContainer, CursorCard } from "@/components/ui/cursor-cards";
import { Check, Network, Headphones, Shield } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function ServerPackagesPage() {
  const { t } = useLanguage();
  
  const glowColors = [
    "#6536a1", // purple
    "#3f97e7", // blue
    "#59dbe9", // light blue
  ];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    websiteAddress: "",
    email: "",
    contactPhone: "",
    networkBandwidth: "",
    networkBgpSpeed: "",
    dataCenterLocation: "",
    serviceDeliveryTime: "",
    technicalSpecification: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const packages = [
    {
      titleKey: "serverPackagesPage.redundancy.title",
      icon: Network,
      featureKeys: [
        "serverPackagesPage.redundancy.feature1",
        "serverPackagesPage.redundancy.feature2",
        "serverPackagesPage.redundancy.feature3",
      ],
      gradient: "from-[#34bb92] to-[#2da578]",
    },
    {
      titleKey: "serverPackagesPage.support247.title",
      icon: Headphones,
      featureKeys: [
        "serverPackagesPage.support247.feature1",
        "serverPackagesPage.support247.feature2",
        "serverPackagesPage.support247.feature3",
      ],
      gradient: "from-[#34bb92] to-[#2da578]",
    },
    {
      titleKey: "serverPackagesPage.fullRedundancy.title",
      icon: Shield,
      featureKeys: [
        "serverPackagesPage.fullRedundancy.feature1",
        "serverPackagesPage.fullRedundancy.feature2",
        "serverPackagesPage.fullRedundancy.feature3",
      ],
      gradient: "from-[#34bb92] to-[#2da578]",
    },
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
            <Badge className="mb-4 text-base text-black">{t("serverPackagesPage.badge")}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-[#77debb]">{t("serverPackagesPage.title")}</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 text-start"
          >
            <h2 className="text-xl md:text-2xl text-start uppercase font-semibold text-gray-300 mb-4">
              {t("serverPackagesPage.subtitle")}
            </h2>
            <p className="text-sm text-white/70 max-w-4xl text-justify">
              {t("serverPackagesPage.description")}
            </p>
          </motion.div>

          {/* Packages Grid */}
          <CursorCardsContainer className="grid md:grid-cols-3 gap-8 mb-10 md:auto-rows-fr">
            {packages.map((pkg, index) => {
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
                  className="h-full rounded-3xl w-full"
                  glowColor={glowColor}
                  borderColor={glowColor}
                  glowIntensity={500}
                >
                  <div className="relative rounded-3xl overflow-hidden bg-black/[0.7] border border-white/[0.12] flex flex-col gap-3 p-4 shadow-lg w-full h-full">
                    {/* Glossy overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col gap-3 h-full">
                      {/* Header */}
                      <div className="shrink-0">
                        <div
                          className={`bg-gradient-to-r ${pkg.gradient} rounded-2xl p-6`}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <pkg.icon className="h-6 w-6 text-black" />
                            <p className="text-sm font-semibold text-black">DHP</p>
                          </div>
                          <h3 className="text-base font-bold text-black">
                            {t(pkg.titleKey)}
                          </h3>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow p-3 flex flex-col min-h-0">
                        {/* Features Section */}
                        <div className="flex-grow">
                          <h4 className="text-sm font-semibold mb-4 text-white">
                            {t("serverPackagesPage.includesLabel")}
                          </h4>
                          <ul className="space-y-3">
                            {pkg.featureKeys.map((featureKey, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-gray-300"
                              >
                                <Check className="h-5 w-5 text-[#34bb92] mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{t(featureKey)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Button */}
                        <div className="mt-6">
                          <Button
                            className="w-full bg-[#34bb92] text-black hover:bg-[#2da578] font-semibold"
                            onClick={() => {
                              document
                                .getElementById("contact-form")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }}
                          >
                            {t("serverPackagesPage.fillFormButton")}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CursorCard>
              </motion.div>
            )})}
          </CursorCardsContainer>

          {/* Contact Form Section */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-10"
          >
            <div className="text-start mb-10">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {t("serverPackagesPage.formHeading")}
              </h2>
              <p className="text-gray-400 text-sm max-w-3xl">
                {t("serverPackagesPage.formDescription")}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="max-w-8xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* First and Last Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("serverPackagesPage.form.firstName")}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("serverPackagesPage.form.firstNamePlaceholder")}
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("serverPackagesPage.form.companyName")}
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("serverPackagesPage.form.companyNamePlaceholder")}
                  />
                </div>

                {/* Website Address */}
                <div>
                  <label
                    htmlFor="websiteAddress"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("serverPackagesPage.form.website")}
                  </label>
                  <input
                    type="url"
                    id="websiteAddress"
                    name="websiteAddress"
                    required
                    value={formData.websiteAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("serverPackagesPage.form.websitePlaceholder")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("serverPackagesPage.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("serverPackagesPage.form.emailPlaceholder")}
                  />
                </div>

                {/* Contact Phone */}
                <div>
                  <label
                    htmlFor="contactPhone"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("serverPackagesPage.form.phone")}
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    required
                    value={formData.contactPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("serverPackagesPage.form.phonePlaceholder")}
                  />
                </div>

                {/* Network Bandwidth */}
                <div>
                  <label
                    htmlFor="networkBandwidth"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("serverPackagesPage.form.bandwidth")}
                  </label>
                  <select
                    id="networkBandwidth"
                    name="networkBandwidth"
                    required
                    value={formData.networkBandwidth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                  >
                    <option value="">{t("serverPackagesPage.form.select")}</option>
                    <option value="100mbps">100 Mbps</option>
                    <option value="1gbps">1 Gbps</option>
                    <option value="10gbps">10 Gbps</option>
                    <option value="custom">{t("serverPackagesPage.form.custom")}</option>
                  </select>
                </div>

                {/* Network BGP Speed */}
                <div>
                  <label
                    htmlFor="networkBgpSpeed"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("serverPackagesPage.form.bgpSpeed")}
                  </label>
                  <select
                    id="networkBgpSpeed"
                    name="networkBgpSpeed"
                    required
                    value={formData.networkBgpSpeed}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                  >
                    <option value="">{t("serverPackagesPage.form.select")}</option>
                    <option value="yes">{t("serverPackagesPage.form.yes")}</option>
                    <option value="no">{t("serverPackagesPage.form.no")}</option>
                  </select>
                </div>

                {/* Desired Data Center Location */}
                <div>
                  <label
                    htmlFor="dataCenterLocation"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("serverPackagesPage.form.location")}
                  </label>
                  <select
                    id="dataCenterLocation"
                    name="dataCenterLocation"
                    required
                    value={formData.dataCenterLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                  >
                    <option value="">{t("serverPackagesPage.form.select")}</option>
                    <option value="belgrade">{t("serverPackagesPage.form.belgrade")}</option>
                    <option value="novi-sad">{t("serverPackagesPage.form.noviSad")}</option>
                    <option value="nis">{t("serverPackagesPage.form.nis")}</option>
                    <option value="other">{t("serverPackagesPage.form.other")}</option>
                  </select>
                </div>

                {/* Desired Service Delivery Time */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="serviceDeliveryTime"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("serverPackagesPage.form.deliveryTime")}
                  </label>
                  <input
                    type="text"
                    id="serviceDeliveryTime"
                    name="serviceDeliveryTime"
                    value={formData.serviceDeliveryTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("serverPackagesPage.form.deliveryTimePlaceholder")}
                  />
                </div>

                {/* Technical Specification */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="technicalSpecification"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("serverPackagesPage.form.techSpec")}
                  </label>
                  <textarea
                    id="technicalSpecification"
                    name="technicalSpecification"
                    required
                    rows={6}
                    value={formData.technicalSpecification}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors resize-none"
                    placeholder={t("serverPackagesPage.form.techSpecPlaceholder")}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto mt-6 bg-[#34bb92] text-black hover:bg-[#2da578] px-12 py-6 font-medium"
              >
                {t("serverPackagesPage.form.sendButton")}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
