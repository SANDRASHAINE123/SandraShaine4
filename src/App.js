import React from "react";
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Nav from './component/navbar.jsx'
import Signin from './component/register.jsx'
import Login from './component/login.jsx'
import AboutUs from './component/aboutus.jsx'

function App()
{
return(
  <BrowserRouter>
   <Routes>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/login" element={<Login/>}></Route>

   </Routes>
  </BrowserRouter>
);
  <>
  <Nav/>
  <Signin/>
  <Login/>
  <AboutUs/>
  </>

}
export default App;
