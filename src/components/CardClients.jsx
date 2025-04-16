/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/img-redundant-alt */

function CardClients({ children: text = "text", imgUrl }) {
  return (
    <div className="w-72 h-32 flex items-center justify-center">
      <div className="bg-white w-full h-full px-10 py-4 flex items-center justify-center gap-4 shadow-lg rounded-md">
        {imgUrl && <img src={imgUrl} alt="image" className="w-20" />}
        <h3 className="grow text-lg font-bold text-green-700">{text}</h3>
      </div>
    </div>
  );
}

export default CardClients;
