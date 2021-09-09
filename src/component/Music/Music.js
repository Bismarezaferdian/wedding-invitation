import React, { useState } from "react";
import { BiVolumeMute, BiVolumeFull } from "react-icons/bi";
import Sound from "react-sound";
import styled from "styled-components";
import JanjiSuci from "../../assets/janjisuci.mp3";

const MusicWrapp = styled.div`
  background: trasparant;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 999;
  right: 0;
  bottom: 40px;
  margin-right: 20px;
`;

const Button = styled.button`
  font-size: 40px;
  color: red;
  background: #ffff;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: #e0e0e0;
  background: #e0e0e0;
`;

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const HandleButton = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <MusicWrapp>
      <Button onClick={HandleButton}>
        {isPlaying ? <BiVolumeFull /> : <BiVolumeMute />}
      </Button>
      <Sound
        url={JanjiSuci}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={300}
        volume={60}
      />
    </MusicWrapp>
  );
};

export default Music;
