import React from "react";
import styled, { keyframes } from "styled-components";
import { TbWorld } from "react-icons/tb";
import { IoIosAttach } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

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

function App() {
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

    .inputSection {
      display: flex;
      flex-direction: column;
      width: 95%;
      max-width: 650px;
      border-radius: 16px;
      border: 1px solid #ced4da;
      background-color: #fff;
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: translateY(-2px);
      }
    }

    .inputSection input {
      width: 100%;
      height: 50px;
      padding: 0 12px;
      border: none;
      outline: none;
      font-size: 1rem;
      color: #343a40;
      box-sizing: border-box;
      transition: border-color 0.2s ease-in-out;

      &:focus {
        border-color: #80bdff;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
      }
    }

    .inputSection input::placeholder {
      font-size: 1rem;
      color: #adb5bd;
    }

    .buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 12px;
      gap: 10px;
      box-sizing: border-box;
    }

    .left,
    .right {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      gap: 8px;
      font-size: 0.9rem;
      border-radius: 23px;
      border: none;
      background-color: #007bff;
      color: #fff;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      white-space: nowrap;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    }

    button#attachments {
      background-color: transparent;
      color: #6c757d;
      border: 1px solid #ced4da;

      &:hover {
        background-color: #f8f9fa;
        color: #5a6268;
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    }

    #icon {
      font-size: 1.2rem;
    }

    #send {
      /* Styles already applied to all buttons */
    }

    /* Media Queries */
    @media (max-width: 375px) {
      .heading h1 {
        font-size: 1.4rem;
      }
      .heading p {
        font-size: 0.8rem;
      }
      .inputSection input {
        height: 35px;
        font-size: 0.8rem;
      }
      button {
        font-size: 0.7rem;
        padding: 6px 10px;
      }
      #icon {
        font-size: 1rem;
      }
    }

    @media (min-width: 376px) and (max-width: 767px) {
      .heading h1 {
        font-size: 1.6rem;
      }
      .heading p {
        font-size: 0.9rem;
      }
      .inputSection input {
        height: 40px;
        font-size: 0.9rem;
      }
      button {
        font-size: 0.8rem;
        padding: 6px 12px;
      }
      #icon {
        font-size: 1.1rem;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      .heading h1 {
        font-size: 1.8rem;
      }
      .heading p {
        font-size: 1rem;
      }
      .inputSection input {
        height: 45px;
        font-size: 1rem;
      }
      button {
        font-size: 0.9rem;
        padding: 8px 14px;
      }
      #icon {
        font-size: 1.2rem;
      }
    }

    @media (min-width: 1024px) {
      .heading h1 {
        font-size: 2rem;
      }
      .heading p {
        font-size: 1.1rem;
      }
      .inputSection input {
        height: 50px;
        font-size: 1.1rem;
      }
      button {
        font-size: 1rem;
        padding: 10px 18px;
      }
      #icon {
        font-size: 1.3rem;
      }
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