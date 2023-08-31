import React, { useContext, useReducer, useRef, useState } from 'react';
import { DataContext } from './DataContext';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './ShoppingCart.css'

function ShoppingCart() {
  const { productData } = useContext(DataContext);
  
  

  const initialData = productData.products.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    brand: product.brand,
    price: product.price,
    discount: product.discountPercentage,
    stock: product.stock,
    thumbnail : product.thumbnail,
    imageUrls: product.images,
    quantity: 0
  }));


  

  function priceCalculate(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        const productId = action.payload.productId
        return state.map((product) => {
          if (product.id === productId && product.quantity < product.stock) {
            return { ...product, quantity: product.quantity + 1, stock: product.stock - 1 };
          } else {
    
            return product; // If out of stock, return the same product without changes
          }
        });

      case 'DECREMENT':
        const productID = action.payload.productID
      return state.map((product) => {
        if (product.id === productID) {
        if (product.quantity > 0) {
       return { ...product, quantity: product.quantity - 1, stock: product.stock + 1 };
        } else {
          if (product.stock === 0) {
            alert("Out of stock"); // Show the alert only when stock reaches 0
          }
          return product; // Keep the product in the cart
        }
      }
      return product;
      }).filter((product) => product !== null)
     
    

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(priceCalculate, initialData);


const updatedState = state.map((product) => ({
  ...product,
  totalPrice: (product.price - (product.discount / 100)) * product.quantity,
}));

const cartTotal = updatedState.reduce((total, product) => total + product.totalPrice, 0);





  return (
    <>
    <div className='total'>
      <p>Cart Total: ${cartTotal.toFixed(2)}</p>
      <button id="pay">Pay Now</button>
    </div>

    <div className='container'>
      <Table>
        <tbody className='tbody'>
          {state.map((product) => (
            <tr key={product.id}>
              <td><img src={product.thumbnail} alt={product.title} id='img' /></td>
              <td><h2>{product.title}</h2></td>
              <td>{product.description}</td>
              <td>Price: ${product.price}</td>
              <td>
                {product.quantity === 0 ? (
                  <button id="btn" onClick={() => dispatch({ type: 'INCREMENT', payload: { productId: product.id } })}>Add to Cart</button>
                ) : (
                  <div>
                    <Button onClick={() => dispatch({ type: 'INCREMENT', payload: { productId: product.id } })}>+</Button>
                    <span>{product.quantity}</span>
                    <Button onClick={() => dispatch({ type: 'DECREMENT', payload: { productID: product.id } })}>-</Button>
                  </div>
                )}
              </td>
              
                {product.quantity < product.stock ? (
                 null
                ) : (
                  <p>Out of stock</p>
                )}
             
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </>
   
     

  );
}

export default ShoppingCart;






  