 import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import Footer from './components/Footer/Footer'
import SearchPage from './Pages/SearchPage'
import HomePage from './Pages/HomePage'
 
 const App = () => {
   return (
    <BrowserRouter>

     <div className='min-h-[100vh]  bg-[linear-gradient(#0b004e,#1d152f,#002834)]'>
      <Navbar/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/Coin' element={<SearchPage/>}/>

</Routes>
<Footer/> 
   </div>
      </BrowserRouter>

   )
 }
 
 export default App
 