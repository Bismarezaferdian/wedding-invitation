import React from "react";
import { FcLike } from "react-icons/fc";
import { FooterSection, FooterWrapp, TextFooter } from "./FooterStyle";

const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapp>
        <TextFooter>
          create with <FcLike /> by bisma reza ferdian
        </TextFooter>
      </FooterWrapp>
    </FooterSection>
  );
};

export default Footer;
