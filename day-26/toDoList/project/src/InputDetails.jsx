
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import TaskShow from './TaskShow';
import Dropdown from 'react-bootstrap/Dropdown';
import './input.css'

function InputDetails() {
    //  create state value for title, detail, todos, editMode, editingtaks
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [todos, setTodos] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [filterStatus, setFilterStatus] = useState("All");

   
    // get the value from the form and pass the value to those respectively
    const handletitle = (e) => {
        setTitle(e.target.value)
        
    }
    const handlediscription = (e) => {
        setDetail(e.target.value)
    }





    // this is for submit and update
    const handleSubmit = (e) => {
        e.preventDefault();
// if i click the edit button, update the edited task
        if(editMode){
            const updatedTask =todos.map((task) => {
                if(task.id === editingTask.id){
                    return {...task, title, description: detail, status: task.status}
                }
                return task;
            })
            setTodos(updatedTask)
            setEditMode(false)
            setEditingTask(null)
        } else{
               // Add a new task
               const newTodo = { id: uuidv4(), title, description: detail , status: "Pending" }; // Add status here
               setTodos([...todos, newTodo]);
        }
        setTitle("")
        setDetail("")
    }

const handleStatusChange = (taskId, newStatus) => {
    const updatedTasks = todos.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTodos(updatedTasks);
  };

    // this is onclick event handling function
    const startEditing = (task) => {
        setEditMode(true);
        setEditingTask(task);
        setTitle(task.title);
        setDetail(task.description);
// Set the status when editing
    }

    const  deletetask = (taskID) => {
        const updatedTasks = todos.filter(task => task.id !== taskID);
        setTodos(updatedTasks);
    }
  
    // const isDropDown = () => {
    //   const newStatus = updateStatus === "Pending" ? "Completed" : "Pending";
    //   setUpdateStatus(newStatus);
    
    //   // Update the status of the task
    //   task.status = newStatus;
    
    //   // If you want to update the status in the parent component's state (todos), you can use a function that maps over the tasks and updates the status for the specific task by ID
    //   const updatedTasks = todos.map((t) => (t.id === task.id ? { ...t, status: newStatus } : t));
    //   setTodos(updatedTasks);
    // }

  return (
   <>
      <Form onSubmit={handleSubmit} id="form" >
        <div className='row' >
            {/* <div className='col-md-4 mb-3'></div> */}
        <Form.Group className="col mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Task Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={handletitle} placeholder="enter your task title" />
                </Form.Group>
                <Form.Group className="col- mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} value={detail} onChange={handlediscription} />
                </Form.Group>
                <div className="col- mb-3">
                <Button variant="primary" type="submit">
                    {editMode ? "Update" : "Submit"}
                </Button>
                </div>
        </div>
            </Form>

<br/> 
<br/>
              {/* Dropdown for filtering tasks */}
         <div  id="dropdown"> 
         <Dropdown>
  <Dropdown.Toggle variant="primary" id="filter-dropdown" >
    Filter: {filterStatus}
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item onClick={() => setFilterStatus("All")}>All</Dropdown.Item>
    <Dropdown.Item onClick={() => setFilterStatus("Completed")}>Completed</Dropdown.Item>
    <Dropdown.Item onClick={() => setFilterStatus("Pending")}>Pending</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
         </div>


             
          

{
  todos
  .filter((todo) => filterStatus === "All" || todo.status === filterStatus)

    .map((todo) => (
        <TaskShow
        heading={todo.title}
        paragraph={todo.description}
        key={todo.id}
        task={todo}
        status={todo.status}
        onDelete={() => deletetask(todo.id)}
        onEdit={() => startEditing(todo)}
        onStatusChange={(newStatus) => handleStatusChange(todo.id, newStatus)}
      />
    ))
}




   </>
  )
}

export default InputDetails