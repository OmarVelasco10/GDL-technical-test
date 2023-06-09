import { useNewFormat } from "../../hooks/useNewFormat";
import { MessageText, Subtitle, Title } from "./styled.ts";

interface Props {
  from: string;
  text: string;
}

const Component = (props: Props) => {
  const { from, text } = props;
  const { newFrom } = useNewFormat(from);

  return (
    <div data-testid="showInformation-component">
      <Title data-testid="from-title">New message from:</Title>
      <Subtitle data-testid="from-subtitle">{newFrom}</Subtitle>
      <MessageText data-testid="message-text">"{text}"</MessageText>
    </div>
  );
};

export { Component as ShowInformation };
export default Component;
