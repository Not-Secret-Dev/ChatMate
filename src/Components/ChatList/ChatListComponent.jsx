import styled from "styled-components";
import InputComponent from "../Input/InputComponent";
import FooterComponent from "../Footer/FooterComponent";
import { useState } from "react";

const ChatListContainer = styled.div`
  position: relative;
  width: 60%;
  max-width: 70%;
  height: min(100vh, 600px);
  background: #fff;
  margin: auto;
  border-radius: 16px;
  overflow-y: auto;
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.5s ease-in-out;

  h2 {
    font-size: 1.5rem;
    color: #343a40;
    margin-bottom: 12px;
    text-align: center;
  }

  ul {
    margin-top: 23px;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  li {
    max-width: 80%;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 10px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: transform 0.3s;
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

  .input {
    display: flex;
    justify-content: center;
  }
`;

const ChatListComponent = () => {
  const [inputValue, setinputValue] = useState("");

  const handleInputData = (value) => {
    setinputValue(value);
  };

  return (
    <ChatListContainer>
      <ul>
        <li className="bot">Hello! How can I assist you today?</li>
        <li className="user">I need help with my order.</li>
      </ul>
      <div className="input">
        <InputComponent onInputChange={handleInputData} />
      </div>
      <FooterComponent />
    </ChatListContainer>
  );
};

export default ChatListComponent;
