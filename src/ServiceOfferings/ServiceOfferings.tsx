 
import React from "react";
import ServiceIcon from "./ServiceIcon";
import LegendItem from "./LegendItem";

interface ServiceOfferingsProps {
  activeServices: number;
  newServices: number;
  removedServices: number;
}

const ServiceOfferings: React.FC<ServiceOfferingsProps> = ({
  // activeServices,
  // newServices,
  // removedServices,
}) => {
  const legendItems = [
    { color: "bg-lime-500", text: "Number of active services" },
    { color: "bg-yellow-400", text: "New services added" },
    { color: "bg-red-600", text: "Services removed" },
  ];

  return (
    <section className="flex flex-col p-8 bg-white rounded-2xl max-w-[870px] max-md:px-5">
      <h2 className="text-xl font-bold leading-snug text-stone-950">
        Service offerings
      </h2>
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between w-full max-md:max-w-full">
          <ServiceIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/68774f7d9f1c92add0517350b363dfebe0f4ed6430003fd7b43343e8d5e36ffc?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9"
            alt="Service icon"
            className="object-contain shrink-0 self-start aspect-square w-[146px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82c302a66be1ba23018b24ee36c66976a8be3abb194ca29b73c3c741fcf5d0c2?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9"
            alt="Service statistics graph"
            className="object-contain aspect-[4.07] min-w-[240px] w-[594px] max-md:max-w-full"
          />
        </div>
        <div className="flex flex-wrap gap-6 items-start mt-11 w-full text-sm font-medium leading-snug text-zinc-500 max-md:mt-10 max-md:max-w-full">
          {legendItems.map((item, index) => (
            <LegendItem key={index} color={item.color} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
