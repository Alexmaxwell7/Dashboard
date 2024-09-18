 
import React from "react";

interface BarChartProps {}

const BarChart: React.FC<BarChartProps> = () => {
  const yAxis = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 0];
  const xAxis = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const barData = [
    { width: "w-[304px]", color: "bg-rose-400 bg-opacity-90" },
    {
      width: "w-36",
      color: "bg-[linear-gradient(180deg,#48CFAF_0%,#41C1C9_100%)]",
    },
    { width: "", color: "bg-rose-400" },
    {
      width: "w-[255px]",
      color: "bg-[linear-gradient(180deg,#FFB5B1_0%,#CD7ED9_100%)]",
    },
    { width: "w-[210px]", color: "bg-fuchsia-800" },
    {
      width: "w-[293px]",
      color: "bg-[linear-gradient(180deg,#48CFAF_0%,#41C1C9_100%)]",
    },
    {
      width: "w-[315px]",
      color: "bg-[linear-gradient(180deg,#FFB5B1_0%,#CD7ED9_100%)]",
    },
    {
      width: "w-[72px]",
      color:
        "bg-[linear-gradient(180deg,#FFDC7E_0%,#FFCF50_104.54%,#281508_170.45%)]",
    },
    {
      width: "w-[102px]",
      color:
        "bg-[linear-gradient(180deg,#FFDC7E_0%,#FFCF50_104.54%,#281508_170.45%)]",
    },
    { width: "w-[239px]", color: "bg-fuchsia-800" },
    {
      width: "w-[264px]",
      color: "bg-[linear-gradient(180deg,#FFB5B1_0%,#CD7ED9_100%)]",
    },
  ];

  return (
    <div className="flex flex-col py-1 pr-2 mt-9 w-full max-md:max-w-full">
      <div className="flex gap-3">
        <div className="text-xs text-black">
          {yAxis.map((value, index) => (
            <React.Fragment key={index}>
              {value} <br />
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
          {barData.map((bar, index) => (
            <div
              key={index}
              className="flex flex-col mt-3.5 first:mt-0 w-full rounded-[40px]"
            >
              <div className="flex flex-col items-start bg-slate-300 rounded-[40px] max-md:pr-5">
                <div
                  className={`flex shrink-0 h-[5px] rounded-[40px] ${bar.width} ${bar.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="self-start mt-3 ml-8 text-xs text-black max-md:ml-2.5">
        {xAxis.join(" ")}
      </div>
    </div>
  );
};

export default BarChart;
