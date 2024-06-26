import React, { useContext, createContext, ReactNode } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const PUBLISHABLE_KEY = "pk_live_51Oiyy5FgRV0MG2KqkANwblXojmNBHGcwEG3H8vNbjnflPSFUbRn2Rz1xxNnqVwDw9jFq7Li9m4nUJkC70k1z0DLm00Qj5dZ8BD";

// Load the Stripe script
export const stripePromise = loadStripe(PUBLISHABLE_KEY);


// Create a context
const StripeContext = createContext<ReturnType<typeof loadStripe> | null>(null);

// Create a provider component
export const StripeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StripeContext.Provider value={stripePromise}>
      <Elements stripe={stripePromise}>
        {children}
      </Elements>
    </StripeContext.Provider>
  );
};

// Custom hook to use the stripe context
export const useStripeClient = () => {
  const context = useContext(StripeContext);
  if (context === null) {
    throw new Error('useStripeClient must be used within a StripeProvider');
  }
  return context;
};

