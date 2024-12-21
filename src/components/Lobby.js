import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import '../components/Lobby.scss';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

const Lobby = () => {

  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
       navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div className="lobby-main">
     
      <NavBar/>
      <br/>
         <div className="lobby">
         <img src={require("../components/vcall lobby.avif")} alt="video-call" height="600px" />
         <div className="inputs">
      <input className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Room Code"
        type="text"
      ></input>
      <br/>
      <button onClick={handleJoinRoom}>Join Room</button>
      </div>
      </div>

<br/>
<br/> <br/>

      <Footer/>

    </div>
  );
};

export default Lobby;
