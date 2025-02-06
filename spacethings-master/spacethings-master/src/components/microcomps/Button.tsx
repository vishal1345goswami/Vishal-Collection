import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, className, style, icon, disabled }) => {
  return (
    <button
      className={`px-4 py-2 inline-block font-semibold bg-[#005ce6] rounded-lg transition ${className}`}
      style={style}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
