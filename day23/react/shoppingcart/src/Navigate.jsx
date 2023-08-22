 // import React, { useState } from 'react';
// import { FaGoogle } from 'react-icons/fa';
// import DropDownMenu from './DropDownMenu';

// function Navigate() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <><span>
//     <FaGoogle /> Shop
//   </span>
     
//       <nav>
//         <ul>
//           <li><a href="/">Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li>
//             <a href="#" onClick={toggleDropdown}>
//               <FaGoogle /> Shop
//             </a>
//             {isDropdownOpen && <DropDownMenu />}
//           </li>
//           <li><a href="/contact">Contact</a></li>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Navigate;

// import React, { useState } from 'react';
// import { MdShop } from 'react-icons/md';
// import DropDownMenu from './DropDownMenu';

// function Navigate() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <>
//       <nav>
//         <ul>
//           <li><a href="/">Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li>
//             <a href="#" onClick={toggleDropdown}>
//              Shop
//             </a>
//             {isDropdownOpen && <DropDownMenu />}
//           </li>
//           <MdShop className="material-icons-outlined" /> Cart <p>{setCart}</p>
       
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Navigate;


// import React, { useState } from 'react';
// import { MdShop } from 'react-icons/md'; // Import Material Icons
// import DropDownMenu from './DropDownMenu';

// function Navigate() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <>
//       <nav>
//         <ul>
//           <li><a href="/">Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li>
//             <a href="#" onClick={toggleDropdown}>
//               <MdShop /> Shop
//             </a>
//             {isDropdownOpen && <DropDownMenu />}
//           </li>
//           <li><a href="/contact">Contact</a></li>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Navigate;

// import React, { useState } from 'react';
// import { MdShop } from 'react-icons/md';
// import DropDownMenu from './DropDownMenu';

// function Navigate() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [cart, setCart] = useState(0); // State for cart value

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <>
//       <nav>
//         <ul>
//           <li><a href="/">Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li>
//             <a href="#" onClick={toggleDropdown}>
//               Shop
//             </a>
//             {isDropdownOpen && <DropDownMenu />}
//           </li>
//           <MdShop className="material-icons-outlined" /> Cart <p>{cart}</p>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Navigate;


// import React, { useState } from 'react';
// import { MdShop } from 'react-icons/md';
// import DropDownMenu from './DropDownMenu';

// function Navigate({ cartCount }) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <>
//       <nav>
//         <ul>
//           <li><a href="/">Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li>
//             <a href="#" onClick={toggleDropdown}>
//               Shop
//             </a>
//             {isDropdownOpen && <DropDownMenu />}
//           </li>
//           <MdShop className="material-icons-outlined" /> Cart <p>{cartCount}</p>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Navigate;

// import React from 'react';
// import { MdShop } from 'react-icons/md';
// import DropDownMenu from './DropDownMenu';

// function Navigate({ cartCount }) {
//   const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav>
//       <ul>
//         <li><a href="/">Home</a></li>
//         <li><a href="/about">About</a></li>
//         <li>
//           <a href="#" onClick={toggleDropdown}>
//             Shop
//           </a>
//           {isDropdownOpen && <DropDownMenu />}
//         </li>
//         <MdShop className="material-icons-outlined" /> 
//         Cart <p>{cartCount}</p>
//       </ul>
//     </nav>
//   );
// }

// export default Navigate;

// import React from 'react';
// import { MdShop } from 'react-icons/md';
// import DropDownMenu from './DropDownMenu';

// function Navigate({ cartCount, totalValue }) {
//   const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav>
//       <ul>
//         <li><a href="/">Home</a></li>
//         <li><a href="/about">About</a></li>
//         <li>
//           <a href="#" onClick={toggleDropdown}>
//             Shop
//           </a>
//           {isDropdownOpen && <DropDownMenu />}
//         </li>
//         <MdShop className="material-icons-outlined" /> Cart <p>{cartCount}</p>
//         <p>Total Value: {totalValue}</p>
//       </ul>
//     </nav>
//   );
// }

// export default Navigate;

import React from 'react';
import { MdShop } from 'react-icons/md';
import DropDownMenu from './DropDownMenu';

function Navigate({cartCount}) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li>
          <a href="#" onClick={toggleDropdown}>
            Shop
          </a>
          {isDropdownOpen && <DropDownMenu />}
        </li>
        <i className="material-icons"></i><span>{cartCount}</span>
        
      </ul>
    </nav>
  );
}

export default Navigate;




