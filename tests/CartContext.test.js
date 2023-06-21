/*import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartContext, CartContextProvider } from '@/components/CartContext';


// Mock data for testing
const mockCartData = {
  cartProducts: [1, 2, 3],
  addProduct: jest.fn(),
  removeProduct: jest.fn(),
  clearCart: jest.fn(),
};

// A component that consumes the CartContext
const TestComponent = () => {
  const { cartProducts, addProduct, removeProduct, clearCart } = React.useContext(CartContext);

  return (
    <div>
      <span>Cart Products: {cartProducts.length}</span>
      <button onClick={addProduct}>Add Product</button>
      <button onClick={removeProduct}>Remove Product</button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

describe('CartContext', () => {
  it('should provide cart data to its children', () => {
    render(
      <CartContextProvider value={mockCartData}>
        <TestComponent />
      </CartContextProvider>
    );

    // Verify that the CartContext data is available to the children
    expect(screen.getByText(/cart products: 3/i)).toBeInTheDocument();
  });

  it('should call addProduct when the "Add Product" button is clicked', () => {
    render(
      <CartContextProvider value={mockCartData}>
        <TestComponent />
      </CartContextProvider>
    );

    // Simulate clicking the "Add Product" button
    screen.getByText(/add product/i).click();

    // Verify that addProduct function is called
    expect(mockCartData.addProduct).toHaveBeenCalled();
  });

  it('should call removeProduct when the "Remove Product" button is clicked', () => {
    render(
      <CartContextProvider value={mockCartData}>
        <TestComponent />
      </CartContextProvider>
    );

    // Simulate clicking the "Remove Product" button
    screen.getByText(/remove product/i).click();

    // Verify that removeProduct function is called
    expect(mockCartData.removeProduct).toHaveBeenCalled();
  });

  it('should call clearCart when the "Clear Cart" button is clicked', () => {
    render(
      <CartContextProvider value={mockCartData}>
        <TestComponent />
      </CartContextProvider>
    );

    // Simulate clicking the "Clear Cart" button
    screen.getByText(/clear cart/i).click();

    // Verify that clearCart function is called
    expect(mockCartData.clearCart).toHaveBeenCalled();
  });
});*/
