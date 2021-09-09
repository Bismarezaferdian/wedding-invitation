import styled from "styled-components";
import ImageInfo from "../../Images/info-invitation.jpg";

export const InfoSection = styled.div`
  color: #ffff;
  background: linear-gradient(to right, rgba(0, 1, 1, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImageInfo});
  background-position: center;
  background-size: cover;
  top: 0;
  right: 0;
  padding: 40px 20px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  width: 100%;
`;

export const TitleWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 50px;
`;

export const InfoTitle = styled.p`
  font-size: 32px;
  /* padding: 10px; */
  white-space: nowrap;

  @media screen and (max-width: 650px) {
    font-size: 30px;
    align-self: center;
  }
  /* @media screen and (max-width: 450px) {
    font-size: 24px;
    align-self: center;
  } */
`;

export const HeadTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  /* padding: 10px; */
  text-align: center;

  @media screen and (max-width: 650px) {
    font-size: 20px;
    align-self: center;
  }
  @media screen and (max-width: 450px) {
    font-size: 18px;
    align-self: center;
  }
`;

export const DescInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-size: 24px;

  @media screen and (max-width: 650px) {
    font-size: 18px;
    align-self: center;
    margin-top: 20px;
  }
  /* @media screen and (max-width: 450px) {
    margin-top: 18px;
    font-size: 14px;
    align-self: center;
  } */
`;

export const InfoKonten = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 20px;
`;

export const ImgThumbnail = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  margin: 50px 0 20px 0;

  @media screen and (max-width: 450px) {
    width: 140px;
    height: 140px;
  }
`;

export const TextStart = styled.p`
  color: #ffff;
  white-space: nowrap;
  font-size: 48px;
  align-self: flex-start;
  font-family: "Dancing Script", cursive;

  @media screen and (max-width: 650px) {
    text-align: center;

    font-size: 42px;
    align-self: center;
  }
  /* @media screen and (max-width: 450px) {
    text-align: center;
    font-size: 42px;
    align-self: center;
  } */
`;

export const TextCenter = styled.p`
  color: #ffff;
  font-size: 48px;
  font-family: "Dancing Script", cursive;
  align-self: center;

  @media screen and (max-width: 450px) {
    font-size: 42px;
  }
`;

export const TextEnd = styled.p`
  position: relative;
  color: #ffff;
  font-size: 48px;
  align-self: flex-end;
  white-space: nowrap;
  font-family: "Dancing Script", cursive;

  @media screen and (max-width: 650px) {
    font-size: 48px;
    align-self: center;
  }
  /* @media screen and (max-width: 450px) {
    text-align: center;
    font-size: 42px;
    align-self: center;
  } */
`;

export const SpanText = styled.p`
  color: #ffc947;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
`;
