 
import React from "react";
import TicketCard from "./TicketCard";
import { TicketData } from "./types";
import Support from '../Images/mdi_support.png'

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
];
const ticketDataResolved: TicketData[] = [
  {
    id: "019273645",
    raiserName: "Name of the Raiser",
    title: "I am facing Technical Issue during the Signup process",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Technical Error", "Healthcare"],
    status: "Resolved",
  },
  {
    id: "019273646",
    raiserName: "Name of the Raiser",
    title: "I am facing Technical Issue during the Signup process",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Technical Error", "Healthcare"],
    status: "Resolved",
  },
];
const ticketDataPendingOne: TicketData[] = [
  {
    id: "019273645",
    raiserName: "Name of the Raiser",
    title: "I am facing Technical Issue during the Signup process",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Technical Error", "Healthcare"],
    status: "Pending",
  },
  {
    id: "019273646",
    raiserName: "Name of the Raiser",
    title: "I am facing Technical Issue during the Signup process",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Technical Error", "Healthcare"],
    status: "Pending",
  },
];
const ticketDataPendingtwo: TicketData[] = [
  {
    id: "019273645",
    raiserName: "Name of the Raiser",
    title: "I am facing Technical Issue during the Signup process",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Technical Error", "Healthcare"],
    status: "Pending",
  },
  {
    id: "019273646",
    raiserName: "Name of the Raiser",
    title: "I am facing Technical Issue during the Signup process",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Technical Error", "Healthcare"],
    status: "Pending",
    actionButton: "Raise a Ticket"

  },
];
const TicketDashboardSecond: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pl-4 pt-4 pb-7 mx-auto w-full bg-white rounded-2xl max-w-[420px]">
        <div className="flex items-center self-stretch my-auto">
          <img
            loading="lazy"
            src={Support}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto rounded-2xl aspect-square w-[45px]"
          />
          <div className="flex flex-col self-stretch m-auto">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold tracking-tight">
                Support & Compliance
              </h1>
             
            </div>
          </div>
        </div>
      {/* <div className="flex flex-col mt-6 w-full rounded-[100px]">
        <div className="flex flex-col items-start bg-indigo-100 rounded-[100px]">
          <div className="flex shrink-0 bg-yellow-500 h-[7px] rounded-[100px] w-[232px]" />
        </div>
      </div> */}
      <section className="flex flex-col mt-6 w-full">
        <div className="flex gap-10 justify-between items-center w-full font-medium">
          <h2 className="self-stretch my-auto text-base tracking-normal text-black text-opacity-80">
          Support tickets 
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
        <div className="flex gap-10 justify-between items-center w-full font-medium mt-3 p-3">
          <h2 className="self-stretch my-auto text-base tracking-normal text-black text-opacity-80">
          Open tickets 
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
        <div className="flex gap-10 justify-between items-center w-full font-medium mt-3 p-3">
          <h2 className="self-stretch my-auto text-base tracking-normal text-black text-opacity-80">
          In Progress
          </h2>
          <button className="flex flex-col self-stretch my-auto text-sm tracking-tight leading-6 text-center text-indigo-600 w-[78px]">
            <div className="px-2 py-1 bg-violet-50 rounded-[70px]">
              View All
            </div>
          </button>
        </div>
        <div className="flex flex-col mt-4 w-full">
          {ticketDataPendingOne.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
        <div className="flex gap-10 justify-between items-center w-full font-medium mt-3 p-3">
          <h2 className="self-stretch my-auto text-base tracking-normal text-black text-opacity-80">
          Solved
          </h2>
          <button className="flex flex-col self-stretch my-auto text-sm tracking-tight leading-6 text-center text-indigo-600 w-[78px]">
            <div className="px-2 py-1 bg-violet-50 rounded-[70px]">
              View All
            </div>
          </button>
        </div>
        <div className="flex flex-col mt-4 w-full">
          {ticketDataResolved.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
        <div className="flex gap-10 justify-between items-center w-full font-medium mt-3 p-3">
          <h2 className="self-stretch my-auto text-base tracking-normal text-black text-opacity-80">
          Compliance Status 
          </h2>
          <button className="flex flex-col self-stretch my-auto text-sm tracking-tight leading-6 text-center text-indigo-600 w-[78px]">
            <div className="px-2 py-1 bg-violet-50 rounded-[70px]">
              View All
            </div>
          </button>
        </div>
        <div className="flex flex-col mt-4 w-full">
          {ticketDataPendingtwo.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TicketDashboardSecond;
