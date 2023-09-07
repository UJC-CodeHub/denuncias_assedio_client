"use client";
import { DenunciasLogo, UJCLogo } from "@/assets/images";
import { LinkedinLogo, MetaLogo, YoutubeLogo } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-footer pt-10 pb-4">
      <div className="container px-4 sm:px-0 mx-auto flex flex-col sm:flex-row space-x-0 space-y-10 sm:space-y-0 sm:space-x-10 flex-wrap">
        <div className="flex-1">
          <div className="flex">
            <Image
              src={UJCLogo}
              alt="Universidade Joaquim Chissano"
              width={90}
              height={90}
            />
            <Image
              src={DenunciasLogo}
              alt="Plataforma de denuncias a casos de assédio sexual"
              width={100}
              height={100}
            />
          </div>
          <p className="text-mutedVariant2 mt-10">
            O sistema de denúncias para casos de assédio sexual é uma plataforma
            que permite que estudantes e funcionários relatem incidentes de
            assédio sexual de forma segura e confidencial. O sistema facilita a
            coleta de informações e fornece um canal de comunicação direto com
            as autoridades competentes, garantindo que as denúncias sejam
            tratadas de maneira adequada e justa.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl text-white">Contactos</h2>
          <ul className="mt-5 sm:mt-14 text-mutedVariant2 space-y-3">
            <li>
              Campus do Zimpeto, Rua do Grande Maputo, Q.88, Bairro de Zimpeto,
              Cidade de Maputo
            </li>
            <li>Tel: +258 823032129</li>
            <li>Email: secretariageral@ujc.ac.mz</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-xl text-white">Mídias sociais</h2>
          <div className="mt-5 sm:mt-12 flex space-x-3">
            <MetaLogo
              size={35}
              className="cursor-pointer text-mutedVariant2 hover:text-white transition-all duration-200"
            />
            <LinkedinLogo
              size={35}
              className="cursor-pointer text-mutedVariant2 hover:text-white transition-all duration-200"
            />
            <YoutubeLogo
              size={35}
              className="cursor-pointer text-mutedVariant2 hover:text-white transition-all duration-200"
            />
          </div>
        </div>
      </div>
      <p className="text-center text-mutedVariant2 mt-10">
        © 2023 Universidade Joaquim Chissano
      </p>
    </footer>
  );
};

export default Footer;
