import React from 'react'
import prduct_women from '../Js/Women'

export const Women = ({ array, setarray }) => {
    const adddata = (items) => {

        setarray([...array, items])

    }
    return (
        <div>
            <h1 className='flex gap-5 justify-evenly flex-wrap  items-center text-center bg-gray-50 p-12 md:p-32'>{prduct_women.map((d) =>


                <div className='w-72 rounded border border-black '>
                    <img src={d.women_img} className='rounded' />
                    <h1 className='text-start p-1'>{d.women_name}</h1>
                    <h1 className='text-start p-1'>{d.women_price}</h1>
                    <div className='p-2'>
                        <button className='bg-black text-white p-1 rounded w-full' onClick={() => adddata(d)}>Add to Cart</button>
                    </div>

                </div>


            )}
            </h1>
        </div>
    )
}
