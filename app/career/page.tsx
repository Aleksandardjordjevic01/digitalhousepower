"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import { CursorCardsContainer, CursorCard } from "@/components/ui/cursor-cards";
import { Mail, MapPin, Hash, FileText, Phone } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export default function CareerPage() {
  const { t } = useLanguage();
  const glowColors = ["#6536a1", "#3f97e7", "#59dbe9", "#21dcdb", "#7cf8ee", "#fddf60", "#ffbb01"];
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    contactPhone: "",
    email: "",
    education: "",
    gender: "Man",
    motivation: "",
    cv: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const handleGenderSelect = (gender: string) => {
    setFormData((prev) => ({ ...prev, gender }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('dateOfBirth', formData.dateOfBirth);
      formDataToSend.append('contactPhone', formData.contactPhone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('education', formData.education);
      formDataToSend.append('gender', formData.gender);
      formDataToSend.append('motivation', formData.motivation);
      if (formData.cv) {
        formDataToSend.append('cv', formData.cv);
      }

      const response = await fetch('/api/career', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to send application');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        fullName: "",
        dateOfBirth: "",
        contactPhone: "",
        email: "",
        education: "",
        gender: "Man",
        motivation: "",
        cv: null,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-foreground relative overflow-hidden">
      <AnimatedDotsBackground />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 lg:pb-24 overflow-hidden">
        <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-start mb-8 sm:mb-10 md:mb-12"
          >
            <Badge className="mb-3 sm:mb-4 text-sm sm:text-base text-black">{t("careerPage.badge")}</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-[#77debb]">{t("careerPage.title")}</h1>
          </motion.div>

          <div className="grid gap-6 sm:gap-7 md:gap-8 mb-8 sm:mb-10 md:mb-12 lg:grid-cols-[1fr_450px]">
            {/* Left Column - Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-5 md:space-y-6 text-xs sm:text-sm text-gray-300 text-justify leading-relaxed"
            >
              <p>
                {t("careerPage.intro1")}
              </p>
              <p>
                {t("careerPage.intro2")}
              </p>
              <p>
                {t("careerPage.intro3")}
              </p>
              <p className="text-gray-400 text-xs mt-6 sm:mt-7 md:mt-8">
                {t("careerPage.intro4")}
              </p>
            </motion.div>

            {/* Right Column - Contact Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CursorCard
                className="h-fit rounded-xl sm:rounded-2xl"
                glowColor={glowColors[0]}
                borderColor={glowColors[0]}
                glowIntensity={500}
              >
                <div className="relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 h-fit bg-black/[0.7] border border-white/[0.12]">
                  {/* Glossy overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none rounded-xl sm:rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none rounded-xl sm:rounded-2xl" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 md:mb-6">{t("careerPage.contactTitle")}</h3>
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <p className="text-gray-400">
                  {t("careerPage.contactTime")} <span className="text-[#34bb92]">{t("careerPage.contactTime2")}</span>
                </p>

                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#34bb92] flex-shrink-0" />
                  <p className="text-xs">
                    <span className="text-gray-400">{t("careerPage.emailLabel")}</span>{" "}
                    <a
                      href="mailto:office@digitalhousepower.com"
                      className="text-[#34bb92] hover:underline break-all"
                    >
                      office@digitalhousepower.com
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#34bb92] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs mb-1">{t("careerPage.addressLabel")}</p>
                    <p className="text-white">
                      Kneza Mihaila 3, Beograd 11103,
                      <br />
                      Stari Grad, Serbia
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <Hash className="h-4 w-4 sm:h-5 sm:w-5 text-[#34bb92] flex-shrink-0" />
                  <p className="text-xs">
                    <span className="text-gray-400">{t("careerPage.activityCodeLabel")}</span>{" "}
                    <span className="text-white">6209</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-[#34bb92] flex-shrink-0" />
                  <p className="text-xs">
                    <span className="text-gray-400">{t("careerPage.pibLabel")}</span>{" "}
                    <span className="text-white">112317042</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[#34bb92] flex-shrink-0" />
                  <p className="text-xs">
                    <span className="text-gray-400">{t("careerPage.mbLabel")}</span>{" "}
                    <span className="text-white">21649715</span>
                  </p>
                </div>
              </div>
                  </div>
                </div>
              </CursorCard>
            </motion.div>
          </div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CursorCard
              className="rounded-xl sm:rounded-2xl"
              glowColor={glowColors[1]}
              borderColor={glowColors[1]}
              glowIntensity={500}
            >
              <div className="relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 bg-black/[0.7] border border-white/[0.12]">
                {/* Glossy overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none rounded-xl sm:rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none rounded-xl sm:rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {/* First and Last Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                    {t("careerPage.formNameLabel")}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white"
                    required
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                    {t("careerPage.formDobLabel")}
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white"
                    required
                  />
                </div>

                {/* Contact Phone */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                    {t("careerPage.formPhoneLabel")}
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white"
                    required
                  />
                </div>

                {/* Level of Education */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                    {t("careerPage.formEducationLabel")}
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white"
                    required
                  >
                    <option value="">{t("careerPage.educationDefault")}</option>
                    <option value="level-3">{t("careerPage.educationLevel3")}</option>
                    <option value="level-4">{t("careerPage.educationLevel4")}</option>
                    <option value="level-6">{t("careerPage.educationLevel6")}</option>
                    <option value="level-7-1">{t("careerPage.educationLevel71")}</option>
                    <option value="level-7-2">{t("careerPage.educationLevel72")}</option>
                    <option value="level-8">{t("careerPage.educationLevel8")}</option>
                  </select>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">{t("careerPage.formEmailLabel")}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3">{t("careerPage.formGenderLabel")}</label>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => handleGenderSelect("Man")}
                    className={`px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg font-medium transition-all ${
                      formData.gender === "Man"
                        ? "bg-[#34bb92] text-black"
                        : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {t("careerPage.formGenderMan")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleGenderSelect("Woman")}
                    className={`px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg font-medium transition-all ${
                      formData.gender === "Woman"
                        ? "bg-[#34bb92] text-black"
                        : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {t("careerPage.formGenderWoman")}
                  </button>
                </div>
              </div>

              {/* Why do you want to work in our company */}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  {t("careerPage.formMotivationLabel")}
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white resize-none"
                  required
                />
              </div>

              {/* Upload CV */}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  {t("careerPage.formCvLabel")}
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white file:mr-3 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded-lg file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-[#34bb92] file:text-black hover:file:bg-[#2da578] file:cursor-pointer"
                  />
                  {formData.cv && (
                    <p className="mt-2 text-sm text-gray-400">
                      {t("careerPage.formCvSelected")} {formData.cv.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="space-y-3 sm:space-y-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-full md:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-xs sm:text-sm bg-[#34bb92] hover:bg-[#2da578] text-black font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t("careerPage.formSubmitting") || "Sending..." : t("careerPage.formSubmit")}
                </Button>
                
                {submitStatus === 'success' && (
                  <div className="p-3 sm:p-4 bg-[#34bb92]/20 border border-[#34bb92] rounded-lg text-[#34bb92] text-xs sm:text-sm">
                    {t("careerPage.formSuccess") || "Application sent successfully! We will contact you soon."}
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 sm:p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-xs sm:text-sm">
                    {t("careerPage.formError") || "Failed to send application. Please try again."}
                  </div>
                )}
              </div>
                  </form>
                </div>
              </div>
            </CursorCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
