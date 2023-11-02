"use client";
import { cardsContent, carouselContent } from "@/utils/content";
import { Carousel } from "antd";
import React from "react";
import { Montserrat } from "next/font/google";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
const montserrat = Montserrat({ subsets: ["latin"] });

const HomeContainer = () => {
  return (
    <main className="min-h-screen">
      {/* Área do carousel */}
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

      {/* Área dos cards */}
      <section className="my-20 font-medium container mx-auto">
        <p className="text-3xl lg:text-4xl w-9/12 lg:w-1/2 text-center before:absolute before:w-1/3 before:left-[34%] before:border-b-mutedVariant2 pb-10 before:border-b-2 before:bottom-0 relative mx-auto ">
          Tudo que você precisa para lutar contra o assédio sexual
        </p>
        <div className="flex lg:space-x-3 mt-16 flex-col space-x-0 lg:flex-row space-y-4 lg:space-y-0">
          {cardsContent.map((item) => (
            <Card
              key={item.key}
              Icon={item.Icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </section>

      {/* Área da missão */}
      <section className="py-20 bg-gradient-to-r from-[#f4f7f9] to-[#efefea]">
        <div className="container mx-auto w-11/12 sm:w-full">
          <h1 className="text-3xl font-medium mb-8">Nossa missão</h1>
          <p className="w-11/12 md:w-8/12 xl:w-5/12 text-mutedVariant2 ">
            O sistema facilita a coleta de informações e fornece um canal de
            comunicação direto com as autoridades competentes, garantindo que as
            denúncias sejam tratadas de maneira adequada e justa.
          </p>
          <Button link="#" text="Ler mais" />
        </div>
      </section>

      <section className="my-20 font-medium container mx-auto"></section>

      {/* Área do contato */}
      <section className="py-20 bg-gradient-to-r to-[#f4f7f9] from-[#efefea]">
        <div className="container flex mx-auto">
          <div className="flex-1 py-10 hidden lg:block"></div>
          <div className="flex-1 py-10 mx-4 sm:mx-0">
            <h1 className="text-4xl font-medium mb-2">
              Procurando por aconselhamento?
            </h1>
            <p className="text-mutedVariant2">
              Sua mensagem será respondida dentro de 24 horas
            </p>
            <hr className="mb-10 mt-7 w-2/12 border-primary" />
            <div className="flex justify-between gap-4 flex-col sm:flex-row">
              <input
                className="transition-all outline-none focus:outline-2 focus:outline-primary duration-200 border border-zinc-300 bg-inherit py-5 px-4 flex-1"
                placeholder="Nome*"
                type="text"
                name=""
                id=""
              />
              <input
                className="transition-all outline-none focus:outline-2 focus:outline-primary duration-200 border border-zinc-300 bg-inherit py-5 px-4 flex-1"
                placeholder="E-mail*"
                type="text"
                name=""
                id=""
              />
            </div>
            <textarea
              name=""
              id=""
              className="border border-zinc-300 bg-inherit py-5 px-4 mt-5 w-full transition-all outline-none focus:outline-2 focus:outline-primary duration-200"
              rows={6}
              placeholder="Sua mensagem..."
            ></textarea>
            <Button link="#" text="Enviar messagem" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeContainer;
