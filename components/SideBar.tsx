import Link from 'next/link';
import React from 'react';
import { SideBarProps } from '../pages';
import { NavData } from './NavData';
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
        {NavData.map(([link, text]) => (
          <SideBarLinkItem key={link + text}>
            <SideBarLink to={link}>{text}</SideBarLink>
          </SideBarLinkItem>
        ))}
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
