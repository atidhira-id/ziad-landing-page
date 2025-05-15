import React from "react";

function Footer() {
  return (
    <footer className="w-full max-w-screen-2xl mt-20 border-t border-dashed border-gray-200">
      <div className="w-full max-w-screen-xl mx-auto p-8 md:py-20 flex flex-col md:flex-row justify-start items-center md:gap-8">
        <img src="./images/logo-ziad.png" alt="company logo" className="w-20" />

        <aside className=" w-full mt-8 md:mt-0 flex flex-col md:flex-row justify-center md:justify-between gap-4 text-gray-600">
          <div className="w-max">
            <h3 className="font-semibold text-gray-900 text-lg">Contact</h3>
            <p>
              0877-7666-9010 (Tulus)
              <br />
              0895-3211-71701 (Regal)
              <br />
              ptmitracerdasnusantara@gmail.com
            </p>
          </div>
          <div className="">
            <h3 className="font-semibold text-gray-900 text-lg">Address</h3>
            <p>
              Jl. KH. Abdullah Syafei No. 1 (Tebet Utara Dalam 34) <br />
              RT 05 RW 01, Tebet - Jakarta Selatan 12820
            </p>
          </div>
          <div className="w-max">
            <h3 className="font-semibold text-gray-900 text-lg">
              Social Media
            </h3>
            <div className="flex flex-col">
              <a
                href="https://www.instagram.com/ziadsistem/"
                target="_blank"
                className="hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@ptmitracerdasnusantara"
                target="_blank"
                className="hover:underline"
              >
                Youtube
              </a>
              <a
                href="https://www.youtube.com/@ptmitracerdasnusantara"
                target="_blank"
                className="hover:underline"
              >
                Tiktok
              </a>
            </div>
          </div>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
