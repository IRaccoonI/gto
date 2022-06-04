import React from "react";
import styled from "styled-components";
import DropAndViewGto from "./DropAndViewGto";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <HomeStyle className="d-flex flex-column">
      <Header className="flex-shrink-0" />
      <div className="position-relative flex-grow-1 w-100">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <ContentWrapper
          offset={isOpen ? 316 : 16}
          className="pe-3 pb-3 pt-3 h-100"
        >
          <DropAndViewGto />
        </ContentWrapper>
      </div>
      <Footer className="flex-shrink-0" />
    </HomeStyle>
  );
};

const ContentWrapper = styled.div<{ offset: number }>`
  padding-left: ${({ offset }) => `${offset}px`};
`;

const HomeStyle = styled.div`
  width: 100wh;
  height: 100vh;
`;

export default Home;
