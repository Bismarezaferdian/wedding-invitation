import styled from "styled-components";

export const KutipanSection = styled.div`
  background: #3a6351;
  color: #ffff;
  padding: 40px 20px;
`;
export const KutipanWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
export const KutipanText = styled.p`
  font-size: 24px;
  font-weight: 500;

  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
`;
export const KutipanDesc = styled.p`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
`;
