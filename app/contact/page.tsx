"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import { CursorCardsContainer, CursorCard } from "@/components/ui/cursor-cards";
import { useLanguage } from "@/lib/language-context";

export default function ContactPage() {
  const { t } = useLanguage();
  const glowColors = ["#6536a1", "#3f97e7", "#59dbe9", "#21dcdb", "#7cf8ee", "#fddf60", "#ffbb01"];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    budget: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const budgetOptions = [
    "10-20k",
    "30-40k",
    "40-50k",
    "50-100k",
    "> 100k",
  ];

  const interestOptions = [
    { key: "contactPage.interestSiteFromScratch", value: "Site from scratch" },
    { key: "contactPage.interestUxUi", value: "UX/UI design" },
    { key: "contactPage.interestProductDesign", value: "Product design" },
    { key: "contactPage.interestWebflow", value: "Webflow site" },
    { key: "contactPage.interestMotion", value: "Motion design" },
    { key: "contactPage.interestBranding", value: "Branding" },
    { key: "contactPage.interestMobile", value: "Mobile development" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        budget: "",
        interest: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData({
      ...formData,
      budget,
    });
  };

  const handleInterestSelect = (interest: string) => {
    setFormData({
      ...formData,
      interest,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      labelKey: "contactPage.infoEmail",
      value: "office@digitalhousepower.com",
      href: "mailto:office@digitalhousepower.com",
    },
    {
      icon: Phone,
      labelKey: "contactPage.infoPhone",
      value: "+381 63 573 539",
      href: "tel:+381063573539",
    },
    {
      icon: MapPin,
      labelKey: "contactPage.infoAddress",
      value: "Kneza Mihaila 3, Beograd 11103",
      href: "https://maps.google.com/?q=Kneza+Mihaila+3,+Beograd",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-foreground relative overflow-hidden">
      <AnimatedDotsBackground />
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-14 md:pb-16 lg:pb-24 overflow-hidden">

        <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <Badge className="mb-3 sm:mb-4 text-xs sm:text-sm md:text-base text-black">{t("contactPage.badge")}</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
              {t("contactPage.title")} <span className="text-[#34bb92]">{t("contactPage.titleHighlight")}</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              {t("contactPage.subtitle")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CursorCard
                className="h-full rounded-xl sm:rounded-2xl"
                glowColor={glowColors[0]}
                borderColor={glowColors[0]}
                glowIntensity={500}
              >
                <div className="relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col bg-black/[0.7]">
                  {/* Glossy overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none rounded-xl sm:rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none rounded-xl sm:rounded-2xl" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                  >
                    {t("contactPage.formFirstName")}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("contactPage.formFirstNamePlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                  >
                    {t("contactPage.formLastName")}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("contactPage.formLastNamePlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                  >
                    {t("contactPage.formEmail")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder={t("contactPage.formEmailPlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                    {t("contactPage.formBudget")}
                  </label>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {budgetOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleBudgetSelect(option)}
                        className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-full border transition-all font-medium ${
                          formData.budget === option
                            ? "bg-[#34bb92] border-[#34bb92] text-black"
                            : "bg-[#030303] border-white/10 text-gray-300 hover:border-[#34bb92]/50"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                  >
                    {t("contactPage.formMessage")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors resize-none"
                    placeholder={t("contactPage.formMessagePlaceholder")}
                  />
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-black py-4 sm:py-5 md:py-6 text-xs sm:text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t("contactPage.formSending") || "Sending..." : t("contactPage.formSend")}
                  </Button>
                  
                  {submitStatus === 'success' && (
                    <div className="p-3 sm:p-4 text-xs sm:text-sm bg-[#34bb92]/20 border border-[#34bb92] rounded-lg text-[#34bb92]">
                      {t("contactPage.formSuccess") || "Message sent successfully! We will contact you soon."}
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-3 sm:p-4 text-xs sm:text-sm bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                      {t("contactPage.formError") || "Failed to send message. Please try again."}
                    </div>
                  )}
                </div>
                    </form>
                  </div>
                </div>
              </CursorCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col space-y-6 sm:space-y-7 md:space-y-8"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t("contactPage.budgetTitle")}</h2>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-5 md:mb-6">
                  {t("contactPage.budgetDesc")}
                </p>
                
                <div className="mb-6 sm:mb-7 md:mb-8">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t("contactPage.interestTitle")}</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">
                    {interestOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleInterestSelect(option.value)}
                        className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-full border transition-all font-medium ${
                          formData.interest === option.value
                            ? "bg-[#34bb92] border-[#34bb92] text-black"
                            : "bg-[#030303] border-white/10 text-gray-300 hover:border-[#34bb92]/50"
                        }`}
                      >
                        {t(option.key)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {contactInfo.map((item, index) => {
                  const glowColor = glowColors[(index + 1) % glowColors.length];
                  return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <CursorCard
                      className="rounded-lg sm:rounded-xl"
                      glowColor={glowColor}
                      borderColor={glowColor}
                      glowIntensity={500}
                    >
                      <a
                        href={item.href}
                        className="relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-black/[0.7] rounded-lg sm:rounded-xl hover:border-[#34bb92]/30 transition-colors group block"
                      >
                        {/* Glossy overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none rounded-lg sm:rounded-xl" />
                        <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none rounded-lg sm:rounded-xl" />
                        
                        {/* Content */}
                        <div className="relative z-10 p-2 sm:p-2.5 md:p-3 bg-[#34bb92]/10 rounded-lg group-hover:bg-[#34bb92]/20 transition-colors">
                          <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#34bb92]" />
                        </div>
                        <div className="relative z-10">
                          <p className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">{t(item.labelKey)}</p>
                          <p className="text-xs sm:text-sm md:text-base font-medium">{item.value}</p>
                        </div>
                      </a>
                    </CursorCard>
                  </motion.div>
                  );
                })}
              </div>

              {/* Office Hours */}
              <CursorCard
                className="rounded-lg sm:rounded-xl"
                glowColor={glowColors[4]}
                borderColor={glowColors[4]}
                glowIntensity={500}
              >
                <div className="relative bg-black/[0.7] rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                  {/* Glossy overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none rounded-lg sm:rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none rounded-lg sm:rounded-xl" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t("contactPage.officeHoursTitle")}</h3>
                    <div className="space-y-2 sm:space-y-2.5 md:space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">{t("contactPage.officeHoursMonFri")}</span>
                        <span className="font-medium">{t("contactPage.officeHoursMonFriTime")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">{t("contactPage.officeHoursSat")}</span>
                        <span className="font-medium">{t("contactPage.officeHoursSatTime")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">{t("contactPage.officeHoursSun")}</span>
                        <span className="font-medium">{t("contactPage.officeHoursSunTime")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CursorCard>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 sm:mt-10 md:mt-12"
          >
            <CursorCard
              className="rounded-xl sm:rounded-2xl"
              glowColor={glowColors[5]}
              borderColor={glowColors[5]}
              glowIntensity={500}
            >
              <div className="relative bg-black/[0.7] rounded-xl sm:rounded-2xl overflow-hidden">
                {/* Glossy overlay effect on header only */}
                <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none" />
                
                <div className="relative z-10 p-4 sm:p-5 md:p-6 border-b border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold">{t("contactPage.mapTitle")}</h2>
                <p className="text-xs sm:text-sm text-gray-400 mt-1.5 sm:mt-2">
                  {t("contactPage.mapSubtitle")}
                </p>
              </div>
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.1234567890!2d20.4489!3d44.8178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b6f5c5%3A0x7f32c1c7e3f6b5d4!2sKneza%20Mihaila%203%2C%20Beograd!5e0!3m2!1sen!2srs!4v1234567890123!5m2!1sen!2srs"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              </div>
            </CursorCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
