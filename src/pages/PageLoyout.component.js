import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PageHeaderSection = styled.div`
  padding: 1.2em;
  color: ${(props) => props.theme.primaryHeaderColor};
`;

const PageContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .left-column,
  .right-column {
    padding: 0.5em;
    width: 49%;
    flex-grow: 1;
    background-color: ${(props) => props.theme.blockBGColor};
    color: ${(props) => props.theme.textColor};
  }

  .right-column {
    margin-left: 1.5em;
  }
`;

const PageLayout = ({ header, leftColumn, rightColumn }) => {
  return (
    <>
      <PageHeaderSection>{header}</PageHeaderSection>
      <PageContentSection>
        {leftColumn ? <div className="left-column">{leftColumn}</div> : null}
        {rightColumn ? <div className="right-column">{rightColumn}</div> : null}
      </PageContentSection>
    </>
  );
};

PageLayout.propTypes = {
  header: PropTypes.node,
  leftColumn: PropTypes.node,
  rightColumn: PropTypes.node,
};

export { PageLayout };
