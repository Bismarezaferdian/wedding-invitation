import React from "react";
import Fade from "react-reveal/Fade";
import {
  HeroContainer,
  HeroWrapp,
  HeadStart,
  HeadCenter,
  HeadEnd,
  HeroContent,
  Title,
} from "./HeroStyle";

function Hero() {
  return (
    <HeroContainer>
      <HeroWrapp>
        <Title>we're getting merried </Title>
        <HeroContent>
          <Fade bottom>
            <HeadStart> Bisma Reza Ferdian </HeadStart>
          </Fade>
          <Fade bottom delay={400}>
            <HeadCenter> & </HeadCenter>
          </Fade>
          <Fade bottom delay={800}>
            <HeadEnd> Novi Lestari</HeadEnd>
          </Fade>
        </HeroContent>
      </HeroWrapp>
    </HeroContainer>
  );
}

export default Hero;
