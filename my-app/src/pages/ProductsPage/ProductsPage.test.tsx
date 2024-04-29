import { render, screen } from '@testing-library/react';
import ProductsPage from './ProductsPage';
import{test, expect} from 'vitest';



test('renders a product with a specific name', () => {
  render(<ProductsPage />);
  
  const productName = screen.getByText(/product name/i);
  expect(productName).toBeInTheDocument();
});