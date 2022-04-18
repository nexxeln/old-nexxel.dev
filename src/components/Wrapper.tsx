import { FC, ReactNode } from "react";
import Navbar from "./Navbar";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 max-w-95 lg:max-w-60 2xl:max-w-40 xl:max-w-30">
        <Navbar />
        <div className="pt-16">
          <main id="main">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
