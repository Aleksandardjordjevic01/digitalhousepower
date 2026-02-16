"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  CursorCardsContainer,
  CursorCard,
} from "@/components/ui/cursor-cards";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import {
  Monitor,
  Network,
  Globe,
  Building2,
  Shield,
  Wifi,
  Cloud,
  TrendingUp,
  Database,
  Code,
  Headphones,
  Video,
  Check,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: "IT Consulting & Digital Transformation",
      description:
        "We support organizations throughout the entire digital transformation journey, from strategy development and roadmap creation to consulting services focused on aligning technology with organizational goals. Regulatory compliance assessment, new technology adoption, and vendor selection to ensure clarity. Feasibility and return-on-investment analysis provide a concrete technology upgrade. We work closely with decision makers to ensure clarity, feasibility, and measurable outcome.",
      scope: [
        "Digital transformation strategy and implementation roadmaps",
        "Technology adoption and regulatory compliance consultation",
        "Design of customized digital architectures and platforms",
        "Advisory services for public and private sector organizations",
      ],
    },
    {
      icon: Network,
      title: "IT Engineering & System Integration",
      description:
        "Our engineers conduct focus on turning isolated solutions and the best of breed, through seamless integration of systems, architecture design patterns. This seamless coordination across applications and digital platforms. We prioritize existing infrastructure and equipment into solutions and support new implementation.",
      scope: [
        "Hardware and software integration",
        "Custom API development and connectivity",
        "Application and platform integrations",
        "Technical documentation and user support",
      ],
    },
    {
      icon: Globe,
      title: "Smart City & IoT Solutions",
      description:
        "We design and implement Smart City and IoT-based solutions that support sustainable urban development and infrastructure optimization for data-driven governance. Our solutions are modular and scalable, allowing gradual implementation.",
      scope: [
        "Smart City platforms and sensor networks",
        "Traffic, environmental, and utility monitoring",
        "IoT device integration and data platforms",
        "Sustainable and energy-efficient solutions",
      ],
    },
    {
      icon: Building2,
      title: "Public Sector IT Solutions",
      description:
        "We provide public sector organizations with experience, security, and compliance requirements of public institutions. Our approach: transparency, accountability, and user-centered design throughout the development cycle.",
      scope: [
        "E-government platforms and information systems",
        "Outsourcing of IT functions or project segments",
        "End-to-end project delivery and coordination",
        "Compliance, documentation, and risk management",
      ],
    },
    {
      icon: Shield,
      title: "Information Security & Cybersecurity",
      description:
        "In today's interconnected world, information security is built on prevention, protection, and long-term system resilience. Our approach encompasses overall strategy design and implementation frameworks. Security is integrated into every layer of the IT infrastructure to reduce risks and ensure business continuity.",
      scope: [
        "Security assessments and end-to-end security auditing",
        "Infrastructure and application security",
        "Policy development and compliance support",
        "Ongoing monitoring and security maintenance",
      ],
    },
    {
      icon: Wifi,
      title: "Networks, Connectivity & Technical Support",
      description:
        "Reliable network infrastructure is fundamental to every organization's secure and stable connectivity. Our technical support services ensure continuity expertise through proactive maintenance and rapid incident resolution. Support is delivered promptly and on-site, depending on operational requirements.",
      scope: [
        "Network design, installation, and testing",
        "Connectivity troubleshooting and optimization",
        "On-site and remote technical assistance",
        "Infrastructure monitoring and maintenance",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & Data Backup",
      description:
        "We implement cloud-based solutions that ensure data availability, protection, and business continuity. Our services also support system security and disaster recovery infrastructure. Cloud and backup strategies are tailored to system criticality and organizational needs.",
      scope: [
        "Cloud infrastructure implementation",
        "Secure data backup and recovery solutions",
        "Disaster recovery and business continuity planning",
        "Scalable cloud service management",
      ],
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence & Process Optimization",
      description:
        "We help organizations improve decision-making and operational efficiency through business intelligence platforms. Data-driven strategies and automation drive efficiency.",
      scope: [
        "Business intelligence and reporting platforms",
        "Data analytics and performance monitoring",
        "End-to-end process optimization",
        "Decision support systems",
      ],
    },
    {
      icon: Database,
      title: "ERP Systems Implementation & Maintenance",
      description:
        "We provide ERP implementation and maintenance services, including SAP-based solutions, tailored to organizational structure and operational requirements. Ongoing support ensures adaptability.",
      scope: [
        "ERP system implementation and configuration",
        "Module integration and customization",
        "User training and documentation",
        "Ongoing system maintenance and support",
      ],
    },
    {
      icon: Code,
      title: "Digital Platforms & Web Solutions",
      description:
        "We design and develop modern digital platforms that serve as scalable front-ends to IT infrastructure and applications. Platforms combine functionality, usability, and long-term maintainability.",
      scope: [
        "Custom design led digital platforms",
        "Custom web and mobile applications",
        "Content management systems",
        "Platform maintenance and optimization",
      ],
    },
    {
      icon: Headphones,
      title: "Contact Center & Communication Systems",
      description:
        "We design and implement contact center solutions that support efficient, AI-channel communication and improve service quality and customer's integrated and existing business systems.",
      scope: [
        "Contact center system design and implementation",
        "Integration with CRM and business platforms",
        "Digital communication and omni-channel systems",
        "Ongoing operation and optimization",
      ],
    },
    {
      icon: Video,
      title: "Multimedia & Digital Content Solutions",
      description:
        "We create structured multimedia and digital content that supports communication, education, and promotion. Content is designed for multiple platforms and institutional needs.",
      scope: [
        "Corporate and promotional multimedia content",
        "Animations and digital presentations",
        "Virtual walkthroughs and visualizations",
        "Multimedia development and adaptation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-foreground relative overflow-hidden">
      <AnimatedDotsBackground />
      {/* Hero Section */}
      <section className="relative pt-22 pb-16 md:pt-24 md:pb-24 overflow-hidden">

        <div className="relative max-w-[1300px] mx-auto px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-start mb-16"
          >
            <Badge className="mb-4 text-base text-black">DigitalHousePower</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-[#34bb92]">Services</span>
            </h1>
            <p className="text-lg text-start font-semibold text-gray-300 mb-4 max-w-3xl">
              PROFESSIONAL IT SERVICES FOR PUBLIC AND PRIVATE SECTOR
            </p>
            <p className="text-sm text-gray-400 max-w-4xl text-justify">
              DigitalHousePower provides end-to-end IT services that support
              organizations in planning, building, securing, and operating
              complex digital systems. Our services combine consulting expertise,
              engineering capabilities, and long-term operational support tailored
              to the needs of public institutions and private enterprises.
            </p>
          </motion.div>

          {/* Services Grid */}
          <CursorCardsContainer className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CursorCard className="h-full rounded-2xl">
                  <div className="bg-[#0a0a0a] rounded-2xl p-8 h-full group">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-[#34bb92]/10 rounded-xl group-hover:bg-[#34bb92]/20 transition-colors">
                    <service.icon className="h-8 w-8 text-[#34bb92]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-[#34bb92] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 text-justify leading-relaxed">
                  {service.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-300">
                    Service scope includes:
                  </h4>
                  <ul className="space-y-2">
                    {service.scope.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <Check className="h-4 w-4 text-[#34bb92] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                  </div>
                </CursorCard>
              </motion.div>
            ))}
          </CursorCardsContainer>
        </div>
      </section>
    </div>
  );
}
