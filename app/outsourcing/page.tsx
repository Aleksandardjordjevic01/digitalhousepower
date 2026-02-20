"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import { CursorCardsContainer, CursorCard } from "@/components/ui/cursor-cards";
import { Check, Users, Target, Code, Handshake } from "lucide-react";

export default function OutsourcingPage() {
  const glowColors = ["#6536a1", "#3f97e7", "#59dbe9", "#21dcdb", "#7cf8ee", "#fddf60", "#ffbb01"];

  const clientNeeds = [
    "Corporate ownership and accountability (inside)",
    "Can be entrusted with full project ownership for defined project segments",
    "Works collaboratively to identify optimal structural solutions",
    "Delivers clean, maintainable, and well-documented code aligned with their standards",
  ];

  const expertise = [
    "Web application development (ReactJs, NextJs, PHP, MySQL, MongoDB)",
    "Custom web application development",
    "Website and corporate platform development",
    "E-commerce and online store solutions",
    "Mobile application development (iOS, Android)",
    "Integration with payment systems",
    "API integration with external services",
    "Ongoing technical support",
  ];

  const approaches = [
    {
      title: "Understanding Your Needs",
      icon: Target,
      description:
        "Our outsourcing approach is founded on understanding your requirements, technical environment, and business objectives. We carefully review existing documentation, systems, and constraints to ensure seamless integration.",
    },
    {
      title: "Collaborative Partnership",
      icon: Users,
      description:
        "We work as an extension of your team. Our developers integrate into your workflows, communication channels, and development processes to deliver consistent results.",
    },
    {
      title: "Technical Excellence",
      icon: Code,
      description:
        "Our development standards emphasize performance, scalability, and long-term maintainability aligned with your documentation delivery aims.",
    },
    {
      title: "Long-Term Focus",
      icon: Handshake,
      description:
        "Our outsourcing services are designed to support long-term cooperation, built on trust, effective reliability, and resource efficiency.",
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
            className="text-start mb-8"
          >
            <Badge className="mb-4 text-base text-black">DigitalHousePower</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-[#34bb92]">Outsourcing</span>
            </h1>
          </motion.div>

          {/* Partner Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              If you are looking for a reliable partner
            </h2>
            <div className="space-y-4 text-sm text-gray-300 text-justify leading-relaxed max-w-5xl">
              <p>
                DigitalHousePower provides outsourcing services designed to
                support organizations that require reliable technical capacity,
                on-demand execution, and predictable delivery. Our team operates
                as an extension of your internal resources, ensuring continuity
                while delivering solid results aligned with your operational
                standards.
              </p>
              <p>
                We support partners at different levels of involvement—from full
                project delivery to participation in specific phases such as
                analysis, development, integration, or optimization. Our
                outsourcing model is built on responsibility, transparency, and
                technical consistency, allowing you to focus on business value
                while we handle execution and delivery to clients.
              </p>
              <p>
                Initial response and engagement planning are typically provided
                within 24 hours, ensuring timely coordination and rapid alignment
                on scopes, priorities, and next steps.
              </p>
            </div>
          </motion.div>

          {/* How We Work Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6">How We Work</h2>
            <p className="text-gray-300 text-justify text-sm leading-relaxed max-w-5xl mb-8">
              Our outsourcing approach is founded on understanding your
              requirements, technical environment, and business objectives before
              execution begins. We carefully review existing documentation,
              systems, and constraints to ensure seamless integration with your
              operations.
            </p>
            <p className="text-gray-300 text-justify text-sm leading-relaxed max-w-5xl mb-12">
              Clients choose DigitalHousePower when they need a partner who:
            </p>

            <ul className="space-y-3 max-w-4xl mb-16">
              {clientNeeds.map((need, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <Check className="h-5 w-5 text-[#34bb92] mt-1 flex-shrink-0" />
                  <span className="text-sm">{need}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-sm text-justify leading-relaxed max-w-5xl">
              Our development standards emphasize performance, scalability, and
              long-term maintainability rather than short-term delivery alone.
            </p>
          </motion.div>

          {/* Approach Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <CursorCardsContainer className="grid md:grid-cols-2 gap-8">
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
                    className="h-full rounded-2xl"
                    glowColor={glowColor}
                    borderColor={glowColor}
                    glowIntensity={500}
                  >
                    <div className="relative rounded-2xl p-8 h-full bg-black/[0.7] border border-white/[0.12]">
                      {/* Glossy overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 pointer-events-none rounded-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.03] via-transparent to-transparent opacity-70 pointer-events-none rounded-2xl" />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="mb-4 p-4 bg-[#34bb92]/10 rounded-xl inline-flex">
                          <approach.icon className="h-8 w-8 text-[#34bb92]" />
                        </div>
                        <h3 className="text-lg font-bold mb-4">
                          {approach.title}
                        </h3>
                        <p className="text-gray-400 text-sm text-justify leading-relaxed">
                          {approach.description}
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
            className="mb-16"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              Areas of Expertise
            </h2>
            <p className="text-gray-300 text-sm text-justify leading-relaxed max-w-5xl mb-8">
              As part of our outsourcing model, we provide support across a broad
              range of technologies and solution types, including:
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
              {expertise.map((area, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <Check className="h-5 w-5 text-[#34bb92] mt-1 flex-shrink-0" />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Long-Term Partnership Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16 bg-[#0a0a0a] border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Long-Term Partnership Focus
            </h2>
            <p className="text-gray-300 text-justify text-sm leading-relaxed">
              Our outsourcing services are designed to support long-term
              cooperation, built on trust, effective reliability, and resource
              efficiency. By combining consulting expertise with engineering
              capability, DigitalHousePower enables organizations to execute
              projects efficiently while reducing operational risk.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
