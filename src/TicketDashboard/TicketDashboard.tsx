 
import React from "react";
import TicketCard from "./TicketCard";
import { TicketData } from "./types";

const ticketData: TicketData[] = [
  {
    id: "019273645",
    raiserName: "Name of the Raiser",
    title: "I am facing Technical Issue during the Signup process",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Technical Error", "Healthcare"],
    status: "Acknowledged",
  },
  {
    id: "019273646",
    raiserName: "Name of the Raiser",
    title: "I am facing Technical Issue during the Signup process",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Technical Error", "Healthcare"],
    status: "Open",
  },
  {
    id: "019273647",
    raiserName: "Name of the Raiser",
    title: "I am facing Technical Issue during the Signup process",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Technical Error", "Healthcare"],
    status: "On Hold",
  },
];

const TicketDashboard: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col px-4 pt-4 pb-7 mx-auto w-full bg-white rounded-2xl max-w-[480px]">
      <header className="flex gap-10 justify-between items-center w-full">
        <div className="flex gap-4 items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/051315dcd6f7e8cb1a5533f29ddf966b472c3b4602a6599de3d4812cf7fc8139?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto rounded-2xl aspect-square w-[60px]"
          />
          <div className="flex flex-col self-stretch my-auto w-[79px]">
            <div className="flex flex-col">
              <div className="text-base font-medium tracking-tight leading-snug text-zinc-500">
                Total tickets
              </div>
              <div className="mt-1 text-3xl font-bold tracking-tight text-stone-950">
                XXX
              </div>
            </div>
          </div>
        </div>
        <button className="flex flex-col self-stretch my-auto text-sm font-medium tracking-tight leading-6 text-center text-white rounded-lg w-[111px]">
          <div className="px-3 py-2 bg-indigo-600 rounded-lg">
            Raise a Ticket
          </div>
        </button>
      </header>
      <div className="flex flex-col mt-6 w-full rounded-[100px]">
        <div className="flex flex-col items-start bg-indigo-100 rounded-[100px]">
          <div className="flex shrink-0 bg-yellow-500 h-[7px] rounded-[100px] w-[232px]" />
        </div>
      </div>
      <section className="flex flex-col mt-6 w-full">
        <div className="flex gap-10 justify-between items-center w-full font-medium">
          <h2 className="self-stretch my-auto text-base tracking-normal text-black text-opacity-80">
            Pending Tickets (03)
          </h2>
          <button className="flex flex-col self-stretch my-auto text-sm tracking-tight leading-6 text-center text-indigo-600 w-[78px]">
            <div className="px-2 py-1 bg-violet-50 rounded-[70px]">
              View All
            </div>
          </button>
        </div>
        <div className="flex flex-col mt-4 w-full">
          {ticketData.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default TicketDashboard;
