import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './App.css'


function UserInfo() {
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users') //fetch the data using axios
        .then((response) => {
            //  console.log(response.data);                   test purphose
            //  console.log(Object.keys(response.data[0]));
            setColumns(Object.keys(response.data[0]))
            setRows(response.data)
        })
    },[])
    useEffect(() => {
      axios.post(`http://localhost:4000/existingApi`) //fetch the data using axios
      .then((response) => {
            console.log(response.data);                   
           
          
      })
  },)

    const handleDelete = (id) => {
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
          // Use the correct argument name "previousRows" instead of "perviousRows"
          setRows((previousRows) => {
            // Use "return" statement to return the filtered array
            return previousRows.filter((row) => {
              return row.id !== id; // Include rows where id is not equal to the deleted id
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    

  

  return (
   <>
    <div className='table'>
    <div >
                {/* Use the Link component properly */}
                <Link to='/create'  > <button className='add'>ADD</button></Link>
            </div>
    <Table striped bordered hover className='container' style={{ border: '2px solid #000', borderRadius: '5px' }}>
      <thead>
        <tr>
        
          {
            columns.map((heading,index) => (
                  <th key={index}>{heading}</th>
            ))
          }
      
         
        </tr>
      </thead>
      <tbody>
      
        {
            rows.map((record,index) => (
                <tr key={index} className='div' style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>


                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.username}</td>
                <td>{record.email}</td>
                <td>{record.address.street}, {record.address.suite}, {record.address.city}</td>
                <td>{record.phone}</td>
                <td>{record.website}</td>
                <td>{record.company.name}</td>
                <td> 
                  <Link to={`/update/${record.id }`} ><Button className='btn btn-success'>Update</Button></Link>
                  <Button className='btn btn-success' onClick={(params) => {
                    handleDelete(record.id)
                  }} >Delete</Button>
                
                </td>
                 
                     </tr>
            ))
          }
    
       
        
       
      </tbody>
    </Table>

    
 
      
    </div>
   </>
  )
}

export default UserInfo