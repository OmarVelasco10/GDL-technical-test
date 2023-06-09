import { TextNotification } from "./components/TextNotification";

const Info = {
  from: "3122079227",
  text: "This is a message from your client about a loan",
  threadId: "123456789"
}

function App() {
  const handleSendReplay = (text: string) => {
    console.log(text);
  }

  const handleNavigateToInboxThread = (id: string) => {
    console.log(`navigate to threaded – ${id}`);
  }
  return (
    <>
      <TextNotification textMessage={Info} sendReply={handleSendReplay} navigateToInboxThread={handleNavigateToInboxThread}/>
    </>
  );
}

export default App;
