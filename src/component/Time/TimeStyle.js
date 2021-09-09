import styled from "styled-components";
import ImageBg from "../../Images/time-bg.jpg";

export const TimeSection = styled.div`
  color: #ffff;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImageBg});
  background-position: center;
  background-size: cover;
  top: 0;
  right: 0;
  padding: 80px 20px;
`;

export const TimeContentWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 100%;
  width: 100%;
  padding: 40px 40px;
`;
export const CardTimeWrapp = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  justify-content: center;
  align-items: center;
  margin: 20px 60px;

  @media screen and (max-width: 650px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 450px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
`;
export const CardTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 300px;
  width: 280px;
  /* border: 2px solid #ffff; */
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 18px;
  /* border-radius: 50px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  overflow: hidden; */
`;
export const HeadText = styled.div`
  font-size: 28px;
  font-weight: 600;
`;
export const DateText = styled.div`
  font-weight: 600;
`;
export const JamText = styled.div`
  font-weight: 600;
`;
export const AddressText = styled.div`
  /* font-weight: 600; */
`;

export const Button = styled.button`
  color: #ffff;
  padding: 5px 10px;
  background: red;
  text-decoration: none;
  border-radius: 50px;
  background: #161616;
  margin-top: 12px;
  cursor: pointer;
`;

export const ThanksText = styled.p`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
  padding: 20px 40px;
  font-weight: 600;

  @media screen and (max-width: 650px) {
    padding: 20px 40px;
  }
  @media screen and (max-width: 450px) {
    padding: 20px 40px;
    margin-bottom: 40px;
  }
`;
