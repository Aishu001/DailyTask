import React, { useReducer } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css'




function Add() {

  const getTheInputValue = {
    name: "",
          username: "",
          email: "",
          address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
          },
          phone : "",
          website: "",
          company: {
            name: "",
          }
        
  }

  

  
  function handleInputVal (state,action){

    switch(action.type){

      case "GET-DETALS":
        if(action.nestedField){

          return {
            ...state,
            [action.field]:{
              ...state[action.field],
              [action.nestedField]:action.value,
            }
          }
        }
        else{
          return {
            ...state,
           [action.field]:action.value,
          }
        }

        // case "HANDLE_SUBMIT":

        //   axios.post('http://localhost:4000/existingApi',state)
        //   .then((response) => {
        //     alert("Data added Successfully")
        //     navigate('/')
        //   })
      
        //   .catch((error) => {
        //     console.error('Error:', error);
        //     alert('Failed to add data. Please check the server.');
        //   });

          case "REST_FORM":
            return getTheInputValue

        
        default:
           return state; 
      }
    }

  
  const [state, dispatch] = useReducer( handleInputVal, getTheInputValue)

  const handleInputValue = (e,field) => {
    
    const {value} = e.target;
    const fieldNames = field.split('.')
    const topLeveledField = fieldNames[0];
    if(fieldNames.length > 1){
      dispatch({
        type:"GET-DETALS",
        field:topLeveledField,
        nestedField:fieldNames[1],
        value:value
      })

    }
    else{
 // its equal to the const value = e.target.value
 dispatch({type:"GET-DETALS", field , value})
    }

   
  }
  const navigate = useNavigate()



  function handleSubmit(e) {
    e.preventDefault();
  
    axios
      .post('https://jsonplaceholder.typicode.com/users', state)
      .then((response) => {
        alert('Data added Successfully');
  
        // Dispatch the RESET-FORM action to reset all fields
        dispatch({
          type: 'RESET-FORM',
        });
  
        // Navigate to the home page or perform any other necessary actions
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to add data. Please check the server.');
      });
  }

  
  return (
    
    <>
    
     <Form className='form'>
     <br />
     <div >
     <Form.Control className='name'  size="lg" type="text" placeholder="Enter your Name"  value={state.name}
        onChange={(e) => {
          handleInputValue(e,"name")
        } } required/>
   
      <Form.Control className='name' size="lg" type="text" placeholder="create a username" value={state.username}
       onChange={(e) => {
        handleInputValue(e,"username")
      } } required/>
     </div>
    
      <br />
      <div >
      <Form.Label></Form.Label>
      <br />
        <Form.Control className='email'  size="lg" type="email" placeholder="name@example.com" value={state.email}
        onChange={(e) => { 
          handleInputValue(e,"email")
        } } required />
      </div>
      
        <br />
        <div>
        <div className='address'>
        <Form.Control  className='addi' size="lg" type="text" placeholder="Street"  value={state.address.street}
        onChange={(e) => {
          handleInputValue(e,"address.street");
        }} required/>
       
        <Form.Control  className='addi' size="lg" type="text" placeholder="Suite"  value={state.address.suite}
        onChange={(e) => {
          handleInputValue(e,"address.suite");
        } }
        required/>
       
        <Form.Control  className='addi' size="lg" type="text" placeholder="City" value={state.address.city} 
         onChange={(e) => {
          handleInputValue(e,"address.city")
        } }
        required />
       
        <Form.Control className='addi' size="lg" type="text" placeholder="Zipcode" value={state.address.zipcode} 
        onChange={(e) => {
          handleInputValue(e,"address.zipcode")
        } }
        required/>
        </div>
       
        <br />

        </div>
        <Form.Control  className='phn' size="lg" type="text" placeholder="enter your phone number" value={state.phone} 
        onChange={(e) => {
          handleInputValue(e,"phone")
        } }
        required/>
        <br />
        <Form.Control className='web' size="lg" type="text" placeholder="website-url"  value={state.website}
        onChange={(e) => {
          handleInputValue(e,"website")
        } }
        required />
        <br />
        <Form.Control  className="company" size="lg" type="text" placeholder="enter your company name" value={state.company.name}
        onChange={(e) => {
          handleInputValue(e,"company.name")
        } }
        required/> 
        <br />
     </Form>
 <br />
     <Button type="submit" onClick={handleSubmit} className='add'>Submit</Button>


    </>
  )
}

export default Add
