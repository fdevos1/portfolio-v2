"use client";

import { useTranslations } from "next-intl";

const Hero = () => {
  const text = useTranslations("Hero");

  return (
    <section className="flex flex-col justify-center items-start min-h-screen h-screen p-0 min-h-[700px]:h-auto min-h-[700px]:pt-[100px]">
      <h2 className="text-cyan-500 font-mono text-lg font-light	">
        {text("salutation")}
      </h2>
      <h1 className="text-slate-200 text-4xl">Felipe Devos</h1>
      <h3 className="text-slate-300 text-4xl">{text("stack")}</h3>
      <p className="text-slate-300 text-lg mt-5">
        {text("passionate")} <br />
        {text("competence")}
      </p>

      <a
        className="mt-[50px] text-cyan-500 bg-transparent border border-solid border-cyan-500 py-5 px-6 rounded font-mono font-light leading-none text-lg
        transition-all duration-[250ms] ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]
               hover:shadow-[3px_3px_0_0_rgba(6,182,212,1)] hover:translate-x-[-4px] hover:translate-y-[-4px]"
        href="https://github.com/fdevos1"
      >
        {text("button")}
      </a>
    </section>
  );
};

export default Hero;
