"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  CursorCardsContainer,
  CursorCard,
} from "@/components/ui/cursor-cards";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import Image from "next/image";
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
  const mainSolutions = [
    {
      title: "SMART CITY",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      icon: Building2,
      image: "/assets/images/smart-city.png",
      description:
        "Integrated urban systems for efficient city management",
      detailedDescription:
        "Smart City systems integrate diverse urban functions and infrastructure through cloud-driven, hyperautomated, and decision-focused digital tools for administration.",
      keyServiceAreas: [
        "Traffic, bicycling and intelligent traffic control",
        "Smart parking systems and electric mobility",
        "Environmental monitoring air quality waste, weather",
        "Energy efficiency LED street lighting and energy management",
        "Public Wi-Fi zones and digital information infrastructure",
        "Public Wi-Fi zones and information kiosks",
        "Centralized platforms for city administration and monitoring",
      ],
      valueDelivered:
        "Improved efficiency, transparency, sustainability, and quality of life for citizens.",
    },
    {
      title: "SMART HIGHWAY",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      icon: Car,
      image: "/assets/images/smart-highway.png",
      description: "Intelligent transport and traffic safety systems",
      detailedDescription:
        "Transport systems are designed to improve road flow and traffic management combined, traffic and incident detection infrastructure, traffic management platforms, traffic analytics, and data analytics information delivery and long-term planning.",
      keyServiceAreas: [
        "Traffic sensors measurement and vehicle detection",
        "Variable message signs (VMS) and digital signage",
        "Weather and condition detection (icing)",
        "Automated incident detection",
        "Centralized traffic/highway control centers",
        "Integration of data feeds with traffic forecasting",
        "Integration with IoT and emergency infrastructure",
      ],
      valueDelivered:
        "Increased traffic safety, optimized traffic flow, reduced congestion and improved public safety.",
    },
    {
      title: "EMERGENCY SYSTEMS",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      icon: AlertTriangle,
      image: "/assets/images/emergency-system.png",
      description: "Predictive monitoring and early warning solutions",
      detailedDescription:
        "Emergency systems are designed to detect risks early, respond fast, recover, and protect lives, property, and infrastructure. These systems rely on real-time data, analytics, and a controlled alerting procedure.",
      keyServiceAreas: [
        "Real-time early detection and warning systems",
        "Water level and precipitation monitoring",
        "Environmental risk monitoring",
        "Predictive analytics over GIS-foundation",
        "Automated alerts to authorities and citizens",
        "Integration with emergency and civil-protection services",
      ],
      valueDelivered:
        "Faster responses, reduced damages, improved public safety, and climate resilience.",
    },
  ];

  const systemsIntegration = [
    {
      title: "Shared sensor and communication infrastructure",
      icon: Radio,
    },
    {
      title: "Centralized monitoring and control centers",
      icon: Monitor,
    },
    {
      title: "Unified data analytics and reporting",
      icon: BarChart3,
    },
    {
      title: "Secure data transmission and cloud-based platforms",
      icon: Cloud,
    },
  ];

  const ourRole = [
    {
      title: "Concept definition and feasibility analysis",
      icon: Lightbulb,
    },
    {
      title: "System design and architecture",
      icon: Pencil,
    },
    {
      title: "Technology integration and deployment",
      icon: Settings,
    },
    {
      title: "Ongoing support and system maintenance",
      icon: Wrench,
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
              <span className="text-[#34bb92]">Smart City</span>
            </h1>
          </motion.div>

          {/* Smart Solutions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 text-start"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              SMART SOLUTIONS FOR CONNECTED INFRASTRUCTURE
            </h2>
            <p className="text-gray-400 max-w-4xl text-sm text-justify">
              DigitalHousePower delivers integrated smart infrastructure that
              supports sustainable urban systems and emergency management. Our
              products are designed as modular systems that can be implemented
              incrementally or combined into a unified Smart City ecosystem.
            </p>
          </motion.div>

          {/* Main Solutions Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {mainSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Colored Header */}
                <div
                  className={`h-48 flex items-center justify-center bg-gradient-to-br ${solution.color} relative`}
                >
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={200}
                    height={200}
                    className="object-contain p-4"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-3 text-center">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-4 text-center italic">
                    {solution.description}
                  </p>
                  <p className="text-gray-400 text-xs mb-6 text-justify leading-relaxed">
                    {solution.detailedDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-gray-300">
                      Key service areas:
                    </h4>
                    <ul className="space-y-2">
                      {solution.keyServiceAreas.map((area, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-gray-400"
                        >
                          <Check className="h-4 w-4 text-[#34bb92] mt-0.5 flex-shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <h4 className="text-sm font-semibold mb-2 text-gray-300">
                      Value delivered:
                    </h4>
                    <p className="text-xs text-gray-400 italic">
                      {solution.valueDelivered}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* How The Systems Work Together */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-center">
              HOW THE SYSTEMS WORK TOGETHER
            </h2>
            <p className="text-gray-400 text-sm text-center mb-12 max-w-3xl mx-auto">
              All three solutions can run on separate infrastructure or as part of
              a single integrated platform.
            </p>

            <CursorCardsContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemsIntegration.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <CursorCard className="h-full rounded-2xl">
                    <div className="bg-[#0a0a0a] rounded-2xl p-6 h-full flex flex-col items-center text-center">
                      <div className="mb-4 p-4 bg-[#34bb92]/10 rounded-xl">
                        <item.icon className="h-12 w-12 text-[#34bb92]" />
                      </div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                    </div>
                  </CursorCard>
                </motion.div>
              ))}
            </CursorCardsContainer>

            <p className="text-gray-400 text-sm text-center mt-12 max-w-3xl mx-auto">
              This modular approach allows gradual implementation while ensuring
              long-term scalability and interoperability.
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
              DIGITALHOUSEPOWER'S ROLE
            </h2>
            <p className="text-gray-400 text-sm text-center mb-12 max-w-3xl mx-auto">
              DigitalHousePower acts as a technology and consulting partner,
              alongside the entire life-cycle of smart infrastructure projects.
            </p>

            <CursorCardsContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ourRole.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                >
                  <CursorCard className="h-full rounded-2xl">
                    <div className="bg-[#0a0a0a] rounded-2xl p-6 h-full flex flex-col items-center text-center">
                      <div className="mb-4 p-4 bg-[#34bb92]/10 rounded-xl">
                        <item.icon className="h-12 w-12 text-[#34bb92]" />
                      </div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                    </div>
                  </CursorCard>
                </motion.div>
              ))}
            </CursorCardsContainer>

            <p className="text-gray-400 text-center text-sm mt-12 max-w-3xl mx-auto">
              Our solutions are aligned with regulatory frameworks and tailored
              to the needs of public institutions and infrastructure operators.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
