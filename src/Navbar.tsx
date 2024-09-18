 
import React from "react";
import FilterButton from "./FilterButton";
import ActionButton from "./ActionButton";

const Navbar: React.FC = () => {
  const filterButtons = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a457810077350f29fa7b5e89529b1b942592b4bb198ce7f9247ba1e9c47335c1?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9",
      label: "This Year",
    },
    { icon: "", label: "Location" },
    { icon: "", label: "Status" },
  ];

  const actionButtons = [
    { label: "Assign Order", className: "w-[107px]" },
    { label: "Add New Service Provider", className: "w-107" },
  ];

  return (
    <header className="flex flex-wrap gap-10 justify-between items-start pl-12 pr-8">
      <nav className="flex gap-2 items-start text-base leading-snug min-w-[240px] text-neutral-800">
        {filterButtons.map((button, index) => (
          <FilterButton key={index} icon={button.icon} label={button.label} />
        ))}
      </nav>
      <section className="flex gap-2 items-start text-sm font-medium tracking-tight leading-6 text-center text-white min-w-[240px]">
        {actionButtons.map((button, index) => (
          <ActionButton
            key={index}
            label={button.label}
            className={button.className}
          />
        ))}
      </section>
    </header>
  );
};

export default Navbar;
