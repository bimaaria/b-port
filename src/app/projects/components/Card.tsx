"use client";

import * as React from "react";
import Image from "next/image";
import logoIij from "../../../../public/images/logos/logo-iij.png";
import logoAntaka from "../../../../public/images/logos/logo-antaka.png";
import logoReact from "../../../../public/icons/react.svg"
import logoLaravel from "../../../../public/icons/laravel.svg"
import logoPhp from "../../../../public/icons/php.svg"
import logoJquery from "../../../../public/icons/jquery.svg"
import logoMysql from "../../../../public/icons/mysql.svg"

export default function ProjectCard() {
  const projects = [
    {
      id: 1,
      name: "Safous",
      description: "",
      logo: logoIij || "",
      techStack: [logoLaravel, logoReact,  logoMysql]
    }
  ];

  return (
    <>
      {projects.map(project => (
        <div 
          className="px-4 mx-auto my-4 border rounded border-cyan-500 text-white h-[48%] w-[90%] flex flex-col"
          id="project-card" 
          key={project.id}
        >
          <div className="text-center">
            <Image
              src={project.logo}
              width={100}
              height={100}
              alt={`logo of ${project.logo}`}
              className="m-auto"
            />
          </div>
          <div>
            <h1>{project.name}</h1>
            <h2>{project.description}</h2>
            <p className="mt-4">Tech Stack</p>
            <div className="inline-flex">
              {project.techStack.map(tech => (
                <Image
                  src={tech}
                  width={40}
                  height={40}
                  alt={`logo of ${tech}`}
                  className="mx-1"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
