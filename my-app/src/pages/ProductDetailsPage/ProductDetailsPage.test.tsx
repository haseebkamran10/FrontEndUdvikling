import { render, screen } from '@testing-library/react';
import ProductDetailsPage from './ProductDetailsPage';
import {test, expect} from "vitest"
import { CartProvider } from '../../CartContext';
test('renders shipping and delivery policy texts', () => {
  render(
  <CartProvider><ProductDetailsPage /></CartProvider>);
  
  const shippingPolicyText = screen.getByText(/Gratis fragt på alle ordrer over DKK 3000/i);
  expect(shippingPolicyText).toBeInTheDocument();

  const deliveryPolicyText = screen.getByText(/Afsendelse indenfor 1-2 hverdage/i);
  expect(deliveryPolicyText).toBeInTheDocument();
});