import React from 'react'
import Navbar from './components/Navbar'
import img1 from './assets/pexels-photo-1377034.jpeg'
import AllCard from './components/AllCard';

function Home() {
  const divStyle = {
    width: '100%',
    height: '90vh',
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    backgroundPosition: '69%',
};
  return (
    <>
    <Navbar/>
    <div style={divStyle} >  
      <div className='md:flex'>
        <div className='flex ml-10  md:text-4xl space-y-4 md:w-1/2'>
          <div className=' md:ml-10 mt-16 lg:mt-40 md:text-4xl space-y-4 text-xl md:font-normal font-bold font-Aclonica'>
              <h1>STUDIO FIX SPF 15</h1>
              <h1 className='text-white'>OUR #1, 24 HR, BUILDABLE,</h1>
              <p>MEDIUM-TO-FULL COVERAGE FOUNDATION</p>
              <p>BREATHABLE NATURAL MATTE FOUNDATION</p>
          </div>
        </div>
        <div className='md:mt-32 md:ml-40 font-Aclonica'>
            <div className='bg-black rounded-full w-32 md:w-40 text-white md:h-40 h-32 text-center ml-20 mt-4'>
                <div className='py-10 text-xl'>
                    <h1>STARTING</h1>
                    <p>AT ₹1900</p>
                </div>
            </div>
            <div className='bg-black rounded-full w-40 text-white h-40 text-center ml-40 mt-4 '>
                <div className='p-6'>
                    <h1>98%</h1>
                    <p>SAID THIS POUNDATIONS IS NON-CAKEY</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div>
        <div>
            <h1 className='text-3xl mt-10 md:mt-16 ml-10 md:ml-20 font-bold'>SHOP FESTIVE FAVORITES</h1>
        </div>
    </div>
    <AllCard/>
    </>
  )
}

export default Home