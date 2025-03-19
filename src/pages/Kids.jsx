import React from 'react'
import KidsPage from '../js/KidsPage'

export const Kids = ({ array, setarray, theme, toggleTheme }) => {
  const addToCart = (item) => {
    setarray([...array, item]);
  };
  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>

      {KidsPage.map((item) => (
        <div>
          <div className='grid gap-2 p-10  grid-cols-1 md:grid-cols-4'>
            <div>
              <img src={item.kidsImg1} alt="" />
              <h1>{item.kidsName1}</h1>
              <p>{item.kidsPrice1}</p>
              <button className='button-86 w-100' onClick={addToCart}>Add To Cart</button>
            </div>


            <div>
              <img src={item.kidsImg2} alt="" />
              <h1>{item.kidsName2}</h1>
              <p>{item.kidsPrice2}</p>
              <button className='button-86 w-100' onClick={addToCart}>Add To Cart</button>
            </div>


            <div>
              <img src={item.kidsImg3} alt="" />
              <h1>{item.kidsName3}</h1>
              <p>{item.kidsPrice3}</p>
              <button className='button-86 w-100' onClick={addToCart}>Add To Cart</button>
            </div>


            <div>
              <img src={item.kidsImg4} alt="" />
              <div>

              </div>
              <h1>{item.kidsName4}</h1>
              <p>{item.kidsPrice4}</p>
              <div></div>
              <button className='button-86 px-10' onClick={addToCart}>Add To Cart</button>
            </div>
          </div>




        </div>
      ))}


    </div>

  )
}
