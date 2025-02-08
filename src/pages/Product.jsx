import React from 'react'
import datass from '../Script'

export const Product = ({ array, setarray }) => {


    const fun = (b) => {

        setarray([...array, b])


    }


    return (
        <div className='bg-slate-200'>
            <h1>{datass.map((d) =>

                <>

                    <h1>{d.No}</h1>
                    <h2>{d.Name}</h2>
                    <h3>{d.Price}</h3>
                    <button onClick={() => fun(d)} className='bg'>Cart</button>

                </>

            )}</h1>
        </div>
    )
}
