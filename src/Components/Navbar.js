import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='bg-customGreen flex flex-row justify-between border-4 rounded-2xl'>
            <div className='my-6 mx-8'>
               <a href='#logo'><img src='/Freshfield logo.svg' alt='Logo of FreshField farms'/></a>
            </div>
            <div className='text-white lg:text-white lg:my-6'>
                <a className=' lg:mx-4 ' href='#about'> About Us</a>
                <a className=' lg:mx-4 ' href='#our-story'>Our Story</a>
                <a className=' lg:mx-4 ' href='#our-harvest'>Our Harvest</a>
                <a className=' lg:mx-4 ' href='#benefits'> Benefits</a>
                <a className=' lg:mx-4 ' href='#reviews'> Reviews</a>
                <a className=' lg:mx-4 ' href='#contact-us'>Contact Us</a>
            </div>
            <div className='my-7'>
                <a className='text-customGreen1 mx-8 border border-customGreen1 p-4 rounded-xl'href='https://webflow.com/templates/html/freshfield-agriculture-website-template'> Buy Template</a>
            </div>
        </div>
        
      
    </div>
  )
}

export default Navbar
