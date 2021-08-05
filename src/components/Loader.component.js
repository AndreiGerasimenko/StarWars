import styled, { keyframes } from "styled-components";

const dualRing = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${(props) => props.theme.primaryHeaderColor};
    border-color: ${(props) => props.theme.primaryHeaderColor} transparent
      ${(props) => props.theme.primaryHeaderColor} transparent;
    animation: ${dualRing} 1.2s linear infinite;
  }
`;
