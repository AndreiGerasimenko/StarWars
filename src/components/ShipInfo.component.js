import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ShipInfoContainer = styled.div`
  padding: 1.7em;
  background-color: ${(props) => props.theme.blockBGColor};
  display: flex;
  position: relative;
`;

const ShipDescription = styled.div`
  margin-left: 1.7em;

  h1 {
    margin-bottom: 20px;
    color: ${(props) => props.theme.secondaryHeaderColor};
  }

  p {
    margin-bottom: 10px;
    color: ${(props) => props.theme.textColor};
  }
`;

const BackButton = styled.button`
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  background-color: #9c7d73;
  border: none;
  color: white;
  font-size: 1.5em;
  padding: 0.5em;
  cursor: pointer;
`;

const ShipInfo = ({
  name,
  model,
  cost_in_credits,
  length,
  passengers,
  onClickBackButton,
}) => {
  return (
    <ShipInfoContainer>
      <div
        style={{ width: "200px", height: "200px", backgroundColor: "darkblue" }}
      ></div>
      <ShipDescription>
        <h1>{name}</h1>
        <p>Model: {model}</p>
        <p>Cost: {cost_in_credits}</p>
        <p>Length: {length}</p>
        <p>Passengers: {passengers}</p>
      </ShipDescription>
      <BackButton onClick={onClickBackButton}>Back</BackButton>
    </ShipInfoContainer>
  );
};

ShipInfo.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  cost_in_credits: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  passengers: PropTypes.string.isRequired,
  onClickBackButton: PropTypes.func.isRequired,
};

export { ShipInfo };
