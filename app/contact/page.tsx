'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  ChevronDown,
  MessageCircle,
  Shield,
  Zap,
  HelpCircle
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      detail: 'support@tplatform.com',
      description: 'Get help within 24 hours',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      detail: '+1 (555) 123-4567',
      description: 'Available 24/7 for urgent matters',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: MapPin,
      title: 'Global Operations',
      detail: 'Worldwide Service',
      description: 'Serving 150+ countries',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Clock,
      title: 'Response Time',
      detail: '< 2 Hours',
      description: 'Average first response time',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'account', label: 'Account Issues' },
    { value: 'security', label: 'Security Concerns' },
    { value: 'business', label: 'Business Partnership' },
    { value: 'media', label: 'Media & Press' },
  ];

  const faqs = [
    {
      question: 'How secure is TplatForm for currency exchange?',
      answer: 'TplatForm employs military-grade encryption (AES-256) and multi-layer security protocols. We use Hardware Security Modules (HSMs) for cryptographic key management and implement zero-knowledge architecture, meaning we cannot access your unencrypted data. All transactions are protected by bank-level security standards.',
      category: 'Security',
      icon: Shield,
    },
    {
      question: 'How fast are currency exchange transactions?',
      answer: 'Most currency exchanges are processed within seconds. Our advanced infrastructure and real-time processing systems ensure that your transactions are completed almost instantaneously. For international transfers, completion times may vary from seconds to a few minutes depending on the destination country.',
      category: 'Speed',
      icon: Zap,
    },
    {
      question: 'What fees does TplatForm charge for exchanges?',
      answer: 'TplatForm operates on a transparent fee structure with competitive rates. Exchange fees typically range from 0.1% to 0.5% depending on the currency pair and transaction volume. We display all fees upfront before you confirm any transaction, with no hidden charges.',
      category: 'Pricing',
      icon: HelpCircle,
    },
    {
      question: 'Which currencies and countries are supported?',
      answer: 'TplatForm supports over 150 currencies across 150+ countries. Major supported currencies include USD, EUR, GBP, JPY, AUD, CAD, NGN, AED, and many more. We continuously expand our coverage based on user demand and regulatory compliance.',
      category: 'Coverage',
      icon: MapPin,
    },
    {
      question: 'How do I verify my account for higher limits?',
      answer: 'Account verification is a simple process that involves submitting government-issued ID and proof of address. Basic verification allows up to $1,000 daily limits, while full verification unlocks unlimited transaction amounts. The verification process typically takes 1-3 business days.',
      category: 'Verification',
      icon: CheckCircle,
    },
    {
      question: 'What should I do if I encounter a technical issue?',
      answer: 'For technical issues, first check our status page for any ongoing incidents. If the problem persists, contact our technical support team through the app or website. Include details about your device, app version, and a description of the issue for faster resolution.',
      category: 'Technical',
      icon: MessageCircle,
    },
    {
      question: 'How does TplatForm protect my personal data?',
      answer: 'We implement privacy-by-design principles with end-to-end encryption, automated data purge systems, and strict access controls. Your personal data is processed under GDPR, CCPA, and other international privacy frameworks. We never sell your data and use it only for providing our services.',
      category: 'Privacy',
      icon: Shield,
    },
    {
      question: 'Can I use TplatForm for business transactions?',
      answer: 'Yes! TplatForm offers business accounts with enhanced features including bulk transactions, API access, dedicated support, and custom reporting. Business accounts have higher transaction limits and preferential exchange rates for volume trading.',
      category: 'Business',
      icon: HelpCircle,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would integrate with your form submission service
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', category: 'general' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our support team is here to help you with any questions about TplatForm. 
              We&apos;re committed to providing exceptional service and fast responses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:scale-105 transition-transform duration-200"
              >
                <div className={`w-16 h-16 ${info.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-xl font-bold text-gray-900 mb-1">{info.detail}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
                      <button
                        onClick={() => setSubmitStatus('idle')}
                        className="btn-primary mt-4"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        >
                          {categories.map(cat => (
                            <option key={cat.value} value={cat.value}>{cat.label}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="Brief description of your inquiry"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                          placeholder="Please provide details about your inquiry..."
                        />
                      </div>

                      {submitStatus === 'error' && (
                        <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                          <AlertCircle className="w-5 h-5" />
                          <span className="text-sm">Failed to send message. Please try again.</span>
                        </div>
                      )}
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="loading-spinner"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                          <faq.icon className="w-4 h-4 text-primary-600" />
                        </div>
                        <span className="font-medium text-gray-900">{faq.question}</span>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          expandedFaq === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-4">
                            <div className="flex items-start space-x-3">
                              <div className="bg-primary-50 px-2 py-1 rounded text-xs font-medium text-primary-700">
                                {faq.category}
                              </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mt-2">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
