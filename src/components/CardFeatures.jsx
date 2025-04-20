/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/self-closing-comp */

function CardFeatures({ children: desc, title = "title", imageUrl }) {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="w-64 h-64 lg:w-72 lg:h-72 px-4 py-6 flex flex-col items-center justify-center gap-2 rounded-3xl border border-gray-300">
        {/* image */}
        <img src={imageUrl} alt="feature-image" className="w-20 " />
        {/* title */}
        <h3 className="w-fit font-bold text-xl text-blue-600 text-center">
          {title}
        </h3>
        {/* desc */}
        <div className="grow">
          <p className="w-full text-sm md:text-base text-center text-gray-600">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardFeatures;
