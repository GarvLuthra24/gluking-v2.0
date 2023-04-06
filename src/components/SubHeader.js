import React from 'react'
import mainIcon from './images/logo white.png'
import { Outlet, Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <div>

<Link to='/'>
      <div className='  bg-[#131921] flex flex-row items-center justify-center'>
          <img className='header_logo  max-h-20  pt-1   ' src={mainIcon}></img>
        <div className='  text-center text-lg text-white'>Gluking Silicone sealant</div>

      </div>

    </Link>
    </div>
  )
}

export default SubHeader