import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between px-5 py-2'>
                <div className='flex gap-5'>
                    <h1>logo</h1>
                    <h1>Shop</h1>
                    <h1>Best Sellers</h1>
                    <h1>New Arrivals</h1>
                    <h1>Necklaces</h1>
                    <h1>Rings</h1>
                </div>

                <div className='flex gap-6'>
                    <h1>Search</h1>
                    <h1>Account</h1>
                    <h1>Wishlist</h1>
                    <h1>Bag</h1>
                </div>
            </div>
        </div>

    )
}

export default Navbar