 
import React from "react";
import OrderChart from "./OrderChart";
import OrderStat from "./OrderStat";

interface OrderStatisticsProps {
  totalOrders: string;
  activeOrders: string;
  completedOrders: string;
}

const OrderStatistics: React.FC<OrderStatisticsProps> = ({
  totalOrders,
  activeOrders,
  completedOrders,
}) => {
  const orderStats = [
    { label: "Active Orders", value: activeOrders, color: "bg-indigo-600" },
    {
      label: "Completed Orders",
      value: completedOrders,
      color: "bg-yellow-500",
    },
  ];

  return (
    <section className="flex flex-col px-9 py-8 bg-white rounded-2xl max-w-[219px]">
      <h2 className="text-xl font-bold leading-snug text-stone-950">
        Total Orders
      </h2>
      <div className="flex flex-col items-center mt-6 w-full">
        <OrderChart totalOrders={totalOrders} />
        <div className="flex flex-col mt-9 w-full max-w-[130px]">
          {orderStats.map((stat, index) => (
            <OrderStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderStatistics;
