 
import React from "react";

interface LegendItemProps {
  color: string;
  label: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => {
  return (
    <div className="flex gap-2.5 items-center mt-4 first:mt-0">
      <div
        className={`flex shrink-0 self-stretch my-auto w-2.5 h-2.5 rounded-full ${color}`}
      />
      <div className="self-stretch my-auto">{label}</div>
    </div>
  );
};

export default LegendItem;
