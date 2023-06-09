import { TextNotification } from "./components/TextNotification";

const Info = {
  from: '3122079227',
  text: 'Test',
  threadId: '123456789'
}

function App() {
  return (
    <>
      <TextNotification textMessage={Info}/>
    </>
  );
}

export default App;
