import { Quotes } from "@phosphor-icons/react";
import { Montserrat } from "next/font/google";
import React from "react";
const montserrat = Montserrat({ subsets: ["latin"] });

const Testimonial = ({
  text,
  author,
  date,
}: {
  text: string;
  author: string;
  date: string;
}) => {
  return (
    <div className={`pb-10 ${montserrat.className}`}>
      <Quotes className=" text-3xl mx-auto text-black/10" />
      <p className="text-center italic text-lg mb-3 w-11/12 mx-auto mt-4">{`"${text}"`}</p>
      <div className="flex items-center flex-col">
        <h2 className="tracking-wide font-medium">{author}</h2>
        <span className="text-black/20">{date}</span>
      </div>
    </div>
  );
};

export default Testimonial;
