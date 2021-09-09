import React from "react";
import Fade from "react-reveal/Fade";
import ImageThumbnail from "../../Images/img-thumbnail.jpg";
import {
  InfoSection,
  TitleWrapp,
  InfoWrap,
  HeadTitle,
  InfoTitle,
  DescInfo,
  ImgThumbnail,
  InfoKonten,
  TextCenter,
  TextEnd,
  TextStart,
  SpanText,
} from "./InfoStyle";

function Info() {
  return (
    <InfoSection id="about">
      <InfoWrap>
        <TitleWrapp>
          <Fade bottom>
            <InfoTitle>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</InfoTitle>
          </Fade>
          <Fade bottom delay={400}>
            <HeadTitle>assalamualaikum warahmatullahi wabarakatuh</HeadTitle>
          </Fade>
          <Fade bottom delay={600}>
            <DescInfo>
              Dengan memohon rahmat dan ridho-Mu Ya Allah, Kami bermaksud
              mengadakan acara resepsi pernikahan putra dan putri kami :
            </DescInfo>
          </Fade>
        </TitleWrapp>
        <InfoKonten>
          <Fade bottom>
            <ImgThumbnail src={ImageThumbnail} />
          </Fade>
          <Fade bottom delay={200}>
            <TextStart> Bisma Reza Ferdian</TextStart>
            <SpanText>
              putra ke 2 dari Bpk h. wahyu widiyanto & <br /> ibu Nursyah
              Triningsih
            </SpanText>{" "}
          </Fade>
          <Fade bottom delay={400}>
            <TextCenter> & </TextCenter>
          </Fade>
          <Fade bottom delay={600}>
            <TextEnd> Novi Lestari</TextEnd>
            <SpanText>putri ke 2 dari Bpk Warsito & Ibu Parni</SpanText>
          </Fade>
        </InfoKonten>
      </InfoWrap>
    </InfoSection>
  );
}

export default Info;
