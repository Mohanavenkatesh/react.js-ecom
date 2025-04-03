import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ShoppingCart, Truck, Percent, HandCoins, Scissors } from "lucide-react";
import kidBanner from "../imgs/kidsBanner.avif";
import menBanner from "../imgs/menBanner.avif";
import womenBanner from "../imgs/womenBanner.avif";
import "../css/Home.css";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-8 rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 shadow-lg">
    {icon}
    <h3 className="text-white text-xl font-semibold mt-4">{title}</h3>
    <p className="text-gray-300 mt-2">{description}</p>
  </div>
);

const ImageCard = ({ image, name, category, price }) => (
  <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105">
    <img src={image} alt={name} className="mb-4 w-full h-60 object-cover rounded-lg" />
    <p className="text-gray-400 text-sm">{category}</p>
    <h3 className="text-white text-lg font-semibold mt-2">{name}</h3>
    <p className="text-yellow-400 mt-2">★★★★★</p>
    <p className="text-white mt-2 text-xl font-semibold">{price}</p>
  </div>
);

export const Home = ({ array, setarray }) => {
  const banners = [kidBanner, menBanner, womenBanner];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  // State for the second carousel (images)
  const [current, setCurrent] = useState(0);

  const images = useMemo(() => [
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1511763368359-3ad60b3eba2c?w=800&h=400&fit=crop",
  ], []);

  // Features section
  const features = useMemo(() => [
    { icon: <Truck className="h-12 w-12 text-green-400" />, title: "Worldwide shipping", description: "We ship across the globe" },
    { icon: <Percent className="h-12 w-12 text-green-400" />, title: "Bulk Orders", description: "Get flat 10% discount on bulk orders" },
    { icon: <HandCoins className="h-12 w-12 text-green-400" />, title: "Budget-Friendly Price", description: "Quality approved unbeatable prices" },
    { icon: <Scissors className="h-12 w-12 text-green-400" />, title: "Blouse, Fall & Edging Services", description: "Get your saree drape-ready" },
  ], []);

  const collections = useMemo(() => [
    { image: "../imgs/collection1.avif", category: "Sarees", name: "Linen Sequin Work Sarees", price: "₹1,500.00" },
    { image: "../imgs/collection2.avif", category: "Sarees", name: "Plaid Checkered Semi Cottons", price: "₹1,300.00" },
    { image: "../imgs/collection3.avif", category: "Sarees", name: "Mul Cottons", price: "₹980.00" },
    { image: "../imgs/collection4.avif", category: "Sarees", name: "Tissue Cottons", price: "₹999.00" },
  ], []);

  const categoryCollections = useMemo(() => [
    { image: "../imgs/workwear.avif", title: "Work Wear", description: "Shop from our comfortable range of cottons and semi-linen workwear drapes." },
    { image: "../imgs/festive.avif", title: "Festive Collection", description: "Shop from our affordable range of festive collection sarees for any occasion." },
    { image: "../imgs/casual.avif", title: "Casual Wears & Blouse Materials", description: "Shop from our range of comfortable drapes for casual wears and blouse materials." },
  ], []);

  // Functions for second carousel (images)
  const prevImage = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextImage = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  // Auto change carousel slides every 5 seconds, unless hovered
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Image Slider */}
      <div className="relative w-full overflow-hidden">
        <img
          src={banners[currentIndex]}
          alt="Banner"
          className="w-full object-cover h-96 transition-transform duration-700"
        />

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full text-white"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full text-white"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-400"}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900 py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => <FeatureCard key={index} {...feature} />)}
      </div>

      {/* Collections Section */}
      <div className="bg-gray-900 py-12 px-6 text-center">
        <h2 className="text-white text-3xl mb-6 font-semibold">Our Top New Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, index) => <ImageCard key={index} {...item} />)}
        </div>
      </div>

      {/* Category Collections Section */}
      <div className="bg-green-900 py-12 px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryCollections.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105">
              <img src={item.image} alt={item.title} className="mb-4 w-full h-60 object-cover rounded-lg" />
              <h3 className="text-white text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.description}</p>
              <button className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition ease-in-out duration-300">Shop Now →</button>
            </div>
          ))}
        </div>
      </div>

      {/* Bulk Order Section */}
      <div className="bg-gray-900 text-white flex justify-between items-center p-6 rounded-lg mt-10 shadow-xl">
        <p className="text-lg font-semibold">Get 10% off on bulk orders.</p>
        <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition ease-in-out duration-300">
          <ShoppingCart size={16} /> SHOP NOW
        </button>
      </div>

      {/* Customer Testimonial Section */}
      <div className="bg-gray-100 py-10 px-6 text-center mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-600 italic">"This product exceeded my expectations. The quality is top-notch and the service was excellent!"</p>
          <h3 className="mt-4 font-semibold text-gray-900">John Doe</h3>
          <p className="text-gray-500 text-sm">Verified Customer</p>
        </div>
      </div>
    </div>
  );
};
