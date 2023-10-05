"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import brazilFlag from "../assets/brazil.png";
import usaFlag from "../assets/usa.png";

const LocaleSwitcher = () => {
  const pathname = usePathname();

  const locales = [
    {
      name: "pt-BR",
      icon: brazilFlag,
      href: "/pt-BR",
    },
    {
      name: "en-US",
      icon: usaFlag,
      href: "/en-US",
    },
  ];

  return (
    <div className="flex gap-2">
      {locales.map(({ name, icon, href }) => {
        return pathname === href ? (
          <Image height={25} src={icon} key={`locale-${name}`} alt={name} />
        ) : (
          <Link href={href} key={`locale-${name}`}>
            <Image height={25} src={icon} alt={name} />
          </Link>
        );
      })}
    </div>
  );
};

export default LocaleSwitcher;
