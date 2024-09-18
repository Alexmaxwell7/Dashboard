 
import React from "react";

interface PieChartProps {}

const PieChart: React.FC<PieChartProps> = () => {
  return (
    <div className="flex flex-col self-stretch my-auto text-xs font-bold text-center text-black whitespace-nowrap w-[218px]">
      <div className="flex relative flex-col py-2.5 w-full aspect-square">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20abf6e29009d2d4aed3be1360089d618b366363b329e12af8fe1cfd7ddbf031?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <div className="flex relative flex-col pr-2.5 pl-11 w-full max-md:pl-5">
          <div className="flex gap-5 justify-between items-start self-center max-w-full w-[115px]">
            <div className="px-2 bg-violet-100 rounded-full h-[33px] shadow-[0px_0px_2px_rgba(0,0,0,0.25)] w-[33px]">
              30%
            </div>
            <div className="px-3 pt-2.5 pb-4 bg-violet-100 rounded-full h-[33px] shadow-[0px_0px_2px_rgba(0,0,0,0.25)] w-[33px]">
              5%
            </div>
          </div>
          <div className="self-end px-1.5 pt-2.5 pb-4 mt-4 bg-violet-100 rounded-full h-[33px] shadow-[0px_0px_2px_rgba(0,0,0,0.25)] w-[33px]">
            20%
          </div>
        </div>
        <div className="flex relative gap-5 justify-between self-center mt-7 max-w-full w-[182px]">
          <div className="flex flex-col">
            <div className="px-2 bg-violet-100 rounded-full h-[34px] shadow-[0px_0px_2px_rgba(0,0,0,0.25)] w-[34px]">
              15%
            </div>
            <div className="self-end px-2 pt-2.5 pb-4 mt-5 bg-violet-100 rounded-full h-[34px] shadow-[0px_0px_2px_rgba(0,0,0,0.25)] w-[34px]">
              15%
            </div>
          </div>
          <div className="px-1.5 pt-2.5 pb-4 my-auto bg-violet-100 rounded-full h-[33px] shadow-[0px_0px_2px_rgba(0,0,0,0.25)] w-[33px]">
            20%
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
