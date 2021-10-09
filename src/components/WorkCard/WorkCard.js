import React, {useContext} from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Box, Title, Text } from "../Core";

import GlobalContext from "../../context/GlobalContext";

// import icon from '../../assets/my-images/svg/technologies/react.svg'

const WorkBox = styled(Box)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 8px #a2a2a2;
`;

const IconStyled = styled.img`
height:20px;
width:auto;
margin-right: 5px;
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
  box-shadow: 0 3px 3px #a2a2a2;
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
  const gContext = useContext(GlobalContext)

  const handleClick = () => {
    gContext.changeSelectedProjectSpecifications(workItem)
    gContext.toggleProjectSpecifications()
  }

  
  return(
  <WorkBox className="position-relative" {...rest}>
    <div className="d-block" onClick={handleClick}>
      <img src={workItem.thumbnail} alt="" className="w-100" />
    </div>

    <TextBox>
      <Text variant="tag" mb={2}>
        {workItem.categories[0]}
      </Text>
      <Title variant="card">
        <div onClick={handleClick}>{workItem.brand} </div>
      </Title>

      {workItem.technologies.map(icon => (
        <IconStyled
          key={icon}
          src={icon}
          alt=""
        />
      ))}
    </TextBox>
  </WorkBox>
)};

export default WorkCard;
