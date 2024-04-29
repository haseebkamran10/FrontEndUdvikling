import { render, screen } from '@testing-library/react';
import DeliveryPage from './DeliveryPage';
import '@testing-library/jest-dom/extend-expect';



test('renders input fields for delivery information', () => {
  render(<DeliveryPage />);
  
  const emailInput = screen.getByLabelText(/email/i);
  expect(emailInput).toBeInTheDocument();

  const phoneInput = screen.getByLabelText(/phone/i);
  expect(phoneInput).toBeInTheDocument();

  const firstNameInput = screen.getByLabelText(/firstName/i);
  expect(firstNameInput).toBeInTheDocument();

  const lastNameInput = screen.getByLabelText(/lastName/i);
  expect(lastNameInput).toBeInTheDocument();
});