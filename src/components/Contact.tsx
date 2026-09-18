import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Phone, Mail, MapPin, Send, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:aadhivinay2002@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 6303192384', href: 'tel:+916303192384' },
    { icon: Mail, label: 'Email', value: 'aadhivinay2002@gmail.com', href: 'mailto:aadhivinay2002@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Hyderabad, India', href: '' },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white dark:bg-ink-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          label="Contact"
          title="Let's connect"
          description="Open to SAP consulting opportunities, collaborations, and conversations about business processes and technology."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-ink-50 dark:bg-ink-800/50 border border-ink-200/60 dark:border-ink-700/60 hover:border-enterprise-300 dark:hover:border-enterprise-700 transition-all duration-200"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true, margin: '-80px' }}
                  data-cursor="explore"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-enterprise-500 to-enterprise-700 flex items-center justify-center shadow-md">
                    <info.icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-enterprise-600 dark:text-enterprise-400 mb-0.5">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-medium text-ink-700 dark:text-ink-300 hover:text-enterprise-600 dark:hover:text-enterprise-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-ink-700 dark:text-ink-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-enterprise-600 to-enterprise-800 rounded-2xl p-6 text-white shadow-premium">
              <h4 className="text-lg font-bold mb-2">Ready to Start a Project?</h4>
              <p className="opacity-90 text-sm mb-4 leading-relaxed">
                Let's discuss how we can work together to bring your vision to life.
              </p>
              <a
                href="mailto:aadhivinay2002@gmail.com?subject=Project%20Collaboration&body=Hi%20Aadhi,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards"
                className="inline-flex items-center gap-2 bg-white text-enterprise-600 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Mail size={16} />
                Send Email
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-ink-50 dark:bg-ink-800/50 rounded-2xl p-6 sm:p-8 border border-ink-200 dark:border-ink-700"
            >
              <p className="text-sm text-ink-500 dark:text-ink-400 mb-6 flex items-start gap-2">
                <ExternalLink size={14} className="mt-0.5 flex-shrink-0 text-enterprise-500" />
                <span>Submitting this form will open your email client with the message pre-filled.</span>
              </p>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold tracking-wider uppercase text-ink-500 dark:text-ink-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-ink-800 dark:text-white text-sm focus:ring-2 focus:ring-enterprise-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold tracking-wider uppercase text-ink-500 dark:text-ink-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-ink-800 dark:text-white text-sm focus:ring-2 focus:ring-enterprise-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold tracking-wider uppercase text-ink-500 dark:text-ink-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-ink-800 dark:text-white text-sm focus:ring-2 focus:ring-enterprise-500 focus:border-transparent transition-all"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold tracking-wider uppercase text-ink-500 dark:text-ink-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-ink-800 dark:text-white text-sm focus:ring-2 focus:ring-enterprise-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 bg-enterprise-600 text-white hover:bg-enterprise-700 hover:shadow-lg hover:shadow-enterprise-500/20 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
