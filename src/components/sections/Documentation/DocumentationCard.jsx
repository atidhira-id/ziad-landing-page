import React from "react";

function DocumentationMobileCard({ data }) {
  const { image, name, desc } = data;

  return (
    <div className="w-full flex flex-col bg-white rounded-xl border border-blue-200 overflow-hidden">
      <img
        src={image}
        alt="Tim Ziad di sekolah"
        className="w-full h-80 object-cover object-top"
      />
      <div className="basis-full p-4">
        <h3 className="font-bold text-xl mb-8">{name}</h3>
        <p className="text-gray-600 mb-4">{desc}</p>
      </div>
    </div>
  );
}

function DocumentationDesktopCard({ data }) {
  const { image } = data;

  return (
    <img
      src={image}
      alt="Tim Ziad di sekolah"
      className="block w-full object-cover object-top"
    />
  );
}

export { DocumentationMobileCard, DocumentationDesktopCard };
