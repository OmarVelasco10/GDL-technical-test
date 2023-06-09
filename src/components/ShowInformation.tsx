import { useNewFormat } from "../hooks/useNewFormat";

interface Props {
    from: string;
    text: string
}

export const ShowInformation = (props: Props) => {
    const { from, text} = props;
    const {newFrom} = useNewFormat(from);

  return (
    <div className="show-information">
        <p className="from-title">New message from:</p>
        <span className="from-text">{newFrom}</span>

        <p className="message-text">"{text}"</p>
    </div>
  )
}
