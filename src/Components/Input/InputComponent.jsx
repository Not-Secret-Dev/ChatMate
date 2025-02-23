import styled from "styled-components";
import { TbWorld } from "react-icons/tb";
import { IoIosAttach } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";

const InputSection = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 650px;
  border-radius: 16px;
  border: 1px solid #aaa;
  background-color: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  input {
    width: 100%;
    height: 50px;
    padding: 0 12px;
    border: none;
    outline: none;
    font-size: 1rem;
    color: #343a40;
    box-sizing: border-box;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  }

  .left,
  .right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 23px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  button#attachments {
    background-color: transparent;
    color: #6c757d;
    border: 1px solid #ced4da;
  }
`;

const InputComponent = ({ onInputChange }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      onInputChange(inputText);
      setInputText("");
    }
  };

  const handleSearch = () => {
    if (inputText.trim() !== "") {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(inputText)}`;
      window.open(searchUrl, "_blank");
    }
  };

  return (
    <InputSection onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Message ChatMate"
      />
      <div className="buttons">
        <div className="left">
          <button type="button" onClick={handleSearch}>
            <TbWorld />
            Search Web
          </button>
        </div>
        <div className="right">
          <button type="button" id="attachments">
            <IoIosAttach />
          </button>
          <button type="submit">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </InputSection>
  );
};

export default InputComponent;
