/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function CardClients({ children: text = 'text', imgUrl }) {
  return (
    <div className="min-w-[18rem] max-w-[20rem] flex items-center justify-center">
      <div className="w-full h-full px-12 py-4 flex items-center justify-center gap-4 bg-white shadow-lg rounded-md">
        {/* <img src={} alt="image" /> */}
        <div className="w-10 h-10 bg-blue-500">
        </div>
        <h3 className="text-xl font-bold ">
          {text}
        </h3>
      </div>
    </div>
  )
}

export default CardClients;
