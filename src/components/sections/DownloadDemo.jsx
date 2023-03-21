/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import DownloadLink from '../DownloadLink';

function DownloadDemo() {
  return (
    // container
    <section className="w-[90vw] h-max px-4 md:px-12 py-12 flex flex-col md:flex-row justify-center items-center ">
      {/* product desc */}
      <article className="w-full md:w-3/5 pl-12 flex flex-col align-start justify-center gap-4">
        {/* title */}
        <h3 className="w-full mb-4 font-bold text-5xl text-center md:text-left">
          Download
          <span className="text-blue-600"> Demo</span>
          <br />
          <span className="text-blue-600"> App</span>
        </h3>
        {/* short desc */}
        <p className="w-full md:w-3/4 text-center md:text-left text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elitea illo blanditiis? Maxime, possimus! Commodi quia nostrum beatae perspiciatis cum et !
        </p>
        <div className="w-full flex items-center justify-center md:justify-start my-2">
          {/* download link */}
          <DownloadLink />
        </div>
      </article>
      {/* product image */}
      <div className="">
        <img src="/phone-image.png" alt="phone-image-apps" height="auto" className="w-[200px] md:w-[400px]" />
      </div>
    </section>
  )
}

export default DownloadDemo;
