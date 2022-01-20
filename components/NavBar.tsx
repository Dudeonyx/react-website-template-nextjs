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

export default function NavBar({ toggleShowSideBar }: Omit<SideBarProps, 'showSideBar'>) {
  return (
    <Nav>
      <NavContainer>
        <Logo>dolla</Logo>
        <NavLinksContainer>
          <NavLinkItem>
            <NavLink to="about">About</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="discover">Discover</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="services">Services</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="signup">Sign Up</NavLink>
          </NavLinkItem>
        </NavLinksContainer>
        <SignInButtonContainer>
          <SignInButton href="/signin">
            <a>Sign In</a>
          </SignInButton>
        </SignInButtonContainer>
        <SideBarMenuContainer>
          <SideBarMenu onClick={toggleShowSideBar} />
        </SideBarMenuContainer>
      </NavContainer>
    </Nav>
  );
}
