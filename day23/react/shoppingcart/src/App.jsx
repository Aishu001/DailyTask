// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Item from './Item'

// function App() {
//   //  const [count, setCount] = useState(0)

//   return (
//     <>
      
//         {/* <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
      
//       <Item/> */}
      
//     </>
//   )
// }

// export default App




// import React, { useState } from 'react';
// import Navigate from './Navigate';
// import Item from './Item';

// function App() {
//   const [cartCount, setCartCount] = useState(0);

//   const handleCartChange = (change) => {
//     setCartCount(cartCount + change);
//   };

//   return (
//     <div>
//       <Navigate />
//       <Item onCartChange={handleCartChange} />
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import Navigate from './Navigate';
// import Item from './Item';
// import Header from './Header';

// function App() {
//   const [cartCount, setCartCount] = useState(0);

//   const handleCartChange = (newCartValue) => {
//     setCartCount(newCartValue);
//   };

//   return (
//     <div>
//       <Navigate cartCount={cartCount} />
//     <Header/>
//       <Item onCartChange={handleCartChange} />
//       <Item onCartChange={handleCartChange} />
//       <Item onCartChange={handleCartChange} />
//       <Item onCartChange={handleCartChange} />
//       <Item onCartChange={handleCartChange} />
//       <Item onCartChange={handleCartChange} />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import Navigate from './Navigate';
// import Item from './Item';

// function App() {
//   const [cartCount, setCartCount] = useState(0);

//   const handleCartChange = (newCartValue) => {
//     setCartCount(newCartValue);
//   };

//   return (
//     <div>
//       <Navigate cartCount={cartCount} />
//       <div className="items-container">
//         <Item onCartChange={handleCartChange} />
//         <Item onCartChange={handleCartChange} />
//         <Item onCartChange={handleCartChange} />
//         {/* Add more Item components */}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import Navigate from './Navigate';
// import Item from './Item';

// function App() {
//   const [cartCount, setCartCount] = useState(0);
//   const [totalValue, setTotalValue] = useState(0);

//   const handleCartChange = (newCartValue) => {
//     setCartCount(newCartValue);
//   };

//   const handleValueChange = (newValue) => {
//     setTotalValue((prevTotalValue) => prevTotalValue + newValue);
//   };

//   return (
//     <div>
//       <Navigate cartCount={cartCount} />
//       <div className="items-container">
//         <Item onCartChange={handleCartChange} />
//         <Item onCartChange={handleCartChange}  />
//         <Item onCartChange={handleCartChange}  />
//         {/* Add more Item components */}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Navigate from './Navigate';
import Item from './Item';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [totalItems, setTotalItems] = useState(0); // Total items count

  const handleCartChange = (newCartValue) => {
    setCartCount(newCartValue);
  };

  const handleValueChange = (newValue) => {
    setTotalValue((prevTotalValue) => prevTotalValue + newValue);
  };

  const handleTotalItemsChange = (change) => {
    setTotalItems((prevTotalItems) => prevTotalItems + change);
  };

  return (
    <div>
      <Navigate cartCount={cartCount} />
      <p>Total Items in Cart: {totalItems}</p>
      <div className="items-container">
        <Item
          onCartChange={handleCartChange}
          onValueChange={handleValueChange}
          onTotalItemsChange={handleTotalItemsChange}
        />
        <Item
          onCartChange={handleCartChange}
          onValueChange={handleValueChange}
          onTotalItemsChange={handleTotalItemsChange}
        />
          <Item
          onCartChange={handleCartChange}
          onValueChange={handleValueChange}
          onTotalItemsChange={handleTotalItemsChange}
        />
          <Item
          onCartChange={handleCartChange}
          onValueChange={handleValueChange}
          onTotalItemsChange={handleTotalItemsChange}
        />
          <Item
          onCartChange={handleCartChange}
          onValueChange={handleValueChange}
          onTotalItemsChange={handleTotalItemsChange}
        />
          <Item
          onCartChange={handleCartChange}
          onValueChange={handleValueChange}
          onTotalItemsChange={handleTotalItemsChange}
        />
        {/* Add more Item components */}
        
      </div>
     
    </div>
  );
}

export default App;


