import { useNewFormat } from "../../hooks/useNewFormat";
import { MessageText, Subtitle, Title } from "./styled.ts";

interface Props {
    from: string;
    text: string
}

export const ShowInformation = (props: Props) => {
    const { from, text} = props;
    const {newFrom} = useNewFormat(from);

  return (
    <div>
        <Title>New message from:</Title>
        <Subtitle className="from-text">{newFrom}</Subtitle>

        <MessageText className="message-text">"{text}"</MessageText>
    </div>
  )
}
