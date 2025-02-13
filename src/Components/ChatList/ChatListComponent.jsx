import styled from "styled-components";

const ChatListContainer = styled.div`
  width: 60%;
  max-width: 90%;
  height: 500px;
  background: #fff;
  margin: auto;
  margin-top: 23px;
  border-radius: 16px;
  padding: 16px;
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
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    width: 450px;
    /* max-width: 450px; */
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
`;

const ChatListComponent = () => {
    return (
        <ChatListContainer>
            <ul>
                <li className="bot">Hello! How can I assist you today?</li>
                <li className="user">I need help with my order.</li>
            </ul>
        </ChatListContainer>
    );
};

export default ChatListComponent;
