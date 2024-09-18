 
import React from "react";
import PieChart from "./PieChart";
import LegendItem from "./LegendItem";
import BarChart from "./BarChart";

interface ServiceProvidersReportProps {}

const ServiceProvidersReport: React.FC<ServiceProvidersReportProps> = () => {
  const legendItems = [
    {
      color: "bg-[linear-gradient(180deg,#FFB5B1_0%,#CD7ED9_100%)]",
      label: "Petcare Sector",
    },
    { color: "bg-fuchsia-800", label: "Entertainment Sector" },
    {
      color:
        "bg-[linear-gradient(180deg,#FFDC7E_0%,#FFCF50_104.54%,#281508_170.45%)]",
      label: "Event Sector",
    },
    { color: "bg-rose-400", label: "Healthcare Sector" },
    { color: "bg-blue-700", label: "Construction Sector" },
    {
      color: "bg-[linear-gradient(180deg,#48CFAF_0%,#41C1C9_100%)]",
      label: "Home Services Sector",
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col p-6 bg-white rounded-2xl border border-solid border-stone-300 max-w-[491px] min-w-[279px] max-md:px-5">
      <header className="flex flex-col w-full leading-snug max-md:max-w-full">
        <h1 className="text-xl font-bold text-stone-950">
          Service Providers Report
        </h1>
        <h2 className="mt-2 text-base font-medium text-zinc-500">
          Leads per stage
        </h2>
      </header>
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <div className="flex gap-10 justify-between items-center w-full max-md:max-w-full">
          <PieChart />
          <div className="flex flex-col justify-center items-start self-stretch my-auto text-sm font-medium leading-none text-zinc-400">
            {legendItems.map((item, index) => (
              <LegendItem key={index} color={item.color} label={item.label} />
            ))}
          </div>
        </div>
        <BarChart />
      </div>
    </section>
  );
};

export default ServiceProvidersReport;
