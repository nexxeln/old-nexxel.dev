import { FC } from "react";
import { FiStar } from "react-icons/fi";
import { VscRepoForked } from "react-icons/vsc";

type ProjectCardProps = {
  name: string;
  language: string;
  stars: number;
  forks: number;
  description: string;
  link: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  name,
  language,
  stars,
  forks,
  description,
  link
}) => {
  let color = "";

  switch (language) {
    case "TypeScript":
      color = "#3178C6";
      break;

    case "Python":
      color = "#3776AB";
      break;

    case "Rust":
      color = "#B94700";
      break;
  }

  return (
    <>
      <a
        href={`https://github.com/nexxeln/${link}`}
        rel="noreferrer"
        target="_blank"
        className="flex flex-col justify-center w-3/5 pb-2 border-4 rounded-xl hover:scale-[1.02] transition-all duration-200"
      >
        <div className="flex flex-col gap-1 px-4">
          <h2 className="py-1 text-2xl text-center">{name}</h2>
          <p>{description}</p>
          <div className=""></div>
          <p className="flex items-center gap-2 text-sm">
            <span style={{ color: color }}>⬤</span> <span>{language}</span>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FiStar />
            <p>{stars}</p>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <VscRepoForked />
            <p>{forks}</p>
          </p>
        </div>
      </a>
    </>
  );
};
export default ProjectCard;
