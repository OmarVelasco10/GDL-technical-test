import { NavigateToThread } from "../NavigateToThread";
import { MessageForm } from "../MessageForm";
import { ShowInformation } from "../ShowInformation";
import { Container, SecondContainer } from "./styled";

type TextMessage = {
  from: string;
  text: string;
  threadId: string;
};

interface Props {
  textMessage: TextMessage;
  sendReply: (text: string) => void;
  navigateToInboxThread: (id: string) => void;
}

export const TextNotification = (props: Props) => {
  const { textMessage:{from, text, threadId}, sendReply, navigateToInboxThread } = props;
  return (
    <Container>
      <SecondContainer>
        <NavigateToThread onClick = {() => navigateToInboxThread(threadId)}/>
        <div>
          <ShowInformation from={from} text={text} />
          <MessageForm sendReplay={sendReply}/>
        </div>
      </SecondContainer>
    </Container>
  );
};
