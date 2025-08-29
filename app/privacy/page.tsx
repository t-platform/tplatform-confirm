'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, Database, UserCheck, Globe } from 'lucide-react';

const PrivacyPage = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information Collection and Utilization',
      content: `TplatForm employs sophisticated data collection methodologies exclusively for the provision of secure financial services. We implement granular data categorization protocols to ensure minimal data acquisition principles are strictly adhered to. Personal identifiers, transactional metadata, and cryptographically secured authentication credentials are processed through industry-leading encryption algorithms and stored within geographically distributed, ISO 27001 certified data repositories.

Our data collection framework encompasses: (i) mandatory identification verification data for regulatory compliance pursuant to Know Your Customer (KYC) and Anti-Money Laundering (AML) statutory requirements; (ii) transactional telemetry for fraud detection and algorithmic risk assessment; (iii) device fingerprinting and behavioral analytics for enhanced security protocol enforcement; and (iv) encrypted communication logs for audit trail maintenance and dispute resolution procedures.`,
    },
    {
      icon: Lock,
      title: 'Cryptographic Security Infrastructure',
      content: `TplatForm implements military-grade cryptographic security architectures utilizing Advanced Encryption Standard (AES-256) symmetric encryption protocols, coupled with Elliptic Curve Digital Signature Algorithm (ECDSA) for asymmetric cryptographic operations. Our security infrastructure incorporates Hardware Security Modules (HSMs) for cryptographic key management, ensuring cryptographic keys remain isolated within tamper-resistant hardware environments.

All sensitive financial data undergoes multi-layered encryption processes: (i) data-at-rest encryption utilizing AES-256-GCM with cryptographically secure key derivation functions; (ii) data-in-transit protection through Transport Layer Security (TLS 1.3) with Perfect Forward Secrecy; (iii) application-layer encryption for additional security stratification; and (iv) zero-knowledge architecture implementation ensuring TplatForm personnel cannot access unencrypted user data under any circumstances.`,
    },
    {
      icon: Eye,
      title: 'Data Retention and Purge Protocols',
      content: `TplatForm maintains stringent data retention policies aligned with international regulatory frameworks and user privacy expectations. Our automated data lifecycle management systems implement time-based data purge mechanisms ensuring personal information is systematically deleted upon expiration of legally mandated retention periods.

Retention schedules encompass: (i) transactional records maintained for seven (7) years pursuant to financial regulatory requirements; (ii) user authentication logs retained for ninety (90) days for security analysis; (iii) communication metadata purged within thirty (30) days following service interaction; and (iv) marketing preferences and analytics data deleted immediately upon user account termination or explicit withdrawal of consent.`,
    },
    {
      icon: UserCheck,
      title: 'Third-Party Integration and Data Sharing Limitations',
      content: `TplatForm employs a zero-trust architecture regarding third-party data sharing, implementing contractual and technical safeguards to prevent unauthorized data disclosure. We maintain comprehensive due diligence processes for all third-party service providers, requiring SOC 2 Type II attestations and adherence to our proprietary data protection standards.

Limited data sharing occurs exclusively under the following circumstances: (i) regulatory compliance reporting to authorized financial institutions and government agencies; (ii) fraud prevention data sharing with certified financial crime prevention networks; (iii) encrypted analytics data transmission to vetted security service providers for threat intelligence; and (iv) court-ordered disclosure pursuant to valid legal process with user notification where legally permissible.`,
    },
    {
      icon: Globe,
      title: 'International Data Transfer Compliance',
      content: `TplatForm operates under strict international data protection compliance frameworks, including the European Union General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other applicable privacy legislation. Our cross-border data transfer mechanisms utilize Standard Contractual Clauses (SCCs) and Binding Corporate Rules (BCRs) to ensure adequate protection levels for personal data processed outside the originating jurisdiction.

Our global data protection strategy encompasses: (i) data localization compliance ensuring certain data types remain within specified geographical boundaries; (ii) adequacy decision verification for international data transfers; (iii) supplementary security measures for non-adequate jurisdictions; and (iv) user consent management systems for explicit authorization of international data processing activities.`,
    },
    {
      icon: Shield,
      title: 'User Rights and Data Subject Protections',
      content: `TplatForm provides comprehensive user rights management systems enabling data subjects to exercise their privacy rights through secure, authenticated channels. Our privacy rights fulfillment infrastructure processes user requests within statutory timeframes while maintaining security protocols to prevent unauthorized access.

Available user rights include: (i) right of access to personal data with detailed processing activity reports; (ii) right of rectification for inaccurate or incomplete personal information; (iii) right of erasure (right to be forgotten) with cryptographic deletion verification; (iv) right of data portability with secure export functionality; (v) right to restrict processing with granular consent management; and (vi) right to object to automated decision-making processes with human review provisions.`,
    },
  ];

  const dataTypes = [
    'Biometric Authentication Data (Encrypted)',
    'Financial Transaction Metadata',
    'Cryptographic Public Keys',
    'Geographical Location Data (Anonymized)',
    'Device Hardware Identifiers',
    'Behavioral Analytics Patterns',
    'Communication Protocol Logs',
    'Regulatory Compliance Records',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy & Data Protection
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              TplatForm implements enterprise-grade privacy protection frameworks with 
              military-specification security protocols to safeguard your financial data.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-200">
              <Shield className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-gray-700">
                Last Updated: January 29, 2025
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Executive Summary
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              TplatForm operates as a zero-knowledge financial services platform, implementing 
              cryptographic isolation protocols that prevent unauthorized access to user financial data. 
              Our privacy-by-design architecture ensures that sensitive information remains encrypted 
              at all processing stages, with decryption keys maintained exclusively within 
              user-controlled environments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Data We DO NOT Store</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Unencrypted financial account numbers</li>
                  <li>• Plain-text authentication credentials</li>
                  <li>• Detailed transaction purposes</li>
                  <li>• Personal communication content</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">Enhanced Protection Features</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• End-to-end encryption protocols</li>
                  <li>• Automated data purge systems</li>
                  <li>• Cryptographic audit trails</li>
                  <li>• Zero-knowledge architecture</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Data Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Encrypted Data Categories
            </h2>
            <p className="text-gray-700 mb-6">
              The following data categories are processed through our cryptographic security infrastructure 
              with industry-leading protection mechanisms:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dataTypes.map((type, index) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <Lock className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{type}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Privacy Rights & Contact Information
            </h2>
            <p className="text-gray-700 mb-6">
              To exercise your privacy rights or submit privacy-related inquiries, contact our 
              Data Protection Officer through our secure communication channels:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Communication</h3>
                <p className="text-sm text-gray-600 mb-2">privacy@tplatform.com</p>
                <p className="text-sm text-gray-600">PGP Key: Available upon request</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Response Timeline</h3>
                <p className="text-sm text-gray-600 mb-2">Standard: 30 days maximum</p>
                <p className="text-sm text-gray-600">Urgent: 72 hours for security matters</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
