import React from 'react'
import  { useState } from 'react';

import Cardcustom from './Cardcustom';
import App from './App';

function Data() {
    const [cardsData, setCardDate] = useState([
        {
          id: 1,
          title: 'Plus',
          price: '$ 9/month',
          data: ['5 Users' , '50GB Storage'  ,'Unlimited Public' , 'Projects Community Access' ,'Unlimited Private Projects','Dedicated Phone Support' ,'Free Subdomain' ,'Monthly Status Reports']
        },
        {
            id: 2,
            title: 'Free',
            price: "$ 0/month",
            data: ['Single User',  '50GB Storage' ,'Unlimited Public Projects',
            'Community Access','Unlimited Private Projects', 'Dedicated Phone Support','Free Subdomain', 'Monthly Status Reports']
          },
          {
            id: 3,
            title: 'Pro',
            price: '$ 49/month',
            data: ['Unlimited Users' , '50GB Storage'  ,'Unlimited Public' , 'Projects Community Access' ,'Unlimited Private Projects','Dedicated Phone Support' ,'Free Subdomain' ,'Monthly Status Reports']
          }
       ]);
  return (
    <>
    {
        cardsData.map((card) => <Cardcustom key={card.id} detail ={card}/> )
    }
   {/* <App {...cardsData}/> */}
    </>
  )
}
export default Data



