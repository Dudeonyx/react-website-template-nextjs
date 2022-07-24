import Link from 'next/link';
import { SideBarProps } from '../pages';
import {
  Nav,
  NavContainer,
  Logo,
  NavLinksContainer,
  NavLinkItem,
  SignInButtonContainer,
  SignInButton,
  SideBarMenu,
  SideBarMenuContainer,
  NavLink,
} from './NavElements';
import { NavData } from './NavData';

export default function NavBar({ toggleShowSideBar }: Omit<SideBarProps, 'showSideBar'>) {
  return (
    <Nav>
      <NavContainer>
        <Logo>dolla</Logo>
        <NavLinksContainer>
          {NavData.map(([link, text]) => (
            <NavLinkItem key={link + text}>
              <NavLink to={link}>{text}</NavLink>
            </NavLinkItem>
          ))}
        </NavLinksContainer>
        <SignInButtonContainer>
          <Link href="/signin" passHref>
            <SignInButton>Sign In</SignInButton>
          </Link>
        </SignInButtonContainer>
        <SideBarMenuContainer>
          <SideBarMenu onClick={toggleShowSideBar} />
        </SideBarMenuContainer>
      </NavContainer>
    </Nav>
  );
}
