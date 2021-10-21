import React from "react";
import { Box, Button } from "../Core";

const ButtonIcon = ({
  variant = "success",
  color = "#fff",
  children,
  ...rest
}) => {
  return (
    <Button variant={variant} color={color} {...rest} css={{margin:"0px 5px", height:"20px"}}>
    
     
        {children}
      
    </Button>
  );
};

export default ButtonIcon;
