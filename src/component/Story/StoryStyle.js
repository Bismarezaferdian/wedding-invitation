import styled from "styled-components";

export const StoryContainer = styled.div`
  color: #ffff;
  background: #3a6351;
  padding: 40px 20px;
`;
export const StoryWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
`;

export const TitleStory = styled.p`
  text-align: center;
  padding-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 24px;
  font-weight: 600;
  /* color: #171010; */
`;

export const WrapContent = styled.div`
  /* background: red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 auto;
  margin: 0 auto;

  @media screen and (max-width: 650px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    padding-top: 40px;
    padding-bottom: 50px;
  }
  /* @media screen and (max-width: 450px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    padding-top: 40px;
    padding-bottom: 50px;
  } */
`;

export const StoryContent = styled.div`
  /* margin: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  color: #ffff;
  @media screen and (max-width: 650px) {
    width: 30%;
  }
`;

export const StoryText = styled.p`
  /* color: #171010; */
  padding-top: 20px;
  font-family: "Shadows Into Light", cursive;
  letter-spacing: 5px;
`;
// export const ImgSvg = styled.img``;
