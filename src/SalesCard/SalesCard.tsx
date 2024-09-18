 
import React from "react";
import TotalSales from "./TotalSales";
import WeeklyComparison from "./WeeklyComparison";

interface SalesCardProps {
  totalSales: string;
  chartImageSrc?: string;
  comparisonImageSrc: string;
  comparisonPercentage: string;
  sales: string;
  imageIcon: string;
  percentageColor:string
}

const SalesCard: React.FC<SalesCardProps> = ({
  totalSales,
  comparisonImageSrc,
  comparisonPercentage,
  sales,
  imageIcon,
  percentageColor
}) => {
  return (
    <section className="flex overflow-hidden flex-col p-3 bg-white rounded-2xl  min-w-[259px]">
      <TotalSales amount={totalSales} sales={sales} imageIcon={imageIcon}/>
      <WeeklyComparison
        imageSrc={comparisonImageSrc}
        percentage={comparisonPercentage}
        percentageColor={percentageColor}
      />
    </section>
  );
};

export default SalesCard;
