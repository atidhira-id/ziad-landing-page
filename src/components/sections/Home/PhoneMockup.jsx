import React from "react";

function PhoneMockup({ size, className = "", imageUrl }) {
  return (
    <div className={`${className === "" ? "w-max" : className}`}>
      <img
        src={imageUrl || "./images/phone-mockup.png"}
        alt="phone-mockup"
        width={size ? "600px" : size}
        height="auto"
      />
    </div>
  );
}

export default PhoneMockup;
