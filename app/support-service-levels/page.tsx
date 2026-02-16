"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function SupportServiceLevelsPage() {
  const supportPackages = [
    {
      title: "BASIC REMOTE SUPPORT",
      description:
        "Basic Remote Support is designed for organizations that need reliable remote assistance to maintain day-to-day operations. This service ensures that ongoing Support is provided remotely during agreed business hours and focuses on maintaining system functionality.",
      includes: [
        "Remote technical support during business hours",
        "Basic server and system monitoring",
        "Incident diagnostics and resolution",
        "Configuration assistance and minor adjustments",
        "Advisory support and operational guidance",
      ],
      gradient: "from-[#34bb92] to-[#2da578]",
    },
    {
      title: "REMOTE 24/7 TECHNICAL SUPPORT",
      description:
        "Remote 24/7 Technical Support is suitable for business or final entities that maintain technical or digital services and require continuous availability regardless of time or contact modality. Our immediate-reactive intervention is any time.",
      includes: [
        "24/7 remote technical support",
        "Continuous architecture monitoring",
        "Incident diagnosis and emergency response",
        "Software installation and updates",
        "Regular base platform and security",
      ],
      gradient: "from-[#34bb92] to-[#2da578]",
    },
    {
      title: "FULL ON-SITE SUPPORT",
      description:
        "Full On-Site Support provides comprehensive infrastructure management with asset physical presence where needed. This service level is suitable for organizations that require maximum availability and operational control and on-site technical intervention.",
      includes: [
        "24/7 remote support combined with on-site intervention",
        "Physical server and infrastructure maintenance",
        "On-site incident resolution and system recovery",
        "Hardware diagnostics, reconfiguration, and upgrades",
        "Customized redundancy, backup, and disaster recovery procedures",
      ],
      gradient: "from-[#34bb92] to-[#2da578]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-foreground relative overflow-hidden">
      <AnimatedDotsBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-20 md:pb-12 overflow-hidden">
        <div className="relative max-w-[1300px] mx-auto px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-start mb-16"
          >
            <Badge className="mb-4 text-base text-black">DigitalHousePower</Badge>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Support Service Levels
            </h1>
          </motion.div>

          {/* Support Packages Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 md:auto-rows-fr">
            {supportPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex"
              >
                <Card className="flex flex-col gap-3 overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-4 shadow-lg w-full">
                  <CardHeader className="p-0 shrink-0">
                    <div
                      className={`bg-gradient-to-r ${pkg.gradient} rounded-2xl p-6`}
                    >
                      <h3 className="text-base py-6 font-bold text-black text-center">
                        {pkg.title}
                      </h3>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow p-3 flex flex-col min-h-0">
                    {/* Package Description */}
                    <div className="min-h-[120px] mb-4">
                      <p className="text-gray-300 text-xs text-justify leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Includes Section */}
                    <div>
                      <h4 className="text-sm font-semibold mb-4 text-white">
                        Includes:
                      </h4>
                      <ul className="space-y-3">
                        {pkg.includes.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <Check className="h-5 w-5 text-[#34bb92] mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
