'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  XCircle, 
  Loader2, 
  Mail, 
  Smartphone,
  ExternalLink,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type ConfirmationState = 'loading' | 'success' | 'error' | 'expired';

const ConfirmContent = () => {
  const searchParams = useSearchParams();
  const [state, setState] = useState<ConfirmationState>('loading');
  const [message, setMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const token = searchParams.get('token');
        const type = searchParams.get('type') || 'signup';
        
        if (!token) {
          setState('error');
          setMessage('No confirmation token provided');
          return;
        }

        // Confirm the email with Supabase
        const { data, error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: type as 'signup' | 'recovery' | 'invite' | 'magiclink',
        });

        if (error) {
          console.error('Confirmation error:', error);
          
          if (error.message.includes('expired')) {
            setState('expired');
            setMessage('Confirmation link has expired');
          } else {
            setState('error');
            setMessage(error.message || 'Email confirmation failed');
          }
          return;
        }

        if (data.user) {
          setState('success');
          setUserEmail(data.user.email || '');
          setMessage('Email confirmed successfully!');
          
          // Track successful confirmation
          if (typeof window !== 'undefined') {
            // Analytics tracking
            console.log('Email confirmed:', data.user.email);
          }
        } else {
          setState('error');
          setMessage('Confirmation failed - no user data received');
        }
      } catch (err) {
        console.error('Confirmation error:', err);
        setState('error');
        setMessage('An unexpected error occurred');
      }
    };

    confirmEmail();
  }, [searchParams]);

  const handleRetry = () => {
    setState('loading');
    window.location.reload();
  };

  const handleOpenApp = () => {
    const deepLink = `${process.env.NEXT_PUBLIC_DEEP_LINK_BASE}login`;
    
    // Try to open deep link
    window.location.href = deepLink;
    
    // Fallback message after a delay
    setTimeout(() => {
      alert('If the app didn\'t open automatically, please open TplatForm manually and try logging in.');
    }, 3000);
  };

  const stateConfig = {
    loading: {
      icon: Loader2,
      title: 'Confirming Your Email...',
      subtitle: 'Please wait while we verify your email address',
      color: 'text-primary-500',
      bgColor: 'bg-primary-50',
      iconClass: 'animate-spin',
    },
    success: {
      icon: CheckCircle,
      title: 'Email Confirmed Successfully!',
      subtitle: 'Your TplatForm account is now verified and ready to use',
      color: 'text-success',
      bgColor: 'bg-green-50',
      iconClass: 'success-checkmark',
    },
    error: {
      icon: XCircle,
      title: 'Confirmation Failed',
      subtitle: 'We encountered an issue confirming your email',
      color: 'text-error',
      bgColor: 'bg-red-50',
      iconClass: '',
    },
    expired: {
      icon: AlertTriangle,
      title: 'Link Expired',
      subtitle: 'This confirmation link has expired',
      color: 'text-warning',
      bgColor: 'bg-yellow-50',
      iconClass: '',
    },
  };

  const config = stateConfig[state];
  const IconComponent = config.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`card text-center ${config.bgColor} border-2`}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`mx-auto w-16 h-16 ${config.color} mb-6`}
          >
            <IconComponent className={`w-full h-full ${config.iconClass}`} />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-gray-900 mb-2"
          >
            {config.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-gray-600 mb-6"
          >
            {config.subtitle}
          </motion.p>

          {/* Message */}
          {message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mb-6 p-3 bg-white/50 rounded-lg text-sm text-gray-700"
            >
              {message}
            </motion.div>
          )}

          {/* User Email */}
          {userEmail && state === 'success' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center justify-center space-x-2 mb-6 text-sm text-gray-600"
            >
              <Mail className="w-4 h-4" />
              <span>{userEmail}</span>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="space-y-4"
          >
            <AnimatePresence mode="wait">
              {state === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="space-y-3"
                >
                  <button
                    onClick={handleOpenApp}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <Smartphone className="w-5 h-5" />
                    <span>Open TplatForm App</span>
                  </button>
                  
                  <p className="text-xs text-gray-500">
                    App will open automatically, or you can open it manually
                  </p>
                </motion.div>
              )}

              {(state === 'error' || state === 'expired') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="space-y-3"
                >
                  <button
                    onClick={handleRetry}
                    className="btn-secondary w-full flex items-center justify-center space-x-2"
                  >
                    <RefreshCw className="w-5 h-5" />
                    <span>Try Again</span>
                  </button>
                  
                  {state === 'expired' && (
                    <p className="text-xs text-gray-500">
                      Please request a new confirmation email from the app
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-6 pt-6 border-t border-gray-200"
          >
            <p className="text-xs text-gray-500 mb-2">
              Need help? Contact our support team
            </p>
            <a
              href="/contact"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center justify-center space-x-1"
            >
              <span>Get Support</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-gray-500">
            Secured by TplatForm • Protected by bank-level encryption
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const ConfirmPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    }>
      <ConfirmContent />
    </Suspense>
  );
};

export default ConfirmPage;
