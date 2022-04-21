import React, { useState } from "react";
import Header from "../components/Header";
import Text from "../components/Text";
import Wrapper from "../components/Wrapper";

const guestbook = () => {
  return (
    <>
      <Wrapper>
        <div className="pb-3">
          <Header head="Guestbook" />
        </div>
        <Text>
          <div className="text-lg">
            Leave a comment below to sign my Guestbook. It could be anything.
            Surprise me!
          </div>
        </Text>
      </Wrapper>
    </>
  );
};

export default guestbook;
