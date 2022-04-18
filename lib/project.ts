import axios from "axios";

export const getProjectInfo = async (name: string) => {
  const info = await axios
    .get(`https://api.github.com/repos/nexxeln/${name}`)
    .then(({ data }) => data);

  console.log(info);
  return info;
};
