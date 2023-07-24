"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiRedux,
  SiMui,
  SiPrisma,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { ISkills } from "../types/skills";

const SkillsCarousel = () => {
  const skills: ISkills[] = [
    {
      name: "React",
      icon: <FaReact />,
      experience: "3 anos",
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
      experience: "3 anos",
    },
    {
      name: "React Redux",
      icon: <SiRedux />,
      experience: "6 meses",
    },
    {
      name: "NextJS",
      icon: <TbBrandNextjs />,
      experience: "1   ano",
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs />,
      experience: "1 ano e 6 meses",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      experience: "1 ano e 6 meses",
    },
    {
      name: "MUI",
      icon: <SiMui />,
      experience: "1 ano e 6 meses",
    },
    {
      name: "Prisma",
      icon: <SiPrisma />,
      experience: "1 ano e 6 meses",
    },
  ];

  return (
    <div className=" flex flex-col justify-between items-start h-[200px] w-full mt-8 bg-neutral-700 p-4 ">
      <p className="text-sm font-extralight	 text-neutral-300">Tecnologias</p>
      <Carousel
        autoPlay
        centerMode
        centerSlidePercentage={20}
        infiniteLoop
        interval={1500}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        dynamicHeight
        className="flex w-full justify-center items-center"
      >
        {skills.map(({ name, icon }) => {
          return (
            <div
              className="flex flex-col justify-center items-center"
              key={`item-${name}`}
            >
              {icon}
              <p className="text-sm text-neutral-200">{name}</p>
            </div>
          );
        })}
      </Carousel>

      <div>{""}</div>
    </div>
  );
};

export default SkillsCarousel;
