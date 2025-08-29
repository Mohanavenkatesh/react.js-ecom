import React from 'react'

const localproducts = [

  // men 
  {
    id: 1,
    title: "H&M Men Slim Fit Shirt",
    description: "by H&M India",
    price: 1299,
    image: "src/assets/men.avif"
  },
  {
    id: 2,
    title: "H&M Women Cotton Dress",
    description: "by H&M India",
    price: 1799,
    image: "src/assets/women.avif"
  },
  {
    id: 3,
    title: "H&M Kids Printed T-shirt",
    description: "by H&M India",
    price: 599,
    image: "src/assets/kids.avif"
  },
]


const Products = () => {

  const products = localproducts;

  return (
    <>
      <div>
        <div className='mx-5'>
          <div className='p-5 my-5   max-w-[1400px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-5'>
              {products.map((product =>
                <div key={product.id}>
                  <img src={product.image} alt="" />
                  <p>{product.title}</p>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products