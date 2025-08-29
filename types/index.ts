// User types
export interface User {
  id: string;
  email?: string;
  user_metadata?: {
    first_name?: string;
    last_name?: string;
    username?: string;
    phone_number?: string;
    country_code?: string;
  };
  email_confirmed_at?: string;
  created_at?: string;
  updated_at?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  category: string;
}

export interface ContactFormStatus {
  type: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
}

// Email confirmation types
export type ConfirmationState = 'loading' | 'success' | 'error' | 'expired';

export interface ConfirmationResult {
  state: ConfirmationState;
  message: string;
  user?: User;
}

// FAQ types
export interface FAQ {
  question: string;
  answer: string;
  category: string;
  icon: any; // Lucide icon component
}

// Navigation types
export interface NavItem {
  href: string;
  label: string;
  icon: any; // Lucide icon component
}

// Analytics types
export interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
  user_id?: string;
}

// Deep link types
export interface DeepLinkConfig {
  scheme: string;
  host?: string;
  path?: string;
  params?: Record<string, string>;
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// Supabase Auth types
export interface AuthResponse {
  user: User | null;
  session: any;
  error?: AppError;
}

export interface EmailConfirmationParams {
  token: string;
  type?: string;
  redirectTo?: string;
}

// Contact info types
export interface ContactInfo {
  icon: any;
  title: string;
  detail: string;
  description: string;
  color: string;
  bgColor: string;
}

// Feature types
export interface Feature {
  icon: any;
  title: string;
  description: string;
}

// Testimonial types
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating?: number;
}

// Stats types
export interface Stat {
  icon: any;
  value: string;
  label: string;
}

// Theme types
export interface ThemeColors {
  primary: Record<string, string>;
  secondary: Record<string, string>;
  success: string;
  warning: string;
  error: string;
  dark: string;
  light: string;
}

// Animation types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
}

export interface MotionVariant {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit?: Record<string, any>;
  transition?: AnimationConfig;
}

// Environment types
export interface EnvironmentConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
  appName: string;
  appScheme: string;
  deepLinkBase: string;
  analyticsId?: string;
  environment: 'development' | 'staging' | 'production';
}

// API Response types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: AppError;
  message?: string;
}

// Form validation types
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  validation?: ValidationRule;
  options?: { value: string; label: string }[];
}

// Utility types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';
export type Position = 'top' | 'bottom' | 'left' | 'right' | 'center';

// Global declarations for analytics
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
