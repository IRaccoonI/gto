import React from "react";
import styled from "styled-components";

const Sidebar: React.FC<{
  className?: string;
  isOpen: boolean;
  setIsOpen: (newVal: boolean) => unknown;
}> = ({ className, isOpen, setIsOpen }) => {
  return (
    <StyledSidebar className={className}>
      {isOpen ? (
        <SidebarContent onClick={() => setIsOpen(false)}>
          <div className="w-100 d-flex justify-content-between p-2">
            <div>тут будет сайдбар</div>
            <StyledClose className="d-flex" onClick={() => setIsOpen(false)}>
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16px"
                height="16px"
              >
                <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
              </svg>
            </StyledClose>
          </div>
        </SidebarContent>
      ) : (
        <SidebarOpener
          onClick={() => setIsOpen(true)}
          className="d-flex flex-column justify-content-between"
        >
          <div></div>
          <div></div>
          <div></div>
        </SidebarOpener>
      )}
    </StyledSidebar>
  );
};

const StyledClose = styled.div`
  cursor: pointer;
  height: 32px;
  width: 32px;
  padding: 8px;
`;

const SidebarContent = styled.div`
  height: 100%;
  width: 300px;
  border-right: 1px solid gray;
`;

const SidebarOpener = styled.div`
  height: 64px;
  width: 32px;
  padding: 20px 4px;
  border-bottom-right-radius: 4px;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #f0f0f0;
  }

  & > div {
    height: 3px;
    width: 100%;
    border-radius: 10px;
    background-color: gray;
  }
`;

const StyledSidebar = styled.aside`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
`;

export default React.memo(Sidebar);
