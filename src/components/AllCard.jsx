import React from 'react'
import { products } from '../data/data'
import Card from './Card'
const AllCard = () => {
  return (
   <>
   <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
   md:justify-around justify-center py-6 px-10 gap-10'>
    {
        products.map((data)=>{
        return(
          <Card
          image={data.image}
          name={data.name}
          description={data.description}
          />
        )
      })
    }
   </div>
   </>
  )
}

export default AllCard