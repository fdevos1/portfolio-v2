"use client";

import { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const SkillsSlider = () => {
  const slider = useRef();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    ref: slider,
  };
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
    <div className=" flex flex-col justify-between items-start h-full max-h-[200px] w-full mt-8 bg-neutral-700 p-4 ">
      <p className="text-sm font-extralight	 text-neutral-300">Tecnologias</p>
      <Slider className="w-full" {...settings}>
        {skills.map(({ name, icon }, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center"
              key={index}
            >
              {icon}
              <p className="text-sm text-neutral-200">{name}</p>
            </div>
          );
        })}
      </Slider>

      <div>{""}</div>
    </div>
  );
};

export default SkillsSlider;
