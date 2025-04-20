/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/img-redundant-alt */

function CardClients({ children: text = "text", imgUrl }) {
  return (
    <div className="w-72 h-24 sm:h-30 flex items-center justify-center z-0">
      <div className="bg-white w-full h-full px-10 py-4 flex items-center justify-center gap-4 border border-gray-300 rounded-md">
        {imgUrl && <img src={imgUrl} alt="image" className="w-16 h-16" />}
        <h3 className="grow text-base font-bold  text-green-700">{text}</h3>
      </div>
    </div>
  );
}

export default CardClients;
