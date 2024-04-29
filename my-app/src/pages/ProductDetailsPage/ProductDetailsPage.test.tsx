import { render, screen } from '@testing-library/react';
import ProductDetailsPage from './ProductDetailsPage';

test('renders shipping and delivery policy texts', () => {
  render(<ProductDetailsPage />);
  
  const shippingPolicyText = screen.getByText(/Gratis fragt på alle ordrer over DKK 3000/i);
  expect(shippingPolicyText).toBeInTheDocument();

  const deliveryPolicyText = screen.getByText(/Afsendelse indenfor 1-2 hverdage/i);
  expect(deliveryPolicyText).toBeInTheDocument();
});