 
import React from "react";

interface LegendItemProps {
  color: string;
  label: string;
}

export const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => (
  <div className="flex gap-2.5 items-center self-stretch my-auto">
    <div
      className={`flex shrink-0 self-stretch my-auto w-2.5 h-2.5 ${color} rounded-full`}
    />
    <div className="self-stretch my-auto">{label}</div>
  </div>
);
