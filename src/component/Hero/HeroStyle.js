import styled from "styled-components";
import ImageHero from "../../Images/Hero-invitation.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImageHero});
  background-position: center;
  background-size: cover;
  top: 0;
  right: 0;
`;
export const HeroWrapp = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
`;

export const Title = styled.p`
  color: #ffff;
  margin: 20px;
  font-size: 24px;

  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
`;

export const HeadStart = styled.h1`
  color: #ffff;
  white-space: nowrap;
  font-size: 68px;
  align-self: flex-start;
  font-family: "Dancing Script", cursive;

  @media screen and (max-width: 650px) {
    font-size: 42px;
    align-self: center;
  }
`;
export const HeadCenter = styled.h1`
  color: #ffff;
  font-size: 68px;
  font-family: "Dancing Script", cursive;
  align-self: center;

  @media screen and (max-width: 650px) {
    font-size: 42px;
  }
`;
export const HeadEnd = styled.h1`
  position: relative;
  color: #ffff;
  font-size: 68px;
  align-self: flex-end;
  white-space: nowrap;
  font-family: "Dancing Script", cursive;

  @media screen and (max-width: 650px) {
    font-size: 48px;
    align-self: center;
  }
`;
