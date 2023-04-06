import React from 'react'
// import "./header.css"
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from 'react';


const Header = () => {



  return (
    <div className="Header py-5 flex flex-row flex-wrap justify-around  items-center bg-[#131921] text-sm text-white  sticky top-0 z-50">
    {/* Header */}




    {/* <div></div> */}
    {/* <SearchIcon/> */}


    <div className='headerNav flex flex-row flex-nowrap ml-2 my-1 items-center  justify-around px-3'>
    <div className='header_option'>
        <Link to="/home"  className='hyperLink userName mr-5 text-center'>
        
          Home
        
        </Link>
        </div>
      
      <Link to="/products" className='hyperLink userName mr-3 text-center'>
        <div className='header_option mr-3'>
              Products
          </div>

      </Link>

      <Link to="/about-us" className='hyperLink userName mr-3 text-center'>
        <div className='header_option mr-3'>
              About Us
          </div>

      </Link>
        

      <Link to="/contact-us" className='hyperLink userName mr-3 text-center'>
        <div className='header_option mr-3'>
              Contact Us
          </div>

      </Link>

    </div>

    </div>
  )
}

export default Header