"use client";
import Image from "next/image";

import { useState, useEffect } from "react";

import { Octokit } from "octokit";

import projectPlaceholder from "../assets/project-placeholder.png";

interface IRepos {
  name: string;
  html_url: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<IRepos[] | []>([]);

  const app = new Octokit({
    auth: process.env.GITHUB,
  });

  const fetchRepos = async () => {
    let { data } = await app.request("GET /users/{username}/repos", {
      username: "fdevos1",
    });

    let repoInfos = data.map(({ name, html_url }) => {
      return {
        name,
        html_url,
      };
    });

    setRepos(repoInfos);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return repos.map(({ name, html_url }) => {
    return (
      <div
        className="md:h-[250px] col-span-1 border border-solid border-neutral-700  rounded-md"
        key={`repo-${name}`}
      >
        <div className="flex  justify-center items-center  p-4">
          <Image height={150} src={projectPlaceholder} alt="placeholder" />
        </div>

        <div className="flex gap-2">
          <p className="text-sm text-neutral-400 font-light">Repositório:</p>
          <p className="text-sm text-neutral-300 font-medium">{name}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-sm text-neutral-400 font-light">Github:</p>
          <p className="text-sm text-neutral-300 font-medium truncate">
            {html_url}
          </p>
        </div>
      </div>
    );
  });
};

export default Projects;
