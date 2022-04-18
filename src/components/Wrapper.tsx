import { FC, ReactNode } from "react";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 max-w-95 lg:max-w-60 2xl:max-w-40 xl:max-w-30">
        <div className="px-5">
          <Navbar />
        </div>

        <div className="px-5 pt-8 md:pt-16 lg:pt-16">
          <main id="main">{children}</main>
        </div>

        <BackToTop />

        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;
