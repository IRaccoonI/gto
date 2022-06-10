import React from "react";
import styled from "styled-components";

const Footer: React.FC<{ className: string }> = ({ className }) => {
  return (
    <StyledFooter
      className={
        className + " p-1 d-flex justify-content-center align-item-center"
      }
    >
      <span>ГТО @gto</span>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  font-size: 12px;
  color: grey;
  border-top: 1px solid gray;
`;

export default React.memo(Footer);
