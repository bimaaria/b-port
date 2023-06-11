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

export default function ExpCard() {
  const experiences = [
    {
      id: 1,
      position: "Full Stack Developer",
      company: "PT. IIJ Global Solutions Indonesia",
      period: "Dec 2021 - present",
      logo: logoIij || "",
      techStack: [logoLaravel, logoReact,  logoMysql]
    },
    {
      id: 2,
      position: "IT Staff Programmer",
      company: "PT. Ki Antaka Rasa",
      period: "Dec 2020 - Dec 2021",
      logo: logoAntaka || "",
      techStack: [logoPhp, logoJquery, logoMysql]
    }
  ];

  return (
    <>
      {experiences.map(exp => (
        <div 
          className="px-4 mx-auto my-4 border rounded border-cyan-500 text-white h-[48%] w-[90%] flex flex-col"
          id="experience-card" 
          key={exp.id}
        >
          <div className="text-center">
            <Image
              src={exp.logo}
              width={100}
              height={100}
              alt={`logo of ${exp.company}`}
              className="m-auto"
            />
          </div>
          <div>
            <h1>{exp.position}</h1>
            <h2>{exp.company}</h2>
            <h3>{exp.period}</h3>
            <p className="mt-4">Tech Stack</p>
            <div className="inline-flex">
              {exp.techStack.map((tech, index) => (
                <Image
                  key={`${exp.id}-${tech}-${index}`}
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
