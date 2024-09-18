 
import React from "react";

interface ActionButtonProps {
  label: string;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, className }) => (
  <div className={`flex flex-col ${className}`}>
    <button className="px-3 py-2 bg-indigo-600 rounded-lg">{label}</button>
  </div>
);

export default ActionButton;
