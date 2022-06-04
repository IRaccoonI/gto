import React from "react";
import styled from "styled-components";

const Header: React.FC<{ className: string }> = ({ className }) => {
  return (
    <StyledHeader className={className + " p-2 d-flex justify-content-between"}>
      <img
        className="h-100"
        src="https://www.ugrakor.ru/images/68.png"
        alt=""
      />
      <nav>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Войти</a>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 48px;
  border-bottom: 1px solid gray;
`;

export default React.memo(Header);
