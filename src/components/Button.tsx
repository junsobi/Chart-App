import React from "react";

interface ButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 border border-blue-500 rounded-lg text-blue-500 font-bold 
        ${isActive ? "bg-blue-500 text-white" : ""}
        hover:bg-blue-300 focus:outline-none active:bg-blue-700 transition-all`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
