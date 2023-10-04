"use client";
import Image from "next/image";

import config from "@/config";
import profile from "../../images/profile.jpeg";

import { useTranslations } from "next-intl";

const About = () => {
  const text = useTranslations("About");

  const one = text("text_1");

  const two = text("text_2");

  const three = text("text_3");

  const items = [one, two, three];

  return (
    <section className="max-w-[900px] lg:block" id="sobre">
      <h2>{text("title")}</h2>

      <div className="grid grid-cols-[3fr,2fr] gap-[50px] lg:block">
        <div>
          <div>
            {items.map((item, i) => (
              <p
                key={i}
                className="text-slate-300 text-lg font-light mt-4 first:mt-0"
              >
                {item}
              </p>
            ))}

            <ul className="grid grid-cols-[repeat(2,minmax(140px,200px))] mt-5  gap-y-2 ">
              {config.technologies &&
                config.technologies.map(
                  ({ name, url }: { name: string; url: string }, i: number) => (
                    <li
                      className="relative mb-2 pl-5 font-mono text-sm before:content-['▹'] before:absolute before:left-0 text-cyan-500 font-sm hover:cursor-pointer hover:text-slate-200 transition-all"
                      key={i}
                      onClick={() => window.open(url)}
                    >
                      {name}
                    </li>
                  )
                )}
            </ul>
          </div>
        </div>
        <div className="relative max-w-[300px] sm:mt-[50px] sm:mx-auto sm:w-[70%]">
          <div
            className="relative block w-full rounded-[4px] bg-cyan-800 shadow-[0_10px_30px_-15px_rgba(18,18,18,0.7)] transition-all duration-[250ms] ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]
          hover:shadow-[0_20px_30px_-15px_rgba(18,18,18,0.7)]
          hover:translate-y-[-4px] hover:translate-x-[-4px]
          focus:translate-y-[-4px] focus:translate-x-[-4px]
          hover:after:translate-y-[8px] hover:after:translate-x-[8px]
          before:content-[''] before:block before:absolute before:w-full before:h-full before:rounded-[4px] before:transition-all
          after:content-[''] after:block after:absolute after:w-full after:h-full after:rounded-[4px] after:transition-all
          before:top-0 before:left-0 before:bg-cyan-700 before:mix-blend-screen
          after:border after:border-solid after:border-cyan-800 after:top-[14px] after:left-[14px] after:z-[-1]
          "
          >
            <Image
              src={profile}
              alt="foto-perfil"
              width={500}
              className="relative rounded-[4px] mix-blend-multiply grayscale contrast-1	transition-all duration-[250ms] ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]
              hover:filter-none hover:mix-blend-normal
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
