import React from "react";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { BiTime } from "react-icons/bi";
import {
  TimeSection,
  TimeContentWrapp,
  CardTimeWrapp,
  CardTime,
  JamText,
  AddressText,
  HeadText,
  DateText,
  Button,
  ThanksText,
} from "./TimeStyle";

const Time = () => {
  return (
    <TimeSection>
      <TimeContentWrapp>
        <CardTimeWrapp>
          <Fade bottom delay={400}>
            <CardTime>
              <HeadText>Akad</HeadText>
              <DateText>
                <FaRegCalendarAlt /> Minggu, 03 oktober 2021
              </DateText>
              <JamText>
                {" "}
                <BiTime />
                Pukul 08.00-09.00
              </JamText>
              <AddressText>
                <FaMapMarkerAlt />
                Tata Karya RT 01/RW02 , Abung Surakarta, Kabupaten Lampung
                Utara, Lampung 34581
              </AddressText>{" "}
              <Button as="a" href="https://goo.gl/maps/ywnYNkEomc6SjPkcA">
                View map
              </Button>
            </CardTime>
          </Fade>
          <Fade bottom delay={600}>
            <CardTime>
              <HeadText>Resepsi</HeadText>
              <DateText>
                <FaRegCalendarAlt /> Minggu,03 oktober 2021
              </DateText>
              <JamText>
                <BiTime />
                Pukul 10.00-selesai
              </JamText>
              <AddressText>
                <FaMapMarkerAlt />
                Tata Karya RT 01/RW02 , Abung Surakarta, Kabupaten Lampung
                Utara, Lampung 34581
              </AddressText>{" "}
              <Button as="a" href="https://goo.gl/maps/ywnYNkEomc6SjPkcA">
                View map
              </Button>
            </CardTime>
          </Fade>
        </CardTimeWrapp>
      </TimeContentWrapp>
      <Fade bottom>
        <ThanksText>
          Ungkapan terima kasih yang tulus dari kami apabila Bapak/Ibu/Sdr/i
          berkenan hadir dan memberikan do’a restu kepada kedua mempelai.
        </ThanksText>
      </Fade>
    </TimeSection>
  );
};

export default Time;
