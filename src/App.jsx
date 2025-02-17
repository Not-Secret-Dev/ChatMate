import ChatListComponent from "./Components/ChatList/ChatListComponent";
import MainSectionComponent from "./Components/MainSection/MainSectionComponent";
import { useState } from "react";

function App() {
  const [showChatList, setShowChatList] = useState(false);

  const toggleChatList = () => {
    setShowChatList((prev) => !prev);
  };

  return (
    <>
      {showChatList ? (
        <ChatListComponent />
      ) : (
        <MainSectionComponent toggleChatList={toggleChatList} />
      )}
    </>
  );
}

export default App;
