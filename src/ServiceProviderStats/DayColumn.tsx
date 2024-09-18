 
import React from "react";

interface DayColumnProps {
  day: string;
}

export const DayColumn: React.FC<DayColumnProps> = ({ day }) => (
  <div className="flex flex-col justify-center items-center">
    <img
      loading="lazy"
      src={`http://b.io/ext_${
        day === "Mon" ? "5" : day === "Tue" || day === "Fri" ? "6" : "7"
      }-`}
      className="object-contain w-full max-w-full aspect-[0.1]"
      alt=""
    />
    <div className="mt-1.5">{day}</div>
  </div>
);
