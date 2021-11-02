import React from "react";
import styled from "styled-components";

import { ButtonIcon } from "../Core";




const IconStyled = styled.img`
  width: auto;
`;

const IconSmall = styled(IconStyled)`
  margin-right: 5px;
  height: 15px;
`;

const IconDefault = styled(IconStyled)`
  height: 20px;
  margin-right:8px;
`;

const IconBig = styled(IconStyled)`
  height: 25px;
`;





const IconTechnology = ({ icon, link, variant }) => {
  let IconStyled = IconDefault;
  
  switch (variant) {
    case "small":
      IconStyled = IconSmall;
      break;
    case "big":
      IconStyled = IconBig;
      break;
    default:
      IconStyled = IconDefault;
  }

  return (
    <>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer noopener">
          <ButtonIcon variant="black">
            <div style={{display:"flex", justifyContent:"center"}}>
              <IconStyled src={icon} alt="" />
            </div>
          </ButtonIcon>
        </a>
      ) : (
        <IconStyled src={icon} alt="" />
      )}
    </>
  );
};

export default IconTechnology;
