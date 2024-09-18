 
import React from "react";

interface OrderChartProps {
  totalOrders: string;
}

const OrderChart: React.FC<OrderChartProps> = ({ totalOrders }) => {
  return (
    <div className="flex relative flex-col w-full text-center">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d35aa38dcdfe1b6b706628eb5316baab0d0d7ae8f9f4237707420c6e5dc24e89?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9"
        className="object-contain z-0 w-full rounded-md aspect-square"
        alt="Order statistics chart"
      />
      <div className="flex absolute top-2/4 left-2/4 z-0 flex-col rounded-none -translate-x-2/4 -translate-y-2/4 h-[38px] w-[58px]">
        <div className="text-sm leading-none text-gray-500">Total Order</div>
        <div className="self-start text-lg font-bold leading-none text-slate-800">
          {totalOrders.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default OrderChart;
