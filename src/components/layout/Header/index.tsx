"use client";
import React from "react";
import { PhoneOutlined, MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import { DenunciasLogo, UJCLogo } from "@/assets/images";
import { headerLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dropdown } from "antd";
function Header() {
  const pathname = usePathname();
  return (
    <header className="container mx-auto">
      <div className="p-2 border-b-2 text-mutedVariant2 hidden justify-between md:flex">
        <span>info@denuncias.ujc.mz</span>
        <div className="flex">
          <span className="mr-3">Tem questões?</span>
          <div className="flex items-baseline">
            <PhoneOutlined className="text-primary m-0 p-0 rotate-90" />
            <span className="text-primary">+258 84 **** ***</span>
          </div>
        </div>
      </div>
      <div className="px-2 py-6 flex justify-center xl:justify-between items-center">
        <div
          className="flex items-center flex-1
       "
        >
          <Dropdown
            className="cursor-pointer xl:hidden ml-2"
            menu={{ items: headerLinks }}
          >
            <MenuOutlined />
          </Dropdown>
          <div
            className="
            flex items-baseline mx-auto xl:mx-0"
          >
            <Image src={UJCLogo} alt="logo" width={100} height={100} />
            <Image src={DenunciasLogo} alt="logo" width={100} height={100} />
          </div>
        </div>
        <div className="space-x-4 xl:block hidden">
          {headerLinks.map((link) => (
            <Link
              href={link.href || "#"}
              key={link.href}
              className={`font-medium text-mutedVariant2 hover:text-primary transition-all duration-200 ${
                pathname === link.href && "text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="text-white bg-primary p-4 font-medium rounded-sm">
            <Link href="/denuncias">Denunciar</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
