 
import React from "react";

interface SalesChartProps {
  imageSrc: string;
}

const SalesChart: React.FC<SalesChartProps> = ({ imageSrc }) => {
  return (
    <div className="flex">
 <img
      loading="lazy"
      src={imageSrc}
      alt="Sales Chart"
      className="object-contain mt-4 w-16 rounded-none"
    />
    
    </div>
   
  );
};

export default SalesChart;
