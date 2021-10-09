import React from 'react';
import styled from 'styled-components';


const IconStyled = styled.img`
height:${(props) => props.small? "15px" : "20px"};
width:auto;
margin-right: 5px;
`;

const IconTechnology = ({icon, small}) => {
    return (
        <IconStyled
          src={icon}
          alt=""
          small={small}
        />
    );
};


export default IconTechnology;