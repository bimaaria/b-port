import Image from "next/image";
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
  const skills = [logoReact, logoNextJs, logoTypescript, logoNode, logoJquery, logoLaravel, logoPhp, logoMysql, logoPostgre, logoDocker, logoGit]
  return (
    <section className="flex flex-col h-screen min-h-screen px-4 py-10 align-middle" id="skills">
      <h1 className="text-xl">Skills</h1>
      <div className="flex flex-wrap justify-around w-full h-full align-middle">
        {skills.map(skill => (
          <Image
            src={skill}
            width={100}
            height={100}
            alt={`logo of ${skill}`}
          />
        ))}
      </div>
    </section>
  )
}
