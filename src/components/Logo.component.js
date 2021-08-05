import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-transform: capitalize;
  font-size: 2em;
  display: inline-block;
  flex: 0 0 300px;
  padding: 0.5em 0;

  a {
    color: ${(props) => props.theme.primaryHeaderColor};
  }
`;

export const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">star wars</Link>
    </StyledLogo>
  );
};
