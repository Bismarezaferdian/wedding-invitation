import React from "react";
import Bertunangan from "../../Images/lamaran.png";
import Menikah from "../../Images/menikah.png";
import Berpacaran from "../../Images/pacaran.png";
import Fade from "react-reveal/Fade";
import {
  StoryContainer,
  StoryWrapp,
  TitleStory,
  WrapContent,
  StoryContent,
  StoryText,
  Icon,
  // ImgSvg,
} from "./StoryStyle";

const Story = () => {
  return (
    <StoryContainer id="Story">
      <Fade bottom>
        <TitleStory>Our Story</TitleStory>
      </Fade>

      <StoryWrapp>
        <WrapContent>
          <Fade bottom delay={200}>
            <StoryContent>
              <Icon src={Berpacaran} />
              <StoryText>
                05 juli 2016 <br /> mulai berpacaran{" "}
              </StoryText>
            </StoryContent>
          </Fade>
          <Fade bottom delay={400}>
            <StoryContent>
              <Icon src={Bertunangan} />

              <StoryText>
                13 juli 2021 <br /> melangsungkan lamaran
              </StoryText>
            </StoryContent>
          </Fade>
          <Fade bottom delay={600}>
            <StoryContent>
              <Icon src={Menikah} />
              <StoryText>
                03 oktober 2021 <br /> Menikah
              </StoryText>
            </StoryContent>
          </Fade>
        </WrapContent>
      </StoryWrapp>
      {/* <ImgSvg src={Background} /> */}
    </StoryContainer>
  );
};

export default Story;
