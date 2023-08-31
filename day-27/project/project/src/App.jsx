import { useState } from 'react'
import './App.css'
import { DataContext, DataProvider } from './DataContext'
import ShoppingCart from './ShoppingCart'
import { BsCartPlus } from 'react-icons/bs';
// import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'




function App() {

  return (
    <>
   

<nav>
 <p id="ss"> Smart Phones</p>
    <a href="#aboutus"> Cart <BsCartPlus/></a>
</nav>


<DataProvider>
        <div>  
     <ShoppingCart/>
        </div>

        </DataProvider>
  
 
    </>
  )
}

export default App

 {/* <Router>

      <div>
        <nav>
          
            <Link to="/">Home </Link>
            <Link to="/cart">cart</Link>
          
        </nav>
        <DataProvider>
        <div>
        <Routes>
        <Route path="/cart" exact Component={ShoppingCart}></Route>
          <Route path="/" Component={ProductDisplay}></Route>
        </Routes>
        </div>

        </DataProvider>
      
      </div>
    </Router> */}
