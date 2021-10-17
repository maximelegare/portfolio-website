import React from "react";
import styled from "styled-components";

import { Title, Text, List } from "../Core";

const Wrapper = styled.div`
  margin-top: 20px;
`;

const ImgStyled = styled.img`
  width: 175px;
  margin-top: 6px;
  margin-left: 10px;
  height: auto;
`;

const ItemWrapper = styled.div`
  margin-top: 10px;
`;

const Specifications = ({ specifications, textSpecifications }) => {
  return (
    <>
      {specifications && (
        <Wrapper>
          {specifications.map(({ title, image, dim }, idx) => (
            <ItemWrapper key={idx}>
              <Title color="dark" variant="card">
                {title}
              </Title>
              <ImgStyled src={image} style={{ opacity: dim ? "0.8" : "" }} />
            </ItemWrapper>
          ))}
        </Wrapper>
      )}
      {textSpecifications && (
        <Wrapper>
          {textSpecifications.map(({ title, content, bulletPoints }, idx) => (
            <ItemWrapper key={idx}>
              <Title color="dark" variant="card">
                {title}
              </Title>
              {content && <Text>{content}</Text>}
              {bulletPoints && (
                <>
                  {bulletPoints.map(({ content }, idx) => (
                    <List key={idx}>{content}</List>
                  ))}
                </>
              )}
            </ItemWrapper>
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default Specifications;
