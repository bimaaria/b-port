import * as React from "react";
import Image from "next/image";
import logoReact from "../../../../public/icons/react.svg";
import logoLaravel from "../../../../public/icons/laravel.svg";
import logoMysql from "../../../../public/icons/mysql.svg";
import logoSafous from "../../../../public/images/logos/logo-safous.png";

export default function ProjectCard() {
  const projects = [
    {
      id: 1,
      name: "Safous",
      description: "Web application that implements Zero Trust Access as a Service, a topic related to cybersecurity.",
      logo: logoSafous,
      techStack: [logoLaravel, logoReact,  logoMysql]
    }
  ];

  return (
    <>
      {projects.map(project => (
        <div 
          className="p-4 mx-auto my-4 border rounded border-cyan-500 text-white w-[90%] flex flex-col"
          id="project-card" 
          key={project.id}
        >
          <h1 className="text-2xl font-bold text-cyan-500">
            {project.name}
          </h1>
          <h2>{project.description}</h2>
          <Image
            src={project.logo}
            alt={`logo of ${project.logo}`}
            className="w-full mx-auto my-2 border-2 rounded border-cyan-500"
          />
          <p>Tech Stack</p>
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
      ))}
    </>
  );
}
