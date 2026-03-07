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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/server-packages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
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
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-24 overflow-hidden">
        <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-start mb-3 sm:mb-4"
          >
            <Badge className="mb-3 sm:mb-4 text-sm sm:text-base text-black">{t("serverPackagesPage.badge")}</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
              <span className="text-[#77debb]">{t("serverPackagesPage.title")}</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 sm:mb-8 md:mb-10 text-start"
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-start uppercase font-semibold text-gray-300 mb-3 sm:mb-4">
              {t("serverPackagesPage.subtitle")}
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-4xl text-justify">
              {t("serverPackagesPage.description")}
            </p>
          </motion.div>

          {/* Packages Grid */}
          <CursorCardsContainer className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10 md:auto-rows-fr">
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
                        {/* Features Section */}
                        <div className="flex-grow">
                          <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-white">
                            {t("serverPackagesPage.includesLabel")}
                          </h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {pkg.featureKeys.map((featureKey, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 sm:gap-3 text-gray-300"
                              >
                                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#34bb92] mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm">{t(featureKey)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Button */}
                        <div className="mt-4 sm:mt-5 md:mt-6">
                          <Button
                            className="w-full bg-[#34bb92] text-black hover:bg-[#2da578] font-semibold text-xs sm:text-sm py-2 sm:py-2.5"
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
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <div className="text-start mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                {t("serverPackagesPage.formHeading")}
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm max-w-3xl">
                {t("serverPackagesPage.formDescription")}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="max-w-8xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8"
            >
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {/* First and Last Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("serverPackagesPage.form.firstNamePlaceholder")}
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("serverPackagesPage.form.companyNamePlaceholder")}
                  />
                </div>

                {/* Website Address */}
                <div>
                  <label
                    htmlFor="websiteAddress"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("serverPackagesPage.form.websitePlaceholder")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("serverPackagesPage.form.emailPlaceholder")}
                  />
                </div>

                {/* Contact Phone */}
                <div>
                  <label
                    htmlFor="contactPhone"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("serverPackagesPage.form.phonePlaceholder")}
                  />
                </div>

                {/* Network Bandwidth */}
                <div>
                  <label
                    htmlFor="networkBandwidth"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                  >
                    {t("serverPackagesPage.form.bandwidth")}
                  </label>
                  <select
                    id="networkBandwidth"
                    name="networkBandwidth"
                    required
                    value={formData.networkBandwidth}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
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
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                  >
                    {t("serverPackagesPage.form.bgpSpeed")}
                  </label>
                  <select
                    id="networkBgpSpeed"
                    name="networkBgpSpeed"
                    required
                    value={formData.networkBgpSpeed}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
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
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                  >
                    {t("serverPackagesPage.form.location")}
                  </label>
                  <select
                    id="dataCenterLocation"
                    name="dataCenterLocation"
                    required
                    value={formData.dataCenterLocation}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                  >
                    <option value="">{t("serverPackagesPage.form.select")}</option>
                    <option value="serbia">{t("serverPackagesPage.form.serbia")}</option>
                  </select>
                </div>

                {/* Desired Service Delivery Time */}
                <div className="sm:col-span-1 md:col-span-2">
                  <label
                    htmlFor="serviceDeliveryTime"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                  >
                    {t("serverPackagesPage.form.deliveryTime")}
                  </label>
                  <input
                    type="text"
                    id="serviceDeliveryTime"
                    name="serviceDeliveryTime"
                    value={formData.serviceDeliveryTime}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("serverPackagesPage.form.deliveryTimePlaceholder")}
                  />
                </div>

                {/* Technical Specification */}
                <div className="sm:col-span-1 md:col-span-2">
                  <label
                    htmlFor="technicalSpecification"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors resize-none"
                    placeholder={t("serverPackagesPage.form.techSpecPlaceholder")}
                  />
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-full md:w-auto mt-4 sm:mt-5 md:mt-6 bg-[#34bb92] text-black hover:bg-[#2da578] px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-xs sm:text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t("serverPackagesPage.form.sending") || "Sending..." : t("serverPackagesPage.form.sendButton")}
                </Button>
                
                {submitStatus === 'success' && (
                  <div className="p-3 sm:p-4 bg-[#34bb92]/20 border border-[#34bb92] rounded-lg text-[#34bb92] text-xs sm:text-sm">
                    {t("serverPackagesPage.form.success") || "Request sent successfully! We will contact you soon."}
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 sm:p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-xs sm:text-sm">
                    {t("serverPackagesPage.form.error") || "Failed to send request. Please try again."}
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
