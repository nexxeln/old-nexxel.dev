import Header from "../components/Header";
import Input from "../components/Input";
import Signature from "../components/Signature";
import Text from "../components/Text";
import Wrapper from "../components/Wrapper";
import { server } from "../lib/config";

const guestbook = ({ data }: any) => {
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
        {data.map((item: any) => (
          <Signature key={item.id} name={item.name} message={item.message} />
        ))}
      </Wrapper>
    </>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(`${server}/api/signatures`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.status !== 200) {
      console.log("something went wrong");
    } else {
      const data = await response.json();
      console.log("success");
      return {
        props: {
          data
        }
      };
    }
  } catch (error) {
    console.log("there was an error reading from the database", error);
    const data: any = [];

    return {
      props: {
        data: ["error"]
      },
      revalidate: 60
    };
  }
}

export default guestbook;
