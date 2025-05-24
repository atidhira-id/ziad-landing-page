import React from "react";

function Button({ children, className, theme = "white" }) {
  let colorClass = "";

  if (theme == "blue") {
    colorClass =
      "border border-blue-700 text-white bg-blue-700 hover:text-blue-700 hover:bg-white before:bg-white";
  } else {
    colorClass =
      "border border-gray-300 text-blue-700 bg-white hover:text-white hover:bg-blue-700 before:bg-blue-700";
  }

  return (
    <>
      <button
        type="submit"
        className={`${colorClass} relative bottom-0 flex justify-center items-center rounded-md text-sm font-semibold p-2 z-10 overflow-hidden ease-in-out duration-700 isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 ${className}`}
      >
        {children}
      </button>
    </>
  );
}

function FloatingContactButton() {
  const encodedTeks = encodeURIComponent(whatsappTemplateText);

  return (
    <div className="fixed bottom-8 right-6 md:bottom-10 md:right-16 min-w-32 min-h-32 max-h-max max-w-max z-90 hover:scale-125 transition-all duration-200">
      <a
        href={`https://api.whatsapp.com/send?phone=6287776669010&text=${encodedTeks}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsappSquare fill="#25d366" size={56} />
      </a>
    </div>
  );
}

export { Button, FloatingContactButton };
