import styled from "styled-components";
import { FcCalendar } from "react-icons/fc";

export const DateSection = styled.div`
  color: #ffff;
  background: #3a6351;
  padding: 40px 20px;
`;

export const DateTitle = styled.p`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 24px;
  font-weight: 600;
`;

export const DateWrapp = styled.div`
  display: flex;
  max-height: 100%;
  width: 100%;
  padding: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DateIcon = styled(FcCalendar)`
  font-size: 42px;
  margin-bottom: 20px;
`;

export const TimeDate = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 48px;
  width: 300px;
  height: 100px;
  border: 2px solid #ffff;
  font-family: "Shadows Into Light", cursive;
  font-size: 24px;

  @media screen and (max-width: 650px) {
    width: 240px;
    height: 80px;
  }
  @media screen and (max-width: 650px) {
    width: 180px;
    height: 60px;
  }
`;

export const CardWrapp = styled.div`
  display: grid;
  /* grid-auto-flow: column; */
  /* grid-gap: 20px; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0 5px 60px 5px;
`;
export const DateCard = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 140px;
  width: 140px;
  border-radius: 9px;
  line-height: 10px;
  margin: auto 20px;
  background: #295f4e;
  box-shadow: 26px 26px 52px #235142, -26px -26px 52px #2f6d5a;

  @media screen and (max-width: 650px) {
    height: 120px;
    width: 120px;
  }
  @media screen and (max-width: 650px) {
    height: 60px;
    width: 60px;
    margin: 0 8px;
  }
`;
export const TimeWrapp = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-family: "Shadows Into Light", cursive;

  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
  @media screen and (max-width: 650px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;
export const CardDesc = styled.div`
  font-family: "Shadows Into Light", cursive;
`;
