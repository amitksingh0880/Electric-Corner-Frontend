import React from "react";

const CustomInput = ({
  type,
  name,
  placeholder,
  classname,
  value,
  onChange,
  onBlur,
  disabled,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${classname}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
    </div>
  );
};

export default CustomInput;

