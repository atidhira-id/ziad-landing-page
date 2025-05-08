import React from "react";

function SectionContainer({ children, className, id }) {
  return (
    <section
      className={`w-5/6 max-w-7xl mx-auto my-1 py-4 rounded-lg ${className}`}
      id={id}
    >
      {children}
    </section>
  );
}

export { SectionContainer };
