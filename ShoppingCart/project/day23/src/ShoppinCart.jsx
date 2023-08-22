import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './ShoppingCart.css'; // You can create a CSS file for styling
import ProductData from './ProductData';
import { Row } from 'react-bootstrap'; // Import Row component
import Card from 'react-bootstrap/Card';
import { FaCartPlus } from 'react-icons/fa'; // Import the correct icon

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products] = useState(ProductData);

  const addToCart = (product) => {
    if (!cartItems.some(item => item.id === product.id)) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (product) => {
    const updatedCart = cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (product) => {
    const updatedCart = cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setCartItems(updatedCart);
  };

  const cartTotalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
  
        <Row lg={1} md={1} className="g-4">

    <div className='aligncards'>
    <div id='icon'><FaCartPlus />   {cartTotalQuantity}</div>
     
      <div className="products" id ="products" >
        <div className="card-container" id="cards" style={{width:'1000px',height:'1000px'}}>
          {products.map((product) => (
            <div key={product.id} className="product card" >
                <img src={product.imageId} alt={product.name} className="card-img-top" />
              <h3 className="card-title">{product.name}</h3>
              <p className="card-text">{product.profession}</p>
              <p className="card-text">{product.price}</p>
            {cartItems.some(item => item.id === product.id) ? (
              <div className="card-buttons">
                <button className="btn btn-secondary" onClick={() => decreaseQuantity(product)}>-</button>
                <span>{cartItems.find(item => item.id === product.id).quantity}</span>
                <button className="btn btn-secondary" onClick={() => increaseQuantity(product)}>+</button>
                <button className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove from Cart</button>
              </div>
            ) : (
              <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
    </div>
    <div className="cart">
        <h2></h2>
        {cartItems.length === 0 ? (
          <p></p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity}{' '}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      {/* Display total item quantities */}
      </div>
    </div>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <Card.Img variant="top" src="secondfooter.png" id= "header"/>
        <Card.Img variant="top" src="ffooter.png" id= "header"/>
        


    </>
    
  );
};

export default ShoppingCart;

