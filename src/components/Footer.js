import React from 'react'
import './Footer.css'
import 'react-router-dom'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Footer = () => {
 
  return (
    <div>
      
<footer class="bg-[#131921] rounded-sm shadow  w-full static bottom-0 mt-10">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-white sm:text-center ">© 2023 <a href="/home" class="hover:underline">Gluking®</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
        <li>
            <a href="home" class="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
            <a href="products" class="mr-4 hover:underline md:mr-6">Products</a>
        </li>
        <li>
            <a href="about-us" class="mr-4 hover:underline md:mr-6">About Us</a>
        </li>
        <li>
            <a href="contact-us" class="hover:underline">Contact Us</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  )
}

export default Footer
