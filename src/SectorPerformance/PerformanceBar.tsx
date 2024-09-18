 
import React from "react";

interface PerformanceBarProps {
  color: string;
  height: string;
}

export function PerformanceBar({ color, height }: PerformanceBarProps) {
  return <div className={`flex shrink-0 w-7 ${color} rounded-md ${height}`} />;
}
