import React from 'react'
import Home from './Components/Home'
import CardDetail from './Components/CardDetail'
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import SignIn from './Components/Signin';

function App() {



  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/detail/:id' element={<CardDetail />}></Route>
        <Route path="/category/:categoryName" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App