import React from "react";

interface ButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`w-20 px-4 py-2 border border-gray-500 rounded-lg text-gray-700 font-bold 
        ${isActive ? "bg-gray-300 text-gray-900" : ""}
        hover:bg-gray-200 focus:outline-none active:bg-gray-300 transition-all`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
