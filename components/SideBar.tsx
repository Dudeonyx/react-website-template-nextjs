import React from 'react';
import { CloseIcon, CloseIconContainer, SideBarContainer } from './SideBarElements';

interface Props {
  showSideBar: boolean;
  toggleShowSideBar: () => void;
}

const SideBar = (props: Props) => {
  return (
    <SideBarContainer showSideBar={props.showSideBar}>
      <CloseIconContainer>
        <CloseIcon onClick={props.toggleShowSideBar} />
      </CloseIconContainer>
    </SideBarContainer>
  );
};

export default SideBar;
