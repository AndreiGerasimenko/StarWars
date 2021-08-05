import styled from "styled-components";

export const List = styled.ul`
  color: ${(props) => props.theme.textColor};
  li {
    padding: 0.5em;
    cursor: pointer;

    &:hover {
      border: 1px solid ${(props) => props.theme.primaryHeaderColor};
    }
  }
`;
