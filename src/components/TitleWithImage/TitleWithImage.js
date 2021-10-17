import React from "react";
import styled from "styled-components";

import { Text } from "../Core";

const Wrapper = styled.div`
margin-top: 20px;
`

const ImgStyled = styled.img`
  width: 175px;
  margin-top: 6px;
  margin-left: 10px;
  height: auto;
`;

const ItemWrapper = styled.div`
margin-top: 10px;
`

const TitleWithImage = ({ lists }) => {
  return (
    <>
      <Wrapper>
        {lists?.map(item => (
          <ItemWrapper key={item}>
            <Text color="dark" className="mt-3 font-weight-bold" >
              {item?.title}
            </Text>
            <ImgStyled src={item?.image} style={{opacity:item.dim? "0.8" : ""}}/>
          </ItemWrapper>
        ))}
      </Wrapper>
    </>
  );
};

export default TitleWithImage;
