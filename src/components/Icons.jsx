/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'

function CheckIcon({ size = 36, color = 'white' }) {
  return (
    <svg width={size.toString()} height={size.toString()} viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.2761 19.4634L29.763 0.976426C30.3375 0.401972 31.0686 0.114746 31.9564 0.114746C32.8442 0.114746 33.5753 0.401972 34.1498 0.976426C34.7242 1.55088 35.0115 2.282 35.0115 3.16979C35.0115 4.05759 34.7242 4.78871 34.1498 5.36317L13.4694 26.0435C12.8428 26.6702 12.1116 26.9835 11.2761 26.9835C10.4405 26.9835 9.70938 26.6702 9.0827 26.0435L0.935898 17.8967C0.361445 17.3223 0.0742188 16.5911 0.0742188 15.7033C0.0742188 14.8155 0.361445 14.0844 0.935898 13.51C1.51035 12.9355 2.24148 12.6483 3.12927 12.6483C4.01706 12.6483 4.74819 12.9355 5.32264 13.51L11.2761 19.4634Z" fill={color} />
    </svg>
  )
}

function HamburgerIcon({ size = 36, color = 'white' }) {
  return (
    <>
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={size.toString()} height={size.toString()}>
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
          <path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#000000" />
          <path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#000000" />
          <path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#000000" />
        </g>
      </svg>
    </>
  )
}

function CloseIcon({ size = 36, color = 'white' }) {
  return (
    <svg viewBox="0 0 32 32" width={size.toString()} height={size.toString()} xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g fill="none" fillRule="evenodd">
          {' '}
          <path d="m0 0h32v32h-32z" />
          {' '}
          <path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm3.5355339 11.0502525-3.5355339 3.5355339-3.5355339-3.5355339-1.4142136 1.4142136 3.5355339 3.5355339-3.5355339 3.5355339 1.4142136 1.4142136 3.5355339-3.5355339 3.5355339 3.5355339 1.4142136-1.4142136-3.5355339-3.5355339 3.5355339-3.5355339z" fill="#ffffff" />
          {' '}
        </g>
        {' '}
      </g>
    </svg>
  )
}
export { CheckIcon, HamburgerIcon, CloseIcon };
