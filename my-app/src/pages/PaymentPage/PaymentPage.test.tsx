import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentPage from './PaymentPage'; // Adjust the import path as necessary

// Mock the stripe and elements
const stripePromise = loadStripe('your-public-key'); // Replace 'your-public-key' with a test key or mock
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <Elements stripe={stripePromise}>{children}</Elements>
);

describe('PaymentPage Component', () => {
  test('renders without crashing', () => {
    render(<PaymentPage />, { wrapper });
    expect(screen.getByText('Betalingsoplysninger')).toBeInTheDocument();
  });

  test('Card payment method selection shows CardElement', () => {
    render(<PaymentPage />, { wrapper });
    fireEvent.click(screen.getByLabelText('Kort'));
    expect(screen.getByText('Kortnummer')).toBeInTheDocument(); // Modify according to what CardElement renders
  });



  test('shows error message when phone number is invalid', () => {
    render(<PaymentPage />, { wrapper });
    fireEvent.change(screen.getByPlaceholderText('Telefonnummer for MobilePay'), { target: { value: '123' } });
    fireEvent.click(screen.getByText('Indløs'));
    expect(screen.getByText('Telefonnummer skal være 8 cifre')).toBeInTheDocument();
  });
});
