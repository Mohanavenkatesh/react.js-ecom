import React from 'react'

export const Cart = ({ array, setarray }) => {


    const = 

    return (
        <div>
            <div className='flex flex-row gap-5 justify-evenly   flex-wrap  items-start text-center bg-gray-50 md:p-32'>
                <h1>{array.map((c) =>
                    <div>
                        <div className='w-72  rounded border border-black hover:transform hover:scale-105 transition duration-500'>
                            <img src={c.img} className='rounded' />
                            <p className='text-start p-1'>{c.name}</p>
                            <h1 className='text-start p-1'>{c.price}</h1>
                            <div className='p-2'>
                                <button className='bg-red-500 w-full rounded p-1 text-white'>Delete</button>
                            </div>
                        </div>
                    </div>
                )}</h1>
            </div>
        </div>
    )
}
