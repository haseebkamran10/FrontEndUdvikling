import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingIndicator from './LoadingIndicator';
import '@testing-library/jest-dom/extend-expect';

describe('LoadingIndicator', () => {
  test('renders loading indicator', () => {
    render(<LoadingIndicator />);
    
    const spinnerElement = screen.getByTestId('loading-spinner');
    expect(spinnerElement).toBeInTheDocument();
    
    const overlayElement = screen.getByTestId('loading-overlay');
    expect(overlayElement).toBeInTheDocument();
  });
});
test('has spinning animation', () => {
    render(<LoadingIndicator />);
    const spinnerElement = screen.getByTestId('loading-spinner');
    expect(spinnerElement).toHaveClass('spinner');
  });
  