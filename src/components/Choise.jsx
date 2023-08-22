
import React from 'react'
import {NavLink} from 'react-router-dom'
const Choice = () => {
  return (
   <>
   <div className='bg-[#E9D3DB] md:block h-16  xl:px-36 px-4'>
    <div className='grid grid-flow-col text-[#576060] xl:gap-10  gap-4 text-center md:px-20  px-0 items-center overflow-x-scroll  h-full sm:text-lg text-sm'>
        <NavLink className=" md:w-32 w-24" to="/skincare">Skincare</NavLink>
        <NavLink className=" md:w-32 w-24" to="/bodycare">Bodycare</NavLink>
        <NavLink className=" md:w-32 w-24" to="/haircare">Haircare</NavLink>
        <NavLink className=" md:w-32 w-24" to="/newlaunch">New Launch</NavLink>
        <NavLink className=" md:w-32 w-24" to="/offers">Deals & offers</NavLink>
        <NavLink className=" md:w-32 w-24" to="/makeup">Makeup</NavLink>
        <NavLink className=" md:w-32 w-24" to="/fragrance">Fragrance</NavLink>
    </div>
   </div>
   </>
  )
}

export default Choice