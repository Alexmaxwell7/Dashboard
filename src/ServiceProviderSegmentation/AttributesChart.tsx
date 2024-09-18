 
import React from "react";

interface AttributesChartProps {}

export const AttributesChart: React.FC<AttributesChartProps> = () => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink self-start p-6 leading-6 bg-white rounded-2xl border border-solid basis-0 border-stone-300 min-w-[279px] max-md:px-5">
      <h3 className="w-full">
        Attributes as per location, years of experience, specialization
      </h3>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b225f8e04ad4380ce8377769e8b24d94b8373231813875066e36d8c69cf3626?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9"
        alt="Chart displaying attributes based on location, years of experience, and specialization"
        className="object-contain self-center mt-6 max-w-full aspect-[0.97] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[238px]"
      />
    </div>
  );
};
