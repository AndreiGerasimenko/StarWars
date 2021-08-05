import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PersonInfoContainer = styled.div`
  padding: 1.7em;
  background-color: ${(props) => props.theme.blockBGColor};
  display: flex;
`;

const PersonDescription = styled.div`
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

const PersonInfo = ({ name, gender, birth_year, eye_color }) => {
  return (
    <PersonInfoContainer>
      <div
        style={{ width: "200px", height: "200px", backgroundColor: "darkblue" }}
      ></div>
      <PersonDescription>
        <h1>{name}</h1>
        <p>Gender: {gender}</p>
        <p>Birth Year: {birth_year}</p>
        <p>Eye Color: {eye_color}</p>
      </PersonDescription>
    </PersonInfoContainer>
  );
};

PersonInfo.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  eye_color: PropTypes.string.isRequired,
};

export { PersonInfo };
