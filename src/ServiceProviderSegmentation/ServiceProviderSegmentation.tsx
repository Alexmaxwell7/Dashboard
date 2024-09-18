 
import React from "react";
import { SegmentationChart } from "./SegmentationChart";
import { AttributesChart } from "./AttributesChart";
import { LegendItem } from "./LegendItem";

interface ServiceProviderSegmentationProps {}

export const ServiceProviderSegmentation: React.FC<
  ServiceProviderSegmentationProps
> = () => {
  const legendItems = [
    { color: "bg-rose-400", label: "Healthcare Sector" },
    { color: "bg-blue-700", label: "Construction Sector" },
    { color: "", label: "Home Services Sector" },
    { color: "", label: "Petcare Sector" },
    { color: "bg-fuchsia-800", label: "Entertainment Sector" },
    { color: "", label: "Event Sector" },
  ];

  return (
    <section className="flex flex-col p-8 font-medium bg-white rounded-2xl max-w-[870px] text-zinc-500 max-md:px-5">
      <h2 className="text-xl font-bold leading-snug text-stone-950 max-md:max-w-full">
        Service Provider Segmentation & Demographics
      </h2>
      <div className="flex flex-wrap gap-6 mt-6 w-full text-base max-md:max-w-full">
        <SegmentationChart />
        <AttributesChart />
      </div>
      <div className="flex flex-wrap gap-6 items-start mt-6 w-full text-sm leading-snug max-md:max-w-full">
        {legendItems.map((item, index) => (
          <LegendItem key={index} color={item.color} label={item.label} />
        ))}
      </div>
    </section>
  );
};
