/**
 * Gignite Database Types
 */

export interface User {
  id: string;
  email: string;
  phone_number?: string;
  nid?: string;
  full_name?: string;
  date_of_birth?: string;
  status: 'pending' | 'verified' | 'active' | 'inactive';
  kyc_status: 'pending' | 'verified' | 'failed';
  created_at: string;
  updated_at: string;
}

export interface Loan {
  id: string;
  user_id: string;
  amount: number;
  currency: string;
  interest_rate: number;
  loan_term_days: number;
  status: 'pending' | 'approved' | 'declined' | 'disbursed' | 'repaid' | 'defaulted';
  approval_date?: string;
  disbursement_date?: string;
  repayment_due_date?: string;
  repayment_completed_date?: string;
  created_at: string;
  updated_at: string;
}

export interface Repayment {
  id: string;
  loan_id: string;
  amount: number;
  status: 'pending' | 'completed' | 'overdue' | 'failed';
  due_date: string;
  paid_date?: string;
  payment_method?: string;
  created_at: string;
  updated_at: string;
}

export interface Waitlist {
  id: string;
  email: string;
  status: 'pending' | 'invited' | 'joined';
  position?: number;
  created_at: string;
  updated_at: string;
}

export interface Transaction {
  id: string;
  user_id: string;
  loan_id?: string;
  type: 'disbursement' | 'repayment' | 'fee';
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  payment_method?: string;
  reference_id?: string;
  created_at: string;
  updated_at: string;
}

/**
 * API Response types
 */

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface WaitlistResponse {
  email: string;
  position: number;
  totalWaiting: number;
}
