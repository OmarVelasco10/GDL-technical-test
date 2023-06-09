import { NavigateToThread } from "./NavigateToThread";
import { MessageForm } from "./MessageForm";
import { ShowInformation } from "./ShowInformation";

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
  const { textMessage, sendReply, navigateToInboxThread } = props;
  return (
    <div className="main-layout">
      <div className="second-layout">
        <NavigateToThread onClick = {() => navigateToInboxThread(textMessage.threadId)}/>
        <div>
          <ShowInformation from={textMessage.from} text={textMessage.text} />
          <MessageForm sendReplay={sendReply}/>
        </div>
      </div>
    </div>
  );
};
