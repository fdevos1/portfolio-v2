"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Github } from "lucide-react";

import profilePic from "../assets/profile.jpg";
import NavBar from "../components/NavBar";
import SkillsCarousel from "../components/Carousel";
import Projects from "../components/Projects";

export default function Home() {
  const text = useTranslations("texts");

  return (
    <div className="flex flex-col w-full h-screen bg-neutral-900 text-zinc-50 py-6">
      <NavBar />

      <div className="flex flex-col w-full justify-center items-center gap-4">
        <div className="w-[100px] h-[100px] rounded-full">
          <Image className="rounded-full" alt="foto-perfil" src={profilePic} />
        </div>

        <p className="text-sm font-extralight	 text-neutral-300">
          {text("salutation")}
        </p>

        <span className="text-2xl text-neutral-200 text-center tracking-wide">
          {text("stack")} <br />
          ReactJS | React Redux | NodeJS | NextJS
        </span>

        <button className="flex w-[240px] h-[50px] justify-center items-center text-neutral-200	 bg-neutral-800 border-2 border-solid border-neutral-700 gap-2  hover:bg-neutral-700  hover:border-neutral-600 transition-colors hover:underline hover:underline-offset-2		">
          <Github color="grey" />
          <p>GitHub</p>
        </button>
      </div>

      <SkillsCarousel />

      <span className="text-2xl text-neutral-200 text-center tracking-wide mt-8">
        {text("projects")}
      </span>

      <div className="grid grid-cols-2 auto-rows-max md:grid-cols-4 gap-2 p-4 overflow-auto mr-2">
        <Projects />
      </div>
    </div>
  );
}
