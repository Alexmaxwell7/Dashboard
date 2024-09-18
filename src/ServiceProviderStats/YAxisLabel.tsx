 
import React from "react";

interface YAxisLabelProps {
  value: number;
}

export const YAxisLabel: React.FC<YAxisLabelProps> = ({ value }) => (
  <div className="flex gap-1.5 justify-center items-center mt-10 max-md:mt-10">
    <div className="self-stretch my-auto">{value}</div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/14db9e18bb4e5e5d23d5fa76f23f51770f0271d4421fe968e01b6ae97a174f3a?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9"
      className="object-contain shrink-0 self-stretch my-auto w-3 aspect-[12.05]"
      alt=""
    />
  </div>
);
