 
import React from "react";

interface SegmentationChartProps {}

export const SegmentationChart: React.FC<SegmentationChartProps> = () => {
  return (
    <div className="flex overflow-hidden flex-col p-6 leading-snug bg-white rounded-2xl border border-solid border-stone-300 min-w-[279px] w-[372px] max-md:px-5">
      <h3 className="w-full">Service Provider across different Segments</h3>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/353c71aa00c25de8615fa64253121ca99cdbdf92908b638acb2cb1714cea7484?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9"
        alt="Chart showing service provider distribution across different segments"
        className="object-contain self-center mt-6 max-w-full aspect-square w-[225px]"
      />
    </div>
  );
};
