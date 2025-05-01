import React from "react";
import Link from "next/link";
import { whatsappTemplateText } from "@/data/data";

function FloatingContactButton() {
  const encodedTeks = encodeURIComponent(whatsappTemplateText);

  return (
    <div className="fixed bottom-8 right-6 md:bottom-10 md:right-16 min-w-32 min-h-32 max-h-max max-w-max z-90 hover:scale-125 transition-all duration-200">
      <Link
        href={`https://api.whatsapp.com/send?phone=6287776669010&text=${encodedTeks}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="WhatsApp"
          role="img"
          viewBox="0 0 512 512"
          fill="#000000"
          width="48px"
          height="48px"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <rect width="512" height="512" rx="15%" fill="#25d366" />
            <path
              fill="#25d366"
              stroke="#ffffff"
              strokeWidth="26"
              d="M123 393l14-65a138 138 0 1150 47z"
            />
            <path
              fill="#ffffff"
              d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
            />
          </g>
        </svg>
      </Link>
    </div>
  );
}

export default FloatingContactButton;
