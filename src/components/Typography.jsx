/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

function Title({
  children: title = "xl",
  size: className,
  align = "text-center",
}) {
  return (
    <h1 className={`${className} ${align} font-bold text-gray-800 text-left`}>
      {title}
    </h1>
  );
}

function SectionTitle({ children: title, className }) {
  return (
    <h1
      className={`text-4xl md:text-5xl text-gray-900 text-center font-bold ${className}`}
    >
      {title}
    </h1>
  );
}

function SectionSubTitle({ children: text, className }) {
  return (
    <p
      className={`text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto ${className}`}
    >
      {text}
    </p>
  );
}

export { Title, SectionTitle, SectionSubTitle };
