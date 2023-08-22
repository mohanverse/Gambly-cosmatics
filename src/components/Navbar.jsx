import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'
import {BsFillEmojiSmileFill} from 'react-icons/bs'
import {BsHandbagFill} from 'react-icons/bs'
import {BiSolidUser} from 'react-icons/bi'


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
    <div className='shadow-2xl ticky top-0 sticky bg-white'>
        <div className='relative mx-10 lg:mx-20 font-Aclonica'>
             <div className='flex justify-between py-4 '>
                <div className='flex text-4xl font-extrabold space-x-1'>
                    <BsFillEmojiSmileFill className='text-[#f87171]'/>
                    <a className='' href="">GamBly</a>
                </div>
               <div className='md:flex hidden space-x-3 md:space-x-6 text-md  py-2'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/user"><BiSolidUser className='text-4xl'/></Link>
                    <Link to="/card"><BsHandbagFill className='text-4xl' /></Link>
                    <button className='bg-black text-white px-6 p-1'>Login</button>
                </div>
    
                {display==='hidden'?   <GiHamburgerMenu className='text-3xl md:hidden block' onClick={clickHandle}/> : <MdOutlineClose      className='text-3xl md:hidden block' onClick={clickHandle}/>}
    
                {/* mobile view */}
                <div className={`md:hidden ${display} flex-col items-center z-10 py-10 gap-y-4 mt-16 bg-black text-white absolute w-full`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link><BiSolidUser className='text-3xl'/></Link>
                    <Link><BsHandbagFill className='text-4xl' /></Link>
                    <button className='bg-white rounded-sm text-black px-6 p-1'>Login</button>
                </div>
             </div>
        </div>
        <div className=''>
          <div className='md:flex hidden justify-between px-8 md:px-28 py-4 text-base text-white font-bold bg-black space-x-4'>
              <Link to="/">Eyes</Link>
              <Link to="/">Lipstick</Link>
              <Link to="/">Perfume</Link>
              <Link to="/">Skin</Link>
              <Link to="/">Cream</Link>
              <Link to="/">FaceOil</Link>
              <Link to="/">HairOil</Link>
              <Link to="/">FaceCream</Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default Navbar