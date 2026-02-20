"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import { CursorCardsContainer, CursorCard } from "@/components/ui/cursor-cards";
import { Mail, MapPin, Hash, FileText, Phone } from "lucide-react";
import { useState } from "react";

export default function CareerPage() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-foreground relative overflow-hidden">
      <AnimatedDotsBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-20 md:pb-24 overflow-hidden">
        <div className="relative max-w-[1300px] mx-auto px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-start mb-12"
          >
            <Badge className="mb-4 text-base text-black">DigitalHousePower</Badge>
            <h1 className="text-3xl md:text-5xl font-bold">Career</h1>
          </motion.div>

          <div className="grid gap-8 mb-12" style={{gridTemplateColumns: '1fr 450px'}}>
            {/* Left Column - Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-sm text-gray-300 text-justify leading-relaxed"
            >
              <p>
                If you are a motivated professional, a team-oriented individual,
                or someone with a strong base and the power of to contribute, we
                are always open (.) canvassing. We value initiative,
                responsibility, and the willingness to learn. Selecting the
                competence development in the IT sector—we recognize IT
                enthusiasts who would use real skills to contribute competent
                work to an IT organization.
              </p>
              <p>
                At DigitalHousePower, we aim to build long-term professional
                relationships — whether through engagement, collaboration, or
                project-based cooperation. We encourage people who think
                analytically and organically, and strive for architectural and
                procedural improvement of approaches of processes when needed.
              </p>
              <p>
                By fostering teamwork, innovation, and mutual support, we create
                a professional environment where individuals can grow,
                co-evolve, meaningfully, and take part in skilled projects.
              </p>
              <p className="text-gray-400 text-xs mt-8">
                Your information will be securely stored in our candidate
                database, and we may contact you when appropriate roles align
                your skills, experience, or that align with your skills,
                experience, or career expectations.
              </p>
            </motion.div>

            {/* Right Column - Contact Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CursorCard
                className="h-fit rounded-2xl"
                glowColor={glowColors[0]}
                borderColor={glowColors[0]}
                glowIntensity={500}
              >
                <div className="relative rounded-2xl p-8 h-fit bg-black/[0.7] border border-white/[0.12]">
                  {/* Glossy overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none rounded-2xl" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-6">We are available:</h3>
              <div className="space-y-4 text-sm">
                <p className="text-gray-400">
                  weekdays from <span className="text-[#34bb92]">8 AM to 6 PM</span>
                </p>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#34bb92] flex-shrink-0" />
                  <p className="text-xs">
                    <span className="text-gray-400">Emails:</span>{" "}
                    <a
                      href="mailto:office@digitalhousepower.com"
                      className="text-[#34bb92] hover:underline break-all"
                    >
                      office@digitalhousepower.com
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#34bb92] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Address</p>
                    <p className="text-white">
                      Kneza Mihaila 3, Beograd 11103,
                      <br />
                      Stari Grad, Serbia
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Hash className="h-5 w-5 text-[#34bb92] flex-shrink-0" />
                  <p className="text-xs">
                    <span className="text-gray-400">Activity code:</span>{" "}
                    <span className="text-white">6209</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-[#34bb92] flex-shrink-0" />
                  <p className="text-xs">
                    <span className="text-gray-400">PIB:</span>{" "}
                    <span className="text-white">112317042</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#34bb92] flex-shrink-0" />
                  <p className="text-xs">
                    <span className="text-gray-400">MB:</span>{" "}
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
              className="rounded-2xl"
              glowColor={glowColors[1]}
              borderColor={glowColors[1]}
              glowIntensity={500}
            >
              <div className="relative rounded-2xl p-4 md:p-10 bg-black/[0.7] border border-white/[0.12]">
                {/* Glossy overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* First and Last Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    FIRST AND LAST NAME
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white"
                    required
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    DATE OF BIRTH
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white"
                    required
                  />
                </div>

                {/* Contact Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    CONTACT PHONE
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white"
                    required
                  />
                </div>

                {/* Level of Education */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    LEVEL OF EDUCATION
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white"
                    required
                  >
                    <option value="">-viii School (Level 2, vocational qualification)</option>
                    <option value="high-school">High School</option>
                    <option value="bachelor">Bachelor&apos;s Degree</option>
                    <option value="master">Master&apos;s Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium mb-3">GENDER</label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => handleGenderSelect("Man")}
                    className={`px-8 py-3 rounded-lg font-medium transition-all ${
                      formData.gender === "Man"
                        ? "bg-[#34bb92] text-black"
                        : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    Man
                  </button>
                  <button
                    type="button"
                    onClick={() => handleGenderSelect("Woman")}
                    className={`px-8 py-3 rounded-lg font-medium transition-all ${
                      formData.gender === "Woman"
                        ? "bg-[#34bb92] text-black"
                        : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    Woman
                  </button>
                </div>
              </div>

              {/* Why do you want to work in our company */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  WHY DO YOU WANT TO WORK IN OUR COMPANY?
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white resize-none"
                  required
                />
              </div>

              {/* Upload CV */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  UPLOAD CV
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34bb92] text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#34bb92] file:text-black hover:file:bg-[#2da578] file:cursor-pointer"
                  />
                  {formData.cv && (
                    <p className="mt-2 text-sm text-gray-400">
                      Selected: {formData.cv.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full md:w-auto px-12 py-6 bg-[#34bb92] hover:bg-[#2da578] text-black font-semibold rounded-lg transition-colors"
              >
                Apply
              </Button>
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
