import React from "react";
import "../components/ChatOption.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const ChatOption = () => {
  const navigate = useNavigate();

  const counsellorChat = () => {
    navigate(`/ChatsPage`);
  };
  return (
    <div className="main">
      <NavBar />
      <div className="submain">
        {/* <div className='bot'>
      <img className='chat-img' src={require("./chatbot.avif")} alt="chat-bot" />
      <p>By selecting this option, you will be redirected to chat page wherein you can chat with a bot!</p> <br/>
      <button>Chat with Bot</button>
      </div> */}
        <br />
        <div className="counsellor">
          <img
            className="chat-img"
            src={require("./counsellor.avif")}
            alt="counsellor"
          />
          <h2>STEP 1: Select a counsellor of your choice.</h2> <br />
          <h2>STEP 2: Start Chatting about your problems!</h2>
          <br />
          <button onClick={counsellorChat}>Chat with Counsellor</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ChatOption;
