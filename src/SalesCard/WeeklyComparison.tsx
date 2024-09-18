 
import React from "react";

interface WeeklyComparisonProps {
  imageSrc: string;
  percentage: string;
  percentageColor: string
}

const WeeklyComparison: React.FC<WeeklyComparisonProps> = ({
  imageSrc,
  percentage,
  percentageColor
}) => {  
  return (
    <div>
  <hr className="w-full mt-3 mb-3"/>
  <div className="flex gap-4 items-center mt-4 w-full text-sm font-medium tracking-tight leading-5 text-zinc-500">
      <img
        loading="lazy"
        src={imageSrc}
        alt="Weekly Comparison Chart"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.55] w-[76px]"
      />
    
      <p className="self-stretch my-auto w-[92px]">
        <span className={`font-semibold ${percentageColor}`}> {percentage}%</span>{" "}
        more from last week
      </p>
    </div>
    </div>
  
  );
};

export default WeeklyComparison;
