 
import React from "react";

interface ServiceIconProps {
  src: string;
  alt: string;
  className: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ src, alt, className }) => {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
};

export default ServiceIcon;
