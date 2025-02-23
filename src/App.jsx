import { useState } from "react";
import ChatListComponent from "./Components/ChatList/ChatListComponent";
import MainSectionComponent from "./Components/MainSection/MainSectionComponent";

function App() {
  const [showChatList, setShowChatList] = useState(false);
  const [chatHeader, setChatHeader] = useState("");
  const [messages, setMessages] = useState([]); // Stores chat messages

  const toggleChatList = () => {
    setShowChatList(true);
  };

  return (
    <>
      {showChatList ? (
        <ChatListComponent
          chatHeader={chatHeader}
          messages={messages}
          setMessages={setMessages}
        />
      ) : (
        <MainSectionComponent
          toggleChatList={toggleChatList}
          setChatHeader={setChatHeader}
          setMessages={setMessages}
        />
      )}
    </>
  );
}

export default App;
