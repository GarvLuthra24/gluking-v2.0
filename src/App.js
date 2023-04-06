import './App.css';
import Navbar from './components/Header'
import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer';
import Main_Home from './components/main_home';
import About_Us from './components/About_Us';
import Contact_Us from './components/Contact_Us';
import All_Products from './components/All_Products';
import SubHeader from './components/SubHeader';

// import Wave from 'react-wavify'

function App() {



  return (

    


    <div className="App">

      
      {/* <h1>amazon clone</h1> */}
  
      
      <BrowserRouter>
      {/* <ReactNotifications/> */}
      <SubHeader/>
      <Navbar />
      
        <Routes>

        <Route path="/">
          <Route index element={<Main_Home />} />
          <Route path="home" element={<Main_Home />} />
          <Route path="about-us" element={<About_Us/>} ></Route>
          <Route path="contact-us" element={<Contact_Us/>}></Route>
          <Route path="products" element={<All_Products/>}></Route>
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
