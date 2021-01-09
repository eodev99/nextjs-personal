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
        <h2>{project.title}</h2>
        <h3> {project.desc}</h3>
        {project.tech !== undefined
          ? project.tech.map(
              (item, index, arr) =>
                `${item} ${index !== arr.length - 1 ? "|" : ""} `
            )
          : "Software"}
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
