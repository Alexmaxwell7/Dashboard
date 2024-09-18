 
import React from "react";
import { PerformanceBar } from "./PerformanceBar";
import { LegendItem } from "./LegendItem";
import { PerformanceData, LegendData } from "./types";
import Barchart from '../Images/BarChart.png'

const performanceData: PerformanceData[] = [
  { color: "bg-blue-700", height: "h-[93px]" },
  { color: "bg-rose-400", height: "h-[180px]" },
  { color: "", height: "h-[148px]" },
  { color: "", height: "h-[172px]" },
  {
    color:
      "bg-[linear-gradient(180deg,#FFDC7E_0%,#FFCF50_104.54%,#281508_170.45%)]",
    height: "h-11",
  },
  { color: "bg-fuchsia-800", height: "h-[136px]" },
];

const legendData: LegendData[] = [
  { color: "bg-rose-400", label: "Active Service Provider" },
  { color: "bg-sky-300", label: "Service Provider Retension Rate" },
  { color: "bg-teal-500", label: "New Service Provider" },
  { color: "bg-orange-400", label: "Service Completion Rate" },
  { color: "bg-fuchsia-500", label: "Total Service Provider" },
  { color: "bg-yellow-500", label: "Average Rating" },
];

export function SectorPerformance() {
  return (
    <section className="flex flex-col p-8 bg-white rounded-2xl max-w-[635px] max-md:px-5">
      <h2 className="text-xl font-bold leading-snug text-stone-950">
        Sector Performance
      </h2>
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <div className="flex flex-col py-1 w-full max-md:max-w-full">
          <div className="shrink-0 self-end max-w-full h-px border-2 border-dashed bg-slate-200 border-slate-200 w-[521px]" />
          <div className="flex z-10 flex-col py-px pl-2 -mt-1.5 w-full max-md:max-w-full">
          <img
      loading="lazy"
      src={Barchart}
      alt="Sales Chart"
      className="object-contain mt-4  rounded-none"

      />
      </div>
      </div>
      </div>
    </section>
  );
}
