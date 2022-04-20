import { FC, ReactNode } from "react";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col md:mx-20 lg:mx-72">
      <div className="mt-10">
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
