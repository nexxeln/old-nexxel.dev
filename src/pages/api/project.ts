import type { NextApiRequest, NextApiResponse } from "next";
import { getProjectInfo } from "../../../lib/project";

export default async function handler(
  res: NextApiResponse,
  req: NextApiRequest
) {
  const { name } = req.query;
  const info = await getProjectInfo(name as string);

  const projectInfo = {
    name: info.name,
    language: info.language,
    stars: info.stargazers_count,
    forks: info.forks,
    description: info.description
  };

  res.status(200).json(projectInfo);
}
