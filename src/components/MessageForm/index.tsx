import { createRef } from "react";
import { Button, Container, TextareaInput } from './styled';

interface Props {
  sendReplay: (text: string)=> void;
}

const Component = (props: Props) => {
  const messageRef = createRef< HTMLTextAreaElement>();
  const {sendReplay} = props;

  const handleOnClick = () =>{
    if(messageRef?.current?.value === '') return;
    sendReplay(messageRef?.current?.value || '');
  }
  return (
    <Container data-testid="messageForm-component">
      <TextareaInput
        ref={messageRef}
        cols={30}
        rows={10}
        placeholder="Your replay to be sent"
      ></TextareaInput>
      <Button className="send-button" onClick={handleOnClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
        </svg>{" "}
        Send Reply
      </Button>
      </Container>
  );
};

export { Component as MessageForm};
export default Component;