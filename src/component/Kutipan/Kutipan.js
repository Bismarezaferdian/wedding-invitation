import React from "react";
import Fade from "react-reveal/Fade";
import {
  KutipanSection,
  KutipanWrapp,
  KutipanText,
  KutipanDesc,
} from "./KutipanStyle";

export const Kutipan = () => {
  return (
    <KutipanSection>
      <KutipanWrapp>
        <KutipanText>
          <Fade bottom delay={700}>
            Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berfikir.
          </Fade>
        </KutipanText>
        <KutipanDesc>(Ar-Rum: 21)</KutipanDesc>
      </KutipanWrapp>
    </KutipanSection>
  );
};
