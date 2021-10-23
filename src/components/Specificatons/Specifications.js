import React from "react";
import styled from "styled-components";

import { Title, Text, List } from "../Core";

const Wrapper = styled.div`
  margin-top: 20px;
`;

const ImgStyled = styled.img`
  width: 175px;
  margin-top: 6px;
  height: auto;
`;

const ItemWrapper = styled.div`
  margin-bottom: 25px;
`;

const Specifications = ({ specifications, textSpecifications, marginLeft }) => {
  return (
    <Wrapper>
      {specifications && (
        <>
          {specifications.map(({ title, image, dim }, idx) => (
            <ItemWrapper key={idx}>
              <Title color="dark" variant="card">
                {title}
              </Title>
              <div className={marginLeft ? "pl-lg-2" : ""}>
                <ImgStyled src={image} style={{ opacity: dim ? "0.6" : "" }} />
              </div>
            </ItemWrapper>
          ))}
        </>
      )}
      {textSpecifications && (
        <>
          {textSpecifications.map(
            ({ mainTitle, paragraphs, bulletPoints }, idx) => (
              <ItemWrapper key={idx}>
                <Title color="dark" variant="card">
                  {mainTitle}
                </Title>
                <div className={marginLeft ? "pl-lg-2" : ""}>
                  {paragraphs && (
                    <>
                      {paragraphs.map(({ content }, idx) => (
                        <Text
                          key={idx}
                          // color="dark"
                          className={
                            idx !== paragraphs.length - 1 ? "mb-4" : ""
                          }
                          css={`
                            line-height: 1.5;
                          `}
                        >
                          {content}
                        </Text>
                      ))}
                    </>
                  )}
                  {bulletPoints && (
                    <>
                      {bulletPoints.map(({ content }, idx) => (
                        <List key={idx}>{content}</List>
                      ))}
                    </>
                  )}
                </div>
              </ItemWrapper>
            )
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Specifications;
