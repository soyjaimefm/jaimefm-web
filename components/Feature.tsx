import Stars from "./icons/Stars";
import FMh3 from "./ui/FMh3";
import React, { ReactNode } from 'react';



type FeatureProps = {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function Feature(props : FeatureProps) {
  const {title, description, icon } = props;
  return (
    <div className="p-4 flex flex-col justify-start items-center text-center">
        <span className="inline-block p-3 bg-FMblue rounded-full text-FMwhite">
          {icon}
        </span>
        <FMh3>{title}</FMh3>
        <p className="text-center">{description}</p>
      </div>
  )
}





