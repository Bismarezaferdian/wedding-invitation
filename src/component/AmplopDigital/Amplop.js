import React from "react";
import BriLogo from "../../Images/brilogo.png";
import { FaRegCopy } from "react-icons/fa";
import Card from "./Card";
import Fade from "react-reveal/Fade";
import {
  AmplopCardWrapp,
  AmplopSection,
  AmplopWrapper,
  CardAmplop,
  IconBankBri,
  Input,
  Button,
  TextButton,
  TitleAmplop,
  HeadTitle,
  AmplopDesc,
} from "./AmplopStyle";

const Amplop = () => {
  let myInput = null;
  const copyToClipboard = () => {
    myInput.select();
    document.execCommand("copy");
    alert("No Rekening tersalin: " + myInput.value);
  };

  return (
    <AmplopSection id="Amplop">
      <Fade bottom>
        <HeadTitle>Amplop Digital</HeadTitle>
      </Fade>
      <Fade bottom delay={200}>
        <TitleAmplop>
          Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. <br />{" "}
          Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi
          kado secara cashless.
        </TitleAmplop>
      </Fade>
      <AmplopWrapper>
        <AmplopCardWrapp>
          <Fade bottom delay={300}>
            <CardAmplop>
              <IconBankBri src={BriLogo} />
              <AmplopDesc>no.rek:</AmplopDesc>

              <Input
                readOnly
                value="035901038574503"
                ref={(ref) => (myInput = ref)}
              />
              <AmplopDesc>A/n Novi Lestari</AmplopDesc>
              <Button onClick={copyToClipboard}>
                <TextButton>
                  <FaRegCopy /> copy rekening
                </TextButton>
              </Button>
            </CardAmplop>
          </Fade>

          {/* //batas */}
          <Fade bottom delay={600}>
            <Card />
          </Fade>
        </AmplopCardWrapp>
      </AmplopWrapper>
    </AmplopSection>
  );
};

export default Amplop;
