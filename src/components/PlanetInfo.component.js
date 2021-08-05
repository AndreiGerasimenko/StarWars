import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PlanetInfoContainer = styled.div`
  padding: 1.7em;
  background-color: ${(props) => props.theme.blockBGColor};
  display: flex;
`;

const PlanetDescription = styled.div`
  margin-left: 1.7em;

  h1 {
    margin-bottom: 20px;
    color: ${(props) => {
      return props.isSecondary
        ? props.theme.secondaryHeaderColor
        : props.theme.primaryHeaderColor;
    }};
  }

  p {
    margin-bottom: 10px;
    color: ${(props) => props.theme.textColor};
  }
`;

const PlanetInfo = ({
  id,
  name,
  population,
  rotation_period,
  diameter,
  isSecondary,
}) => {
  return (
    <PlanetInfoContainer>
      <img
        width="200"
        crossOrigin="anonymous"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt=""
      />

      <PlanetDescription isSecondary={isSecondary}>
        <h1>{name}</h1>
        <p>Population: {population}</p>
        <p>Rotation Period: {rotation_period}</p>
        <p>Diameter: {diameter}</p>
      </PlanetDescription>
    </PlanetInfoContainer>
  );
};

PlanetInfo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  rotation_period: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  isSecondary: PropTypes.bool,
};

export { PlanetInfo };
