 
import React from "react";

interface UpdateCardProps {
  title: string;
  content: string;
  bgColor: string;
  borderColor: string;
}

const UpdateCard: React.FC<UpdateCardProps> = ({
  title,
  content,
  bgColor,
  borderColor,
}) => (
  <article
    className={`flex overflow-hidden flex-col items-start py-4 pr-20 pl-4 ${bgColor} rounded-2xl border ${borderColor} border-solid shadow-[0px_18px_40px_rgba(112,144,176,0.12)] max-md:pr-5 max-md:max-w-full mb-4`}
  >
    <div className="p-3">
    <h3 className="text-sm font-medium tracking-tight leading-none text-indigo-900 mb-3">
      {title}
    </h3>
    <p className="text-xs tracking-tight text-gray-500 max-md:max-w-full">
      {content}
    </p>
    </div>

  </article>
);

export default UpdateCard;
