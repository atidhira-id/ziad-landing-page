/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/react-in-jsx-scope */
function PhoneMockup({ size, className = '' }) {
  return (
    <div className={`${className === '' ? 'w-max' : className}`}>
      <img
        src="./phone-mockup.png"
        alt="phone-mockup"
        width={size ? '600px' : size}
        height="auto"
      />
    </div>
  );
}

export default PhoneMockup;
