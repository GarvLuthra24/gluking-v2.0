import './App.css';
import Navbar from './components/Header'
import React  from 'react';
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/SignUp'
import LoginSelector from './components/loginSighin'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Main_Home from './components/main_home';
import About_Us from './components/About_Us';
// import Wave from 'react-wavify'

function App() {

  const notify = () => toast("wow so easy")


  function setToken(userToken){
    sessionStorage.setItem('token' , JSON.stringify(userToken))
  }


  function getToken(){
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString)
    return userToken?.token;
  }

  return (

    


    <div className="App">

      
      {/* <h1>amazon clone</h1> */}
  
      
      <BrowserRouter>
      {/* <ReactNotifications/> */}
      <Navbar />
      
        <Routes>

        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Main_Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="logon" element={<LoginSelector/>}/>
          <Route path="about-us" element={<About_Us/>} ></Route>
        </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
      <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" />


    </div>

    
    
  );
}

export default App;
