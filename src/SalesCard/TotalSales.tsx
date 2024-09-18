 
import React from "react";

interface TotalSalesProps {
  amount: string;
  sales: string;
  imageIcon: string
}

const TotalSales: React.FC<TotalSalesProps> = ({ amount,sales,imageIcon }) => {
  return (
    <div className="flex gap-4 items-center w-full">
      <img
        loading="lazy"
        src={imageIcon}
        alt="Total Sales Icon"
        className="object-contain shrink-0 self-stretch my-auto rounded-2xl aspect-square w-[60px]"
      />
      <div className="flex flex-col self-stretch my-auto">
        <h2 className="text-base font-medium tracking-normal leading-snug text-zinc-500">
          {sales}
        </h2>
        <p className="mt-1 text-3xl font-semibold tracking-tight text-stone-950">
        {amount}
        </p>
      </div>
    </div>
  );
};

export default TotalSales;
