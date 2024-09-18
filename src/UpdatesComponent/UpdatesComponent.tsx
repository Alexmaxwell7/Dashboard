 
import React from "react";
import UpdateCard from "./UpdateCard";

interface Update {
  id: number;
  title: string;
  content: string;
  bgColor: string;
  borderColor: string;
}

const updates: Update[] = [
  {
    id: 1,
    title: "Title of the update",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "bg-fuchsia-50",
    borderColor: "border-fuchsia-500",
  },
  {
    id: 2,
    title: "Title of the update",
    content: "",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-500",
  },
];

const UpdatesComponent: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col p-8 bg-white rounded-2xl max-w-[890px] max-md:px-5">
      <header className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
        <h2 className="text-xl font-bold leading-snug text-stone-950">
          Updates (10)
        </h2>
        <button className="flex flex-col text-sm font-medium tracking-tight leading-6 text-center text-indigo-600 w-[78px]">
          <span className="px-2 py-1 bg-violet-50 rounded-[70px]">
            View All
          </span>
        </button>
      </header>
      <main className="flex flex-col mt-6 w-full max-md:max-w-full">
        <div className="flex flex-col w-full rounded-2xl max-md:max-w-full">
          {updates.map((update) => (
            <UpdateCard
              key={update.id}
              title={update.title}
              content={update.content}
              bgColor={update.bgColor}
              borderColor={update.borderColor}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default UpdatesComponent;
