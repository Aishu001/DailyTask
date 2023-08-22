import React from 'react'
import Item from './Item';

function Data() {
    const product = [{
        id: 0,
        name: 'Panchathantiram',
        profession: 'Panchathantiram Tribute Poster',
        price: 'Rs. 169.00',
        imageId: 'MK3eW3A'
      }, {
        id: 1,
        name: 'Off-day Motivation',
        profession: `Man With A Plan Poster`,
        price: 'Rs. 169.00',
        imageId: 'MK3eW3A'
      }, {
        id: 2,
        name: 'Kill Bill',
        profession: ` Real-Version-Tina Tribute Poster `,
        price: 'Rs. 169.00',
        imageId: 'MK3eW3A'
      }];
      
  return (
   <>
   <Item  data={product}/>
   </>
  )
}

export default Data
// , {
//   id: 3,
//   name: 'Before Triology Love Tribute',
//   profession: ` 24hrs has fill with our love `,
//   price: 'Rs. 169.00',
//   imageId: 'MK3eW3A'
// }, {
//   id: 4,
//   name: 'Vennilave Vennilave',
//   profession: ` My Nigths is full of A.R.Rahuman's music`,
//   price: 'Rs. 169.00',
//   imageId: 'MK3eW3A'
// }
// , {
//   id: 5,
//   name: 'Messy People',
//   profession: `Kumbalangi Nights `,
//   price: 'Rs. 169.00',
//   imageId: 'MK3eW3A'
// }, {
//   id: 6,
//   name: 'the Hitler Shammi',
//   profession: ` Follow my fucking rules`,
//   price: 'Rs. 169.00',
//   imageId: 'MK3eW3A'
// }, {
//   id: 7,
//   name: 'Premam Tribute Poster',
//   profession: `Love is in every season `,
//   price: 'Rs. 169.00',
//   imageId: 'MK3eW3A'
// }, {
//   id: 8,
//   name: 'Love you Zindigi',
//   profession: `find a love & peace in yourself `,
//   price: 'Rs. 169.00',
//   imageId: 'MK3eW3A'
// }, {
//   id: 9,
//   name: 'Arise-Awake-Fly',
//   profession: `Soorarai Pottru`,
//   price: 'Rs. 169.00',
//   imageId: 'MK3eW3A'
// }