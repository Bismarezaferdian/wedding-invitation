import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import ImageCover from "../Images/cover-depan.jpg";
import { BiEnvelopeOpen } from "react-icons/bi";

const CoverSection = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImageCover});
  background-position: center;
  background-size: cover;
  top: 0;
  right: 0;
  color: #ffff;
`;

const CoverWrapp = styled.div`
  padding: 40px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const HeadCover = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const TextContent = styled.h1`
  white-space: nowrap;
  font-size: 68px;
  margin-bottom: 50px;
  font-family: "Dancing Script", cursive;

  @media screen and (max-width: 650px) {
    font-size: 42px;
    align-self: center;
  }
`;
const ContentCover = styled.p``;
const NameCover = styled.h1`
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: 5px;
  font-size: 24px;
`;
const Button = styled(Link)`
  text-decoration: none;
  color: #ffff;
  background: #00028c;
  padding: 8px 12px;
  border-radius: 12px;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    color: #efefef;
    background: #3e00ff;
    transition: 0.2s ease-in-out;
    /* transform: scale(1.1); */
  }
`;

const Cover = () => {
  const { search } = useLocation();
  console.log(search);
  const seachParams = new URLSearchParams(search);
  const name = seachParams.get("name");

  return (
    <CoverSection>
      <CoverWrapp>
        <HeadCover>The Wedding</HeadCover>
        <TextContent>
          Bisma <br /> & <br /> Novi
        </TextContent>
        <ContentCover>Kepada Bapak/Ibu/Saudara/i :</ContentCover>
        <NameCover>{name}</NameCover>
        <Button to="/home">
          {" "}
          <BiEnvelopeOpen /> Buka Undangan{" "}
        </Button>
      </CoverWrapp>
    </CoverSection>
  );
};

export default Cover;
