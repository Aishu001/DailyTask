import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInfo from './UserInfo'

import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Add from './Add'
import Edit from './Edit'

function App() {


  return (
    <>
    <Router>
<Routes>
  <Route path="/" element={<UserInfo />} />
  <Route path='/create'  element={<Add />}></Route>
  <Route path='/update/:id' element={<Edit />}></Route>
</Routes>
  </Router>
   
 
    </>
  )
}

export default App
