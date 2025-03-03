import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import InputComponent from "../Input/InputComponent";
import FooterComponent from "../Footer/FooterComponent";
import { getAIResponse } from "../ChatBot/ChatBot";

const MainContainer = styled.div `  
  .input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -10px;
    width: 100%;
    outline: none;
    overflow: hidden;
    left: 0;
  }
`

const ChatListContainer = styled.div`
  position: relative;
  width: 75%;
  max-width: 800px;
  height: min(75vh, 600px);
  background: #fff;
  margin: auto;
  border-radius: 16px;
  overflow: hidden;
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.5s ease-in-out;

  h2 {
    font-size: 1.6rem;
    color: #343a40;
    margin: 14px 0;
    text-align: center;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }

  ul {
    flex-grow: 1;
    padding: 12px;
    list-style: none;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    max-width: 85%;
    padding: 14px;
    border-radius: 12px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: transform 0.3s;
    word-break: break-word;
  }

  li:hover {
    transform: translateY(-2px);
    cursor: pointer;
  }

  .bot {
    background: #e9ecef;
    color: #343a40;
    align-self: flex-start;
  }

  .user {
    background: #007bff;
    color: #fff;
    align-self: flex-end;
  }


  @media (max-width: 900px) {
    width: 85%;
    max-width: 90%;
    height: min(100vh, 550px);

    li {
      max-width: 90%;
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    width: 95%;
    height: min(100vh, 500px);

    li {
      max-width: 95%;
      font-size: 0.95rem;
    }

    .input {
      padding: 10px;
      position: fixed;
      bottom: 0;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      max-width: 500px;
      background: white;
    }
  }
`;

const ChatListComponent = ({ chatHeader, messages, setMessages }) => {
  const [inputValue, setInputValue] = useState("");
  const chatListRef = useRef(null); // Reference for chat messages

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight; // Scroll to the latest message
    }
  }, [messages]);

  const handleInputData = async (value) => {
    if (!value.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: value }]);

    try {
      const botResponse = await getAIResponse(value);
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error getting response." },
      ]);
    }
  };

  return (
    <MainContainer>
      <ChatListContainer>
        <h2 style={{ textAlign: "center", margin: "23px 0" }}>{chatHeader}</h2>

        <ul ref={chatListRef}>
          {messages.map((msg, index) => (
            <li key={index} className={msg.sender === "user" ? "user" : "bot"}>
              {msg.text}
            </li>
          ))}
        </ul>
      </ChatListContainer>
      <div className="input">
        <InputComponent onInputChange={handleInputData} />
        <FooterComponent />
      </div>
    </MainContainer>
  );
};

export default ChatListComponent;
