"use client";
import { cardsContent, carouselContent } from "@/utils/content";
import { Carousel } from "antd";
import React from "react";
import { Montserrat } from "next/font/google";
import Card from "@/components/common/Card";
import { Warning } from "@phosphor-icons/react";
const montserrat = Montserrat({ subsets: ["latin"] });

const HomeContainer = () => {
  return (
    <main className="min-h-screen">
      <section className="carousel">
        <Carousel autoplay autoplaySpeed={4000}>
          {carouselContent.map((item) => (
            <div
              className={`h-[500px] md:h-[700px] carouselInner flex items-center ${montserrat.className}`}
              key={item.key}
            >
              <div className="container mx-auto py-2 text-white">
                <div className="ml-3 sm:ml-0 w-10/12 sm:w-9/12 md:w-6/12 xl:w-5/12">
                  <h1 className="text-4xl md:text-6xl mb-5 font-medium">
                    {item.title}
                  </h1>
                  <p className="text-xl md:text-2xl">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      <section className="my-20 font-medium container mx-auto">
        <p className="text-3xl lg:text-4xl w-9/12 lg:w-1/2 text-center before:absolute before:w-1/3 before:left-[34%] before:border-b-mutedVariant2 pb-10 before:border-b-2 before:bottom-0 relative mx-auto ">
          Tudo que você precisa para lutar contra o assédio sexual
        </p>
        <div className="flex lg:space-x-3 mt-16 flex-col space-x-0 lg:flex-row space-y-4 lg:space-y-0">
          {cardsContent.map((item) => (
            <Card {...item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomeContainer;
