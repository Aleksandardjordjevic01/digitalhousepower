"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";
import { CTASection } from "@/components/cta-section";
import { BentoItem } from "@/components/bento-item";
import { useLanguage } from "@/lib/language-context";
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
  const { t } = useLanguage();
  
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
            <Badge className="mb-4 text-base text-black">{t('aboutPage.badge')}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#77debb]">{t('aboutPage.title')}</h1>
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
              {t('aboutPage.introTitle')}
            </h2>
            
            <div className="space-y-6 text-sm text-white/90 text-justify leading-relaxed max-w-5xl">
              <p>
                {t('aboutPage.introPara1')}
              </p>
              <p>
                {t('aboutPage.introPara2')}
              </p>
              <p>
                {t('aboutPage.introPara3')}
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
                alt={t('aboutPage.imageAlt1')}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[400px] h-[612px] rounded-xl overflow-hidden">
              <Image
                src="/assets/images/graphic-designer.webp"
                alt={t('aboutPage.imageAlt2')}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[400px] h-[612px] rounded-xl overflow-hidden">
              <Image
                src="/assets/images/marketing-strategy.webp"
                alt={t('aboutPage.imageAlt3')}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[400px] h-[612px] rounded-xl overflow-hidden">
              <Image
                src="/assets/images/video-editor.webp"
                alt={t('aboutPage.imageAlt4')}
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
                  {t('aboutPage.consultingTitle')}
                </h2>
                <h3 className="text-lg font-semibold text-gray-300 mb-6">
                  {t('aboutPage.consultingSubtitle')}
                </h3>
                <div className="space-y-4 text-sm text-gray-300 text-justify leading-relaxed">
                  <p>
                    {t('aboutPage.consultingPara1')}
                  </p>
                  <p>
                    {t('aboutPage.consultingPara2')}
                  </p>
                  <p>
                    {t('aboutPage.consultingPara3')}
                  </p>
                </div>
              </div>
            </div>

            {/* Design, Digital Solutions, and User Experience */}
            <div className="flex items-start justify-between gap-8 pb-16 border-b border-gray-800">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {t('aboutPage.designTitle')}
                </h2>
                <h3 className="text-lg font-semibold text-gray-300 mb-6">
                  {t('aboutPage.designSubtitle')}
                </h3>
                <div className="space-y-4 text-sm text-gray-300 max-w-[850px] text-justify leading-relaxed">
                  <p>
                    {t('aboutPage.designPara1')}
                  </p>
                  <p>
                    {t('aboutPage.designPara2')}
                  </p>
                  <p>
                    {t('aboutPage.designPara3')}
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
                  {t('aboutPage.technologyTitle')}
                </h2>
                <h3 className="text-lg font-semibold text-gray-300 mb-6">
                  {t('aboutPage.technologySubtitle')}
                </h3>
                <div className="space-y-4 text-sm text-gray-300 max-w-[850px] text-justify leading-relaxed">
                  <p>
                    {t('aboutPage.technologyPara1')}
                  </p>
                  <p>
                    {t('aboutPage.technologyPara2')}
                  </p>
                  <p>
                    {t('aboutPage.technologyPara3')}
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
                  {t('aboutPage.expertiseTitle')}
                </h2>
                <h3 className="text-lg font-semibold text-gray-300 mb-6">
                  {t('aboutPage.expertiseSubtitle')}
                </h3>
                <div className="space-y-4 text-sm text-gray-300 max-w-[850px] text-justify leading-relaxed">
                  <p>
                    {t('aboutPage.expertisePara1')}
                  </p>
                  <p>
                    {t('aboutPage.expertisePara2')}
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
                  {t('aboutPage.qualityTitle')}
                </h2>
                <h3 className="text-lg font-semibold text-gray-300 mb-6">
                  {t('aboutPage.qualitySubtitle')}
                </h3>
                <div className="space-y-4 text-sm text-gray-300 max-w-[850px] text-justify leading-relaxed">
                  <p>
                    {t('aboutPage.qualityPara1')}
                  </p>
                  <p>
                    {t('aboutPage.qualityPara2')}
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
              {t('aboutPage.techSectionTitle')}
            </h2>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              {t('aboutPage.techSectionSubtitle')}
            </h3>
            
            <div className="space-y-4 text-sm text-gray-300 text-justify leading-relaxed max-w-5xl mb-12">
              <p>
                {t('aboutPage.techSectionPara1')}
              </p>
              <p>
                {t('aboutPage.techSectionPara2')}
              </p>
            </div>

            <div className="bento-grid">
              <BentoItem
                icon={<Code className="w-6 h-6 text-black" />}
                title="LARAVEL"
                description={t('aboutPage.techLaravel')}
              />
              
              <BentoItem
                icon={<Blocks className="w-6 h-6 text-black" />}
                title="REACT.JS"
                description={t('aboutPage.techReact')}
              />
              
              <BentoItem
                icon={<Server className="w-6 h-6 text-black" />}
                title="NODE.JS"
                description={t('aboutPage.techNode')}
              />
              
              <BentoItem
                icon={<Layers className="w-6 h-6 text-black" />}
                title="VUE.JS"
                description={t('aboutPage.techVue')}
              />
              
              <BentoItem
                icon={<Package className="w-6 h-6 text-black" />}
                title="WORDPRESS"
                description={t('aboutPage.techWordpress')}
              />
              
              <BentoItem
                icon={<FileCode className="w-6 h-6 text-black" />}
                title="ANGULAR"
                description={t('aboutPage.techAngular')}
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
                {t('aboutPage.strategicToolTitle')}
              </h2>
              <p className="text-white/90 text-sm leading-relaxed text-justify">
                {t('aboutPage.strategicToolDesc')}
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
              {t('aboutPage.additionalTitle')}
            </h2>
            <h3 className="text-lg font-semibold mb-6 text-gray-300">
              {t('aboutPage.additionalSubtitle')}
            </h3>
            <div className="space-y-4 text-sm text-gray-300 text-justify leading-relaxed max-w-5xl mb-12">
              <p>
                {t('aboutPage.additionalPara1')}
              </p>
              <p>
                {t('aboutPage.additionalPara2')}
              </p>
            </div>

            <div className="bento-grid">
              <BentoItem
                icon={<Megaphone className="w-6 h-6 text-black" />}
                title="GOOGLE ADS"
                description={t('aboutPage.googleAds')}
              />
              
              <BentoItem
                icon={<BarChart3 className="w-6 h-6 text-black" />}
                title="GOOGLE ANALYTICS"
                description={t('aboutPage.googleAnalytics')}
              />
              
              <BentoItem
                icon={<Search className="w-6 h-6 text-black" />}
                title="SEARCH ENGINE OPTIMIZATION (SEO)"
                description={t('aboutPage.seo')}
              />
              
              <BentoItem
                icon={<Share2 className="w-6 h-6 text-black" />}
                title="SOCIAL MEDIA STRATEGY AND MANAGEMENT"
                description={t('aboutPage.socialMedia')}
              />
              
              <BentoItem
                icon={<Mail className="w-6 h-6 text-black" />}
                title="EMAIL MARKETING"
                description={t('aboutPage.emailMarketing')}
              />
              
              <BentoItem
                icon={<MessageCircle className="w-6 h-6 text-black" />}
                title="VIBER BUSINESS COMMUNICATION"
                description={t('aboutPage.viber')}
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
              {t('aboutPage.measurableSupportTitle')}
            </h2>
            
            <p className="text-white text-sm mb-10 text-justify leading-relaxed">
              {t('aboutPage.measurableSupportDesc')}
            </p>

            <div className="flex items-center gap-3 mb-8">
              <Badge className="bg-[#34bb92] text-black hover:bg-[#2da578] text-sm font-bold px-5 py-2">
                {t('aboutPage.qualityBadge')}
              </Badge>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {t('aboutPage.certificatesTitle')}
            </h3>

            <h4 className="text-lg font-bold text-[#34bb92] mb-8">
              {t('aboutPage.certificatesSubtitle')}
            </h4>

            <p className="text-white text-sm mb-6 text-justify leading-relaxed">
              {t('aboutPage.certificatesPara1')}
            </p>

            <p className="text-white text-sm mb-6 text-justify leading-relaxed">
              {t('aboutPage.certificatesPara2')}
            </p>

            <p className="text-white text-sm mb-8 text-justify leading-relaxed">
              {t('aboutPage.certificatesPara3')}
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="companies-reputation" className="border-2 border-[#34bb92]/50 rounded-lg px-6 bg-[#030303]/80 data-[state=open]:bg-[#030303]">
                <AccordionTrigger className="text-base no-underline font-bold text-white hover:text-[#34bb92] py-4">
                  {t('aboutPage.accordionTitle')}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-6 pt-4 pb-2">
                    <div className="relative w-full rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#34bb92]/20">
                      <Image
                        src="/assets/images/za-dobru-reputaciju-scaled.png"
                        alt={t('aboutPage.certificateAlt1')}
                        width={800}
                        height={1000}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="relative w-full rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#34bb92]/20">
                      <Image
                        src="/assets/images/za-vrhunski-kvalitet-scaled.png"
                        alt={t('aboutPage.certificateAlt2')}
                        width={800}
                        height={1000}
                        className="w-full h-auto object-contain"
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
        title={t('aboutPage.ctaTitle')}
        description={t('aboutPage.ctaDesc')}
        action={{
          text: t('aboutPage.ctaButton'),
          href: "/contact"
        }}
      />
    </div>
  );
}
