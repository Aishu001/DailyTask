// import React from 'react'
// import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Item() {
//     const [cart, setCart] = useState(0)
//   return (
//     <Card style={{ width: '18rem' }}>
//     <Card.Img variant="top" src="holder.js/100px180" />
//     <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </Card.Text>
//       <Button variant="primary" onClick={() => setCart((cart) => cart + 1)}>+</Button><p>cart is {cart}</p><Button variant="primary" onClick={() => setCart((cart) => cart - 1)}>-</Button>
     
//     </Card.Body>
//   </Card>
//   )
// }

// export default Item

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Item({ onCartChange }) {
//   const [cart, setCart] = useState(0);

//   const handleIncrement = () => {
//     setCart(cart + 1);
//     onCartChange(1); // Notify parent component (Navigate) about the change
//   };

//   const handleDecrement = () => {
//     if (cart > 0) {
//       setCart(cart - 1);
//       onCartChange(-1); // Notify parent component (Navigate) about the change
//     }
//   };

//   return (
//     <Card >
//       {/* ... */}
//       <Button variant="primary" onClick={handleIncrement}>+</Button>
//       <p>cart is {cart}</p>
//       <Button variant="primary" onClick={handleDecrement}>-</Button>
//     </Card>
//   );
// }

// export default Item;

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Item({ onCartChange }) {
//   const [cart, setCart] = useState(0);

//   const handleIncrement = () => {
//     const newCartValue = cart + 1;
//     setCart(newCartValue);
//     onCartChange(newCartValue); // Notify parent component (App) about the change
//   };

//   const handleDecrement = () => {
//     if (cart > 0) {
//       const newCartValue = cart - 1;
//       setCart(newCartValue);
//       onCartChange(newCartValue); // Notify parent component (App) about the change
//     }
//   };

//   return (
//     <Card >
//       {/* ... */}
//       <Button variant="primary" onClick={handleIncrement}>+</Button>
//       <p>cart is {cart}</p>
//       <Button variant="primary" onClick={handleDecrement}>-</Button>
//     </Card>
//   );
// }

// export default Item;


// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Item({ onCartChange }) {
//   const [cart, setCart] = React.useState(0);

//   const handleIncrement = () => {
//     const newCartValue = cart + 1;
//     setCart(newCartValue);
//     onCartChange(newCartValue); // Notify parent component (App) about the change
//   };

//   const handleDecrement = () => {
//     if (cart > 0) {
//       const newCartValue = cart - 1;
//       setCart(newCartValue);
//       onCartChange(newCartValue); // Notify parent component (App) about the change
//     }
//   };

//   return (
//     <Card style={{ width: '18rem' }}>
//       {/* ... */}
//       <Button variant="primary" onClick={handleIncrement}>+</Button>
//       {/* <p>cart is {cart}</p> */}
//       <Button variant="primary" onClick={handleDecrement}>-</Button>
//     </Card>
//   );
// }

// export default Item;

// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Item({ onCartChange, onValueChange }) {
//   const [cart, setCart] = React.useState(0);
  

//   const handleIncrement = () => {
//     const newCartValue = cart + 1;
//     setCart(newCartValue);
//     onCartChange(newCartValue); // Notify parent component (App) about the change
//     const newValue = value + 10; // Update item value (customize as needed)
//     setValue(newValue);
//     onValueChange(newValue); // Notify parent component (App) about the change
//   };

//   const handleDecrement = () => {
//     if (cart > 0) {
//       const newCartValue = cart - 1;
//       setCart(newCartValue);
//       onCartChange(newCartValue); // Notify parent component (App) about the change
//       const newValue = value - 10; // Update item value (customize as needed)
//       setValue(newValue);
//       onValueChange(newValue); // Notify parent component (App) about the change
//     }
//   };

//   return (
//     <Card style={{ width: '18rem' }}>
//       {/* ... */}
//       <Button variant="primary" onClick={handleIncrement}>+</Button>
//       <p>cart is {cart}</p>
//       <Button variant="primary" onClick={handleDecrement}>-</Button>
//       <p>Item Value: {value}</p>
//     </Card>
//   );
// }

// export default Item;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({ onCartChange, onValueChange, onTotalItemsChange,data }) {
  const [cart, setCart] = React.useState(0);
  const [value, setValue] = React.useState(0); // Item value

  const handleIncrement = () => {
    const newCartValue = cart + 1;
    setCart(newCartValue);
    onCartChange(newCartValue); // Notify parent component (App) about the change
    const newValue = value + 10; // Update item value (customize as needed)
    setValue(newValue);
    onValueChange(newValue); // Notify parent component (App) about the change
    onTotalItemsChange(1); // Notify parent component (App) about added item
  };

  const handleDecrement = () => {
    if (cart > 0) {
      const newCartValue = cart - 1;
      setCart(newCartValue);
      onCartChange(newCartValue); // Notify parent component (App) about the change
      const newValue = value - 10; // Update item value (customize as needed)
      setValue(newValue);
      onValueChange(newValue); // Notify parent component (App) about the change
      onTotalItemsChange(-1); // Notify parent component (App) about removed item
    }
  };

  return (

    
    <Card style={{ width: '18rem' }}>
      {
        data.map((pro) => (
          <>
          <Card.Img variant="top" src={pro.imageId} />
      <Card.Body>
        <Card.Title>{pro.name}</Card.Title>
        <Card.Text>
          {pro.profession}
        </Card.Text>
        <Card.Text>
          {pro.price}
        </Card.Text>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </>
        ))
      }
      <Button variant="primary" onClick={handleIncrement}>+</Button>
      <p>cart is {cart}</p> 
      <Button variant="primary" onClick={handleDecrement}>-</Button>
     
    </Card>
  );
}

export default Item;


