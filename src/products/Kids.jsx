import React from 'react'
import prductdatas from '../ProducDetails'

export const Kids = ({ array, setarray }) => {
    const adddata = (items) => {

        setarray([...array, items])

    }
    return (
        <div>
            <h1 className='flex gap-5 justify-evenly flex-wrap  items-center text-center bg-gray-50 p-12 md:p-32'>{prductdatas.map((d) =>


                <div className='w-72 rounded border border-black hover:transform hover:scale-105 transition duration-500'>
                    <img src={d.img} className='rounded' />
                    <h1 className='text-start p-1'>{d.name}</h1>
                    <h1 className='text-start p-1'>{d.price}</h1>
                    <div className='p-2'>
                        <button className='bg-black text-white p-1 rounded w-full' onClick={() => adddata(d)}>Add to Cart</button>
                    </div>

                </div>


            )}
            </h1>
        </div>
    )
}
