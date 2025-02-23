import styled, { keyframes } from "styled-components";
import InputComponent from "../Input/InputComponent";
import { useState, useEffect } from "react";
import FooterComponent from "../Footer/FooterComponent";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  font-family: "Arial", sans-serif;
  padding: 20px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.5s ease-in-out;

  .heading {
    text-align: center;
    margin-bottom: 30px;
    width: 90%;
    max-width: 600px;
  }

  .heading h1 {
    margin-bottom: 10px;
    font-size: 2rem;
    color: #343a40;
    font-weight: 600;
  }

  .heading p {
    font-size: 1rem;
    color: #6c757d;
  }

  /* Media Queries */
  @media (max-width: 375px) {
    .heading h1 {
      font-size: 1.4rem;
    }
    .heading p {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 376px) and (max-width: 767px) {
    .heading h1 {
      font-size: 1.6rem;
    }
    .heading p {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .heading h1 {
      font-size: 1.8rem;
    }
    .heading p {
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
    .heading h1 {
      font-size: 2rem;
    }
    .heading p {
      font-size: 1.1rem;
    }
  }
`;

const MainSectionComponent = ({
  toggleChatList,
  setChatHeader,
  setMessages,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFirstInputSent, setIsFirstInputSent] = useState(false);

  const handleInputChange = (value) => {
    setInputValue(value);
    setIsFirstInputSent(true);
    setChatHeader(value); // Set chat header
    setMessages([{ sender: "user", text: value }]); // Initialize chat messages
  };

  useEffect(() => {
    if (isFirstInputSent) {
      toggleChatList();
    }
  }, [isFirstInputSent, toggleChatList]);

  return (
    <MainSection>
      <div className="heading">
        <h1>Hi, I am ChatMate</h1>
        <p>How can I help you today?</p>
      </div>
      <InputComponent onInputChange={handleInputChange} />
      <FooterComponent />
    </MainSection>
  );
};

export default MainSectionComponent;
