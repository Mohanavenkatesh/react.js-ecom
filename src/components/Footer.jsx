import React from 'react'
import footerImg from '../assets/logo/logo.svg'

const Footer = () => {
    return (
        <footer className="bg-[#faf8f4] py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="mb-8 md:mb-0 flex-shrink-0">
                        <img src={footerImg} alt="footerimg" className="w-40" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 w-full justify-around">
                        <div>
                            <h2 className="text-lg mb-3 ">About</h2>
                            <ul className="space-y-2 text-sm ">
                                <li className="uppercase tracking-wide">OUR STORY</li>
                                <li className="uppercase tracking-wide">SUSTAINABILITY</li>
                                <li className="uppercase tracking-wide">CM STORES</li>
                                <li className="uppercase tracking-wide">AFFILIATE PROGRAM</li>
                                <li className="uppercase tracking-wide">TERMS OF SERVICE</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg  mb-3 ">Customer Care</h2>
                            <ul className="space-y-2 text-sm ">
                                <li className="uppercase tracking-wide">SHIPPING & RETURNS</li>
                                <li className="uppercase tracking-wide">HELP CENTER</li>
                                <li className="uppercase tracking-wide">CONTACT US</li>
                                <li className="uppercase tracking-wide">MANAGE ORDERS</li>
                                <li className="uppercase tracking-wide">PRIVACY POLICY</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg  mb-3 ">Explore</h2>
                            <ul className="space-y-2 text-sm">
                                <li className="uppercase tracking-wide">CM REWARDS</li>
                                <li className="uppercase tracking-wide">WISH LIST</li>
                                <li className="uppercase tracking-wide">INSTAGRAM</li>
                                <li className="uppercase tracking-wide">TIKTOK</li>
                                <li className="uppercase tracking-wide">PINTEREST</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer