
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Taskshow.css'

function TaskShow({ heading, paragraph, onDelete, onEdit,onStatusChange  }) {

    const [updateStatus , setUpdateStatus] = useState("Pending")
  

    const isDropDown = () => {
        const newStatus = updateStatus === "Pending" ? "Completed" : "Pending";
        setUpdateStatus(newStatus);
      
        // Pass the updated status to the parent component
        onStatusChange(newStatus);
      };

   
  return (
   <>
    <div  className="card-container " >
    <Card  className="co-lg-4" >
      <Card.Body id="card-body">
        <div id="content">
     <Card.Title>{heading}</Card.Title>
                <Card.Text>
                  {paragraph}
                </Card.Text>
        </div>
        
        <br />
            <br />
            
        
         
                <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
             {updateStatus}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={isDropDown}>
                    {updateStatus === "Pending"? "Completed" : "Incompleted"}
                    </Dropdown.Item>  
              </Dropdown.Menu>
            </Dropdown>
            <br />
            <br />
        
                <Button variant="primary" onClick={onEdit}>Edit </Button> <Button variant="primary" onClick = {onDelete}>Delete</Button>
              </Card.Body>
            </Card>
    </div>

    
   </>
  )
}

export default TaskShow