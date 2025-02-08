import React from 'react'

export const Cart = ({ array, setarray }) => {
    return (
        <div>
            <h1 className='flex gap-5 bg-slate-200'>{



                array.map((c) =>

                    <>
                        <h1>{c.No}</h1>
                        <h1>{c.Name}</h1>
                        <h1>{c.Price}</h1>

                    </>


                )
            }</h1>
        </div>
    )
}
