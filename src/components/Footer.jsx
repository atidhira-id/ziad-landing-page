/* eslint-disable max-len */
import React from 'react';

function Footer() {
  return (
    <footer className="w-full h-max md:mt-20 mb-10 md:mb-0 px-6 md:px-8 py-10 flex flex-col md:flex-row   justify-start items-center border-t border-gray-200">
      {/* logo */}
      <div className="mx-8">
        <img src="./vercel.svg" alt="company logo" width="100px" height="auto" />
      </div>
      {/* information */}
      <aside className="w-full md:ml-8 flex flex-col md:flex-row justify-center items-start text-gray-500">
        {/* contact info */}
        <div className="mr-14">
          <h3 className="font-poppins font-semibold text-gray-800">Contact</h3>
          <h3 className="font-poppins font-medium text-gray-800">Phone</h3>
          <p>
            0877-7666-9010 (Tulus)
            <br />
            0812-1105-5682 (Alka)
            <br />
            ptmitracerdasnusantara@gmail.com
          </p>
        </div>
        <div className="max-w-1/2">
          <h3 className="font-poppins font-semibold text-gray-800">Address</h3>
          <p>
            Jl. KH. Abdullah Syafei No. 1 (Tebet Utara Dalam 34) Rt 05/ Rw 01, Tebet - Jakarta Selatan 12820
          </p>
        </div>
      </aside>
    </footer>
  );
}

export default Footer;
