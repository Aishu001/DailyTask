import React, { useEffect, useReducer, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Edit() {
    const {id} = useParams()
    const editedData ={
      name: "",
      username: "",
      email: "",
      address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
      },
      phone: "",
      website: "",
      company: {
          name: "",
      }
  }
  function updateNestedField(obj, keys, value) {
    if (keys.length === 1) {
        return { ...obj, [keys[0]]: value };
    } else {
        const [head, ...tail] = keys;
        return { ...obj, [head]: updateNestedField(obj[head], tail, value) };
    }
}

  // Define data state
  function showTheFieldData(field, value) {
    console.log("field:", field);
    console.log("value:", value);
  
    const fieldNames = field.split('.');
    if (fieldNames.length === 1) {
      dispatch({
        type: "REGET_DETAILS",
        field,
        value,
      });
    } else {
      const updatedData = updateNestedField(state, fieldNames, value);
      console.log("updatedData:", updatedData);
  
      dispatch({
        type: "REGET_DETAILS",
        field: fieldNames[0],
        value: updatedData[fieldNames[0]],
      });
    }
  }
  

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users${id}`)
    .then((response) => {
        // Create a mapping of field names to their values
        const fieldMappings = {
            "name": response.data.name,
            "username": response.data.username,
            "email": response.data.email,
            "address.street": response.data.address.street,
            "address.suite": response.data.address.suite,
            "address.city": response.data.address.city,
            "address.zipcode": response.data.address.zipcode,
            "phone": response.data.phone,
            "website": response.data.website,
            "company.name": response.data.company.name,
        };

        // Loop through the mappings and update the state
        for (const field in fieldMappings) {
            showTheFieldData(field, fieldMappings[field]);
        }
    })
    .catch((error) => {
        console.log(error);
    });
}, [id]);


  function  handleInputVal (state, action){
    switch (action.type){

      case "REGET_DETAILS":
        if(action.nestedField){

          return {
            ...state,
            [action.field]: 
            {...state[action.field], 
              [action.nestedField] : action.value
            },
          }
        }

        else{
          return{
            ...state,
            [action.field]:action.value,
          }
        }

        default:
          return state;

    }
  }

  const [state,dispatch] =useReducer(handleInputVal,editedData)

  const handleInputValue = (e,field) => {
    
    const {value} = e.target; //equal to value = e.target.value
    const  fieldNames = field.split('.')
    const topLevelField = fieldNames[0];
    if(fieldNames.length > 1){
      dispatch({
        type : "REGET_DETAILS",
        field : topLevelField,
        nestedField : fieldNames[1],
        value:value
      })

    }

    else{
      dispatch({
        type : "REGET_DETAILS",
        field ,value
      })
    }

  }

  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault();

    axios.put(`http://localhost:4000/existingApi/${id}`,state)
    .then((response) => {
      alert("Data is updated") 
      navigate('/')
    })
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
     <Button type="submit" onClick={handleSubmit}  className='add'>Submit</Button>
     </>
  )
}

export default Edit