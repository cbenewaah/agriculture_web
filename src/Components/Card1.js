import React from 'react'

function Card1({description, picture, Name, portfolio}) {
  return (
    <div className='border bg-customlimegreen m-3 p-10 rounded-xl border-customGreen2'>
        <div className='text-customGreen2 text-xl my-4'>
            {description}
        </div>
        <div className='flex flex-row'>
            <div>
                {picture}
            </div>
            <div>
                <p>
                    {Name}
                </p>
                <p className='text-sm text-customgreen'>
                    {portfolio}
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Card1
