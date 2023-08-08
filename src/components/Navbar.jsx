import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'

function Navbar() {
    const [display, setDisplay]=useState('hidden');
    const clickHandle=()=>{
        if(display==='hidden')
        setDisplay('flex');
        else
        setDisplay('hidden');
    }
  return (
    <>
    <div className='relative mx-10 md:mx-20'>
         <div className='flex justify-between py-8 font-bold'>
            <div className='text-3xl font-extrabold'>
                <a href="">GamBly</a>
            </div>
           <div className='md:flex hidden space-x-3 md:space-x-6 text-md py-2'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/hero">Hero</Link>
                <button className='bg-black text-white px-6 p-1'>Login</button>
            </div>

            {display==='hidden'?   <GiHamburgerMenu className='text-3xl md:hidden block' onClick={clickHandle}/> : <MdOutlineClose  className='text-3xl md:hidden block' onClick={clickHandle}/>}

            {/* mobile view */}
            <div className={`md:hidden ${display} flex-col items-center z-10 py-10 gap-y-4 mt-16 bg-black text-white absolute w-full`}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/hero">Hero</Link>
                <button className='bg-white rounded-sm text-black px-6 p-1'>Login</button>
            </div>
         </div>
    </div>
    </>
  )
}

export default Navbar