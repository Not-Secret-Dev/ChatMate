import React from "react";
import styled from "styled-components";
import { TbWorld } from "react-icons/tb";
import { IoIosAttach } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
    font-family: "Arial", sans-serif;

    .heading {
      text-align: center;
      margin-bottom: 30px;
    }

    .heading h1 {
      margin-bottom: 10px;
      font-size: 2.5rem;
      color: #333;
    }

    .heading p {
      font-size: 1.2rem;
      color: #666;
    }

    .inputSection {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      width: 650px;
      height: 100px;
      border: 1px solid #ddd;
      background-color: #fff;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .inputSection input {
      width: 96%;
      height: 50%;
      padding: 0 12px;
      border: none;
      outline: none;
      border-radius: 16px;
      font-size: 1rem;
      color: #333;
    }

    .inputSection input::placeholder {
      font-size: 1rem;
      color: #999;
    }

    .inputSection .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 96%;
      margin: 12px 0;
    }

    .inputSection .buttons .left {
      width: 50%;
      position: relative; /* Required for tooltip positioning */
    }

    .inputSection .buttons .right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 12px;
      width: 50%;
    }

    .inputSection .buttons .left button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      gap: 8px;
      font-size: 0.9rem;
      border-radius: 23px;
      border: 1px solid #ddd;
      background-color: #f9f9f9;
      color: #333;
      transition: background-color 0.3s ease;
      position: relative; /* Required for tooltip positioning */
    }

    .inputSection .buttons .left button:hover {
      background-color: #e0e0e0;
    }

    .inputSection .buttons .left #icon {
      font-size: 1.2rem;
    }

    .inputSection .buttons .right button {
      width: 36px;
      height: 36px;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 1px solid #ddd;
      background-color: #f9f9f9;
      color: #333;
      transition: background-color 0.3s ease;
    }

    .inputSection .buttons .right button:hover {
      background-color: #e0e0e0;
    }

    .inputSection .buttons .right #send {
      background-color: #007bff;
      color: #fff;
      border: none;
    }

    .inputSection .buttons .right #send:hover {
      background-color: #0056b3;
    }

    /* Tooltip Styling */
    .inputSection .buttons .left button::before {
      content: "Search the web";
      position: absolute;
      bottom: 8%;
      left: 160%;
      transform: translateX(-50%);
      background-color: #333;
      color: #fff;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 0.8rem;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .inputSection .buttons .left button:hover::before {
      opacity: 1;
      visibility: visible;
    }

    .inputSection .buttons .left button:hover::after {
      opacity: 1;
      visibility: visible;
    }
  `;

  return (
    <MainSection>
      <div className="heading">
        <h1>Hi, I am ChatMate</h1>
        <p>How can I help you today?</p>
      </div>
      <div className="inputSection">
        <input type="text" placeholder="Message ChatMate" />
        <div className="buttons">
          <div className="left">
            <button>
              <TbWorld id="icon" />
              Search
            </button>
          </div>
          <div className="right">
            <button id="attachments">
              <IoIosAttach />
            </button>
            <button id="send">
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </MainSection>
  );
}

export default App;
