import { FC } from "react";

type ProjectCardProps = {
  name: string;
  language: string;
  stars: number;
  forks: number;
  description: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  name,
  language,
  stars,
  forks,
  description
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{language}</p>
      <p>{stars}</p>
      <p>{forks}</p>
    </div>
  );
};
export default ProjectCard;
