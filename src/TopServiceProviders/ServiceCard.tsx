 
import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  count: number;
  percentage: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  count,
  percentage,
}) => {
  return (
    <article className="flex flex-col flex-1 shrink p-2.5 bg-white rounded-lg border border-solid basis-0 border-stone-300">
      <img
        loading="lazy"
        src={image}
        alt={`${title} illustration`}
        className="object-contain rounded-lg aspect-[0.83] w-[171px]"
      />
      <h3 className="mt-2.5 text-sm font-bold leading-snug text-stone-950">
        {title}
      </h3>
      <div className="flex gap-8 justify-between items-end mt-2.5 w-full">
        <div className="flex gap-1 items-center text-xs font-semibold leading-5 text-black">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93ab4f63d22520d61a83434c5c370efbd57e80ecd02fe52059dc7c0edd6b3501?placeholderIfAbsent=true&apiKey=6cf8f9a6d0ad48e4831972ef8a7ed4a9"
            alt=""
            className="object-contain shrink-0 gap-0 self-stretch my-auto aspect-[2] w-[52px]"
          />
          <span className="self-stretch my-auto">+ {count}</span>
        </div>
        <div className="flex gap-1 items-center px-2 py-1 text-xs font-medium text-teal-500 whitespace-nowrap bg-emerald-50 rounded">
          <span className="self-stretch my-auto rounded-lg">{percentage}</span>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
