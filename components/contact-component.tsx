"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Smile } from "lucide-react";

export default function ContactComponent() {
  const [step, setStep] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const messages = [
    "Ready to transform your CX?",
    "And delight your customers?",
    "With all of us behind you?",
    "Er...yes",
    "Emailing you now",
    "Brilliant 😊",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < messages.length - 1) {
        setStep(step + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [step, messages.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend
    console.log({ name, email, message });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-gray-800">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-950 z-0"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-black/30"></div>
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left content */}
      <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center md:w-1/2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Start
            <br />
            something
            <br />
            brilliant.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-200 max-w-md"
          >
            What could happen with Transcom behind your brand? Find out. Get in
            touch today.
          </motion.p>

          <motion.div variants={itemVariants}>
            {!showForm ? (
              <Button
                onClick={() => setShowForm(true)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-6 rounded-full text-lg"
              >
                Contact us
              </Button>
            ) : submitted ? (
              <div className="text-green-400 font-medium">
                Thanks! We'll be in touch soon.
              </div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="space-y-4 max-w-md"
              >
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    rows={4}
                    className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-full flex items-center gap-2"
                >
                  Send message <Send size={16} />
                </Button>
              </motion.form>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Right content - Chat bubbles */}
      <div className="relative z-10 p-8 md:p-16 flex items-center justify-center md:w-1/2">
        <div className="w-full max-w-md">
          {messages.map(
            (msg, index) =>
              index <= step && (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={bubbleVariants}
                  className={`mb-4 max-w-xs ${
                    index === 3 || index === 5
                      ? "ml-auto mr-0"
                      : index === 4
                      ? "mx-auto text-center"
                      : "ml-0 mr-auto"
                  }`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2 inline-block ${
                      index === 3 || index === 5
                        ? "bg-gray-700 text-white"
                        : index === 4
                        ? "bg-yellow-400 text-black"
                        : "bg-white text-black"
                    }`}
                  >
                    {msg}
                    {index === 5 && <Smile className="inline ml-1" size={18} />}
                  </div>
                </motion.div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
