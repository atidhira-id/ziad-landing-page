import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { whatsappTemplateText } from "@/data/data";

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

export default FloatingContactButton;
