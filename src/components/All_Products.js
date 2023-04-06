import React from 'react'
import './All_Products.css'
import Gluking from './images/glubond.png'
import Gluking789 from './images/789.png'
import GlukingGP from './images/Gluking GP.png'
import Glassobossv2 from './images/Glassoboss v2.0.png'
import Glassobossv1 from './images/Glassoboss v1.png'
import GlukingweatherPlus from './images/Gluking Weather Plus.png'
import GlukingSausage from './images/Gluking Sausage.jpeg'

const All_Products = () => {
  return (
    <div>

        <div className=' reactHead px-5 py-16 mb-20 bg-gradient-to-r  from-slate-900 to-slate-700 text-white'>
            <div className=' text-6xl mb-5 '> Our Products</div>
            <div className=' text-xl mt-16'>

                Explore the wide range of Products offered by Gluking.
            </div>


            
 

        </div>


        <div className=' flex flex-row flex-wrap justify-around'>
                     
        <div class=" max-w-xl mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div className='bg-white rounded-lg'>
           <img className="rounded-t-lg  max-h-72 m-auto " src={Gluking} alt="" ></img>
           </div>
                
           
            <div class="p-5 min-h-max  h-72">
               
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Glubond GP</h5>
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                
            </div>
        </div>



        <div class=" max-w-xl mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div className='bg-white rounded-lg'>
           <img className="rounded-t-lg  max-h-72 m-auto " src={Gluking789} alt="" ></img>
           </div>
                
           
            <div class="p-5 min-h-max  h-72">
               
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gluking 789</h5>
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                
            </div>
        </div>



        <div class=" max-w-xl mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div className='bg-white rounded-lg'>
           <img className="rounded-t-lg  max-h-72 m-auto " src={GlukingGP} alt="" ></img>
           </div>
                
           
            <div class="p-5 min-h-max  h-72">
               
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gluking GP</h5>
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                
            </div>
        </div>


        <div class=" max-w-xl mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div className='bg-white rounded-lg'>
           <img className="rounded-t-lg  max-h-72 m-auto " src={Glassobossv2} alt="" ></img>
           </div>
                
           
            <div class="p-5 min-h-max  h-72">
               
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Glassoboss v2</h5>
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                
            </div>

            
        </div>


        <div class=" max-w-xl mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div className='bg-white rounded-lg'>
           <img className="rounded-t-lg  max-h-72 m-auto " src={Glassobossv1} alt="" ></img>
           </div>
                
           
            <div class="p-5 min-h-max  h-72">
               
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Glassoboss v1</h5>
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                
            </div>

            
        </div>

        <div class=" max-w-xl mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div className='bg-white rounded-lg'>
           <img className="rounded-t-lg  max-h-72 m-auto " src={GlukingweatherPlus} alt="" ></img>
           </div>
                
           
            <div class="p-5 min-h-max  h-72">
               
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gluking Weather Plus</h5>
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                
            </div>

            
        </div>


        <div class=" max-w-xl mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div className='bg-white rounded-lg'>
           <img className="rounded-t-lg  max-h-72 m-auto " src={GlukingSausage} alt="" ></img>
           </div>
                
           
            <div class="p-5 min-h-max  h-72">
               
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gluking Sausage</h5>
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                
            </div>

            
        </div>
        

        
   
        </div>

    </div>
  )
}

export default All_Products