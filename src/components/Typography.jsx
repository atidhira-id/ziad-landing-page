import React from "react";

function SectionTitle({ children: title, className }) {
  return (
    <h1
      className={`text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 text-center px-4 ${className}`}
    >
      {title}
    </h1>
  );
}

function SectionSubTitle({ children: text, className }) {
  return (
    <p
      className={`font-light text-gray-500 sm:text-xl max-w-2xl mx-auto ${className}`}
    >
      {text}
    </p>
  );
}

export { SectionTitle, SectionSubTitle };
