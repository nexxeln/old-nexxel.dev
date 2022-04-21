import React, { useState } from "react";
import useSWR, { SWRConfig } from "swr";
import Header from "../components/Header";
import Input from "../components/Input";
import Signature from "../components/Signature";
import Text from "../components/Text";
import Wrapper from "../components/Wrapper";
import fetcher from "../lib/fetcher";

const guestbook = ({ fallback }: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(
    "http://localhost:3000/api/signatures",
    fetcher,
    {
      refreshInterval: 1000
    }
  );

  return (
    <>
      <SWRConfig value={fallback}>
        <Wrapper>
          <div className="pb-3">
            <Header head="Guestbook" size={5} />
          </div>
          <Text>
            <div className="text-lg">
              Leave a comment below to sign my Guestbook. It could literally be
              anything - a joke, a quote or even a cool fact. Surprise me!
            </div>
          </Text>
          <div className="mt-6">
            <Input />
          </div>
          <div className="mt-10" />
          {data.map((item: any) => (
            <Signature key={item.id} name={item.name} message={item.message} />
          ))}
        </Wrapper>
      </SWRConfig>
    </>
  );
};

export async function getStaticProps() {
  // try {
  //   const response = await fetch("http://localhost:3000/api/signatures", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   });

  //   if (response.status !== 200) {
  //     console.log("something went wrong");
  //   } else {
  //     const data = await response.json();
  //     console.log("success");
  //     return {
  //       props: {
  //         data
  //       }
  //     };
  //   }
  // } catch (error) {
  //   console.log("there was an error reading from the database", error);
  //   const data: any = [];

  //   return {
  //     props: {
  //       data
  //     },
  //     revalidate: 60
  //   };
  // }

  const response = await fetcher("http://localhost:3000/api/signatures");
  return {
    props: {
      fallback: {
        data: response
      }
    }
  };
}

export default guestbook;
