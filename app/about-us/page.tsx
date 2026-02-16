"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import { CTASection } from "@/components/cta-section";
import { BentoItem } from "@/components/bento-item";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";
import {
  Lightbulb,
  Network,
  Smartphone,
  Code,
  TrendingUp,
  Brain,
  Users,
  BarChart3,
  Server,
  HeartPulse,
  Building2,
  Package,
  Share2,
  Mail,
  MessageCircle,
  Search,
  Megaphone,
  Blocks,
  Box,
  Layers,
  FileCode,
  PenTool,
  Wrench,
  ShieldCheck,
  Award,
  ClipboardCheck,
} from "lucide-react";

export default function AboutUsPage() {
  const services = [
    {
      icon: Lightbulb,
      title: "DIGITAL STRATEGY",
      description:
        "We help organizations define and execute digital transformation strategies aligned with business objectives. Our approach combines technology assessment, roadmap development, and implementation planning to ensure measurable outcomes and sustainable growth.",
    },
    {
      icon: Network,
      title: "SYSTEM & INFRASTRUCTURE INTEGRATION",
      description:
        "Seamless integration of systems, platforms, and applications to ensure reliable data flow and operational continuity. We design and implement architectures that connect existing infrastructure with modern solutions.",
    },
    {
      icon: Smartphone,
      title: "MOBILE AI",
      description:
        "Development of intelligent mobile applications that leverage AI capabilities for enhanced user experience. From concept to deployment, we create mobile solutions that adapt to user behavior and provide personalized interactions.",
    },
    {
      icon: Code,
      title: "MODERN WEB PLATFORMS AND APPLICATIONS",
      description:
        "Custom web application development using modern frameworks and architectures. We build scalable, maintainable platforms designed for performance, security, and long-term operational reliability.",
    },
    {
      icon: TrendingUp,
      title: "DIGITAL MARKETING",
      description:
        "Strategic digital marketing solutions that drive engagement and measurable results. From campaign planning to analytics, we help organizations reach their audience effectively across digital channels.",
    },
    {
      icon: Brain,
      title: "INTELLIGENT SYSTEMS",
      description:
        "Development of AI-powered systems that automate processes, analyze data, and provide actionable insights. We implement machine learning models and intelligent algorithms tailored to specific business needs.",
    },
    {
      icon: Users,
      title: "USABILITY AND UX",
      description:
        "User-centered design approach focused on creating intuitive, accessible, and effective digital experiences. We conduct usability testing, user research, and iterative design to ensure optimal user satisfaction.",
    },
    {
      icon: BarChart3,
      title: "BUSINESS ANALYTICS",
      description:
        "Data-driven insights and analytics solutions that support informed decision-making. We design dashboards, reporting systems, and analytical tools that transform raw data into strategic business intelligence.",
    },
    {
      icon: Server,
      title: "SUPPORT ENGINEERING & INFRASTRUCTURE (SRE)",
      description:
        "Comprehensive infrastructure management and site reliability engineering services. We ensure system availability, performance optimization, and proactive monitoring to maintain operational excellence.",
    },
    {
      icon: HeartPulse,
      title: "HEALTHCARE SOLUTIONS",
      description:
        "Specialized digital solutions for healthcare organizations, including patient management systems, telemedicine platforms, and clinical data integration. We prioritize security, compliance, and usability.",
    },
    {
      icon: Building2,
      title: "DIGITAL PUBLIC SECTOR APPLICATIONS",
      description:
        "Solutions designed for public sector organizations to improve service delivery, transparency, and operational efficiency. We understand regulatory requirements and deliver systems that meet public accountability standards.",
    },
    {
      icon: Package,
      title: "SMART BUSINESS & LOGISTICS SYSTEMS",
      description:
        "Intelligent logistics and supply chain management solutions that optimize operations, reduce costs, and improve delivery performance. We integrate real-time tracking, automation, and predictive analytics.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-foreground relative overflow-hidden">
      <AnimatedDotsBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-20 md:pb-0 overflow-hidden">
        <div className="relative max-w-[1300px] mx-auto px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-start mb-12"
          >
            <Badge className="mb-4 text-base text-black">DigitalHousePower</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-8">About Us</h1>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="relative px-4 z-20">
        <div className="max-w-[1300px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-8">
              An established IT consulting company delivering structured, reliable solutions
            </h2>
            
            <div className="space-y-6 text-sm text-white/90 text-justify leading-relaxed max-w-5xl">
              <p>
                DigitalHousePower is a Serbian-based IT consulting company with several years of experience delivering technology services to both public and private sector clients. Our work is focused on planning, designing, and implementing reliable IT solutions that support organizational efficiency, security, and long-term development.
              </p>
              <p>
                We operate as a professional consulting and technology partner, combining technical expertise, structured methodologies, and practical business understanding. While our approach is innovative and solution-oriented, our identity is rooted in responsibility, predictability, and measurable results.
              </p>
              <p>
                Over the years, we have built a reputation based on trust, continuity, and the ability to deliver complex projects within defined technical, financial, and regulatory frameworks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <InfiniteSlider gap={24} duration={40} durationOnHover={80}>
            <div className="relative w-[400px] h-[612px] rounded-xl overflow-hidden">
              <Image
                src="/assets/images/developers.webp"
                alt="Development Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[400px] h-[612px] rounded-xl overflow-hidden">
              <Image
                src="/assets/images/graphic-designer.webp"
                alt="Graphic Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[400px] h-[612px] rounded-xl overflow-hidden">
              <Image
                src="/assets/images/marketing-strategy.webp"
                alt="Marketing Strategy"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[400px] h-[612px] rounded-xl overflow-hidden">
              <Image
                src="/assets/images/video-editor.webp"
                alt="Video Production"
                fill
                className="object-cover"
              />
            </div>
          </InfiniteSlider>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="relative pb-12 px-4 z-20">
        <div className="max-w-[1300px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-10"
          >
            {/* Our Consulting Approach */}
            <div className="flex items-start justify-between gap-8 pb-16 border-b border-gray-800">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Our Consulting Approach
                </h2>
                <h3 className="text-lg font-semibold text-gray-300 mb-6">
                  From assessment to implementation, with full accountability
                </h3>
                <div className="space-y-4 text-sm text-gray-300 text-justify leading-relaxed">
                  <p>
                    Every engagement begins with a thorough assessment of existing systems, infrastructure, and business processes. Our goal is to identify technical gaps, operational risks, and opportunities for improvement, while aligning technology decisions with organizational objectives and regulatory requirements.
                  </p>
                  <p>
                    Based on this analysis, we deliver a structured consulting report that includes a clearly defined project scope, implementation roadmap, timelines, milestones, and cost analysis. This approach ensures transparency, control, and informed decision-making at every stage.
                  </p>
                  <p>
                    By covering consulting, planning, and implementation under a single responsibility framework, we reduce complexity and ensure consistency throughout the entire project lifecycle.
                  </p>
                </div>
              </div>
            </div>

            {/* Design, Digital Solutions, and User Experience */}
            <div className="flex items-start justify-between gap-8 pb-16 border-b border-gray-800">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Design, Digital Solutions, and User Experience
                </h2>
                <h3 className="text-lg font-semibold text-gray-300 mb-6">
                  Function-driven design supporting business objectives
                </h3>
                <div className="space-y-4 text-sm text-gray-300 max-w-[850px] text-justify leading-relaxed">
                  <p>
                    Design within DigitalHousePower is not an isolated creative activity, but an integral part of system usability and operational efficiency. We develop UI/UX solutions that prioritize clarity, accessibility, and consistency across digital platforms.
                  </p>
                  <p>
                    Our team delivers website and application solutions that balance visual identity, performance, and maintainability. Every interface is designed to support user workflows, reduce friction, and align with defined business processes.
                  </p>
                  <p>
                    Branding, visual communication, and digital presentation are approached with the same discipline—focused on credibility, coherence, and long-term consistency rather than short-lived trends.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 hidden md:block">
                <div className="w-20 h-20 rounded-xl bg-[#34bb92]/10 border border-[#34bb92]/30 flex items-center justify-center">
                  <PenTool className="w-10 h-10 text-[#34bb92]" />
                </div>
              </div>
            </div>

            {/* Technology and Engineering */}
            <div className="flex items-start justify-between gap-8 pb-16 border-b border-gray-800">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Technology and Engineering
                </h2>
                <h3 className="text-lg font-semibold text-gray-300 mb-6">
                  Proven technologies, structured methodologies
                </h3>
                <div className="space-y-4 text-sm text-gray-300 max-w-[850px] text-justify leading-relaxed">
                  <p>
                    We work with established and modern technologies selected based on project requirements, scalability, and security considerations. Our technology stack includes Laravel, React, Node.js, Vue.js, Angular, and WordPress, supported by best practices in software architecture and development.
                  </p>
                  <p>
                    Engineering decisions are guided by stability, maintainability, and compliance, ensuring that systems remain reliable and adaptable as organizations grow and evolve.
                  </p>
                  <p>
                    Technology is applied as a strategic tool—designed to reduce risk, optimize operations, and enable sustainable digital transformation.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 hidden md:block">
                <div className="w-20 h-20 rounded-xl bg-[#34bb92]/10 border border-[#34bb92]/30 flex items-center justify-center">
                  <Wrench className="w-10 h-10 text-[#34bb92]" />
                </div>
              </div>
            </div>

            {/* Public and Private Sector Expertise */}
            <div className="flex items-start justify-between gap-8 pb-16 border-b border-gray-800">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Public and Private Sector Expertise
                </h2>
                <h3 className="text-lg font-semibold text-gray-300 mb-6">
                  Understanding complex environments and regulatory frameworks
                </h3>
                <div className="space-y-4 text-sm text-gray-300 max-w-[850px] text-justify leading-relaxed">
                  <p>
                    Working with both public institutions and private companies requires a deep understanding of governance, security, compliance, and procurement processes. We are experienced in operating within structured environments where reliability, documentation, and accountability are essential.
                  </p>
                  <p>
                    Our consulting services are designed to support organizations navigating complex regulatory, technical, and organizational challenges, delivering solutions that meet formal requirements while remaining efficient and future-ready.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 hidden md:block">
                <div className="w-20 h-20 rounded-xl bg-[#34bb92]/10 border border-[#34bb92]/30 flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10 text-[#34bb92]" />
                </div>
              </div>
            </div>

            {/* Commitment to Quality and Professional Standards */}
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Commitment to Quality and Professional Standards
                </h2>
                <h3 className="text-lg font-semibold text-gray-300 mb-6">
                  Responsibility, compliance, and long-term value
                </h3>
                <div className="space-y-4 text-sm text-gray-300 max-w-[850px] text-justify leading-relaxed">
                  <p>
                    We maintain a strong commitment to professional standards, quality assurance, and information security. Our team holds relevant certifications and follows internationally recognized frameworks and best practices.
                  </p>
                  <p>
                    Every project is delivered with a focus on durability, clarity, and long-term value—ensuring that clients receive solutions they can rely on, maintain, and develop further.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 hidden md:block">
                <div className="w-20 h-20 rounded-xl bg-[#34bb92]/10 border border-[#34bb92]/30 flex items-center justify-center">
                  <Award className="w-10 h-10 text-[#34bb92]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="relative px-4 z-20">
        <div className="max-w-[1300px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              Technologies We Use
            </h2>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Proven technologies supporting stable and scalable systems
            </h3>
            
            <div className="space-y-4 text-sm text-gray-300 text-justify leading-relaxed max-w-5xl mb-12">
              <p>
                Successful digital projects require more than modern tools—they require the right technologies applied with experience, structure, and clear architectural decisions. At DigitalHousePower, we rely on proven frameworks and platforms that enable stability, scalability, security, and long-term maintainability across diverse IT environments.
              </p>
              <p>
                Our technology choices are driven by project requirements, performance expectations, security considerations, and lifecycle sustainability. We prioritize technologies that are widely adopted, well-documented, and supported by strong developer ecosystems, ensuring that systems remain reliable and adaptable over time.
              </p>
            </div>

            <div className="bento-grid">
              <BentoItem
                icon={<Code className="w-6 h-6 text-black" />}
                title="LARAVEL"
                description="Laravel is a robust PHP framework used for building secure, scalable, and maintainable backend systems. It offers powerful tools for routing, security mechanisms, and efficient tools for database management, authentication, and API development. We use Laravel for business-critical applications where reliability, data integrity, and long-term support are essential."
              />
              
              <BentoItem
                icon={<Blocks className="w-6 h-6 text-black" />}
                title="REACT.JS"
                description="React is a widely adopted JavaScript library for building dynamic and responsive user interfaces. Its component-based architecture allows for modular development, improved maintainability, and efficient performance. We use React to develop complex user interfaces that require interactivity, scalability, and seamless user experience."
              />
              
              <BentoItem
                icon={<Server className="w-6 h-6 text-black" />}
                title="NODE.JS"
                description="Node.js is a server-side JavaScript runtime environment suited for high-performance and network-intensive applications. Its event-driven architecture enables efficient handling of concurrent processes, making it ideal for real-time systems, integrations, and scalable service-oriented architectures."
              />
              
              <BentoItem
                icon={<Layers className="w-6 h-6 text-black" />}
                title="VUE.JS"
                description="Vue.js is a flexible and lightweight frontend framework that enables rapid development of modern web applications. Its approachable structure allows for efficient integration into existing systems, making it suitable for both new projects and incremental modernization initiatives."
              />
              
              <BentoItem
                icon={<Package className="w-6 h-6 text-black" />}
                title="WORDPRESS"
                description="WordPress is a widely used content management system that enables efficient website creation and content administration. We use it for websites, blogs, news platforms, content-driven platforms, and managed digital solutions where flexibility, ease of use, and extensibility are key requirements. Our approach focuses on performance optimization, security hardening, and long-term maintainability rather than generic templates."
              />
              
              <BentoItem
                icon={<FileCode className="w-6 h-6 text-black" />}
                title="ANGULAR"
                description="Angular is an enterprise-grade framework designed for building complex single-page applications. It offers a comprehensive toolset, strong typing and structured development patterns, making it suitable for large-scale systems that require consistency, robustness, and long-term maintainability."
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Technology as a Strategic Tool Section */}
      <section className="relative py-8 px-4 z-20">
        <div className="max-w-[1300px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-[#34bb92]/50 rounded-2xl p-8 md:p-12 border border-[#34bb92]/80">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                Technology as a Strategic Tool
              </h2>
              <p className="text-white/90 text-sm leading-relaxed text-justify">
                At DigitalHousePower, technology is applied as a strategic asset rather than a standalone deliverable. Each framework and platform is selected to support business objectives, regulatory requirements, and future growth. By combining proven technologies with structured methodologies and consulting expertise, we deliver systems that are reliable, secure, and prepared for long-term operation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional IT consulting services */}
    <section className="relative pb-10 px-4 z-20">
        <div className="max-w-[1300px] mx-auto px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className=""
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Additional IT consulting services
            </h2>
            <h3 className="text-lg font-semibold mb-6 text-gray-300">
              Integrated digital services supporting business performance
            </h3>
            <div className="space-y-4 text-sm text-gray-300 text-justify leading-relaxed max-w-5xl mb-12">
              <p>
                In addition to core IT consulting and system implementation,
                DigitalHousePower provides a set of complementary digital
                services designed to support visibility, performance measurement,
                and structured communication with users and customers.
              </p>
              <p>
                These services are delivered as part of an integrated approach,
                ensuring that marketing, analytics, and digital communication are
                aligned with existing systems, business objectives, and
                data-driven decision-making processes.
              </p>
            </div>

            <div className="bento-grid">
              <BentoItem
                icon={<Megaphone className="w-6 h-6 text-black" />}
                title="GOOGLE ADS"
                description="We plan, implement, and manage Google Ads campaigns with a strong focus on measurable performance. Our approach includes keyword research, budget optimization, conversion tracking, and continuous performance analysis to ensure that advertising activities are aligned with defined business objectives and deliver transparent results."
              />
              
              <BentoItem
                icon={<BarChart3 className="w-6 h-6 text-black" />}
                title="GOOGLE ANALYTICS"
                description="We implement and configure analytics frameworks that enable accurate tracking of user behavior and digital performance. Through structured data analysis, we provide insights that support informed decision-making, performance optimization, and continuous improvement of digital platforms."
              />
              
              <BentoItem
                icon={<Search className="w-6 h-6 text-black" />}
                title="SEARCH ENGINE OPTIMIZATION (SEO)"
                description="We optimize websites and digital platforms to improve search engine visibility and organic traffic. Our SEO approach is based on technical optimization, content structure, and long-term sustainability, ensuring stable growth rather than short-term gains."
              />
              
              <BentoItem
                icon={<Share2 className="w-6 h-6 text-black" />}
                title="SOCIAL MEDIA STRATEGY AND MANAGEMENT"
                description="We design and manage structured social media strategies focused on brand consistency, audience relevance, and measurable engagement. Our approach supports long-term brand presence while aligning communication with broader digital and business strategies."
              />
              
              <BentoItem
                icon={<Mail className="w-6 h-6 text-black" />}
                title="EMAIL MARKETING"
                description="We develop and manage email communication frameworks designed to support customer relationships, retention, and targeted outreach. Campaigns are structured, data-driven, and aligned with user behavior and business objectives."
              />
              
              <BentoItem
                icon={<MessageCircle className="w-6 h-6 text-black" />}
                title="VIBER BUSINESS COMMUNICATION"
                description="We utilize Viber channels as a direct and efficient communication tool for customer notifications, promotional messages, and campaign-based outreach. This channel is particularly effective for time-sensitive communication and high engagement rates within local markets."
              />
            </div>
          </motion.div>
        </div>
        </section>

      {/* Certificates and Quality Standards Section */}
      <section className="relative pb-10 px-4 z-20">
        <div className="max-w-[1300px] mx-auto px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-20">
              Structured and Measurable Digital Support
            </h2>
            
            <p className="text-white text-sm mb-10 text-justify leading-relaxed">
              All additional services are delivered with a focus on integration, data accuracy, and performance measurement. By combining digital communication tools with analytics and consulting expertise, we help organizations maintain control, transparency, and consistency across all digital touchpoints.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <Badge className="bg-[#34bb92] text-black hover:bg-[#2da578] text-sm font-bold px-5 py-2">
                Quality & Standards
              </Badge>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Certificates and Quality Standards
            </h3>

            <h4 className="text-lg font-bold text-[#34bb92] mb-8">
              Recognition of quality and business credibility
            </h4>

            <p className="text-white text-sm mb-6 text-justify leading-relaxed">
              DigitalHousePower operates in accordance with established professional standards, focusing on reliability, consistency, and responsible delivery of IT consulting services for public and private sector clients.
            </p>

            <p className="text-white text-sm mb-6 text-justify leading-relaxed">
              Our commitment to quality and professional conduct has been independently recognized through external evaluation. In 2025, DigitalHousePower was awarded the <span className="font-bold text-[#34bb92]">Certificate of Quality</span> and the <span className="font-bold text-[#34bb92]">Certificate of Good Reputation</span>, issued by <span className="italic text-[#34bb92]">Companies Reputation</span>. These certifications are granted exclusively to companies that meet predefined criteria related to service quality, operational reliability, and business reputation.
            </p>

            <p className="text-white text-sm mb-8 text-justify leading-relaxed">
              These recognitions complement our internal methodologies, quality controls, and long-term approach to building trust, confirming our position as a reliable and accountable technology partner.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="companies-reputation" className="border-2 border-[#34bb92]/50 rounded-lg px-6 bg-[#030303]/80 data-[state=open]:bg-[#030303]">
                <AccordionTrigger className="text-lg font-bold text-white hover:text-[#34bb92] py-4">
                  Companies Reputation
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-6 pt-4 pb-2">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#34bb92]/20">
                      <Image
                        src="/assets/images/certificate-reputation.jpg"
                        alt="Certificate of Good Reputation"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#34bb92]/20">
                      <Image
                        src="/assets/images/certificate-quality.jpg"
                        alt="Certificate of Quality"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Send us an email to discuss a new project"
        description="We will be happy to schedule a meeting, discuss your requirements, and provide structured guidance on the next steps."
        action={{
          text: "Contact us",
          href: "/contact"
        }}
      />
    </div>
  );
}
