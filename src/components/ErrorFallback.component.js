import React from "react";
import styled from "styled-components";
import errorImage from "../assets/error.jpg";

const ErrorContainer = styled.div`
  display: flex;
  justify-contant: center;
  background-color: #409453;
`;

export const ErrorFallback = () => {
  return (
    <ErrorContainer>
      <img src={errorImage} alt="" width="255" style={{ margin: "0 auto" }} />
    </ErrorContainer>
  );
};
