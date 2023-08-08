import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'
import {BsFillEmojiSmileFill} from 'react-icons/bs'
const myimg ='https://previews.123rf.com/images/scyther5/scyther52010/scyther5201000008/156548267-beauty-background-with-facial-cosmetic-products-with-empty-copy-space-makeup-skin-care-concept.jpg'

function Navbar() {
    const [display, setDisplay]=useState('hidden');
    const clickHandle=()=>{
        if(display==='hidden')
        setDisplay('flex');
        else
        setDisplay('hidden');
    }

    const divStyle = {
        width: '100%',
        height: '15vh',
        backgroundImage: `url(${myimg})`,
        backgroundSize: 'cover',
        backgroundPosition: '69%',
    };
  return (
    <>
    <div style={divStyle}>
    <div className='relative mx-10 md:mx-20'>
         <div className='flex justify-between py-8 font-bold'>
            <div className='flex text-4xl font-extrabold space-x-1 shadow-2xl'>
                <BsFillEmojiSmileFill className='mt-1'/>
                <a className='' href="">GamBly</a>
            </div>
           <div className='md:flex hidden shadow-2xl shadow-red-100 space-x-3 md:space-x-6 text-md text-white py-2'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/hero">Hero</Link>
                <button className='bg-black text-white px-6 p-1'>Login</button>
                <button className='bg-black text-white px-6 p-1'>Sign Up</button>
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
    <div>
    </div>
    </div>
    </>
  )
}

export default Navbar