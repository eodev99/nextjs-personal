import { ProjectContent } from "../lib/projects";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  project: ProjectContent;
};
export default function ProjectItem({ project }: Props) {
  return (
    <Link href={"/projects/" + project.slug}>
      <a>
        <Date date={parseISO(project.date)} />
        
        <div className="title-box">
          <h2>{project.title}</h2>
          <h3> {project.desc}</h3>
        </div>
        
        
        {project.tech !== undefined
          ? project.tech.map(
              (item, index, arr) =>
                `${item} ${index !== arr.length - 1 ? "|" : ""} `
            )
          : "Software"}

        <style jsx>
          {`
            a {
              width: 100%;
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
            h3 {
              margin: 0;
              font-weight: 400;
            }   
            .title-box {
              width: 100%;
              display: flex;
              align-items: flex-end; 
              justify-content: space-between;
            }

            @media (min-width: 769px) {
              a {
                width: 100%;
              }
              h3 {
                margin 0 1.5rem;
              }
            }
          `}
        </style>
      </a>
    </Link>
  );
}
