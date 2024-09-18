 
import React from "react";
import ServiceCard from "./ServiceCard";

interface ServiceData {
  image: string;
  title: string;
  count: number;
  percentage: string;
}

const serviceData: ServiceData[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7b334c7e4859fb4ffbaef461158fb835033f963d1897ae2754f0ca34b94fc58c?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9",
    title: "Construction Sector",
    count: 200,
    percentage: "+11.02%",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0f1d287fa153ccd5df65f404729af057585bcd6f9b29a39fd39ffa5229b80d6?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9",
    title: "Health Care Sector",
    count: 180,
    percentage: "+10.02%",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/eda6235fefa3d41ba1d0159fdd84542d4739015adadba03663c137e26d7a4649?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9",
    title: "Home Services Sector",
    count: 150,
    percentage: "+9%",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bd0b6ca8136ad891bf4e9228b18245eabcfd10ec9d83034ea2fcd540cb0f7e45?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9",
    title: "Pet Care Sector",
    count: 100,
    percentage: "+5%",
  },
];

const TopServiceProviders: React.FC = () => {
  return (
    <section className="flex flex-col p-8 bg-white rounded-2xl max-w-[870px] max-md:px-5">
      <h2 className="text-xl font-bold leading-snug text-stone-950">
        Top Service Providers
      </h2>
      <div className="flex flex-wrap gap-4 items-start mt-6 w-full max-md:max-w-full">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            count={service.count}
            percentage={service.percentage}
          />
        ))}
      </div>
    </section>
  );
};

export default TopServiceProviders;
