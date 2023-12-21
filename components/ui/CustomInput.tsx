// CustomInput.js
import React, { useState } from 'react';

const CustomInput = ({ id, label, type, rows }: any) => {
  const [hasValue, setHasValue] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setHasValue(!!value);
    setInputValue(value);
  };

  return (
    <div className="relative">
      {type === 'textarea' ? (
        <textarea
          id={id}
          placeholder=""
          value={inputValue}
          rows={rows || 4}
          className={`border-b peer w-full outline-none bg-transparent border-gray-300 p-2 rounded-md focus:outline-none focus:border-b-2 focus:border-b-red-400 transition-all duration-200  ${
            hasValue ? 'text-blue-500' : ''
          }`}
          onChange={handleInputChange}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder=""
          value={inputValue}
          className={`border-b peer w-full outline-none bg-transparent border-gray-300 p-2 rounded-md focus:outline-none focus:border-b-2 focus:border-b-red-300 transition-all duration-200 ${
            hasValue ? 'text-blue-500' : ''
          }`}
          onChange={handleInputChange}
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-0 px-1 uppercase tracking-wide pointer-events-none duration-200 top-2 peer-focus:text-xs peer-focus:lowercase peer-focus:-translate-y-5 ${
          hasValue ? '-translate-y-5 lowercase text-xs text-slate-500' : ''
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
