import { NavigateToThread } from "./NavigateToThread";
import { SendMessage } from "./SendMessage";
import { ShowInformation } from "./ShowInformation";

type TextMessage = {
  from: string;
  text: string;
  threadId: string;
};

interface Props {
  textMessage: TextMessage;
  sendReply?: (text: string) => {};
  navigateToInboxThread?: (id: string) => {};
}

export const TextNotification = (props: Props) => {
  const { textMessage, sendReply, navigateToInboxThread } = props;
  return (
    <div className="main-layout">
      <div className="second-layout">
        <NavigateToThread />
        <div>
          <ShowInformation from={textMessage.from} text={textMessage.text} />
          <SendMessage />
        </div>
      </div>
    </div>
  );
};
