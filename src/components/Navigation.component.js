import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import routes from "../navRoutes";

const StyledNavContainer = styled.nav`
  margin-left: 2em;
  flex: 0 1 500px;

  ul {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  li a {
    display: inline-block;
    padding: 1em;
    color: ${(props) => props.theme.secondaryHeaderColor};
    text-transform: capitalize;
  }
`;

export const Navigation = () => {
  return (
    <StyledNavContainer>
      <ul>
        {routes.map(({ id, value, path }) => {
          return (
            <li key={id}>
              <NavLink
                to={path}
                activeStyle={{
                  color: "#fff",
                }}
              >
                {value}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </StyledNavContainer>
  );
};
