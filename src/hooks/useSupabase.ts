import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

/**
 * Hook to subscribe to waitlist changes
 */
export const useWaitlist = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const { count, error } = await supabase
          .from('waitlist')
          .select('*', { count: 'exact' });
        
        if (error) {
          console.error('Error fetching waitlist count:', error);
        } else {
          setCount(count || 0);
        }
      } catch (err) {
        console.warn('Supabase not configured, skipping waitlist count');
      } finally {
        setLoading(false);
      }
    };

    fetchCount();

    // Subscribe to real-time changes
    try {
      const subscription = supabase
        .from('waitlist')
        .on('*', (payload: any) => {
          fetchCount();
        })
        .subscribe();

      return () => {
        subscription.unsubscribe();
      };
    } catch (err) {
      console.warn('Real-time subscription not available');
    }
  }, []);

  return { count, loading };
};

/**
 * Hook to add email to waitlist
 */
export const useAddToWaitlist = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const addToWaitlist = async (email: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (insertError) {
        if (insertError.message?.includes('duplicate')) {
          setError('Email already on waitlist');
        } else if (insertError.message?.includes('not configured')) {
          setError('Email service not available. Please try again later.');
        } else {
          setError(insertError.message || 'Failed to add email');
        }
      } else {
        setSuccess(true);
        setError(null);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      if (errorMessage.includes('not configured')) {
        setError('Email service not available. Please try again later.');
      } else {
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return { addToWaitlist, loading, error, success };
};
