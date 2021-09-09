import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import {
  DateSection,
  DateWrapp,
  DateTitle,
  DateCard,
  TimeWrapp,
  CardDesc,
  CardWrapp,
  TimeDate,
  DateIcon,
} from "./DateStyle";

const SaveDate = () => {
  const [timeDays, setTimedays] = useState("00");
  const [timeHours, setTimeHours] = useState("00");
  const [timeMinutes, setTimeMinutes] = useState("00");
  const [timeSeconds, setTimeSeconds] = useState("00");

  let interval = useRef();

  const startTime = () => {
    const countdowndate = new Date("oct 03,2021 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdowndate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //clear interval
        clearInterval(interval.current);
      } else {
        setTimedays(days);
        setTimeHours(hours);
        setTimeMinutes(minutes);
        setTimeSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTime();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <DateSection id="DateTime">
      <Fade bottom>
        <DateTitle>Save The Date</DateTitle>
      </Fade>

      <DateWrapp>
        <Fade bottom delay={100}>
          <DateIcon />
        </Fade>
        <Fade bottom delay={200}>
          <TimeDate>03 Oktober 2021</TimeDate>
        </Fade>
        <CardWrapp>
          <Fade bottom delay={600}>
            <DateCard>
              <TimeWrapp>{timeDays}</TimeWrapp>

              <CardDesc>Days</CardDesc>
            </DateCard>
          </Fade>
          <Fade bottom delay={700}>
            <DateCard>
              <TimeWrapp>{timeHours}</TimeWrapp>
              <CardDesc>Hours</CardDesc>
            </DateCard>
          </Fade>
          <Fade bottom delay={800}>
            <DateCard>
              <TimeWrapp>{timeMinutes}</TimeWrapp>
              <CardDesc>Minute</CardDesc>
            </DateCard>
          </Fade>
          <Fade bottom delay={900}>
            <DateCard>
              <TimeWrapp>{timeSeconds}</TimeWrapp>
              <CardDesc>Second</CardDesc>
            </DateCard>
          </Fade>
        </CardWrapp>
      </DateWrapp>
    </DateSection>
  );
};

export default SaveDate;
