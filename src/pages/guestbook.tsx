import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import Header from "../components/Header";
import Input from "../components/Input";
import Signature from "../components/Signature";
import Text from "../components/Text";
import Wrapper from "../components/Wrapper";

const guestbook = ({ entries }: any) => {
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
        })}{" "}
      </Wrapper>
    </>
  );
};

export async function getStaticProps() {
  const guestbookRef = collection(firestore, "guestbook");
  const data = await getDocs(guestbookRef);
  const entries = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return {
    props: {
      entries
    },
    revalidate: 60
  };
}

export default guestbook;
