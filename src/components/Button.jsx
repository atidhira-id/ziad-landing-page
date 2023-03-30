import React from 'react';

const variants = {
  base: 'rounded-md px-6 py-2.5 text-sm',
  outline: {
    blue: 'border border-blue-500 text-blue-500',
    white: 'border border-white text-white',
  },
  fill: {
    blue: 'bg-blue-500 text-white',
    white: 'bg-white text-blue-500',
  },
};

function buttonVariants(variant, color) {
  const buttonStyle = [];
  buttonStyle.push(variants.base);

  const keys = Object.keys(variants);

  keys.forEach((key) => {
    if (key === variant) {
      const matched = variants[key];

      buttonStyle.push(matched[color]);
    }
  });

  return buttonStyle.join(' ');
}

function Button({ children: text = 'text', variant = 'fill', color = 'blue' }) {
  return (
    <div className="">
      <button
        type="button"
        className={buttonVariants(variant, color)}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
