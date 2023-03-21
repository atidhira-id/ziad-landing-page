/* eslint-disable react/react-in-jsx-scope */
function PhoneMockup({ size = '500px', className = '' }) {
  return (
    <div className={`${className === '' ? 'w-max' : className}`}>
      <img
        src="/phone-mockup.png"
        alt="phone-mockup"
        width={size}
        height="auto"
      />
    </div>
  )
}

export default PhoneMockup;
