/*import { render, screen } from '@testing-library/react';
import ProductsPage, { getServerSideProps } from '@/pages/ProductsPage';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

jest.mock('@/lib/mongoose');
jest.mock('@/models/Product');

describe('ProductsPage', () => {
  const mockProducts = [
    { _id: '1', name: 'Product 1', price: 10 },
    { _id: '2', name: 'Product 2', price: 20 },
    { _id: '3', name: 'Product 3', price: 30 },
  ];

  beforeAll(() => {
    Product.find.mockResolvedValue(mockProducts);
    mongooseConnect.mockResolvedValue();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('renders all products correctly', async () => {
    render(<ProductsPage products={mockProducts} />);

    // Assert that the header component is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();

    // Assert that the title component is rendered with the correct text
    expect(screen.getByTestId('title')).toHaveTextContent('All products');

    // Assert that the products grid component is rendered with the correct products
    const productsGrid = screen.getByTestId('products-grid');
    expect(productsGrid).toBeInTheDocument();
    expect(productsGrid.children.length).toBe(mockProducts.length);
  });

  describe('getServerSideProps', () => {
    it('fetches products from the server and passes them as props', async () => {
      const mockServerProps = {
        props: {
          products: mockProducts,
        },
      };

      const serverProps = await getServerSideProps();

      expect(mongooseConnect).toHaveBeenCalled();
      expect(Product.find).toHaveBeenCalledWith({}, null, { sort: { '_id': -1 } });
      expect(serverProps).toEqual(mockServerProps);
    });
  });
});*/
