 
import React from "react";
import { TicketData } from "./types";

interface TicketCardProps {
  ticket: TicketData;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Acknowledged":
        return "text-rose-400 border-rose-400 bg-rose-400";
      case "Open":
        return "text-blue-700 border-blue-700 bg-blue-700";
      case "On Hold":
        return "text-yellow-400 border-yellow-400 bg-orange-300";
      default:
        return "text-gray-500 border-gray-500 bg-gray-500";
    }
  };

  return (
    <article className="flex flex-col justify-center p-4 mt-4 w-full bg-white rounded-2xl shadow-[0px_18px_40px_rgba(112,144,176,0.12)]">
      <div className="flex overflow-hidden flex-col w-full bg-white shadow-[0px_18px_40px_rgba(112,144,176,0.12)]">
        <div className="flex gap-5 justify-between w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2242fa6459d230b3cf5bf2c681189353e08df541ef3053578a0b7a3af702114e?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9"
            alt=""
            className="object-contain shrink-0 rounded-full aspect-square w-[46px]"
          />
          <div className="flex flex-col my-auto">
            <div className="text-sm font-bold tracking-tight leading-loose text-indigo-900">
              {ticket.id}
            </div>
            <div className="mt-3 text-xs font-medium tracking-normal leading-relaxed text-blue-950">
              {ticket.raiserName}
            </div>
          </div>
          <div className="flex gap-2 self-start mt-1 text-xs font-medium text-center text-stone-800">
            {ticket.tags.map((tag, index) => (
              <div
                key={index}
                className={`gap-2.5 self-stretch px-2.5 py-1 border border-${
                  tag === "Technical Error" ? "rose-400" : "indigo-600"
                } border-solid bg-${
                  tag === "Technical Error" ? "rose-400" : "indigo-600"
                } bg-opacity-10 rounded-[50px]`}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="shrink-0 mt-3 h-0.5 border border-violet-50 border-solid" />
        <div className="flex flex-col mt-3 w-full">
          <div className="flex flex-col w-full">
            <h3 className="text-sm font-medium tracking-tight leading-none text-indigo-900">
              {ticket.title}
            </h3>
            <p className="text-xs tracking-tight leading-5 text-gray-500">
              {ticket.description}
            </p>
          </div>
          <div
            className={`gap-2.5 self-start px-4 py-1 mt-3 text-xs font-medium text-center border border-solid bg-opacity-10 min-h-[20px] rounded-[50px] ${getStatusColor(
              ticket.status
            )}`}
          >
            Status : {ticket.status}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TicketCard;
