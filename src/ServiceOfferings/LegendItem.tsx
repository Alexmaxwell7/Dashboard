 
import React from "react";

interface LegendItemProps {
  color: string;
  text: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ color, text }) => {
  return (
    <div className="flex gap-2.5 items-center tracking-normal">
      <div
        className={`flex shrink-0 self-stretch my-auto w-2.5 h-2.5 ${color} rounded-full`}
      />
      <div className="self-stretch my-auto">{text}</div>
    </div>
  );
};

export default LegendItem;
