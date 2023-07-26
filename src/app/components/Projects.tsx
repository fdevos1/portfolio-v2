"use client";

import { useState, useEffect } from "react";

import { useTranslations } from "next-intl";

import { Octokit } from "octokit";

import Title from "./Title";
import Text from "./Text";
import Link from "./Link";

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
        className="flex flex-col p-4 justify-center col-span-1 border border-solid border-neutral-700 text-xs rounded-md md:h-[150px] md:text-sm "
        key={`repo-${name}`}
      >
        <div className="flex gap-2">
          <Title>Repositório:</Title>
          <Text>{name}</Text>
        </div>
        <div className="flex gap-2">
          <Title>Github:</Title>
          <Link href={html_url}>{html_url}</Link>
        </div>
        <div className="flex gap-2">
          <Title>Preview:</Title>
          {name.toLowerCase() === "my-portfolio-nextjs" ? (
            <Text>{text("currentProject")}</Text>
          ) : homepage ? (
            <Link href={homepage}>homepage</Link>
          ) : (
            <Text>{text("noPreview")}</Text>
          )}
        </div>
      </div>
    );
  });
};

export default Projects;
