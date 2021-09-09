import styled from "styled-components";

export const SliderContainer = styled.div`
  background: #e0e0e0; ;
`;

export const SliderWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  width: 100%;
`;

export const TitleSlide = styled.p`
  text-align: center;
  padding-top: 40px;
  font-size: 32px;
  font-weight: 700;
`;

export const SlideKonten = styled.div`
  display: flex;
  justify-content: center;
`;

export const SlideImage = styled.img`
  height: 400px;
  width: 500px;
  top: 0;
  left: 0;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 468px) {
    height: 350px;
    width: 300px;
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
