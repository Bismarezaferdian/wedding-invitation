import styled from "styled-components";

export const ProtocolSection = styled.div`
  background: #e0e0e0;
  color: #000000;
  padding: 80px 20px;
`;

export const ProtocolWrapp = styled.div`
  max-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const CardWrapp = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 650px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0;
    row-gap: 28px;
  }
`;
export const CardProtocol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 240px;

  @media screen and (max-width: 650px) {
    width: 120px;
    height: 120px;
  }
`;
export const Image = styled.img`
  width: 80px;
  height: 80px;

  @media screen and (max-width: 650px) {
    width: 60px;
    height: 60px;
  }
`;
export const ProtocolDesc = styled.p`
  text-align: center;
  /* white-space: nowrap; */
  justify-content: center;
  padding: 16px;
  font-size: 14px;
  font-weight: 600;
`;

export const ProtocolTitle = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const ProtocolSubTitle = styled.p`
  text-align: center;
  font-size: 18px;
`;
