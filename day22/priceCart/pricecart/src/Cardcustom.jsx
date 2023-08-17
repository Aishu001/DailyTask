import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cardcustom.css'; 


function Cardcustom({detail}) {
    const {title, price, data } = detail;
  return (
   <>
   
   <div className='cont'>
   <Card style={{ width: '18rem' }} id = "card">
      <Card.Body>
        <div id="head">
        <Card.Title>{title}</Card.Title>
        <h2 id ="price">{price}</h2>
        </div>
      
        <div id = "text">
        <Card.Text>
          {
            data.map((list,index) =>(
                <ul>
                    <li id="lis" key={index}>{list}</li>
                </ul>

            )
            )}
        </Card.Text>
        </div>
        <Button  id="btn" variant="primary">Button</Button>
      </Card.Body>
    </Card>
   </div>
   
   </>
  )
}

export default Cardcustom