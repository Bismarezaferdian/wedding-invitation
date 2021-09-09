import React from "react";
import Fade from "react-reveal/Fade";
import Handsanitizer from "../../Images/gunakan-handsanitizer.png";
import Masker from "../../Images/gunakan-masker.png";
import CuciTangan from "../../Images/cuci-tangan.png";
import Kerumunan from "../../Images/hidari-kerumunan.png";
import JagaJarak from "../../Images/jaga-jarak.png";
import Bersalaman from "../../Images/tidak-bersalaman.png";
import {
  ProtocolSection,
  ProtocolWrapp,
  ProtocolDesc,
  CardProtocol,
  Image,
  CardWrapp,
  ProtocolTitle,
  ProtocolSubTitle,
} from "./ProtocolStyle";

const Protocol = () => {
  return (
    <ProtocolSection>
      <Fade bottom>
        <ProtocolTitle>Protokol Kesehatan</ProtocolTitle>
      </Fade>
      <Fade bottom delay={200}>
        <ProtocolSubTitle>
          Guna mencegah penyebaran Covid-19, diharapkan bagi tamu undangan untuk
          mematuhi Protokol Kesehatan di bawah ini :
        </ProtocolSubTitle>
      </Fade>
      <ProtocolWrapp>
        <CardWrapp>
          <Fade bottom delay={400}>
            <CardProtocol>
              <Image src={Masker} />
              <ProtocolDesc>Gunakan Masker</ProtocolDesc>
            </CardProtocol>
          </Fade>
          <Fade bottom delay={500}>
            <CardProtocol>
              <Image src={CuciTangan} />
              <ProtocolDesc>Cuci Tanggan</ProtocolDesc>
            </CardProtocol>
          </Fade>
          <Fade bottom delay={600}>
            <CardProtocol>
              <Image src={Handsanitizer} />
              <ProtocolDesc>Gunakan Handsanitizer</ProtocolDesc>
            </CardProtocol>
          </Fade>
          <Fade bottom delay={700}>
            <CardProtocol>
              <Image src={Bersalaman} />
              <ProtocolDesc>Tidak Bersalam</ProtocolDesc>
            </CardProtocol>
          </Fade>
          <Fade bottom delay={800}>
            <CardProtocol>
              <Image src={JagaJarak} />
              <ProtocolDesc>Jaga Jarak</ProtocolDesc>
            </CardProtocol>
          </Fade>
          <Fade bottom delay={900}>
            <CardProtocol>
              <Image src={Kerumunan} />
              <ProtocolDesc>Hindari Kerumunan</ProtocolDesc>
            </CardProtocol>
          </Fade>
        </CardWrapp>
      </ProtocolWrapp>
    </ProtocolSection>
  );
};

export default Protocol;
