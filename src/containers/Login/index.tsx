import { UJCLogo } from "@/assets/images";
import { Switch } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterContainer = () => {
  return (
    <main className="min-h-screen flex">
      <div className="flex-1 xl:block hidden">image</div>
      <div className="flex-1 flex justify-center items-center py-20">
        <div className="w-10/12">
          <Image
            src={UJCLogo}
            alt="logo"
            width={100}
            height={100}
            className="mx-auto mb-14"
          />
          <h1 className="text-2xl font-medium mb-8">Registro</h1>
          <div className="flex gap-3 flex-col xl:flex-row">
            <div className="flex flex-col flex-1 mb-5">
              <label htmlFor="" className="font-medium">
                Primeiro nome
              </label>
              <input
                type="text"
                className="p-5 border"
                placeholder="Seu primeiro nome"
              />
            </div>
            <div className="flex flex-col flex-1 mb-5">
              <label htmlFor="" className="font-medium">
                Último nome
              </label>
              <input
                type="text"
                className="p-5 border"
                placeholder="Seu último nome"
              />
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="" className="font-medium">
              Endereço de Email
            </label>
            <input type="text" className="p-5 border" />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="" className="font-medium">
              Palavra-passe
            </label>
            <input type="text" className="p-5 border" />
          </div>
          <div className="mb-5">
            <Switch defaultChecked />{" "}
            <span>
              Eu aceito os{" "}
              <Link className="text-primary" href={""}>
                termos de serviços
              </Link>{" "}
              bem como as{" "}
              <Link className="text-primary" href={""}>
                políticas de privacidade
              </Link>
            </span>
          </div>
          <button className="p-4 bg-primary rounded text-white transition-all duration-200 hover:bg-primaryHoverVariant">
            Criar conta
          </button>

          <hr className="my-10"/>
          <p className="text-center">
            Já tem uma conta?  <Link className="text-primary" href={""}>
               Faça login
              </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterContainer;
