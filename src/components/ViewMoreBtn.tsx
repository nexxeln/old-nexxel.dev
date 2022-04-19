import { FC } from "react";
import { FiChevronRight } from "react-icons/fi";

type ViewMoreBtnProps = {
  text: string;
  href: string;
};

const ViewMoreBtn: FC<ViewMoreBtnProps> = ({ text, href }) => {
  return (
    <button className="text-gray-600 text-md dark:text-gray-400 w-fit group hover:text-black dark:hover:text-white">
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="flex items-center"
      >
        {text}{" "}
        <FiChevronRight className="mt-1 ml-1 transition-all group-hover:translate-x-1" />
      </a>
    </button>
  );
};
export default ViewMoreBtn;
