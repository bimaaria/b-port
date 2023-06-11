"use client";

import Image from "next/image";
import Tooltip from '@mui/material/Tooltip';
import logoReact from "../../../public/icons/react.svg";
import logoLaravel from "../../../public/icons/laravel.svg";
import logoPhp from "../../../public/icons/php.svg";
import logoJquery from "../../../public/icons/jquery.svg";
import logoMysql from "../../../public/icons/mysql.svg";
import logoNextJs from "../../../public/icons/next-js.svg";
import logoDocker from "../../../public/icons/docker.svg";
import logoGit from "../../../public/icons/git.svg";
import logoNode from "../../../public/icons/node.svg";
import logoPostgre from "../../../public/icons/postgresql.svg";
import logoTypescript from "../../../public/icons/typescript.svg";

export default function Skills() {
  const skills = [
    {
      name: "react js",
      logo: logoReact
    },
    {
      name: "next js",
      logo: logoNextJs
    },
    {
      name: "typescript",
      logo: logoTypescript
    },
    {
      name: "node",
      logo: logoNode
    },
    {
      name: "jquery",
      logo: logoJquery
    },
    {
      name: "laravel",
      logo: logoLaravel
    },
    {
      name: "php",
      logo: logoPhp
    },
    {
      name: "postgresql",
      logo: logoPostgre
    },
    {
      name: "mysql",
      logo: logoMysql
    },
    {
      name: "docker",
      logo: logoDocker
    },
    {
      name: "git",
      logo: logoGit
    }
  ];

  return (
    <section className="flex flex-col px-4 py-10 align-middle" id="skills">
      <h1 className="text-xl font-bold">Skills</h1>
      <div className="flex flex-wrap justify-around w-full h-full align-middle">
        {skills.map(skill => (
          <Tooltip key={skill.name} placement="top" title={skill.name}>
            <Image
              src={skill.logo}
              width={76}
              height={76}
              alt={`logo of ${skill.name}`}
            />
          </Tooltip>          
        ))}
      </div>
    </section>
  )
}
