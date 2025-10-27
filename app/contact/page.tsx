'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logoImage from '../assets/logo.png';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: data.message || 'Message sent successfully!',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src={logoImage}
              alt="Sweatchi logo"
              width={120}
              height={32}
              className="h-12 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Contact Content */}
      <main className="max-w-4xl mx-auto px-4 py-4">
        <div className="sm:glassmorphism sm:rounded-2xl p-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Contact Us
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-white leading-relaxed mb-6">
                We're here to help! If you have any questions, feedback, or need
                support, please fill out the form below and we'll get back to
                you soon.
              </p>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <div
                  className={`rounded-lg p-4 mb-6 ${
                    status.type === 'success'
                      ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                      : status.type === 'error'
                      ? 'bg-red-500/20 border border-red-500/30 text-red-300'
                      : 'bg-blue-500/20 border border-blue-500/30 text-blue-300'
                  }`}
                >
                  <p className="text-center font-medium">{status.message}</p>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#FEC3DB] focus:bg-white/15 transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#FEC3DB] focus:bg-white/15 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#FEC3DB] focus:bg-white/15 transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#FEC3DB] focus:bg-white/15 transition-all resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="bg-[#FEC3DB] hover:bg-[#E56197] disabled:bg-gray-500 disabled:cursor-not-allowed text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
                  >
                    {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </section>

            <div className="border-t border-white/20 pt-6 mt-8">
              <p className="text-white text-sm text-center">
                Thank you for choosing Sweatchi! We appreciate your support and
                look forward to hearing from you.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
