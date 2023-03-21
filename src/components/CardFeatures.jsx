/* eslint-disable react/self-closing-comp */
import React from 'react';

function CardFeatures({ children: desc, title = 'title' }) {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="w-72 h-80 max-h-max px-4 py-4 flex flex-col items-center justify-center shadow-lg rounded-lg">
        {/* image */}
        <div className="w-16 h-16 bg-blue-500 mb-8"></div>
        {/* title */}
        <h3 className="w-3/4 mb-3 font-poppins font-bold text-xl text-blue-600 text-center">{title}</h3>
        {/* desc */}
        <p className="w-full text-center text-gray-500">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default CardFeatures;
