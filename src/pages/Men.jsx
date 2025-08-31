import React from 'react'

const Products = [

  {
    id: 1,
    title: "product-1",
    description: "one",
    price: 1599,
    img: 'src/assets/products/men/b1a168578c0031696cfd9cf22c945eda0dcdf851.avif'
  },
  {
    id: 2,
    title: "product-1",
    description: "one",
    price: 1599,
    img: 'src/assets/products/men/b1a168578c0031696cfd9cf22c945eda0dcdf851.avif'
  }
  ,
  {
    id: 3,
    title: "product-1",
    description: "one",
    price: 1599,
    img: 'src/assets/products/men/b1a168578c0031696cfd9cf22c945eda0dcdf851.avif'
  }


]

const Men = () => {

  const localproducts = Products

  return (
    <>
      <div className='flex flex-wrap gap-7 justify-center items-center p-5'>
        {localproducts.map(product => (
          <div key={product.id}>
            <div className='border border-black px-5 pb-5'>
              <img src={product.img} alt="" className='w-80' />
              <h1>{product.title}</h1>
              <h1>{product.description}</h1>
              <h1>{product.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Men