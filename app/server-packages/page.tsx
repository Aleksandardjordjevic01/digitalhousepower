"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import { CursorCardsContainer, CursorCard } from "@/components/ui/cursor-cards";
import { Check, Network, Headphones, Shield } from "lucide-react";

export default function ServerPackagesPage() {
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
      title: "REDUNDANCY",
      icon: Network,
      features: [
        "Multi-homed network",
        "Direct connection with SBB, Giganet, MTEL HL",
        "Advanced DDoS protection",
      ],
      gradient: "from-[#34bb92] to-[#2da578]",
    },
    {
      title: "24/7 TECHNICAL SUPPORT",
      icon: Headphones,
      features: [
        "Access to support through all channels (phone, chat, ticket)",
        "Server maintenance and monitoring to your needs",
        "Qualified and certified system engineers",
      ],
      gradient: "from-[#34bb92] to-[#2da578]",
    },
    {
      title: "FULL REDUNDANCY",
      icon: Shield,
      features: [
        "Fully redundant network and power environment",
        "Data redundancy tailored to your needs",
        "On-site and fastlane",
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
            <Badge className="mb-4 text-base text-black">DigitalHousePower</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-[#34bb92]">Server packages</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 text-start"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Dedicated servers with maintenance tailored to your needs
            </h2>
            <p className="text-gray-400 text-sm max-w-3xl">
              Optimal performance with fully customized network and power support for Serbia.
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
                            {pkg.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow p-3 flex flex-col min-h-0">
                        {/* Features Section */}
                        <div className="flex-grow">
                          <h4 className="text-sm font-semibold mb-4 text-white">
                            Includes:
                          </h4>
                          <ul className="space-y-3">
                            {pkg.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-gray-300"
                              >
                                <Check className="h-5 w-5 text-[#34bb92] mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
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
                            FILL OUT THE FORM
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
                We are ready to make everything you imagine come true, anywhere in Serbia.
              </h2>
              <p className="text-gray-400 text-sm max-w-3xl">
                Do not hesitate to request a personalized offer. We can provide fast set-up to meet your expectations!
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
                    FIRST AND LAST NAME*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder="Enter first and last name"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium mb-2"
                  >
                    COMPANY NAME*
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder="Enter company name"
                  />
                </div>

                {/* Website Address */}
                <div>
                  <label
                    htmlFor="websiteAddress"
                    className="block text-sm font-medium mb-2"
                  >
                    WEBSITE ADDRESS*
                  </label>
                  <input
                    type="url"
                    id="websiteAddress"
                    name="websiteAddress"
                    required
                    value={formData.websiteAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder="Enter website address"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    EMAIL*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Contact Phone */}
                <div>
                  <label
                    htmlFor="contactPhone"
                    className="block text-sm font-medium mb-2"
                  >
                    CONTACT PHONE*
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    required
                    value={formData.contactPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Network Bandwidth */}
                <div>
                  <label
                    htmlFor="networkBandwidth"
                    className="block text-sm font-medium mb-2"
                  >
                    NETWORK BANDWIDTH*
                  </label>
                  <select
                    id="networkBandwidth"
                    name="networkBandwidth"
                    required
                    value={formData.networkBandwidth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="100mbps">100 Mbps</option>
                    <option value="1gbps">1 Gbps</option>
                    <option value="10gbps">10 Gbps</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>

                {/* Network BGP Speed */}
                <div>
                  <label
                    htmlFor="networkBgpSpeed"
                    className="block text-sm font-medium mb-2"
                  >
                    NETWORK BGP SPEED*
                  </label>
                  <select
                    id="networkBgpSpeed"
                    name="networkBgpSpeed"
                    required
                    value={formData.networkBgpSpeed}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Desired Data Center Location */}
                <div>
                  <label
                    htmlFor="dataCenterLocation"
                    className="block text-sm font-medium mb-2"
                  >
                    DESIRED DATA CENTER LOCATION*
                  </label>
                  <select
                    id="dataCenterLocation"
                    name="dataCenterLocation"
                    required
                    value={formData.dataCenterLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="belgrade">Belgrade</option>
                    <option value="novi-sad">Novi Sad</option>
                    <option value="nis">Niš</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Desired Service Delivery Time */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="serviceDeliveryTime"
                    className="block text-sm font-medium mb-2"
                  >
                    DESIRED SERVICE DELIVERY TIME
                  </label>
                  <input
                    type="text"
                    id="serviceDeliveryTime"
                    name="serviceDeliveryTime"
                    value={formData.serviceDeliveryTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder="Enter desired service delivery time"
                  />
                </div>

                {/* Technical Specification */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="technicalSpecification"
                    className="block text-sm font-medium mb-2"
                  >
                    TECHNICAL SPECIFICATION DESCRIPTION*
                  </label>
                  <textarea
                    id="technicalSpecification"
                    name="technicalSpecification"
                    required
                    rows={6}
                    value={formData.technicalSpecification}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors resize-none"
                    placeholder="Please share your technical requirements so we can provide the best possible solution."
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto mt-6 bg-[#34bb92] text-black hover:bg-[#2da578] px-12 py-6 font-medium"
              >
                Send
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
