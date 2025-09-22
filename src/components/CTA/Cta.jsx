// File: src/components/CTA/Cta.jsx
import React, { useState } from 'react';
import EmailForm from './EmailForm';
export default function AISEOSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="w-full max-w-6xl mx-auto h-[470px] relative overflow-hidden border">
      {/* Background with gradient and grid pattern */}
      <div
        className="absolute inset-0 "
        style={{
          background:
            "radial-gradient(30% 40% at 50% 0%, #401f74 60%, #000000 190%)",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20 "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        ></div>

        {/* Subtle glow effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-transparent rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#311858] rounded-full blur-3xl opacity-10" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full ">
        {/* Heading */}
        <h1 className="text-white text-5xl font-medium md:text-6xl text-center mb-12 leading-tight">
          <span className="block">AI-driven SEO</span>
          <span className="block">for everyone.</span>
        </h1>

        {/* Email form */}
      <EmailForm/>

        {/* Disclaimer */}
        <p className="text-gray-400 text-sm mt-4 text-center">
          No credit card required • 7-days free trial
        </p>
      </div>
    </div>
  );
}