import React from 'react'
import './main_home.css'
import Gluking from './images/gluking.jpg'
import { Outlet, Link } from "react-router-dom";

const main_home = () => {
  return (
    <div>
      <div className='voster main-web h-max  bg-gradient-to-tl py-20 from-[#269784] to-[#0c3777] text-white'>
        <div className='  text-6xl w-5/6 max-w-4xl  block py-5 mx-5'> The Best Silicone Sealant in the Market</div>
        <div className=' text-3xl my-16 mx-5 max-w-5xl'>Become the Family of the fastest growing silicone sealant in the market</div>
        <div className=' mx-5'>
          

          <Link to='/products'>
          <button type="button" class="text-white text-3xl bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg  px-5 py-2.5 text-center w-4/5  max-w-md min-h-max">
            Explore Products
            </button>
          </Link>
          
            </div>
      </div>


      <div  class=" my-12  flex flex-col w-full  mx-auto items-center bg-gradient-to-r from-[#135ace] to-[#2d9ac9]  border border-gray-200 rounded-lg shadow md:flex-row   dark:border-gray-700  ">
    {/* <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""> */}
    <img src={Gluking} className='  h-60 rounded-lg'></img>
    <div class="flex flex-col justify-between p-4 leading-normal mx-8">
        <div class="mb-2  font-bold tracking-tight text-white dark:text-white text-4xl"> 

        The Hallmark of Quality </div>
        <div class="mb-3 font-normal text-white">
          <ul>
            <li className=' mb-3 '>
            Some bonds are forever & it’s this bond of trust that matters to us the most! Understanding and consistently analyzing the Silicone Sealant market helps us in knowing the ever-evolving needs of the market.
            </li>
            <li className=' mb-3 '> 
            Cutting-edge research and technology allow us to innovate & design products that fulfill market needs. We manufacture General Purpose Silicone Sealants to Industrial Silicone Sealants.
            </li>

            <li className='mb-3 '>
            Smooth, flexible, and standing against all conditions, our Weather Silicone sealants are known for the seal of perfection.
            </li>

            <li className=' mb-3 '>
            Behind our innovation, there are people driven by passion, energy & a constant quest to keep evolving to make day-to-day life better for everyone!
            </li>

            <li className='mb-3 '>You name your usage & you will find a silicone sealant that serves your purpose.</li>

          </ul>
        
        </div>
    </div>
</div>




    </div>
  )
}

export default main_home