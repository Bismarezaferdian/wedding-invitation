import styled from "styled-components";

export const AmplopSection = styled.div`
  color: #ffff;
  background: #3a6351;
  padding: 50px;
`;

export const AmplopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
`;

export const AmplopCardWrapp = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 650px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 450px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
`;
export const CardAmplop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin: 20px 20px;
  padding: 20px 20px;
  width: 340px;
  height: 340px;
  border-radius: 20px;
  background: #295f4a;
  box-shadow: 26px 26px 52px #235142, -26px -26px 52px #2f6d5a;

  @media screen and (max-width: 650px) {
    width: 240px;
    height: 240px;
  }
  @media screen and (max-width: 450px) {
    width: 280px;
    height: 340px;
  }
`;

export const IconBank = styled.img`
  width: 120px;
  height: 120px;
`;
export const IconBankBri = styled.img`
  margin: 46px;

  @media screen and (max-width: 650px) {
    margin: 30px;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #f1f1f1;
  /* margin-bottom: 32px; */
`;
export const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 20px;
  margin: 20px;
`;

export const TextButton = styled.p`
  font-weight: 600;
  padding: 8px 20px;
`;

export const HeadTitle = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
`;

export const TitleAmplop = styled.p`
  text-align: center;
  padding: 40px 5px;
`;

export const AmplopDesc = styled.p``;
