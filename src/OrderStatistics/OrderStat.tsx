 
import React from "react";

interface OrderStatProps {
  label: string;
  value: string;
  color: string;
}

const OrderStat: React.FC<OrderStatProps> = ({ label, value, color }) => {
  return (
    <div className="flex overflow-hidden gap-4 items-start w-full mt-2.5 first:mt-0">
      <div className="flex flex-col justify-center py-2.5 w-[21px]">
        <div className={`flex shrink-0 h-1 ${color} rounded-[100px]`} />
      </div>
      <div className="flex overflow-hidden flex-col py-px w-[93px]">
        <div className="text-xs leading-6 text-gray-500">{label}</div>
        <div className="z-10 self-start text-base font-bold leading-none text-slate-800">
          {value.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default OrderStat;
