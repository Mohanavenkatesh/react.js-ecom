import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="text-center">
        <div className="text-6xl font-bold text-gray-800 mb-2">404</div>
        <div className="text-xl text-gray-700 mb-4">Page Not Found</div>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default Error