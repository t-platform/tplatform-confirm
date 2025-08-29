import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

// Email confirmation helper
export const confirmEmail = async (token: string, type: string = 'signup') => {
  try {
    const { data, error } = await supabase.auth.verifyOtp({
      token_hash: token,
      type: type as 'signup' | 'recovery' | 'invite' | 'magiclink',
    });

    if (error) {
      throw error;
    }

    return { user: data.user, session: data.session };
  } catch (error) {
    console.error('Email confirmation error:', error);
    throw error;
  }
};

// Analytics helper for tracking confirmations
export const trackEmailConfirmation = async (userId: string, email: string) => {
  try {
    // Here you could integrate with analytics services
    console.log('Email confirmation tracked:', { userId, email });
    
    // Example: Send to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'email_confirmed', {
        user_id: userId,
        event_category: 'authentication',
        event_label: 'email_verification_success',
      });
    }
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

export default supabase;
