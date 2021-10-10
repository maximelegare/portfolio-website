import React from "react";

import styled from "styled-components";

import { Box } from "../../Core";

const ImageStyled = styled.img`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 8px #a2a2a2;
  width:100%;
  height: 100%;
  box-sizing: border-box;
  min-width: 0;
`;

const ImageCard = ({ thumbnail, className, alt, ...rest }) => {
  return (
    <>
      {/* <ImageBox {...rest}> */}
        <ImageStyled {...rest} src={thumbnail} alt={alt} className={className}/>
      {/* </ImageBox> */}
    </>
  );
};

export default ImageCard;
