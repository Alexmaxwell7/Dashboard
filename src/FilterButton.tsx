 
import React from "react";

interface FilterButtonProps {
  icon: string;
  label: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ icon, label }) => (
  <div className="flex gap-2.5 items-center px-2.5 py-1.5 bg-white rounded-lg border border-blue-300 border-solid shadow-[0px_0px_10px_rgba(29,22,23,0.05)]">
    {icon && (
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
    )}
    <div className="flex gap-0.5 items-center self-stretch py-0.5 my-auto">
      <div className="self-stretch my-auto">{label}</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/12494d9e596e802d262138d1ae73215587d1e4cabb6f7e726a30d8e25eff38a3?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
    </div>
  </div>
);

export default FilterButton;
