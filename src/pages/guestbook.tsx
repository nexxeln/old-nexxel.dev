import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import Header from "../components/Header";
import Input from "../components/Input";
import Signature from "../components/Signature";
import Text from "../components/Text";
import Wrapper from "../components/Wrapper";
import { NextPage } from "next";

const guestbook: NextPage = ({ entries }: any) => {
  return (
    <>
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
        {entries.map((entry: any, index: number) => {
          return (
            <Signature key={index} name={entry.name} message={entry.message} />
          );
        })}
        <div className="mt-48" />
      </Wrapper>
    </>
  );
};

export async function getServerSideProps() {
  const guestbookRef = collection(firestore, "guestbook");
  const q = query(guestbookRef, orderBy("createdAt", "desc"));
  const data = await getDocs(q);
  const entries = JSON.parse(
    JSON.stringify(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  );

  return {
    props: {
      entries
    }
  };
}

export default guestbook;
