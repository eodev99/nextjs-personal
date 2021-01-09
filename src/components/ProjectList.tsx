import React from "react";
import { ProjectContent } from "../lib/projects";
import ProjectItem from "./ProjectItem";
import Pagination from "./Pagination";

type Props = {
  projects: ProjectContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function ProjectList({ projects, pagination }: Props) {
  return (
    <div className={"container"}>
      <div className={"projects"}>
        <ul className={"project-list"}>
          {projects.map((it, i) => (
            <li key={i}>
              <ProjectItem project={it} />
            </li>
          ))}
        </ul>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/projects" : "/projects/page/[page]"),
            as: (page) => (page === 1 ? null : "/projects/page/" + page),
          }}
        />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        .projects {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        .projects li {
          margin-bottom: 1.5rem;
        }
        .project-list {
          flex: 1 0 auto;
        }
        .categories {
          display: none;
        }
        .categories li {
          margin-bottom: 0.75em;
        }

        @media (min-width: 769px) {
          .categories {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
