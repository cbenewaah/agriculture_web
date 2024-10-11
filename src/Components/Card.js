import React from 'react'

function Card({image, title, description}) {
  return (
    <div className='border border-customGreen2  rounded-2xl py-4 px-4 bg-custumOrange2 mb-4 '>
      <div>
        {image}
      </div>
      <div className='text-xl font-semibold text-customGreen2 text-left'>
        {title}
      </div>
      <div className='text-left text-customGreen2 mb-4'>
        {description}
      </div>
    </div>
  )
}

export default Card
