import React from 'react';
import { FiShoppingBag } from "react-icons/fi";

const ProductCard = ({ image, title, price, originalPrice, badges = [], colors = [] }) => {
    return (
        <div className="flex flex-col group cursor-pointer font-serif">
            {/* Image Container */}
            <div className="relative aspect-square w-full bg-gray-100 overflow-hidden mb-3">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {badges.map((badge, index) => (
                        <span key={index} className="bg-white/30 backdrop-blur-xl border border-white/50 text-xs font-medium px-3 py-1 rounded-full shadow-lg text-gray-900 ring-1 ring-white/20">
                            {badge}
                        </span>
                    ))}
                </div>

                {/* Action Button */}
                <button className="absolute bottom-3 right-3 bg-white p-2.5 rounded-full shadow-md text-gray-800 hover:bg-black hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    <FiShoppingBag size={18} />
                </button>
            </div>

            {/* Product Details */}
            <h3 className="text-sm text-gray-800 font-medium mb-1 truncate">{title}</h3>

            <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-gray-900">{price}</span>
                {originalPrice && (
                    <span className="text-xs text-gray-400 line-through">{originalPrice}</span>
                )}
            </div>

            {/* Color Swatches */}
            {colors.length > 0 && (
                <div className="flex items-center gap-1.5">
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            className={`w-4 h-4 rounded-full border border-gray-300 p-[1px] ${index === 0 ? 'ring-1 ring-offset-1 ring-gray-400' : ''}`}
                        >
                            <div
                                className="w-full h-full rounded-full"
                                style={{ backgroundColor: color }}
                            />
                        </button>
                    ))}
                    <span className="text-xs text-gray-400 ml-1">+</span>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
