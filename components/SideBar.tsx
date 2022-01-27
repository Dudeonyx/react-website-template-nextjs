import Link from 'next/link';
import React from 'react';
import { SideBarProps } from '../pages';
import {
  CloseIcon,
  CloseIconContainer,
  SideBarContainer,
  SideBarLinkItem,
  SideBarLinkContainer,
  SideBarSignInButton,
  SideBarSignInContainer,
  SideBarLink,
} from './SideBarElements';

const SideBar = (props: SideBarProps) => {
  return (
    <SideBarContainer $showSideBar={props.showSideBar}>
      <CloseIconContainer>
        <CloseIcon onClick={props.toggleShowSideBar} />
      </CloseIconContainer>
      <SideBarLinkContainer>
        <SideBarLinkItem>
          <SideBarLink>About</SideBarLink>
        </SideBarLinkItem>
        <SideBarLinkItem>
          <SideBarLink>Discover</SideBarLink>
        </SideBarLinkItem>
        <SideBarLinkItem>
          <SideBarLink>Services</SideBarLink>
        </SideBarLinkItem>
        <SideBarLinkItem>
          <SideBarLink>Sign Up</SideBarLink>
        </SideBarLinkItem>
      </SideBarLinkContainer>
      <SideBarSignInContainer>
        <Link href="/signin" passHref>
          <SideBarSignInButton>Sign In</SideBarSignInButton>
        </Link>
      </SideBarSignInContainer>
    </SideBarContainer>
  );
};

export default SideBar;
