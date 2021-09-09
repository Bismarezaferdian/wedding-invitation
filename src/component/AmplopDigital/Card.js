import React from "react";
import BcaLogo from "../../Images/bca-logo.svg";
import { FaRegCopy } from "react-icons/fa";
import {
  AmplopDesc,
  Button,
  CardAmplop,
  IconBank,
  Input,
  TextButton,
} from "./AmplopStyle";

const Card = () => {
  let myInput = null;
  const copyClipboard = () => {
    myInput.select();
    document.execCommand("copy");
    alert("No Rekening tersalin: " + myInput.value);
  };

  return (
    <CardAmplop>
      <IconBank src={BcaLogo} />
      <AmplopDesc>no.rek:</AmplopDesc>
      <Input readOnly value="5260740867" ref={(ref) => (myInput = ref)} />
      <AmplopDesc>A/n Bisma Reza Ferdian</AmplopDesc>
      <Button onClick={copyClipboard}>
        <TextButton>
          <FaRegCopy /> copy rekening
        </TextButton>
      </Button>
    </CardAmplop>
  );
};

export default Card;
