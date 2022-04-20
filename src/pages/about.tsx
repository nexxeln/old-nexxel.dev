import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";

const about = () => {
  return (
    <>
      <Wrapper>
        <div className="flex items-center justify-start">
          <Header head="About" />
        </div>
      </Wrapper>
    </>
  );
};

export default about;
