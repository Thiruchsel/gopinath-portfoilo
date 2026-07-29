import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Send, Check } from 'lucide-react';

// Web3Forms Access Key
// 1. Visit https://web3forms.com/ to get your free access key.
// 2. Paste your access key inside the quotes below:
const WEB3FORMS_ACCESS_KEY = "ee417717-9923-4bce-9d7e-6356b4052955";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSubmitError('');

    // If key hasn't been set, guide the developer
    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setSubmitError("Please configure your Web3Forms Access Key in Contact.jsx");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New message from ${formData.name}`,
          message: formData.message,
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubmitError('Failed to send message. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types in the input field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#03000a] overflow-hidden">
      {/* Decorative gradient radial glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-primaryPurp/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-accentPurp/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-xs uppercase tracking-[0.25em] text-accentPurp font-semibold mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Let's Shape Your Brand Identity
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primaryPurp to-accentPurp mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between" data-aos="fade-right">
            <div>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-wide">
                Start a Conversation
              </h4>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you need a full corporate branding kit, a logo redesign, B2B graphic support, or want to discuss a photography/videography project, feel free to reach out. I am available for freelance work and full-time opportunities.
              </p>

              <div className="flex flex-col gap-6">
                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primaryPurp/10 border border-primaryPurp/20 flex items-center justify-center text-accentPurp group-hover:bg-primaryPurp group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider block font-semibold">Phone Number</span>
                    <a href="tel:9003234519" className="text-gray-300 hover:text-accentPurp transition-colors font-medium">
                      +91 90032 34519
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primaryPurp/10 border border-primaryPurp/20 flex items-center justify-center text-accentPurp group-hover:bg-primaryPurp group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider block font-semibold">Email Address</span>
                    <a href="mailto:gopiwork08@gmail.com" className="text-gray-300 hover:text-accentPurp transition-colors font-medium">
                      gopiwork08@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primaryPurp/10 border border-primaryPurp/20 flex items-center justify-center text-accentPurp group-hover:bg-primaryPurp group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider block font-semibold">Location</span>
                    <span className="text-gray-300 font-medium">
                      4762, Thoraipakkam, Chennai - 600097
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn Block */}
            <div className="mt-12 pt-8 border-t border-primaryPurp/10">
              <span className="text-xs text-gray-500 uppercase tracking-wider block mb-3 font-semibold">Follow my work</span>
              <a
                href="https://www.linkedin.com/in/gopi8/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primaryPurp/20 bg-primaryPurp/5 text-gray-300 hover:border-accentPurp hover:text-white hover:text-glow transition-all"
              >
                <Linkedin className="w-4 h-4 text-accentPurp" />
                <span className="text-sm font-semibold">LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="glass-panel p-8 rounded-2xl border border-primaryPurp/10 bg-darkCard/25 relative">
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Your Name <span className="text-accentPurp">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Gopinath"
                      className={`w-full bg-[#120d26]/40 border outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 transition-all focus:ring-1 ${
                        errors.name 
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30' 
                          : 'border-primaryPurp/20 focus:border-accentPurp focus:ring-accentPurp/30'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 font-medium">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Email Address <span className="text-accentPurp">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="gopi@example.com"
                      className={`w-full bg-[#120d26]/40 border outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 transition-all focus:ring-1 ${
                        errors.email 
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30' 
                          : 'border-primaryPurp/20 focus:border-accentPurp focus:ring-accentPurp/30'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 font-medium">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="B2B Branding Project / Collaboration"
                    className="w-full bg-[#120d26]/40 border border-primaryPurp/20 focus:border-accentPurp outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 transition-all focus:ring-1 focus:ring-accentPurp/30"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Your Message <span className="text-accentPurp">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your design ideas..."
                    className={`w-full bg-[#120d26]/40 border outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 resize-none transition-all focus:ring-1 ${
                      errors.message 
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30' 
                        : 'border-primaryPurp/20 focus:border-accentPurp focus:ring-accentPurp/30'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <span className="text-xs text-red-400 font-medium">{errors.message}</span>
                  )}
                </div>

                {/* Submit Error Message */}
                {submitError && (
                  <div className="text-xs text-red-400 bg-red-950/20 border border-red-500/20 px-4 py-3 rounded-xl text-center font-medium">
                    {submitError}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-xs border text-white transition-all glow-btn ${
                    submitted 
                      ? 'bg-green-600 border-green-500' 
                      : 'bg-gradient-to-r from-primaryPurp to-accentPurp border-primaryPurp hover:text-glow'
                  }`}
                >
                  {loading ? (
                    <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                  ) : submitted ? (
                    <>
                      Message Sent <Check className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
