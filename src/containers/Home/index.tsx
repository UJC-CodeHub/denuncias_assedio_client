import { carouselContent } from "@/utils/content";
import { Carousel } from "antd";
import React from "react";
import { Montserrat } from "next/font/google";
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
                <h1 className="text-4xl md:text-6xl mb-5 font-medium">{item.title}</h1>
                <p className="text-xl md:text-2xl">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      </section>
    </main>
  );
};

export default HomeContainer;
