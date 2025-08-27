import React from 'react'

const localproducts = [

  // men 
  {
    id: 1,
    title: "H&M Men Slim Fit Shirt",
    description: "by H&M India",
    price: 1299,
    image: "src/assets/products/men/b1a168578c0031696cfd9cf22c945eda0dcdf851.avif"
  },
  {
    id: 2,
    title: "H&M Women Cotton Dress",
    description: "by H&M India",
    price: 1799,
    image: "src/assets/products/women/product1/282d7a8e2292888356be4e25d8c74638136fe327.avif"
  },
  {
    id: 3,
    title: "H&M Kids Printed T-shirt",
    description: "by H&M India",
    price: 599,
    image: "src/assets/products/kid/product1/0654df2e9ad83a25ee62f9d9449cecd54dc9cb5e.avif"
  },
]


const Products = () => {

  const products = localproducts;

  return (
    <>
      <div>
        <div className='mx-5'>
          <div className='p-5 my-5  rounded-xl max-w-[1200px] border border-b-black mx-auto'>
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