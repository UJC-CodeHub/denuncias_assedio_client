import Link from "next/link";
import React from "react";

const Button = ({ link, text }: { link: string; text: string }) => {
  return (
    <Link
      href={link}
      className="p-4 inline-block bg-primary text-white rounded-sm mt-5 hover:bg-primaryHoverVariant duration-200 transition-all"
    >
      {text}
    </Link>
  );
};

export default Button;
