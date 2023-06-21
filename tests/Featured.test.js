/*import { render, screen } from '@testing-library/react';
import Featured from '@/components/Featured';

describe('Featured Component', () => {
  test('renders the featured product correctly', () => {
    // Mock the featured product data
    const featuredProduct = {
      id: 1,
      name: 'Example Product',
      price: 99.99,
      description: 'This is the featured product description.',
    };

    // Render the Featured component with the mocked data
    render(<Featured product={featuredProduct} />);

    // Assert that the featured product name is rendered correctly
    const productName = screen.getByText(/Example Product/i);
    expect(productName).toBeInTheDocument();

    // Assert that the featured product price is rendered correctly
    const productPrice = screen.getByText(/\$99.99/i);
    expect(productPrice).toBeInTheDocument();

    // Assert that the featured product description is rendered correctly
    const productDescription = screen.getByText(/This is the featured product description./i);
    expect(productDescription).toBeInTheDocument();
  });
});*/