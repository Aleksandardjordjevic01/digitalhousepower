"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedDotsBackground } from "@/components/animated-dots-background";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    budget: "",
    interest: "",
  });

  const budgetOptions = [
    "10-20k",
    "30-40k",
    "40-50k",
    "50-100k",
    "> 100k",
  ];

  const interestOptions = [
    "Site from scratch",
    "UX/UI design",
    "Product design",
    "Webflow site",
    "Motion design",
    "Branding",
    "Mobile development",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
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
      label: "Email",
      value: "office@digitalhousepower.com",
      href: "mailto:office@digitalhousepower.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+381 61/7773 519",
      href: "tel:+381617773519",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Kneza Mihaila 3, Beograd 11103",
      href: "https://maps.google.com/?q=Kneza+Mihaila+3,+Beograd",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-foreground relative overflow-hidden">
      <AnimatedDotsBackground />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">

        <div className="relative max-w-[1300px] mx-auto px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 text-base text-black">Get in Touch</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Let&apos;s Start a <span className="text-[#34bb92]">Conversation</span>
            </h1>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? We&apos;d love to hear about it. Send us a message
              and we&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    Your First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
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

                <div>
                  <label className="block text-sm font-medium mb-3">
                    Project Budget (USD)
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {budgetOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleBudgetSelect(option)}
                        className={`px-6 py-2.5 rounded-full border transition-all font-medium ${
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
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#030303] border border-white/10 rounded-lg focus:outline-none focus:border-[#34bb92] transition-colors resize-none"
                    placeholder="Start typing a message..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-black py-6 font-medium"
                >
                  Send
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Budget</h2>
                <p className="text-gray-400 mb-6">
                  What is your budget for the project? This helps us provide the best solution tailored to your needs.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">I&apos;m interested in...</h3>
                  <div className="flex flex-wrap gap-3">
                    {interestOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleInterestSelect(option)}
                        className={`px-5 py-2.5 rounded-full border transition-all font-medium text-sm ${
                          formData.interest === option
                            ? "bg-[#34bb92] border-[#34bb92] text-black"
                            : "bg-[#030303] border-white/10 text-gray-300 hover:border-[#34bb92]/50"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-[#34bb92]/30 transition-colors group"
                  >
                    <div className="p-3 bg-[#34bb92]/10 rounded-lg group-hover:bg-[#34bb92]/20 transition-colors">
                      <item.icon className="h-5 w-5 text-[#34bb92]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl font-bold">Our Location</h2>
                <p className="text-gray-400 mt-2">
                  Visit us at our office in the heart of Belgrade
                </p>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.1234567890!2d20.4489!3d44.8178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b6f5c5%3A0x7f32c1c7e3f6b5d4!2sKneza%20Mihaila%203%2C%20Beograd!5e0!3m2!1sen!2srs!4v1234567890123!5m2!1sen!2srs"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
