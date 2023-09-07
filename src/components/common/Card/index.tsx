import { MyCardProps } from "@/@types";
import React from "react";

const Card: React.FC<MyCardProps> = ({ Icon, title, subtitle }) => {
  return (
    <div className="flex-1 rounded-sm p-10 bg-mutedVariant1 group hover:bg-primary duration-300 transition-all">
      {Icon}
      <h3 className="text-2xl text-center my-2 group-hover:text-white text-black transition-all duration-300">
        {title}
      </h3>
      <p className="text-mutedVariant2 text-center text-lg group-hover:text-white transition-all duration-300">
        {subtitle}
      </p>
    </div>
  );
};

export default Card;