 
import React from "react";
import { YAxisLabel } from "./YAxisLabel";
import { ChartLine } from "./ChartLine";
import { DayColumn } from "./DayColumn";
import { LegendItem } from "./LegendItem";
import LineGraph from '../Images/Graph.png'
interface ServiceProviderStatsProps {}

const ServiceProviderStats: React.FC<ServiceProviderStatsProps> = () => {
  const yAxisLabels = [5000, 4000, 3000, 2000, 1000];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const legendItems = [
    { color: "bg-rose-400", label: "Active Service Provider" },
    { color: "bg-sky-300", label: "Service Provider Retension Rate" },
    { color: "bg-teal-500", label: "New Service Provider" },
    { color: "bg-orange-400", label: "Service Completion Rate" },
    { color: "bg-fuchsia-500", label: "Total Service Provider" },
    { color: "bg-yellow-500", label: "Average Rating" },
  ];

  return (
    <section className="flex overflow-hidden flex-col p-8 font-medium bg-white rounded-2xl max-w-[870px] max-md:px-5">
      <div className="flex relative w-full text-xs tracking-wider text-center whitespace-nowrap text-stone-950 max-md:max-w-full">
        <div className="flex z-0 flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-1 py-5 w-full max-md:max-w-full" />
          <div className="flex flex-col w-full max-md:max-w-full">
            <ChartLine />
          </div>
        </div>
      </div>

    </section>
  );
};

export default ServiceProviderStats;
