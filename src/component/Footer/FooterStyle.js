import styled from "styled-components";

export const FooterSection = styled.div`
  color: #ffff;
  background: #3a6351;
  padding: 40px 20px;
`;

export const FooterWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 8vh;
  width: 100%;
`;

export const TextFooter = styled.p`
  font: 24px;
  text-align: center;
`;

export const Button = styled.button`
  /* position: -webkit-sticky; */
  position: sticky;
  bottom: 0;
  /* display: block; */
  /* position: sticky; */
  bottom: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 999;
`;
