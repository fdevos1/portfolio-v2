"use client";

import { useState, useEffect } from "react";

import { useTranslations } from "next-intl";

import { Octokit } from "octokit";

import Icon from "../icons/icon";

const Projects = () => {
  const [myRepos, setMyRepos] = useState<any[] | undefined>([]);

  const octokit = new Octokit({ auth: process.env.GITHUB });

  const text = useTranslations("Projects");

  const getRepos = async () => {
    const request = await octokit.request("GET /users/{username}/repos", {
      username: "fdevos1",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    setMyRepos(request.data);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <section className="flex flex-col items-center" id="projetos">
      <h2>{text("title")}</h2>

      <ul className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[15px] relative mt-[50px] 2xl:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {myRepos?.map((item, i) => (
          <li
            key={i}
            className="relative 
          transition-all duration-[250ms] ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]
          "
          >
            <div
              className="flex flex-col justify-between items-center relative h-full py-[2rem] px-[1.75rem] rounded-[4px] bg-[#171717]
            transition-all duration-[250ms] ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]
            overflow-auto
            shadow-[0_10px_30px_-15px_rgba(rgba(18,18,18,0.7))]
            hover:translate-y-[-7px]
            "
            >
              <header className="w-full">
                <div className="flex justify-between items-center mb-[35px]">
                  <div className="text-cyan-500">
                    <Icon width="40" height="40" name="Folder" />
                  </div>
                  <div className="flex items-center mr-[-10px] text-slate-200">
                    <a
                      className="flex items-center justify-center px-[5px] py-[7px] relative z-[1]"
                      href={item.html_url}
                      aria-label="Link Github"
                      target="_blank"
                    >
                      <Icon name="Github" />
                    </a>
                  </div>
                </div>

                <h3 className="mb-[10px] text-slate-200 text-2xl">
                  <a
                    className="static 
                  before:content-[''] before:block before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0
                  "
                    href={item.html_url}
                  >
                    {item.name}
                  </a>
                </h3>

                <div className="text-slate-200 text-base">
                  <p>{item?.description}</p>
                </div>
              </header>

              <footer className="w-full">
                <ul className="flex items-end flex-wrap grow mt-[20px]">
                  {item.topics.map((item: string, i: number) => (
                    <li
                      key={i}
                      className="font-mono text-xs [&:not(last-of-type)]:mr-[15px] capitalize"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </footer>
            </div>
          </li>
        ))}
      </ul>

      <button
        className="text-cyan-500 bg-transparent border border-solid border-cyan-500 rounded-[4px] text-sm font-mono leading-[1] px-[1.25rem] py-[1.75rem] mt-[80px] mx-auto
      transition-all duration-[250ms] ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]
      hover:translate-y-[-5px] hover:translate-x-[-5px] hover:shadow-[4px_4px_0_0_rgba(6,182,212,1)]
      
      "
        onClick={() =>
          window.open("https://github.com/fdevos1?tab=repositories")
        }
      >
        {text("button")}
      </button>
    </section>
  );
};

export default Projects;
