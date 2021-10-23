import React, { useContext, useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Box, Title, Text } from "../../Core";

import GlobalContext from "../../../context/GlobalContext";
import IconTechnology from "../../IconTechnology";
// import icon from '../../assets/my-images/svg/technologies/react.svg'

import { useTranslation } from "gatsby-plugin-react-i18next";

const WorkBox = styled(Box)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 8px #a2a2a2;
`;

const TextBox = styled(Box)`
  position: absolute;
  overflow: hidden;
  bottom: 0px;
  left: 20px;
  right: 20px;
  opacity: 0;
  border-radius: 8px;
  z-index: 1;
  padding: 1.25rem 1.875rem;
  transition: 0.4s;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
  &::before {
    position: absolute;
    content: "";
    background: ${({ theme }) => theme.colors.bg};
    /* border-radius: 20px; */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.9;
  }
  ${WorkBox}:hover & {
    bottom: 20px;
    opacity: 1;
  }
`;

const WorkCard = ({ workItem, link, ...rest }) => {
  const gContext = useContext(GlobalContext);
  const { t } = useTranslation();

  const traductionData = t(`${workItem.id}`, { returnObjects: true });
  // console.log(traductionData)

  const handleClick = () => {
    gContext.changeSelectedProjectSpecifications(workItem);
    gContext.toggleProjectSpecifications();
    gContext.changeSelectedProjectTraductions(traductionData);
  };

  const [textTraduction, setTextTraduction] = useState({});

  useEffect(() => {
    setTextTraduction(traductionData);
  }, [traductionData]);

  return (
    <WorkBox className="position-relative" {...rest}>
      <div className="d-block" onClick={handleClick}>
        <img src={workItem.thumbnail} alt="" className="w-100" />
      </div>

      <TextBox>
        <Text variant="tag" mb={2}>
          {textTraduction.categories}
        </Text>
        <Title variant="card">
          {/* <Trans onClick={handleClick}>a1.brand</Trans> */}
          <div onClick={handleClick}>{textTraduction.cardTitle}</div>
        </Title>

        {workItem.technologies
          .filter((_, index) => index < 3)
          .map(icon => (
            <IconTechnology key={icon} icon={icon} variant="small" />
          ))}
        {workItem?.technologies.length > 3 ? (
          <Text style={{ display: "inline" }}>...</Text>
        ) : (
          ""
        )}
      </TextBox>
    </WorkBox>
  );
};

export default WorkCard;
