 
import React from "react";
import LineGraph from '../Images/Graph.png'

export const ChartLine: React.FC = () => (
  <img
    loading="lazy"
    src={LineGraph}
    className="object-contain w-full max-md:max-w-full"
    alt="Chart line"
  />
);
