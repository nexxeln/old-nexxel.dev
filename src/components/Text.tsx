import { FC, ReactNode } from "react";

const Text: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="prose lg:prose-xl">{children}</div>;
};

export default Text;
