"use client";

import { useState, useEffect } from "react";

import { useTranslations } from "next-intl";

import { Octokit } from "octokit";

interface IRepos {
  name: string;
  html_url: string;
  homepage: string | null | undefined;
}

const Projects = () => {
  const [repos, setRepos] = useState<IRepos[] | []>([]);

  const text = useTranslations("texts");

  const app = new Octokit({
    auth: process.env.GITHUB,
  });

  const fetchRepos = async () => {
    let { data } = await app.request("GET /users/{username}/repos", {
      username: "fdevos1",
    });

    data.map((i) => console.log(i));

    let repoInfos = data.map(({ name, html_url, homepage }) => {
      return {
        html_url,
        name,
        homepage,
      };
    });

    setRepos(repoInfos);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return repos.map(({ name, html_url, homepage }) => {
    return (
      <div
        className="flex flex-col justify-center  md:h-[150px] col-span-1 border border-solid border-neutral-700 text-sm text-neutral-400 font-light rounded-md"
        key={`repo-${name}`}
      >
        <div className="flex gap-2">
          <p>Repositório:</p>
          <p className=" text-neutral-300 font-medium">{name}</p>
        </div>
        <div className="flex gap-2">
          <p>Github:</p>
          <p className=" text-neutral-300 font-medium truncate">{html_url}</p>
        </div>
        <div className="flex gap-2">
          <p>Preview:</p>
          {name.toLowerCase() === "my-portfolio-nextjs" ? (
            <p className=" text-neutral-300 font-medium truncate">
              {text("currentProject")}
            </p>
          ) : homepage ? (
            <a
              className=" text-neutral-300 font-medium truncate"
              href={homepage}
            >
              homepage
            </a>
          ) : (
            text("noPreview")
          )}
        </div>
      </div>
    );
  });
};

export default Projects;
