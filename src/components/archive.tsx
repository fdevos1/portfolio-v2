"use client";

import { useState, useEffect } from "react";

import { Octokit } from "octokit";

import Icon from "./icons/icon";

const ArchiveTable = () => {
  const [myRepos, setMyRepos] = useState<any[] | undefined>([]);

  const octokit = new Octokit({ auth: process.env.GITHUB });

  const getRepos = async () => {
    const request = await octokit.request("GET /users/{username}/repos", {
      username: "fdevos1",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    setMyRepos(request.data);
  };

  console.log(myRepos);

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <table className="w-full h-full table-fixed text-lg">
      <thead>
        <tr>
          <th className="w-24">Year</th>
          <th className="w-1/3 text-left">Title</th>
          <th className="text-left">Made with</th>
          <th className="w-24">Link</th>
        </tr>
      </thead>
      <tbody>
        {myRepos?.map((item, i) => (
          <tr key={i} className="h-12">
            <td className="text-center text-cyan-500 font-mono">
              {new Date(item.created_at).getFullYear()}
            </td>
            <td className="font-medium text-base">{item.name}</td>
            <td className="flex gap-1">
              {item.topics.length > 0 &&
                item.topics.map((tech: string, i: number) => (
                  <span
                    className="font-light text-base capitalize gap-1 flex"
                    key={i}
                  >
                    {tech}
                    {""}
                    {i !== item.topics.length - 1 && <span>&middot;</span>}
                  </span>
                ))}
            </td>
            <td className="text-center">
              <a className="text-slate-200" href="">
                <Icon name="Github" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArchiveTable;
