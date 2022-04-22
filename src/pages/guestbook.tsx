import Header from "../components/Header";
import Input from "../components/Input";
import Signature from "../components/Signature";
import Text from "../components/Text";
import Wrapper from "../components/Wrapper";

const guestbook = () => {
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

        <Signature name="nexxel" message="lol" />
      </Wrapper>
    </>
  );
};
export default guestbook;
